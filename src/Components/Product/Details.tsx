"use client"
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

//UI
import { Dialog } from "../UI";

//Apollo
import { useMutation } from "@apollo/client";
import { APPROVED_PRODUCT } from "@/Apollo/query/products/product";
import { GetAdminProductsQuery } from "@/Apollo/types/graphql";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    item: GetAdminProductsQuery["getAdminProducts"]["results"][number]
}

const Details = ({ open, onClose, item }: Props) => {
    //Apollo
    const [mutate, { loading }] = useMutation(APPROVED_PRODUCT, {
        onCompleted: (data) => {
            toast.success(data.approvedProduct.message);
            onClose();
        },
        onError: (error) => {
            toast.error(error.message);
        },
        refetchQueries: ["getAdminProducts"],
        awaitRefetchQueries: true
    });

    //Handler
    const onSubmit = () => {
        mutate({ variables: { approvedProductId: item.id, approved: true } });
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[900px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Product Details</h4>
                <hr className="mt-3" />
                <div className="mt-5 flex items-center gap-5">
                    <Image src={process.env.NEXT_PUBLIC_IMAGE_URL + item.image} alt={item.name} width={300} height={450} className="w-[200px] rounded-md" />
                    <div>
                        <h4 className="text-2xl font-semibold text-gray-600">{item.name} ({item.en_name})</h4>
                        <p className="mt-2">
                            <span className="text-gray-600 font-medium">Category:</span>{" "}
                            <span className="text-gray-600">{item.category?.name}</span>
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Writer:</span>{" "}
                            {item.writer ? <span className="text-gray-600">{item.writer?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Publisher:</span>{" "}
                            {item.publisher ? <span className="text-gray-600">{item.publisher?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Teacher:</span>{" "}
                            {item.teacher ? <span className="text-gray-600">{item.teacher?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Institution:</span>{" "}
                            {item.institution ? <span className="text-gray-600">{item.institution?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Research paper:</span>{" "}
                            {item.paper ? <span className="text-gray-600">{item.paper?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <Link href={process.env.NEXT_PUBLIC_IMAGE_URL as string + item.file as string} download className="bg-green-600 py-2 px-4 rounded mt-6 block w-max text-white" target="_blank">
                            Download PDF
                        </Link>
                    </div>
                </div>
                <div className="mt-5">
                    <span className="text-gray-600 font-medium">Keywords:</span>{" "}
                    {item.keywords ? <span className="text-gray-600">{item.keywords.join(", ")}</span> : <span className="font-light text-red-500">Not added</span>}
                </div>
                <hr className="my-5" />
                <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                    <p className="mt-1.5">
                        <span className="text-gray-600 font-semibold">Page number:</span>{" "}
                        {item.pages ? <span className="text-gray-400">{item.pages}</span> : <span className="font-light text-red-500">Not added</span>}
                    </p>
                    <p className="mt-1.5">
                        <span className="text-gray-600 font-semibold">Edition:</span>{" "}
                        {item.edition ? <span className="text-gray-400">{item.edition}</span> : <span className="font-light text-red-500">Not added</span>}
                    </p>
                    <p className="mt-1.5">
                        <span className="text-gray-600 font-semibold">ISBN:</span>{" "}
                        {item.isbn ? <span className="text-gray-400">{item.isbn}</span> : <span className="font-light text-red-500">Not added</span>}
                    </p>
                    <p className="mt-1.5">
                        <span className="text-gray-600 font-semibold">Flash:</span>{" "}
                        {item.flash ? <span className="text-gray-400">{item.flash.title}</span> : <span className="font-light text-red-500">Not added</span>}
                    </p>
                    <p className="mt-1.5">
                        <span className="text-gray-600 font-semibold">Price:</span>{" "}
                        {item.price ? <span className="text-gray-400">{item.price}</span> : <span className="font-light text-red-500">Not added</span>}
                    </p>
                    <p className="mt-1.5">
                        <span className="text-gray-600 font-semibold">Discount:</span>{" "}
                        {item.discount ? <span className="text-gray-400">{item.discount}</span> : <span className="font-light text-red-500">Not added</span>}
                    </p>
                    <p className="mt-1.5">
                        <span className="text-gray-600 font-semibold">Discount Unit:</span>{" "}
                        {item.discount_unit ? <span className="text-gray-400">{item.discount_unit}</span> : <span className="font-light text-red-500">Not added</span>}
                    </p>
                    <p className="mt-1.5">
                        <span className="text-gray-600 font-semibold">Visibility:</span>{" "}
                        <span className="text-gray-400">{item.visibility ? "Visible" : "Hide"}</span>
                    </p>
                </div>
                <hr className="my-8" />
                <p className="mt-1.5">
                    <span className="text-gray-600 font-semibold">Seller:</span>{" "}
                    <span className="text-gray-400">{item.seller?.shop_name}</span>
                </p>
                <p className="mt-1.5">
                    <span className="text-gray-600 font-semibold">Seller Contact Number:</span>{" "}
                    <span className="text-gray-400">{item.seller?.contact_number}</span>
                </p>
                <hr className="my-8" />
                <h4 className="text-base font-semibold text-gray-600">Description</h4>
                <div className="isolate-container">
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                <h4 className="text-base font-semibold text-gray-600 mt-1">Specifications</h4>
                {item.specification?.filter(a => a.key)?.map((spec, i) => (
                    <p className="mt-1.5" key={i}>
                        <span className="text-gray-600 font-semibold">{spec.key}:</span>{" "}
                        {spec.value ? <span className="text-gray-400">{spec.value}</span> : <span className="font-light text-red-500">Not added</span>}
                    </p>
                ))}
                <div className="mt-8">
                    <button className="py-2.5 px-5 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading} onClick={onSubmit}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Approved this product</span>
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