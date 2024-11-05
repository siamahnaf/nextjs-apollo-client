"use client"
import { useState, Fragment } from "react";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import Link from "next/link"
import { RiDeleteBinLine, RiFileEditFill } from "react-icons/ri";
import toast from "react-hot-toast";

//Components
import { TableHeader, Table, TablePagination, ConfirmDialog } from "@/Components/UI";

//Default Value
import { defaultSearch, SearchInput } from "@/Utils/search.default";

//Apollo
import { useMutation, useSuspenseQuery } from "@apollo/client";
import { CATEGORY_LIST, DELETE_CATEGORY } from "@/Apollo/query/category/category";

const Lists = () => {
    //Name
    const name = "Category"

    //State
    const [pagination, setPagination] = useState<SearchInput>(defaultSearch);
    const [confirm, setConfirm] = useState<number | null>(null);

    //Apollo
    const { data } = useSuspenseQuery(CATEGORY_LIST, { variables: { searchDto: pagination }, errorPolicy: "all" });
    const [mutate, { loading }] = useMutation(DELETE_CATEGORY, {
        onCompleted: (data) => {
            toast.success(data.deleteCategory.message);
            setConfirm(null);
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getCategories"],
        awaitRefetchQueries: true
    });

    //Const Table Head
    const TABLE_HEAD = [
        { name: "ID", id: "id" },
        { name: "Name", id: "name" },
        { name: "Position", id: "position" },
        { name: "Header", id: "is_top" },
        { name: "Icon", id: "icon" },
        { name: "Action", id: "action" }
    ];


    //On Delete
    const onDelete = (id: number | null) => {
        if (id) {
            mutate({ variables: { deleteCategoryId: id } });
        }
    }

    return (
        <div>
            <TableHeader
                name={name}
                placeholder={`${name.toLowerCase()} name`}
                path="/categories/add-new"
                data={data?.getCategories.results?.map(item => ({ id: item.id, name: item.name, position: item.position, is_top: item.is_top })) as any[]}
                headers={["ID", "Name", "Position", "Is Top"]}
                onChange={(e) => setPagination((prev) => ({ ...prev, search: e }))}
            />
            <Table
                head={TABLE_HEAD}
                sortingField={["name", "position", "is_top"]}
                data={data?.getCategories.results || []}
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
                                            {item.name}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.position}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.is_top ? "Top Header" : "Bottom Header"}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        {item.icon &&
                                            <Image src={process.env.NEXT_PUBLIC_IMAGE_URL + item.icon} alt={item.name} width={100} height={100} className="w-[35px] rounded-md" />
                                        }
                                    </td>
                                    <td className={classes}>
                                        <div className="flex gap-3 justify-center items-center">
                                            <Tippy content="Edit" className="bg-gray-600 text-white py-[3px] px-2.5 rounded-md text-sm">
                                                <Link href={`/categories/${item.slug}`}>
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
                meta={data?.getCategories.meta}
                onChange={(e) => setPagination((prev) => ({ ...prev, page: e }))}
                onLimitChange={(e) => setPagination((prev) => ({ ...prev, limit: e }))}
            />
        </div>
    );
};

export default Lists;