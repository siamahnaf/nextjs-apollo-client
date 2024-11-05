"use client"
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { Rating } from "next-rating-component";

//UI
import { Input, Textarea, ImageUploader } from "../UI";

//Input Types
import { FeedbackInput } from "@/Utils/input.types";

//Utils
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation } from "@apollo/client";
import { ADD_FEEDBACK, FEEDBACK_LIST } from "@/Apollo/query/feedback/category";

const Add = () => {
    //Form Initialize
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<FeedbackInput>({
        defaultValues: {
            rating: 0,
        }
    });

    //Apollo
    const [mutate, { loading }] = useMutation(ADD_FEEDBACK, {
        onCompleted: (data) => {
            toast.success(data.addFeedback.message);
            reset();
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: FEEDBACK_LIST, variables: { searchDto: defaultSearch } }],
        awaitRefetchQueries: true
    });

    //Submit
    const onSubmit: SubmitHandler<FeedbackInput> = (value) => {
        mutate({ variables: { feedbackDto: value } });
    }

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Add new feedback</h4>
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
                            rules={{ required: "Image is required" }}
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
                                    error={errors.image ? true : false}
                                    message={errors.image?.message}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <button type="submit" className="py-2.5 px-5 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Feedback</span>
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