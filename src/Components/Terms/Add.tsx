"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

//Components
import { Textarea } from "@/Components/UI";

//Input Types
import { TermsInput } from "@/Utils/input.types";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { ADD_SITE_TERMS, GET_SITE_TERMS } from "@/Apollo/query/terms/term";

const Add = () => {
    //Apollo
    const { data } = useQuery(GET_SITE_TERMS);
    const [mutate, { loading }] = useMutation(ADD_SITE_TERMS, {
        onCompleted: (data) => {
            toast.success(data.addSiteTerms.message)
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getSiteTerms"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        reset
    } = useForm<TermsInput>({
        defaultValues: {
            terms_and_condition: data?.getSiteTerms.terms_and_condition || "",
            privacy_policy: data?.getSiteTerms.privacy_policy || ""
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<TermsInput> = (value) => {
        mutate({ variables: { termsDto: value } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            terms_and_condition: data?.getSiteTerms.terms_and_condition || "",
            privacy_policy: data?.getSiteTerms.privacy_policy || ""
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update Terms and Privacy</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Textarea
                            label="Terms & Condition"
                            id="termsAndCondition"
                            placeholder="Please add html format terms and condition"
                            {...register("terms_and_condition")}
                            rows={20}
                        />
                        <Textarea
                            label="Privacy Policy"
                            id="privacyPolicy"
                            placeholder="Please add html format privacy policy"
                            {...register("privacy_policy")}
                            rows={20}
                        />
                    </div>
                    <div className="col-span-1">
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Terms</span>
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