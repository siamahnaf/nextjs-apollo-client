"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next-app-progress-bar";
import toast from "react-hot-toast";

//Components
import { Input, Textarea, ImageUploader, Select } from "@/Components/UI";

//Input Types
import { WriterInput } from "@/Utils/input.types";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_WRITER, GET_WRITER, WRITER_LIST } from "@/Apollo/query/writer/writer";

interface Props {
    slug: string;
}

const Edit = ({ slug }: Props) => {
    //Initializing Hook
    const router = useRouter();

    //Apollo
    const { data } = useQuery(GET_WRITER, { variables: { slug } });
    const [mutate, { loading }] = useMutation(UPDATE_WRITER, {
        onCompleted: (data) => {
            toast.success(data.updateWriter.message)
            router.push("/writers")
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: WRITER_LIST, variables: { searchDto: defaultSearch } }, "getWriter"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<WriterInput>({
        defaultValues: {
            name: data?.getWriter.name,
            en_name: data?.getWriter.en_name,
            bio: data?.getWriter.bio || "",
            image: data?.getWriter.image || "",
            level: data?.getWriter.level
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<WriterInput> = (value) => {
        mutate({ variables: { writerDto: value, updateWriterId: data?.getWriter.id || 0 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: data?.getWriter.name,
            en_name: data?.getWriter.en_name,
            bio: data?.getWriter.bio || "",
            image: data?.getWriter.image || "",
            level: data?.getWriter.level
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update writer</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: "Category Name is required" })}
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
                            label="Bio"
                            id="bio"
                            placeholder="Bio"
                            {...register("bio")}
                            rows={4}
                        />
                        <Controller
                            control={control}
                            name="level"
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    value={value}
                                    onChange={onChange}
                                    label="Writer Level"
                                    id="level"
                                    placeholder="Select level"
                                    options={[
                                        { value: "old", label: "Famous Writer" },
                                        { value: "new", label: "New Writer" },
                                    ]}
                                />
                            )}
                        />
                    </div>
                    <div className="col-span-1">
                        <Controller
                            control={control}
                            name="image"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Writer Image"
                                    sub="Add or change image for the writer"
                                    width={400}
                                    height={400}
                                    onChange={onChange}
                                    value={value}
                                    folderName="writer"
                                    previewClass="w-[40%]"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Writer</span>
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