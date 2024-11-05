"use client"
import { Fragment } from "react";
import toast from "react-hot-toast";

//UI
import { Dialog, Loading } from "../UI";

//Apollo
import { useMutation } from "@apollo/client";
import { INCREASE_ORDER_LIMIT } from "@/Apollo/query/order/order";
import { GetOrdersQuery } from "@/Apollo/types/graphql";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    item: GetOrdersQuery["getOrders"]["results"][number];
}

const Details = ({ open, onClose, item }: Props) => {
    //Apollo
    const [mutate, { loading }] = useMutation(INCREASE_ORDER_LIMIT, {
        onCompleted: (data) => {
            toast.success(data.increaseDownloadLimit.message)
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getOrders"],
        awaitRefetchQueries: true
    });


    //Handler
    const onIncreaseHandler = () => {
        mutate({ variables: { increaseDownloadLimitId: item.id, limit: item.download_limit + 1 } });
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[900px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Order Details ({item.orderId})</h4>
                <hr className="mt-3" />
                <div className="py-3 px-2">
                    <h6 className="text-lg font-medium mb-2">Books</h6>
                    {item.products?.map((item, i) => (
                        <Fragment key={i}>
                            <div className="flex gap-5 py-2">
                                <h2 className="flex-1 text-base font-light">
                                    <span>{i + 1}. </span>
                                    <span>{item.name} (by {item.seller?.shop_name})</span>
                                </h2>
                                <h2 className="font-medium">
                                    Tk. {item.total_price}
                                </h2>
                            </div>
                            <hr />
                        </Fragment>
                    ))}
                    <div className="flex gap-5 py-2">
                        <h4 className="flex-1">Total</h4>
                        <h4>Tk. {item.products?.reduce((sum, item) => sum + item.total_price, 0)}</h4>
                    </div>
                    <hr />
                    <div className="flex gap-5 py-2">
                        <h4 className="flex-1">Voucher</h4>
                        <h4>Tk. {Number.isInteger(item.coupon_amount) ? item.coupon_amount : (item.coupon_amount).toFixed(2)}</h4>
                    </div>
                    <hr />
                    <div className="flex gap-5 py-2">
                        <h4 className="flex-1 text-lg font-medium text-gray-600">Total Amount Paid</h4>
                        <h4 className="text-lg font-medium text-main">Tk. {Number.isInteger(item.total_price) ? item.total_price : (item.total_price).toFixed(2)}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h6 className="mt-5 text-lg font-medium mb-2">Customer Details</h6>
                            <div className="flex gap-2">
                                <p className="text-gray-700 font-semibold">Customer name:</p>
                                <p className="text-text">{item.user?.name}</p>
                            </div>
                            <div className="flex gap-2 mt-px">
                                <p className="text-gray-700 font-semibold">Customer phone:</p>
                                <p className="text-text">{item.user?.phone}</p>
                            </div>
                            <div className="flex gap-2 mt-px">
                                <p className="text-gray-700 font-semibold">Customer email:</p>
                                <p className="text-text">{item.user?.email}</p>
                            </div>
                            <div className="flex gap-2 mt-px">
                                <p className="text-gray-700 font-semibold">Download Limit:</p>
                                <p className="text-text">{item.download_limit}</p>
                            </div>
                        </div>
                        <div>
                            <h6 className="mt-5 text-lg font-medium mb-2">Payment Information</h6>
                            <div className="flex gap-2">
                                <p className="text-gray-700 font-semibold">Status:</p>
                                <p className={`capitalize font-bold ${item.status === "placed" ? "text-red-600" : (item.status === "confirmed" ? "text-purple-600" : "text-green-600")}`}>{item.status}</p>
                            </div>
                            {item.payment_id &&
                                <div className="flex gap-2 mt-px">
                                    <p className="text-gray-700 font-semibold">Payment ID:</p>
                                    <p className="text-text">{item.payment_id}</p>
                                </div>
                            }
                        </div>
                    </div>
                    {item.status === "paid" &&
                        <div className="mt-8">
                            <button className="bg-main relative px-5 py-2 rounded-md text-white" disabled={loading} onClick={onIncreaseHandler}>
                                <span className={`${loading && "opacity-20"}`}>Increase Download Limit</span>
                                {loading &&
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <Loading color="stroke-white" />
                                    </div>
                                }
                            </button>
                        </div>
                    }
                </div>
            </div>
        </Dialog>
    );
};

export default Details;