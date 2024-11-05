"use client"
import { useState, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

//UI
import { Input } from "../UI";

//Apollo
import { useSuspenseQuery, useMutation } from "@apollo/client";
import { GET_PLATFORM, ADD_PLATFORM } from "@/Apollo/query/platform/platform";

//Interface
interface Inputs {
    charge: string;
}

const Card = () => {
    //State
    const [open, setOpen] = useState<boolean>(false);

    //Apollo
    const { data } = useSuspenseQuery(GET_PLATFORM, { errorPolicy: "all" });
    const [mutate, { loading }] = useMutation(ADD_PLATFORM, {
        onCompleted: (data) => {
            toast.success(data.addPlatform.message);
            setOpen(false);
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getPlatform"],
        awaitRefetchQueries: true
    })

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>({
        defaultValues: {
            charge: data?.getPlatform.charge?.toString()
        }
    })

    //Submit
    const onSubmit: SubmitHandler<Inputs> = (value) => {
        mutate({ variables: { platformDto: { charge: Number(value.charge) } } })
    }

    return (
        <div className="border border-solid border-gray-200 rounded-md">
            <h4 className="border-b border-solid border-gray-200 px-3 py-3 font-medium">Platform Charge</h4>
            <div className="px-3 py-5">
                {data ?
                    <div className="w-[40%] mx-auto bg-main rounded-md px-10 py-16 text-center text-white">
                        <p className="text-lg font-medium">Your platform Charge</p>
                        <h3 className="text-6xl font-bold mt-2">{data.getPlatform.charge}%</h3>
                    </div> : <p className="text-gray-600 text-base">Please add your platform charge now</p>
                }
                <div className="text-center mt-6">
                    <button onClick={() => setOpen(!open)} className="bg-main py-2 px-6 rounded text-white text-sm uppercase font-semibold">
                        Change Platform Charge
                    </button>
                </div>
                {open &&
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[60%] mx-auto mt-8">
                        <Input
                            label="Platform Charge"
                            id="platformCharge"
                            placeholder="Platform Charge"
                            {...register("charge", { required: "Platform charge is required" })}
                            error={errors.charge ? true : false}
                            message={errors.charge?.message}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                        <div className="text-center mt-6">
                            <button className="bg-main uppercase font-semibold py-2 text-white px-4 rounded-md text-sm relative" type="submit" disabled={loading}>
                                <span className={loading ? "opacity-30" : "opacity-100"}>Update Charge</span>
                                <div className="absolute top-1/2 left-1/2  -translate-y-1/2  -translate-x-1/2">
                                    {loading &&
                                        <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                                    }
                                </div>
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};

export default Card;