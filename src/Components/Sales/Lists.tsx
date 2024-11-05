"use client"
import { useState, Fragment } from "react";
import Tippy from "@tippyjs/react";
import Link from "next/link"
import { RiDeleteBinLine, RiFileEditFill } from "react-icons/ri";
import toast from "react-hot-toast";
import moment from "moment";

//Components
import { TableHeader, Table, TablePagination, ConfirmDialog } from "@/Components/UI";

//Default Value
import { defaultSearch, SearchInput } from "@/Utils/search.default";

//Apollo
import { useMutation, useSuspenseQuery } from "@apollo/client";
import { SALES_LIST, DELETE_SALES } from "@/Apollo/query/sales/sales";

const Lists = () => {
    //Name
    const name = "Sales"

    //State
    const [pagination, setPagination] = useState<SearchInput>(defaultSearch);
    const [confirm, setConfirm] = useState<number | null>(null);

    //Apollo
    const { data } = useSuspenseQuery(SALES_LIST, { variables: { searchDto: pagination }, errorPolicy: "all" });
    const [mutate, { loading }] = useMutation(DELETE_SALES, {
        onCompleted: (data) => {
            toast.success(data.deleteSale.message);
            setConfirm(null);
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getSales"],
        awaitRefetchQueries: true
    });

    //Const Table Head
    const TABLE_HEAD = [
        { name: "ID", id: "id" },
        { name: "Title", id: "title" },
        { name: "Discount", id: "discount" },
        { name: "Start", id: "start_on" },
        { name: "Expire", id: "expires_on" },
        { name: "Action", id: "action" }
    ];


    //On Delete
    const onDelete = (id: number | null) => {
        if (id) {
            mutate({ variables: { deleteSaleId: id } });
        }
    }

    return (
        <div>
            <TableHeader
                name={name}
                placeholder={`${name.toLowerCase()} name`}
                path="/sales/add-new"
                data={data?.getSales.results?.map(item => ({ id: item.id, title: item.title, discount: item.discount, discount_unit: item.discount_unit })) as any[]}
                headers={["ID", "Title", "Discount", "Discount Unit"]}
                onChange={(e) => setPagination((prev) => ({ ...prev, search: e }))}
            />
            <Table
                head={TABLE_HEAD}
                sortingField={["title", "discount", "start_on", "expires_on"]}
                data={data?.getSales.results || []}
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
                                        <p className="font-semibold text-[15px]">
                                            {item.title}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.discount_unit === "flat" && "৳"}{item.discount}{item.discount_unit === "percentage" && "%"}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {moment(item.start_on).format("DD MMM YYYY, hh:mm A")}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {moment(item.expires_on).format("DD MMM YYYY, hh:mm A")}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex gap-3 justify-center items-center">
                                            <Tippy content="Edit" className="bg-gray-600 text-white py-[3px] px-2.5 rounded-md text-sm">
                                                <Link href={`/sales/${item.slug}`}>
                                                    <RiFileEditFill />
                                                </Link>
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
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </Fragment>
                )}
            </Table>
            <TablePagination
                meta={data?.getSales.meta}
                onChange={(e) => setPagination((prev) => ({ ...prev, page: e }))}
                onLimitChange={(e) => setPagination((prev) => ({ ...prev, limit: e }))}
            />
        </div>
    );
};

export default Lists;