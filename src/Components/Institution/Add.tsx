"use client"
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

//UI
import { Input, Textarea, ImageUploader } from "../UI";

//Input Types
import { InstitutionInput } from "@/Utils/input.types";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation } from "@apollo/client";
import { ADD_INSTITUTION, INSTITUTION_LIST } from "@/Apollo/query/institution/institution";

const Add = () => {
    //Form Initialize
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<InstitutionInput>();

    //Apollo
    const [mutate, { loading }] = useMutation(ADD_INSTITUTION, {
        onCompleted: (data) => {
            toast.success(data.addInstitution.message);
            reset();
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: INSTITUTION_LIST, variables: { searchDto: defaultSearch } }],
        awaitRefetchQueries: true
    });

    //Submit
    const onSubmit: SubmitHandler<InstitutionInput> = (value) => {
        mutate({ variables: { institutionDto: value } });
    }

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Add new institution</h4>
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
                <div className="mt-8">
                    <button type="submit" className="py-2.5 px-5 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
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

export default Add;