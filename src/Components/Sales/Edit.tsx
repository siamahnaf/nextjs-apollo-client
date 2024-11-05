"use client"
import { useEffect, ChangeEvent } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next-app-progress-bar";
import toast from "react-hot-toast";

//Components
import { Input, DatePicker, Select, ImageUploader } from "@/Components/UI";

//Input Types
import { SalesInput } from "@/Utils/input.types";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_SALES, GET_SALES, SALES_LIST } from "@/Apollo/query/sales/sales";

interface Props {
    slug: string;
}

const Edit = ({ slug }: Props) => {
    //Initializing Hook
    const router = useRouter();

    //Apollo
    const { data } = useQuery(GET_SALES, { variables: { slug } });
    const [mutate, { loading }] = useMutation(UPDATE_SALES, {
        onCompleted: (data) => {
            toast.success(data.updateSale.message)
            router.push("/sales")
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: SALES_LIST, variables: { searchDto: defaultSearch } }, "getSale"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<SalesInput>({
        defaultValues: {
            title: data?.getSale.title,
            en_title: data?.getSale.en_title,
            discount: data?.getSale.discount?.toString(),
            discount_unit: data?.getSale.discount_unit,
            image: data?.getSale.image || "",
            start_on: data?.getSale.start_on,
            expires_on: data?.getSale.expires_on
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<SalesInput> = (value) => {
        const formData = {
            ...value,
            discount: Number(value.discount),
        }
        mutate({ variables: { salesDto: formData, updateSaleId: data?.getSale.id || 0 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            title: data?.getSale.title,
            en_title: data?.getSale.en_title,
            discount: data?.getSale.discount?.toString(),
            discount_unit: data?.getSale.discount_unit,
            image: data?.getSale.image || "",
            start_on: data?.getSale.start_on,
            expires_on: data?.getSale.expires_on
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update sales</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Title"
                            id="title"
                            placeholder="Title"
                            {...register("title", { required: "Title is required" })}
                            error={errors.title ? true : false}
                            message={errors.title?.message}
                        />
                        <Input
                            label="Title (English)"
                            id="englishTitle"
                            placeholder="Title"
                            {...register("en_title", {
                                required: "Title is required",
                                pattern: {
                                    value: /^[A-Za-z0-9\s]+$/,
                                    message: "Title must contain only English letters"
                                }
                            })}
                            error={errors.en_title ? true : false}
                            message={errors.en_title?.message}
                        />
                        <Input
                            label="Discount"
                            id="discount"
                            placeholder="Discount"
                            {...register("discount", { required: "Discount is required" })}
                            error={errors.discount ? true : false}
                            message={errors.discount?.message}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                        <Controller
                            control={control}
                            name="discount_unit"
                            rules={{ required: "Discount unit is required" }}
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    value={value}
                                    onChange={onChange}
                                    label="Discount Unit"
                                    id="discountUnit"
                                    placeholder="Select unit"
                                    options={[
                                        { value: "flat", label: "Flat" },
                                        { value: "percentage", label: "Percentage" },
                                    ]}
                                />
                            )}
                        />
                    </div>
                    <div className="col-span-1">
                        <Controller
                            control={control}
                            name="image"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Sales Image"
                                    sub="Add or change image for the sales"
                                    width={1000}
                                    height={800}
                                    onChange={onChange}
                                    value={value}
                                    folderName="Sales"
                                    previewClass="w-[50%]"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="start_on"
                            rules={{ required: "Start date is required" }}
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    label="Start On"
                                    id="startDate"
                                    pickerProps={{
                                        selected: value,
                                        onChange: (date) => onChange(date),
                                        showTimeSelect: true,
                                        timeIntervals: 10,
                                        placeholderText: "Start Date"
                                    }}

                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="expires_on"
                            rules={{ required: "Expire date is required" }}
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    label="Expire on"
                                    id="expireDate"
                                    pickerProps={{
                                        selected: value,
                                        onChange: (date) => onChange(date),
                                        showTimeSelect: true,
                                        timeIntervals: 10,
                                        placeholderText: "Expire Date"
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Sales</span>
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            {loading &&
                                <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                            }
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Edit;