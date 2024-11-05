"use client"
import toast from "react-hot-toast";

//UI
import { Dialog } from "../UI";

//Apollo
import { useMutation } from "@apollo/client";
import { APPROVED_REQUEST } from "@/Apollo/query/request/request";
import { GetRequestsQuery } from "@/Apollo/types/graphql";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    item: NonNullable<GetRequestsQuery["getRequests"]["results"]>[number];
}

const Details = ({ open, onClose, item }: Props) => {
    //Apollo
    const [mutate, { loading }] = useMutation(APPROVED_REQUEST, {
        onCompleted: (data) => {
            toast.success(data.approvedRequest.message);
            onClose();
        },
        onError: (error) => {
            toast.error(error.message);
        },
        refetchQueries: ["getRequests"],
        awaitRefetchQueries: true
    });

    //Handler
    const onSubmit = () => {
        mutate({ variables: { approvedRequestId: item.id } });
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[900px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Request Details</h4>
                <hr className="mt-3" />
                <p className="mt-1.5">
                    <span className="text-gray-600 font-medium">Email:</span>{" "}
                    {item.email ? <span className="text-gray-600">{item.email}</span> : <span className="font-light text-red-500">Not added</span>}
                </p>
                <p className="mt-1.5">
                    <span className="text-gray-600 font-medium">Phone:</span>{" "}
                    {item.phone ? <span className="text-gray-600">{item.phone}</span> : <span className="font-light text-red-500">Not added</span>}
                </p>
                <p className="mt-1.5">
                    <span className="text-gray-600 font-medium">Message:</span>{" "}
                    {item.message ? <span className="text-gray-600">{item.message}</span> : <span className="font-light text-red-500">Not added</span>}
                </p>
                <div className="mt-8">
                    <button className="py-2.5 px-5 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading} onClick={onSubmit}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Approved this request</span>
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