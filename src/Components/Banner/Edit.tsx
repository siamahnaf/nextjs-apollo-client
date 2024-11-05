"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

//UI
import { ImageUploader, Input, Dialog } from "../UI";

//Types
import { BannerInput } from "@/Utils/input.types";

//Apollo
import { useMutation } from "@apollo/client";
import { UPDATE_BANNER } from "@/Apollo/query/banners/banner";
import { GetBannersQuery } from "@/Apollo/types/graphql";


//Interface
interface Props {
    open: boolean,
    onClose: () => void;
    banners: GetBannersQuery["getBanners"][number]
}

const Edit = ({ open, onClose, banners }: Props) => {
    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<BannerInput>({
        defaultValues: {
            name: banners.name,
            url: banners.url
        }
    });

    //Apollo
    const [mutate, { loading }] = useMutation(UPDATE_BANNER, {
        onCompleted: (data) => {
            toast.success(data.updateBanner.message)
            onClose();
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getBanners"],
        awaitRefetchQueries: true
    })

    //On Submit Handler
    const onSubmit: SubmitHandler<BannerInput> = (value) => {
        mutate({ variables: { bannerDto: value, updateBannerId: banners.id } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: banners.name,
            url: banners.url
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [banners])

    return (
        <div className="w-0">
            <Dialog
                open={open}
                onClose={onClose}
                className="w-[700px] rounded-md"
            >
                <h6 className="font-bold text-lg px-4 py-3">Update Banner</h6>
                <hr />
                <div>
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
            </Dialog>
        </div>
    );
};

export default Edit;