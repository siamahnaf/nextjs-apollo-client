"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

//Components
import { Input, ImageUploader } from "@/Components/UI";

//Input Types
import { ProfileInput } from "@/Utils/input.types";

//Apollo
import { useSuspenseQuery, useMutation } from "@apollo/client";
import { UPDATE_PROFILE, GET_PROFILE } from "@/Apollo/query/account/account";


const Update = () => {
    //Apollo
    const { data } = useSuspenseQuery(GET_PROFILE);
    const [mutate, { loading }] = useMutation(UPDATE_PROFILE, {
        onCompleted: (data) => {
            toast.success(data.updateProfile.message)
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getProfile"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        control,
        reset
    } = useForm<ProfileInput>({
        defaultValues: {
            name: data.getProfile.name || "",
            email: data.getProfile.email || "",
            avatar: data.getProfile.avatar || ""
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<ProfileInput> = (value) => {
        mutate({ variables: { updateUserInput: value } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: data.getProfile.name || "",
            email: data.getProfile.email || "",
            avatar: data.getProfile.avatar || ""
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update Profile</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name")}
                        />
                        <Input
                            label="Email"
                            id="email"
                            placeholder="Email"
                            {...register("email", {
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Please enter a valid email address",
                                }
                            })}
                        />
                        <Controller
                            control={control}
                            name="avatar"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Avatar"
                                    sub="Add or change avatar for the profile"
                                    width={600}
                                    height={600}
                                    onChange={onChange}
                                    value={value}
                                    folderName="settings"
                                    previewClass="w-[30%]"
                                />
                            )}
                        />
                    </div>
                    <div className="col-span-1">
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Profile</span>
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

export default Update;