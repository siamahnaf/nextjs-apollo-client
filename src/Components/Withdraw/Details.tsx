"use client"
import { Fragment, useState } from "react";
import toast from "react-hot-toast";

//UI
import { Dialog, Select, Loading } from "../UI";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { RELEASE_PAYMENT } from "@/Apollo/query/withdraw/withdraw";
import { GET_SELLER_ANALYTICS } from "@/Apollo/query/withdraw/withdraw";
import { GetWithdrawByAdminQuery } from "@/Apollo/types/graphql";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    item: GetWithdrawByAdminQuery["getWithdrawByAdmin"]["results"][number];
}

const Details = ({ open, onClose, item }: Props) => {
    //Status
    const [status, setStatus] = useState<string>("");

    //Apollo
    const { data, loading: fetching } = useQuery(GET_SELLER_ANALYTICS, { variables: { getSellerAnalyticsForAdminId: item.seller?.id || -2 } });
    const [mutate, { loading }] = useMutation(RELEASE_PAYMENT, {
        onCompleted: (data) => {
            toast.success(data.releasePayment.message)
            onClose();
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getWithdrawByAdmin", "releasePayment"]
    })

    //Handler
    const onRelease = () => {
        mutate({ variables: { releasePaymentId: item.id, status: status } });
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[800px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Withdraw Details</h4>
                <hr className="mt-3" />
                <div className="py-3 px-2 grid grid-cols-2 gap-5 text-center mt-4 mb-4">
                    <div>
                        <h4 className="text-4xl font-semibold mb-1">Tk. {item.amount}</h4>
                        <p className="font-light text-gray-500">(By {item.method})</p>
                        {item.released_by &&
                            <p className="text-base mb-2 font-light text-gray-800 mt-4">Payment released by {item.released_by.name}</p>
                        }
                        {item.status === "Released" &&
                            <p className="text-purple-600 mt-10">Payment is released, please wait for confirmed</p>
                        }
                        {item.status === "Pending" &&
                            <Fragment>
                                <div className="w-[80%] mx-auto text-left mt-10">
                                    <Select
                                        id="status"
                                        placeholder="Status"
                                        label="Select Status"
                                        value={status}
                                        onChange={(e) => setStatus(e)}
                                        options={[
                                            { value: "Released", label: "Release" },
                                            { value: "Rejected", label: "Reject" }
                                        ]}
                                    />
                                    <button className={`bg-main w-full text-white px-5 py-2 rounded-md relative ${status.length === 0 && "opacity-50"}`} onClick={onRelease} disabled={(status.length === 0) || loading}>
                                        <span className={`${loading && "opacity-20"}`}>Update Payment Status</span>
                                        {loading &&
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <Loading color="stroke-white" />
                                            </div>
                                        }
                                    </button>
                                </div>
                            </Fragment>
                        }
                        {item.status === "Rejected" &&
                            <p className="text-base font-medium text-red-600 mt-4">You reject this withdraw request!</p>
                        }
                        {item.status === "Confirmed" &&
                            <p className="text-base font-medium text-green-600 mt-4">Seller confirmed that <br /> they get the payment</p>
                        }
                    </div>
                    <div className="text-left">
                        <h4 className="font-medium text-xl text-text">Seller Details</h4>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Seller Name:</span>{" "}
                            {item.seller?.owner_name ? <span className="text-gray-600">{item.seller.owner_name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Shop Name:</span>{" "}
                            {item.seller?.shop_name ? <span className="text-gray-600">{item.seller.shop_name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Contact Number:</span>{" "}
                            {item.seller?.contact_number ? <span className="text-gray-600">{item.seller.contact_number}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                    </div>
                </div>
                <h4 className="font-medium px-2 text-xl text-text mt-10">Payment Method Details</h4>
                <div className="pb-3 px-2 grid grid-cols-2 gap-x-8">
                    <div>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Bank Name:</span>{" "}
                            {item.seller?.method?.bank_name ? <span className="text-gray-600">{item.seller.method.bank_name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Account Number:</span>{" "}
                            {item.seller?.method?.acc_number ? <span className="text-gray-600">{item.seller.method.acc_number}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Routing:</span>{" "}
                            {item.seller?.method?.routing ? <span className="text-gray-600">{item.seller.method.routing}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Branch:</span>{" "}
                            {item.seller?.method?.branch ? <span className="text-gray-600">{item.seller.method.branch}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Account Holder Name:</span>{" "}
                            {item.seller?.method?.acc_holder_name ? <span className="text-gray-600">{item.seller.method.acc_holder_name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                    </div>
                    <div>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Bkash Number:</span>{" "}
                            {item.seller?.method?.bkash ? <span className="text-gray-600">{item.seller.method.bkash}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Nagad Number:</span>{" "}
                            {item.seller?.method?.nagad ? <span className="text-gray-600">{item.seller.method.nagad}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Upay Number:</span>{" "}
                            {item.seller?.method?.upay ? <span className="text-gray-600">{item.seller.method.upay}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1">
                            <span className="text-gray-600 font-medium">Rocket Number:</span>{" "}
                            {item.seller?.method?.rocket ? <span className="text-gray-600">{item.seller.method.rocket}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                    </div>
                </div>
                <div className="py-3 px-2 mt-4">
                    {fetching &&
                        <div>
                            <Loading color="stroke-main" />
                            <p className="text-base font-light text-gray-600 mt-1">Please wait we are loading seller statistics</p>
                        </div>
                    }
                    {data &&
                        <div className="grid grid-cols-2 gap-2">
                            <div className="p-5 bg-white rounded-md shadow-3xl border border-solid border-gray-200">
                                <h3 className="text-3xl font-semibold mb-1">৳{Number.isInteger(data?.getSellerAnalyticsForAdmin.totalIncome) ? data?.getSellerAnalyticsForAdmin.totalIncome : data?.getSellerAnalyticsForAdmin.totalIncome?.toFixed(2)}</h3>
                                <p className="text-[15px] opacity-60 mb-px">Seller Total Income</p>
                                <p className="text-[13px] opacity-60">(Exclude platform charge)</p>
                            </div>
                            <div className="p-5 bg-white rounded-md shadow-3xl border border-solid border-gray-200">
                                <h3 className="text-3xl font-semibold mb-1">৳{Number.isInteger(data?.getSellerAnalyticsForAdmin.totalIncomeWithoutCharge) ? data?.getSellerAnalyticsForAdmin.totalIncomeWithoutCharge : data?.getSellerAnalyticsForAdmin.totalIncomeWithoutCharge?.toFixed(2)}</h3>
                                <p className="text-[15px] opacity-60 mb-px">Seller Total Income</p>
                                <p className="text-[13px] opacity-60">(Include platform charge)</p>
                            </div>
                            <div className="p-5 bg-white rounded-md shadow-3xl border border-solid border-gray-200">
                                <h3 className="text-3xl font-semibold mb-1">৳{Number.isInteger(data?.getSellerAnalyticsForAdmin.totalDue) ? data?.getSellerAnalyticsForAdmin.totalDue : data?.getSellerAnalyticsForAdmin.totalDue?.toFixed(2)}</h3>
                                <p className="text-[15px] opacity-60 mb-px">Seller Current Due</p>
                                <p className="text-[13px] opacity-60">(Seller total due)</p>
                            </div>
                            <div className="p-5 bg-white rounded-md shadow-3xl border border-solid border-gray-200">
                                <h3 className="text-3xl font-semibold mb-1">৳{Number.isInteger(data?.getSellerAnalyticsForAdmin.totalWithdraw) ? data?.getSellerAnalyticsForAdmin.totalWithdraw : data?.getSellerAnalyticsForAdmin.totalWithdraw?.toFixed(2)}</h3>
                                <p className="text-[15px] opacity-60 mb-px">Seller Total Withdraw</p>
                                <p className="text-[13px] opacity-60">(Seller total payment)</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Dialog>
    );
};

export default Details;