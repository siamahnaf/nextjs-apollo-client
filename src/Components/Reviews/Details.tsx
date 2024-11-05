"use client"
import toast from "react-hot-toast";
import Image from "next/image";
import { Rating } from "next-rating-component";

//UI
import { Dialog } from "../UI";

//Apollo
import { useMutation } from "@apollo/client";
import { CHANGE_VISIBILITY_REVIEWS } from "@/Apollo/query/reviews/reviews";
import { GetReviewByAdminQuery } from "@/Apollo/types/graphql";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    item: GetReviewByAdminQuery["getReviewByAdmin"]["results"][number]
}

const Details = ({ open, onClose, item }: Props) => {
    //Apollo
    const [mutate, { loading }] = useMutation(CHANGE_VISIBILITY_REVIEWS, {
        onCompleted: (data) => {
            toast.success(data.changeReviewVisibility.message);
            onClose();
        },
        onError: (error) => {
            toast.error(error.message);
        },
        refetchQueries: ["getReviewByAdmin"],
        awaitRefetchQueries: true
    });

    //Handler
    const onSubmit = () => {
        mutate({ variables: { reviewId: item.id } });
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[900px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Review Details</h4>
                <hr className="mt-3" />
                <div className="mt-5 flex items-center gap-5">
                    <Image src={process.env.NEXT_PUBLIC_IMAGE_URL as string + item.product?.image} alt={item.product?.name || ""} width={300} height={450} className="w-[150px] rounded-md" />
                    <div>
                        <h4 className="text-2xl font-semibold text-gray-600">{item.product?.name}</h4>
                        <p className="mt-2">
                            <span className="text-gray-600 font-medium">Category:</span>{" "}
                            <span className="text-gray-600">{item.product?.category?.name}</span>
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Writer:</span>{" "}
                            {item.product?.writer ? <span className="text-gray-600">{item.product?.writer?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Publisher:</span>{" "}
                            {item.product?.publisher ? <span className="text-gray-600">{item.product?.publisher?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Teacher:</span>{" "}
                            {item.product?.teacher ? <span className="text-gray-600">{item.product?.teacher?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Institution:</span>{" "}
                            {item.product?.institution ? <span className="text-gray-600">{item.product?.institution?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Research paper:</span>{" "}
                            {item.product?.paper ? <span className="text-gray-600">{item.product?.paper?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <Rating
                        value={item.rating}
                        readOnly
                        toolTip
                    />
                    <p className="mt-4 font-light">{item.comment}</p>
                    {item.reply &&
                        <div className="mt-4 mb-4 ml-8">
                            <h4 className="font-medium text-lg text-text mb-2">Reply</h4>
                            <p className="font-light">{item.reply}</p>
                        </div>
                    }
                </div>
                <div className="mt-8">
                    <button className={`py-2.5 px-5 rounded-md text-sm font-semibold text-white relative ${item.publish ? "bg-red-600" : "bg-green-600"}`} disabled={loading} onClick={onSubmit}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>{item.publish ? "Hide Review" : "Publish Review"}</span>
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            {loading &&
                                <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                            }
                        </div>
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default Details;