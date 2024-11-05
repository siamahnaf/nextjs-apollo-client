"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

//Components
import { Input, Textarea, ImageUploader } from "@/Components/UI";

//Input Types
import { SiteInput } from "@/Utils/input.types";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { ADD_SITE_SETTINGS, GET_SETTINGS } from "@/Apollo/query/setting/settings";

const Add = () => {
    //Apollo
    const { data } = useQuery(GET_SETTINGS);
    const [mutate, { loading }] = useMutation(ADD_SITE_SETTINGS, {
        onCompleted: (data) => {
            toast.success(data.addSettings.message)
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getSiteSetting"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<SiteInput>({
        defaultValues: {
            logo: data?.getSiteSetting.logo || "",
            icon: data?.getSiteSetting.icon || "",
            site_title: data?.getSiteSetting.site_title || "",
            slogan: data?.getSiteSetting.slogan || "",
            meta_title: data?.getSiteSetting.meta_title || "",
            meta_description: data?.getSiteSetting.meta_description || "",
            keywords: data?.getSiteSetting.keywords || [],
            og_title: data?.getSiteSetting.og_title || "",
            og_description: data?.getSiteSetting.og_description || "",
            og_image: data?.getSiteSetting.og_image || "",
            facebook: data?.getSiteSetting.facebook || "",
            instagram: data?.getSiteSetting.instagram || "",
            youtube: data?.getSiteSetting.youtube || "",
            twitter: data?.getSiteSetting.twitter || "",
            footer_note: data?.getSiteSetting.footer_note || ""
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<SiteInput> = (value) => {
        mutate({ variables: { siteDto: value } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            logo: data?.getSiteSetting.logo || "",
            icon: data?.getSiteSetting.icon || "",
            site_title: data?.getSiteSetting.site_title || "",
            slogan: data?.getSiteSetting.slogan || "",
            meta_title: data?.getSiteSetting.meta_title || "",
            meta_description: data?.getSiteSetting.meta_description || "",
            keywords: data?.getSiteSetting.keywords || [],
            og_title: data?.getSiteSetting.og_title || "",
            og_description: data?.getSiteSetting.og_description || "",
            og_image: data?.getSiteSetting.og_image || "",
            facebook: data?.getSiteSetting.facebook || "",
            instagram: data?.getSiteSetting.instagram || "",
            youtube: data?.getSiteSetting.youtube || "",
            twitter: data?.getSiteSetting.twitter || "",
            footer_note: data?.getSiteSetting.footer_note || ""
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update Settings</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Site title"
                            id="siteTitle"
                            placeholder="Site title"
                            {...register("site_title")}
                        />
                        <Input
                            label="Site Slogan"
                            id="siteSlogan"
                            placeholder="Slogan"
                            {...register("slogan")}
                        />
                        <Input
                            label="Meta title"
                            id="metaTitle"
                            placeholder="Meta title"
                            {...register("meta_title")}
                        />
                        <Textarea
                            label="Meta description"
                            id="metaDescription"
                            placeholder="Meta description"
                            {...register("meta_description")}
                            rows={4}
                        />
                        <Textarea
                            label="Keywords"
                            id="keywords"
                            placeholder="Comma separated keywords"
                            {...register("keywords")}
                            rows={8}
                        />
                        <Input
                            label="OG title"
                            id="ogTitle"
                            placeholder="OG title"
                            {...register("og_title")}
                        />
                        <Textarea
                            label="OG description"
                            id="ogDescription"
                            placeholder="OG description"
                            {...register("og_description")}
                            rows={4}
                        />
                        <Input
                            label="Facebook"
                            id="facebook"
                            placeholder="Facebook"
                            {...register("facebook")}
                        />
                        <Input
                            label="Instagram"
                            id="instagram"
                            placeholder="Instagram"
                            {...register("instagram")}
                        />
                        <Input
                            label="Youtube"
                            id="youtube"
                            placeholder="Youtube"
                            {...register("youtube")}
                        />
                        <Input
                            label="Twitter"
                            id="twitter"
                            placeholder="Twitter"
                            {...register("twitter")}
                        />
                        <Textarea
                            label="Footer note"
                            id="footerNote"
                            placeholder="Footer note"
                            {...register("footer_note")}
                            rows={4}
                        />
                    </div>
                    <div className="col-span-1">
                        <Controller
                            control={control}
                            name="logo"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Logo Image"
                                    sub="Add or change image for the logo"
                                    width={240}
                                    height={100}
                                    onChange={onChange}
                                    value={value}
                                    folderName="settings"
                                    previewClass="w-[60%]"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="icon"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Site Icon"
                                    sub="Add or change icon for the favicon"
                                    width={148}
                                    height={148}
                                    onChange={onChange}
                                    value={value}
                                    folderName="settings"
                                    previewClass="w-[30%]"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="og_image"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="OG Image"
                                    sub="Add or change image for the OG"
                                    width={1200}
                                    height={1200}
                                    onChange={onChange}
                                    value={value}
                                    folderName="settings"
                                    previewClass="w-[70%]"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Settings</span>
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