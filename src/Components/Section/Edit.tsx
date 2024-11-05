"use client"
import { useEffect, ChangeEvent } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next-app-progress-bar";
import toast from "react-hot-toast";

//Components
import { Input, Textarea, Select } from "@/Components/UI";

//Components
import Categories from "./Common/Categories";
import Writers from "./Common/Writers";
import Publishers from "./Common/Publisher";
import Teacher from "./Common/Teacher";
import Institution from "./Common/Institution";
import Paper from "./Common/Paper";
import Products from "./Common/Products";

//Input Types
import { SectionInput } from "@/Utils/input.types";

//Utils
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_SECTION, GET_SECTION, SECTION_LIST } from "@/Apollo/query/section/section";

interface Props {
    id: string;
}

const Edit = ({ id }: Props) => {
    //Initializing Hook
    const router = useRouter();

    //Apollo
    const { data } = useQuery(GET_SECTION, { variables: { getSectionId: Number(id) } });
    const [mutate, { loading }] = useMutation(UPDATE_SECTION, {
        onCompleted: (data) => {
            toast.success(data.updateSection.message)
            router.push("/home-page")
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: SECTION_LIST, variables: { searchDto: defaultSearch } }, "getSection"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
        watch,
        setValue
    } = useForm<SectionInput>({
        defaultValues: {
            title: data?.getSection.title,
            icon: data?.getSection.icon,
            type: data?.getSection.type,
            category: data?.getSection.category?.id?.toString() ?? "",
            writer: data?.getSection.writer?.id?.toString() ?? "",
            publisher: data?.getSection.publisher?.id?.toString(),
            institution: data?.getSection.institution?.id?.toString() ?? "",
            paper: data?.getSection.paper?.id?.toString() ?? "",
            products: data?.getSection.products?.map(a => a.id.toString()),
            position: data?.getSection.position?.toString(),
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<SectionInput> = (value) => {
        mutate({ variables: { sectionDto: { ...value, position: Number(value.position) }, updateSectionId: data?.getSection.id || 0 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            title: data?.getSection.title,
            icon: data?.getSection.icon,
            type: data?.getSection.type,
            category: data?.getSection.category?.id?.toString() ?? "",
            writer: data?.getSection.writer?.id?.toString() ?? "",
            publisher: data?.getSection.publisher?.id?.toString(),
            institution: data?.getSection.institution?.id?.toString() ?? "",
            paper: data?.getSection.paper?.id?.toString() ?? "",
            products: data?.getSection.products?.map(a => a.id.toString()),
            position: data?.getSection.position?.toString(),
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update section</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Title"
                            id="title"
                            placeholder="Title"
                            {...register("title", { required: "Title is required" })}
                            error={errors.title ? true : false}
                            message={errors.title?.message}
                        />
                        <div className="relative">
                            <Textarea
                                label="Icon"
                                id="icon"
                                placeholder="SVG Icon"
                                {...register("icon", { required: "Icon is required" })}
                                rows={5}
                                error={errors.icon ? true : false}
                                message={errors.icon?.message}
                            />
                            {watch().icon &&
                                <div className="absolute bottom-3 text-3xl bg-white rounded p-1.5 shadow-2xl border border-solid border-gray-200 right-2" dangerouslySetInnerHTML={{ __html: watch().icon }} />
                            }
                        </div>
                        <Input
                            label="Position"
                            id="position"
                            placeholder="Display position"
                            {...register("position", { required: "Position is required" })}
                            error={errors.position ? true : false}
                            message={errors.position?.message}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                        <Controller
                            control={control}
                            name="type"
                            rules={{ required: "Product type is required" }}
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    id="type"
                                    value={value}
                                    onChange={(e) => {
                                        onChange(e);
                                        setValue("category", "");
                                        setValue("writer", "");
                                        setValue("publisher", "");
                                        setValue("teacher", "");
                                        setValue("institution", "");
                                        setValue("paper", "");
                                    }}
                                    label="Select Type"
                                    placeholder="Product type"
                                    options={[
                                        { value: "category", label: "Category" },
                                        { value: "writer", label: "Writer" },
                                        { value: "publisher", label: "Publisher" },
                                        { value: "teacher", label: "Teacher" },
                                        { value: "institution", label: "Institution" },
                                        { value: "paper", label: "Research paper" },
                                    ]}
                                    error={errors.type ? true : false}
                                    message={errors.type?.message}
                                />
                            )}
                        />
                        {watch().type === "category" &&
                            <Controller
                                control={control}
                                name="category"
                                rules={{ required: "Category is required" }}
                                render={({ field: { value, onChange } }) => (
                                    <Categories
                                        value={value}
                                        onChange={onChange}
                                        error={errors.category ? true : false}
                                        message={errors.category?.message}
                                    />
                                )}
                            />
                        }
                        {watch().type === "writer" &&
                            <Controller
                                control={control}
                                name="writer"
                                rules={{ required: "Writes is required" }}
                                render={({ field: { value, onChange } }) => (
                                    <Writers
                                        value={value}
                                        onChange={onChange}
                                        error={errors.writer ? true : false}
                                        message={errors.writer?.message}
                                    />
                                )}
                            />
                        }
                        {watch().type === "publisher" &&
                            <Controller
                                control={control}
                                name="publisher"
                                rules={{ required: "Publisher is required" }}
                                render={({ field: { value, onChange } }) => (
                                    <Publishers
                                        value={value}
                                        onChange={onChange}
                                        error={errors.publisher ? true : false}
                                        message={errors.publisher?.message}
                                    />
                                )}
                            />
                        }
                        {watch().type === "teacher" &&
                            <Controller
                                control={control}
                                name="teacher"
                                rules={{ required: "Teacher is required" }}
                                render={({ field: { value, onChange } }) => (
                                    <Teacher
                                        value={value}
                                        onChange={onChange}
                                        error={errors.teacher ? true : false}
                                        message={errors.teacher?.message}
                                    />
                                )}
                            />
                        }
                        {watch().type === "institution" &&
                            <Controller
                                control={control}
                                name="institution"
                                rules={{ required: "Institution is required" }}
                                render={({ field: { value, onChange } }) => (
                                    <Institution
                                        value={value}
                                        onChange={onChange}
                                        error={errors.institution ? true : false}
                                        message={errors.institution?.message}
                                    />
                                )}
                            />
                        }
                        {watch().type === "paper" &&
                            <Controller
                                control={control}
                                name="paper"
                                rules={{ required: "Research paper is required" }}
                                render={({ field: { value, onChange } }) => (
                                    <Paper
                                        value={value}
                                        onChange={onChange}
                                        error={errors.paper ? true : false}
                                        message={errors.paper?.message}
                                    />
                                )}
                            />
                        }
                        {(watch().category || watch().writer || watch().publisher || watch().teacher || watch().institution || watch().paper) &&
                            <Controller
                                control={control}
                                name="products"
                                rules={{
                                    required: "Product is required",
                                    validate: value => (value.length > 0) || "At least one product is required"
                                }}
                                render={({ field: { value, onChange } }) => (
                                    <Products
                                        value={value}
                                        onChange={onChange}
                                        error={errors.products ? true : false}
                                        message={errors.products?.message}
                                        category={watch().category}
                                        writer={watch().writer}
                                        publisher={watch().publisher}
                                        teacher={watch().teacher}
                                        institution={watch().institution}
                                        research_paper={watch().paper}
                                    />
                                )}
                            />
                        }
                    </div>
                    <div className="col-span-1">
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Section</span>
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