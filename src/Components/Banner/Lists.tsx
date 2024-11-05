"use client"
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

//UI
import { ConfirmDialog } from "../UI";

//Components
import Edit from "./Edit";

//Apollo
import { useSuspenseQuery, useMutation } from "@apollo/client";
import { GET_BANNERS, DELETE_BANNER } from "@/Apollo/query/banners/banner";

const Lists = () => {
    //State
    const [confirm, setConfirm] = useState<number | null>(null);
    const [edit, setEdit] = useState<number | null>(null);

    //Apollo
    const { data } = useSuspenseQuery(GET_BANNERS, { errorPolicy: "all" });
    const [mutate, { loading }] = useMutation(DELETE_BANNER, {
        onCompleted: (data) => {
            toast.success(data.deleteBanner.message);
            setConfirm(null);
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getBanners"],
        awaitRefetchQueries: true
    });

    //On Delete
    const onDelete = (id: number | null) => {
        if (id) {
            mutate({ variables: { deleteBannerId: id } });
        }
    }


    return (
        <div className="mt-8">
            <h4 className="font-bold text-lg mb-5">Banners</h4>
            <div className="grid grid-cols-3 gap-5">
                {data?.getBanners.map((item, i) => (
                    <div className="border border-solid border-gray-200 rounded-md overflow-hidden" key={i}>
                        <Image src={process.env.NEXT_PUBLIC_IMAGE_URL + item.url} alt={item.name} width={325} height={118} className="w-full" />
                        <div className="flex justify-center py-2 gap-3">
                            <button className="bg-transparent p-1.5 rounded-md hover:bg-main hover:text-white" onClick={() => setEdit(item.id)}>
                                <MdModeEditOutline />
                            </button>
                            <button className="bg-transparent p-1.5 rounded-md hover:bg-main hover:text-white" onClick={() => setConfirm(item.id)}>
                                <RiDeleteBin6Line />
                            </button>
                            <ConfirmDialog
                                id={confirm}
                                onConfirm={(id) => onDelete(id)}
                                open={confirm === item.id}
                                onClose={() => setConfirm(null)}
                                isFetching={loading}
                            />
                            <Edit
                                open={edit === item.id}
                                onClose={() => setEdit(null)}
                                banners={item}
                            />
                        </div>
                    </div>
                ))}
                {data?.getBanners.length === 0 &&
                    <p className="text-base opacity-50">No banner created yet</p>
                }
            </div>
        </div>
    );
};

export default Lists;