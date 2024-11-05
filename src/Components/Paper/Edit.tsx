"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next-app-progress-bar";
import toast from "react-hot-toast";

//Components
import { Input, Textarea, ImageUploader } from "@/Components/UI";

//Input Types
import { PaperInput } from "@/Utils/input.types";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_PAPER, GET_PAPER, PAPER_LIST } from "@/Apollo/query/paper/paper";

interface Props {
    slug: string;
}

const Edit = ({ slug }: Props) => {
    //Initializing Hook
    const router = useRouter();

    //Apollo
    const { data } = useQuery(GET_PAPER, { variables: { slug } });
    const [mutate, { loading }] = useMutation(UPDATE_PAPER, {
        onCompleted: (data) => {
            toast.success(data.updatePaper.message)
            router.push("/research-paper")
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: PAPER_LIST, variables: { searchDto: defaultSearch } }, "getPaper"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<PaperInput>({
        defaultValues: {
            name: data?.getPaper.name,
            en_name: data?.getPaper.en_name,
            description: data?.getPaper.description || "",
            image: data?.getPaper.image || "",
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<PaperInput> = (value) => {
        mutate({ variables: { paperDto: value, updatePaperId: data?.getPaper.id || 0 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: data?.getPaper.name,
            en_name: data?.getPaper.en_name,
            description: data?.getPaper.description || "",
            image: data?.getPaper.image || "",
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update research paper</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: "Research Paper Name is required" })}
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
                                    label="Research Image"
                                    sub="Add or change image for the research paper"
                                    width={400}
                                    height={400}
                                    onChange={onChange}
                                    value={value}
                                    folderName="paper"
                                    previewClass="w-[40%]"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Research Paper</span>
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