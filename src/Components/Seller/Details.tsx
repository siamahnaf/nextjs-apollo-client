"use client"
import toast from "react-hot-toast";

//UI
import { Dialog } from "../UI";

//Apollo
import { useMutation } from "@apollo/client";
import { ACCEPT_SELLER, REVIEW_SELLER_ACCEPT } from "@/Apollo/query/seller/seller";
import { GetSellersQuery } from "@/Apollo/types/graphql";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    item: GetSellersQuery["getSellers"]["results"][number]
}

const Details = ({ open, onClose, item }: Props) => {
    //Apollo
    const [mutate, { loading }] = useMutation(ACCEPT_SELLER, {
        onCompleted: (data) => {
            toast.success(data.acceptSeller.message);
            onClose();
        },
        onError: (error) => {
            toast.error(error.message);
        },
        refetchQueries: ["getSellers"],
        awaitRefetchQueries: true
    });
    const [acceptReview, { loading: reviewLoading }] = useMutation(REVIEW_SELLER_ACCEPT, {
        onCompleted: (data) => {
            toast.success(data.reviewSellerAccept.message);
            onClose();
        },
        onError: (error) => {
            toast.error(error.message);
        },
        refetchQueries: ["getSellers"],
        awaitRefetchQueries: true
    })

    //Handler
    const onSubmit = () => {
        mutate({ variables: { acceptSellerId: item.id } });
    }

    //Handler
    const onReviewAccept = () => {
        acceptReview({ variables: { reviewSellerAcceptId: item.id } });
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[900px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Seller Details</h4>
                <hr className="mt-3" />
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-5">
                    <div className="flex gap-2">
                        <p className="text-gray-700 font-semibold">Seller Type:</p>
                        <p className="text-text capitalize">{item.type}</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-gray-700 font-semibold">Name:</p>
                        <p className="text-text">{item.owner_name}</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-gray-700 font-semibold">Contact Number:</p>
                        <p className="text-text">{item.contact_number}</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-gray-700 font-semibold">Email:</p>
                        <p className="text-text">{item.email}</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-gray-700 font-semibold">Shop name:</p>
                        <p className="text-text">{item.shop_name}</p>
                    </div>

                    {item.organization_name &&
                        <div className="flex gap-2">
                            <p className="text-gray-700 font-semibold">Organization Name:</p>
                            <p className="text-text">{item.organization_name}</p>
                        </div>
                    }
                    {item.trade_license &&
                        <div className="flex gap-2">
                            <p className="text-gray-700 font-semibold">Trade license:</p>
                            <p className="text-text">{item.trade_license}</p>
                        </div>
                    }
                    {item.tin &&
                        <div className="flex gap-2">
                            <p className="text-gray-700 font-semibold">TIN:</p>
                            <p className="text-text">{item.tin}</p>
                        </div>
                    }
                    {item.user?.phone &&
                        <div className="flex gap-2">
                            <p className="text-gray-700 font-semibold">Verified Phone:</p>
                            <p className="text-text">{item.user?.phone}</p>
                        </div>
                    }
                    {item.user?.email &&
                        <div className="flex gap-2">
                            <p className="text-gray-700 font-semibold">Verified Email:</p>
                            <p className="text-text">{item.user?.email}</p>
                        </div>
                    }
                    <div className="flex gap-2 col-span-2">
                        <p className="text-gray-700 font-semibold">Address:</p>
                        <p className="text-text">{item.address}</p>
                    </div>
                    <div className="flex gap-2 col-span-2">
                        <p className="text-gray-700 font-semibold">Status:</p>
                        <p className={`text-text ${item.is_verified ? "text-green-600" : "text-orange-600"} font-semibold`}>{item.is_verified ? "Accepted" : "Pending"}</p>
                    </div>
                </div>
                <div className="mt-8">
                    {!item.is_verified &&
                        <button className="py-2.5 px-5 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading} onClick={onSubmit}>
                            <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Accept this seller</span>
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                {loading &&
                                    <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                                }
                            </div>
                        </button>
                    }
                    {item.need_review &&
                        <button className="py-2.5 px-5 rounded-md text-sm font-semibold bg-purple-600 text-white relative" disabled={reviewLoading} onClick={onReviewAccept}>
                            <span className={`${reviewLoading ? "opacity-40" : "opacity-100"}`}>Done Review</span>
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                {reviewLoading &&
                                    <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                                }
                            </div>
                        </button>
                    }
                </div>
            </div>
        </Dialog>
    );
};

export default Details;