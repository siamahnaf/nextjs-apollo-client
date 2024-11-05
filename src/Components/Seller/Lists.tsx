"use client"
import { useState, Fragment } from "react";
import Tippy from "@tippyjs/react";
import { RiDeleteBinLine, RiEye2Line } from "react-icons/ri";
import toast from "react-hot-toast";

//Components
import { TableHeader, Table, TablePagination, ConfirmDialog } from "@/Components/UI";

//Components
import Details from "./Details";

//Default Value
import { defaultSearch, SearchInput } from "@/Utils/search.default";

//Apollo
import { useMutation, useSuspenseQuery } from "@apollo/client";
import { SELLER_LIST, DELETE_SELLER } from "@/Apollo/query/seller/seller";

const Lists = () => {
    //Name
    const name = "Sellers"

    //State
    const [pagination, setPagination] = useState<SearchInput>(defaultSearch);
    const [confirm, setConfirm] = useState<number | null>(null);
    const [detail, setDetail] = useState<number | null>(null);

    //Apollo
    const { data } = useSuspenseQuery(SELLER_LIST, { variables: { searchDto: pagination }, errorPolicy: "all" });
    const [mutate, { loading }] = useMutation(DELETE_SELLER, {
        onCompleted: (data) => {
            toast.success(data.deleteSeller.message);
            setConfirm(null);
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getSellers"],
        awaitRefetchQueries: true
    });

    //Const Table Head
    const TABLE_HEAD = [
        { name: "ID", id: "id" },
        { name: "Type", id: "type" },
        { name: "Name", id: "owner_name" },
        { name: "Number", id: "contact_number" },
        { name: "Shop Name", id: "shop_name" },
        { name: "Email", id: "email" },
        { name: "Status", id: "is_verified" },
        { name: "Action", id: "action" }
    ];


    //On Delete
    const onDelete = (id: number | null) => {
        if (id) {
            mutate({ variables: { deleteSellerId: id } });
        }
    }

    return (
        <div>
            <TableHeader
                name={name}
                placeholder={`${name.toLowerCase()} name`}
                path=""
                data={data?.getSellers.results?.map(item => ({ id: item.id, type: item.type, name: item.owner_name, email: item.email, number: item.contact_number })) as any[]}
                headers={["ID", "Type", "Name", "Email", "Number"]}
                onChange={(e) => setPagination((prev) => ({ ...prev, search: e }))}
            />
            <Table
                head={TABLE_HEAD}
                sortingField={["type", "owner_name", "contact_number", "shop_name", "email", "organization_name"]}
                data={data?.getSellers.results || []}
                search={pagination.search}
                emptyMessage={`${name} not created yet!`}
            >
                {({
                    tableData,
                }) => (
                    <Fragment>
                        {tableData.map((item, i) => {
                            const classes = i === tableData.length - 1 ? "px-3 py-2" : "px-3 py-2 border-b border-black border-opacity-5";
                            return (
                                <tr key={i}>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.id}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px] capitalize">
                                            {item.type}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.owner_name}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.contact_number}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.shop_name}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.email}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className={`font-semibold text-[15px] ${item.is_verified ? (item.need_review ? "text-purple-700" : "text-green-600") : "text-orange-600"}`}>
                                            {item.is_verified ? (item.need_review ? "Need Review" : "Active") : "Pending"}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex gap-3 justify-center items-center">
                                            <Tippy content="View Details" className="bg-gray-600 text-white py-[3px] px-2.5 rounded-md text-sm">
                                                <button onClick={() => setDetail(item.id)}>
                                                    <RiEye2Line />
                                                </button>
                                            </Tippy>
                                            <Tippy content="Delete" className="bg-gray-600 text-white py-[3px] px-2.5 rounded-md text-sm">
                                                <button onClick={() => setConfirm(item.id)}>
                                                    <RiDeleteBinLine className="text-red-600" />
                                                </button>
                                            </Tippy>
                                            <ConfirmDialog
                                                id={confirm}
                                                onConfirm={(id) => onDelete(id)}
                                                open={confirm === item.id}
                                                onClose={() => setConfirm(null)}
                                                isFetching={loading}
                                            />
                                            <Details
                                                open={detail === item.id}
                                                onClose={() => setDetail(null)}
                                                item={item}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </Fragment>
                )}
            </Table>
            <TablePagination
                meta={data?.getSellers.meta}
                onChange={(e) => setPagination((prev) => ({ ...prev, page: e }))}
                onLimitChange={(e) => setPagination((prev) => ({ ...prev, limit: e }))}
            />
        </div>
    );
};

export default Lists;