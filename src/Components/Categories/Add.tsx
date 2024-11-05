"use client"
import { ChangeEvent } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

//UI
import { Input, Textarea, ImageUploader, Checkbox } from "../UI";

//Input Types
import { CategoryInput } from "@/Utils/input.types";

//Utils
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation } from "@apollo/client";
import { ADD_CATEGORY, CATEGORY_LIST } from "@/Apollo/query/category/category";

const Add = () => {
    //Form Initialize
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<CategoryInput>({
        defaultValues: {
            is_top: false,
            vertical_product_style: true
        }
    });

    //Apollo
    const [mutate, { loading }] = useMutation(ADD_CATEGORY, {
        onCompleted: (data) => {
            toast.success(data.addCategory.message);
            reset();
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: CATEGORY_LIST, variables: { searchDto: defaultSearch } }],
        awaitRefetchQueries: true
    });

    //Submit
    const onSubmit: SubmitHandler<CategoryInput> = (value) => {
        mutate({ variables: { categoryDto: { ...value, position: Number(value.position) } } });
    }

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Add new category</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: "Category Name is required" })}
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
                        <Textarea
                            label="Description"
                            id="description"
                            placeholder="Description"
                            {...register("description")}
                            rows={4}
                        />
                        <Input
                            label="Position"
                            id="position"
                            placeholder="Display position"
                            {...register("position", { required: "Position is required" })}
                            error={errors.position ? true : false}
                            message={errors.position?.message}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                        <Controller
                            control={control}
                            name="is_top"
                            render={({ field: { onChange, value } }) => (
                                <Checkbox
                                    value={value}
                                    onChange={onChange}
                                    label="Are you want to show on top place"
                                    id="isTopCategory"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="vertical_product_style"
                            render={({ field: { onChange, value } }) => (
                                <Checkbox
                                    value={value}
                                    onChange={onChange}
                                    label="Are you want to show product on vertical style"
                                    id="vertical_product_style"
                                />
                            )}
                        />
                    </div>
                    <div className="col-span-1">
                        <Controller
                            control={control}
                            name="icon"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Icon Image"
                                    sub="Add or change icon for the category"
                                    width={400}
                                    height={400}
                                    onChange={onChange}
                                    value={value}
                                    folderName="category"
                                    previewClass="w-[40%]"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <button type="submit" className="py-2.5 px-5 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Category</span>
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

export default Add;