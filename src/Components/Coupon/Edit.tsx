"use client"
import { useEffect, ChangeEvent } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next-app-progress-bar";
import toast from "react-hot-toast";

//Components
import { Input, DatePicker, Select } from "@/Components/UI";

//Input Types
import { CouponInput } from "@/Utils/input.types";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_COUPON, GET_COUPON, COUPON_LIST } from "@/Apollo/query/coupon/coupon";

interface Props {
    slug: string;
}

const Edit = ({ slug }: Props) => {
    //Initializing Hook
    const router = useRouter();

    //Apollo
    const { data } = useQuery(GET_COUPON, { variables: { slug } });
    const [mutate, { loading }] = useMutation(UPDATE_COUPON, {
        onCompleted: (data) => {
            toast.success(data.updateCoupon.message)
            router.push("/coupon")
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: COUPON_LIST, variables: { searchDto: defaultSearch } }, "getCoupon"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<CouponInput>({
        defaultValues: {
            name: data?.getCoupon.name,
            en_name: data?.getCoupon.en_name,
            code: data?.getCoupon.code,
            discount: data?.getCoupon.discount?.toString(),
            discount_unit: data?.getCoupon.discount_unit,
            minimum_purchase: data?.getCoupon.minimum_purchase?.toString(),
            start_on: data?.getCoupon.start_on ? new Date(data?.getCoupon.start_on) : null,
            uses_limit: data?.getCoupon.uses_limit?.toString(),
            expires_on: data?.getCoupon.expires_on ? new Date(data?.getCoupon.expires_on) : null
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<CouponInput> = (value) => {
        const formData = {
            ...value,
            discount: Number(value.discount),
            minimum_purchase: Number(value.minimum_purchase),
            uses_limit: Number(value.uses_limit),
            start_on: value.start_on as Date,
            expires_on: value.expires_on as Date,
        }
        mutate({ variables: { couponDto: formData, updateCouponId: data?.getCoupon.id || 0 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: data?.getCoupon.name,
            en_name: data?.getCoupon.en_name,
            code: data?.getCoupon.code,
            discount: data?.getCoupon.discount?.toString(),
            discount_unit: data?.getCoupon.discount_unit,
            minimum_purchase: data?.getCoupon.minimum_purchase?.toString(),
            start_on: data?.getCoupon.start_on ? new Date(data?.getCoupon.start_on) : null,
            uses_limit: data?.getCoupon.uses_limit?.toString(),
            expires_on: data?.getCoupon.expires_on ? new Date(data?.getCoupon.expires_on) : null
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update coupon</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: "Name is required" })}
                            error={errors.name ? true : false}
                            message={errors.name?.message}
                        />
                        <Input
                            label="Name (English)"
                            id="englishName"
                            placeholder="Name"
                            {...register("en_name", {
                                required: "Name is required",
                                pattern: {
                                    value: /^[A-Za-z0-9\s]+$/,
                                    message: "Name must contain only English letters"
                                }
                            })}
                            error={errors.en_name ? true : false}
                            message={errors.en_name?.message}
                        />
                        <Input
                            label="Code"
                            id="code"
                            placeholder="Code"
                            {...register("code", { required: "Code is required" })}
                            error={errors.code ? true : false}
                            message={errors.code?.message}
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
                        <Input
                            label="Minimum purchase amount"
                            id="minimumPurchase"
                            placeholder="Minimum purchase"
                            {...register("minimum_purchase", { required: "Minimum purchase is required" })}
                            error={errors.minimum_purchase ? true : false}
                            message={errors.minimum_purchase?.message}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                        <Input
                            label="Uses limit"
                            id="usesLimit"
                            placeholder="Uses limit"
                            {...register("uses_limit", { required: "Uses limit is required" })}
                            error={errors.uses_limit ? true : false}
                            message={errors.uses_limit?.message}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                    </div>
                    <div className="col-span-1">
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
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Coupon</span>
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