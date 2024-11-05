"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next-app-progress-bar";
import toast from "react-hot-toast";

//Components
import { Input, Textarea, ImageUploader } from "@/Components/UI";

//Input Types
import { InstitutionInput } from "@/Utils/input.types";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_INSTITUTION, GET_INSTITUTION, INSTITUTION_LIST } from "@/Apollo/query/institution/institution";

interface Props {
    slug: string;
}

const Edit = ({ slug }: Props) => {
    //Initializing Hook
    const router = useRouter();

    //Apollo
    const { data } = useQuery(GET_INSTITUTION, { variables: { slug } });
    const [mutate, { loading }] = useMutation(UPDATE_INSTITUTION, {
        onCompleted: (data) => {
            toast.success(data.updateInstitution.message)
            router.push("/institution")
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: INSTITUTION_LIST, variables: { searchDto: defaultSearch } }, "getInstitution"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<InstitutionInput>({
        defaultValues: {
            name: data?.getInstitution.name,
            en_name: data?.getInstitution.en_name,
            description: data?.getInstitution.description || "",
            image: data?.getInstitution.image || "",
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<InstitutionInput> = (value) => {
        mutate({ variables: { institutionDto: value, updateInstitutionId: data?.getInstitution.id || 0 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: data?.getInstitution.name,
            en_name: data?.getInstitution.en_name,
            description: data?.getInstitution.description || "",
            image: data?.getInstitution.image || "",
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update institution</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: "Institution Name is required" })}
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
                    </div>
                    <div className="col-span-1">
                        <Controller
                            control={control}
                            name="image"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Institution Logo"
                                    sub="Add or change logo for the institution"
                                    width={400}
                                    height={400}
                                    onChange={onChange}
                                    value={value}
                                    folderName="institution"
                                    previewClass="w-[40%]"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Institution</span>
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