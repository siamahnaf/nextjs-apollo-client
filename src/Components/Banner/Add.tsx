"use client"
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

//UI
import { ImageUploader, Input } from "../UI";

//Types
import { BannerInput } from "@/Utils/input.types";

//Apollo
import { useMutation } from "@apollo/client";
import { ADD_BANNERS } from "@/Apollo/query/banners/banner";

const Add = () => {
    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm<BannerInput>();

    //Apollo
    const [mutate, { loading }] = useMutation(ADD_BANNERS, {
        onCompleted: (data) => {
            toast.success(data.addBanners.message)
            reset()
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getBanners"],
        awaitRefetchQueries: true
    })

    //On Submit Handler
    const onSubmit: SubmitHandler<BannerInput> = (value) => {
        mutate({ variables: { bannerDto: value } })
    }

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600 mb-6">Add new Banner</h4>
            <div className="border border-solid border-gray-200 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                    <Input
                        label="Alternative text"
                        id="name"
                        placeholder="Alt"
                        {...register("name", { required: "Alternative text is required" })}
                        error={errors.name ? true : false}
                        message={errors.name?.message}
                    />
                    <Controller
                        control={control}
                        name="url"
                        rules={{ required: "Banner image is required" }}
                        render={({ field: { onChange, value } }) => (
                            <ImageUploader
                                label="Banner Image"
                                sub="Add or change image for the banner"
                                width={1680}
                                height={510}
                                onChange={onChange}
                                value={value}
                                folderName="banner"
                                previewClass="w-full"
                                error={errors.url ? true : false}
                                message={errors.url?.message}
                            />
                        )}
                    />
                    <div>
                        <button type="submit" className="py-2.5 px-5 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                            <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Banner</span>
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                {loading &&
                                    <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                                }
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add;