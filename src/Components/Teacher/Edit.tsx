"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next-app-progress-bar";
import toast from "react-hot-toast";

//Components
import { Input, Textarea, ImageUploader } from "@/Components/UI";

//Input Types
import { TeacherInput } from "@/Utils/input.types";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_TEACHER, GET_TEACHER, TEACHER_LIST } from "@/Apollo/query/teacher/teacher";

interface Props {
    slug: string;
}

const Edit = ({ slug }: Props) => {
    //Initializing Hook
    const router = useRouter();

    //Apollo
    const { data } = useQuery(GET_TEACHER, { variables: { slug } });
    const [mutate, { loading }] = useMutation(UPDATE_TEACHER, {
        onCompleted: (data) => {
            toast.success(data.updateTeacher.message)
            router.push("/teacher")
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: TEACHER_LIST, variables: { searchDto: defaultSearch } }, "getTeacher"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<TeacherInput>({
        defaultValues: {
            name: data?.getTeacher.name,
            en_name: data?.getTeacher.en_name,
            description: data?.getTeacher.description || "",
            image: data?.getTeacher.image || "",
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<TeacherInput> = (value) => {
        mutate({ variables: { teacherDto: value, updateTeacherId: data?.getTeacher.id || 0 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: data?.getTeacher.name,
            en_name: data?.getTeacher.en_name,
            description: data?.getTeacher.description || "",
            image: data?.getTeacher.image || "",
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update teacher</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: "Teacher Name is required" })}
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
                                    label="Teacher Image"
                                    sub="Add or change image for the teacher"
                                    width={400}
                                    height={400}
                                    onChange={onChange}
                                    value={value}
                                    folderName="teacher"
                                    previewClass="w-[40%]"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Teacher</span>
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