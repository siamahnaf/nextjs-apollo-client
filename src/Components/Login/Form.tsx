"use client"
import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { Otptimer } from "otp-timer-ts";

//UI
import { Input, Loading } from "../UI";

//Urql
import { useMutation } from "@urql/next";
import { LOGIN_ACCOUNT, VERIFY_OTP } from "@/Urql/query/account/account";

//Interface
interface Inputs {
    phone: string;
    otp: string;
}

const Form = () => {
    //State
    const [send, setSend] = useState<boolean>(false);

    //Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    //Urql
    const [{ fetching }, mutate] = useMutation(LOGIN_ACCOUNT);
    const [{ fetching: verifyFetching }, verifyMutate] = useMutation(VERIFY_OTP);

    //Handler
    const onSubmit: SubmitHandler<Inputs> = (value) => {
        if (!send) {
            mutate({ signupInput: { phone: value.phone, as: ["admin", "moderator"] } }).then(({ data, error }) => {
                if (error) {
                    toast.error(error.message)
                } else {
                    toast.success(data?.signup.message || "")
                    setSend(true);
                }
            });
        } else {
            verifyMutate({ verifyPhoneInput: { phone: value.phone, otp: value.otp } }).then(({ data, error }) => {
                if (error) {
                    toast.error(error.message)
                } else {
                    toast.success(data?.verifyPhone.message || "")
                    setCookie("NAOWSbL1sKQ30aq9", data?.verifyPhone.token, {
                        maxAge: 90 * 24 * 60 * 60,
                        sameSite: "lax",
                        path: "/"
                    });
                    window.location.reload();
                }
            });
        }
    };

    //Handler
    const handleResend = () => {

    }

    return (
        <div className="w-[35%] mx-auto shadow-3xl border border-solid border-gray-300 rounded-lg p-8">
            <div className="text-center">
                <h4 className="text-lg font-semibold">PDF Shop</h4>
                <p className="text-sm text-gray-600 italic">Login to admin dashboard</p>
            </div>
            <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <div>
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
                    </div>
                    {send &&
                        <div>
                            <Input
                                label="OTP"
                                id="otp"
                                placeholder="Your OTP"
                                {...register("otp", { required: 'Provide the code sent to you.' })}
                                error={errors.otp ? true : false}
                                message={errors.otp?.message}
                                onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
                                }}
                            />
                        </div>
                    }
                    {send &&
                        <Otptimer
                            minutes={0}
                            seconds={5}
                            onResend={handleResend}
                            text="Resend code in"
                            buttonText="Resend Code"
                            textClass="font-light text-text"
                            timerClass="font-light text-text"
                            buttonClass="underline text-main flex gap-2"
                            showSpinner
                            fetching={true}
                            spinnerComponent={<Loading />}
                        />
                    }
                </div>
                <div className="mt-5">
                    <button className="bg-main w-full uppercase font-semibold py-3 text-white rounded-md text-sm relative" type="submit" disabled={(fetching || verifyFetching)}>
                        <span className={`${(fetching || verifyFetching) && "opacity-20"}`}>{!send ? "Send Code" : "Verify Code"}</span>
                        {(fetching || verifyFetching) && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Loading color="stroke-white" />
                        </div>}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;