"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next-app-progress-bar";
import toast from "react-hot-toast";
import { Rating } from "next-rating-component";

//Components
import { Input, Textarea, ImageUploader } from "@/Components/UI";

//Input Types
import { FeedbackInput } from "@/Utils/input.types";

//Utils
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { GET_FEEDBACK, FEEDBACK_LIST, UPDATE_FEEDBACK } from "@/Apollo/query/feedback/category";

interface Props {
    id: number;
}

const Edit = ({ id }: Props) => {
    //Initializing Hook
    const router = useRouter();

    //Apollo
    const { data } = useQuery(GET_FEEDBACK, { variables: { getFeedbackId: id } });
    const [mutate, { loading }] = useMutation(UPDATE_FEEDBACK, {
        onCompleted: (data) => {
            toast.success(data.updateFeedback.message)
            router.push("/feedback")
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: FEEDBACK_LIST, variables: { searchDto: defaultSearch } }, "getFeedback"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<FeedbackInput>({
        defaultValues: {
            name: data?.getFeedback.name,
            title: data?.getFeedback.title,
            image: data?.getFeedback.image,
            description: data?.getFeedback.description,
            rating: data?.getFeedback.rating || 0
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<FeedbackInput> = (value) => {
        mutate({ variables: { feedbackDto: value, updateFeedbackId: data?.getFeedback.id || -1 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: data?.getFeedback.name,
            title: data?.getFeedback.title,
            image: data?.getFeedback.image,
            description: data?.getFeedback.description,
            rating: data?.getFeedback.rating || 0
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update feedback</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: "Name is required" })}
                            error={errors.name ? true : false}
                            message={errors.name?.message}
                        />
                        <Input
                            label="Job Title"
                            id="title"
                            placeholder="Title"
                            {...register("title", { required: "Title is required" })}
                            error={errors.title ? true : false}
                            message={errors.title?.message}
                        />
                        <Textarea
                            label="Description"
                            id="description"
                            placeholder="Description"
                            {...register("description", { required: "Description is required" })}
                            rows={4}
                            error={errors.description ? true : false}
                            message={errors.description?.message}
                        />
                        <div className="mt-4">
                            <Controller
                                control={control}
                                name="rating"
                                render={({ field: { onChange, value } }) => (
                                    <Rating
                                        onChange={onChange}
                                        value={value}
                                        fractions={0.25}
                                        toolTip
                                        size={28}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <Controller
                            control={control}
                            name="image"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Avatar Image"
                                    sub="Add or change image for the feedback"
                                    width={400}
                                    height={400}
                                    onChange={onChange}
                                    value={value}
                                    folderName="feedback"
                                    previewClass="w-[40%]"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Category</span>
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