"use client"
import { ChangeEvent } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

//UI
import { Input, Select } from "../UI";

//Input Types
import { AdminInput } from "@/Utils/input.types";

//Apollo
import { useMutation } from "@apollo/client";
import { ADD_ADMIN } from "@/Apollo/query/users/user";

const Add = () => {
    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        control
    } = useForm<AdminInput>();

    //Apollo
    const [mutate, { loading }] = useMutation(ADD_ADMIN, {
        onCompleted: (data) => {
            toast.success(data.addAdmins.message)
            reset()
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getAdmins"],
        awaitRefetchQueries: true
    })

    //On Submit
    const onSubmit: SubmitHandler<AdminInput> = (value) => {
        mutate({ variables: { adminInput: value } })
    }

    return (
        <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-600 mb-6">Add new Banner</h4>
            <div className="border border-solid border-gray-200 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                    <Input
                        label="Name"
                        id="name"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                        error={errors.name ? true : false}
                        message={errors.name?.message}
                    />
                    <Input
                        label="Phone"
                        id="phone"
                        {...register("phone", { required: 'Please give your phone number' })}
                        error={errors.phone ? true : false}
                        message={errors.phone?.message}
                        prefixElement={<p className="absolute top-[2px] left-[2px] bottom-[2px] bg-gray-100 px-4 rounded-s-md flex items-center justify-center text-text text-base">+88</p>}
                        className="pl-[70px]"
                        onInput={(e: ChangeEvent<HTMLInputElement>) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '')
                        }}
                    />
                    <Controller
                        control={control}
                        name="role"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                value={value}
                                onChange={onChange}
                                label="Admin role"
                                id="role"
                                placeholder="Select role"
                                options={[
                                    { value: "moderator", label: "Moderator" },
                                    { value: "admin", label: "Admin" },
                                ]}
                            />
                        )}
                    />
                    {watch().role === "admin" &&
                        <p className="text-3xl text-red-600">Warning: Adding a new admin can get access of everything, even new admin can delete you! You can lost your admin dashboard. Be careful while creating new admin!</p>
                    }
                    <div className="mt-8">
                        <button type="submit" className="py-2.5 px-5 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                            <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Add Admin</span>
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