"use client"
import { useState, Fragment } from "react";
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
import { SECTION_LIST, DELETE_SECTION } from "@/Apollo/query/section/section";

const Lists = () => {
    //Name
    const name = "Section"

    //State
    const [pagination, setPagination] = useState<SearchInput>(defaultSearch);
    const [confirm, setConfirm] = useState<number | null>(null);

    //Apollo
    const { data } = useSuspenseQuery(SECTION_LIST, { variables: { searchDto: pagination }, errorPolicy: "all" });
    const [mutate, { loading }] = useMutation(DELETE_SECTION, {
        onCompleted: (data) => {
            toast.success(data.deleteSection.message);
            setConfirm(null);
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getSections"],
        awaitRefetchQueries: true
    });

    //Const Table Head
    const TABLE_HEAD = [
        { name: "ID", id: "id" },
        { name: "Title", id: "title" },
        { name: "Position", id: "position" },
        { name: "Icon", id: "icon" },
        { name: "Type", id: "type" },
        { name: "Products", id: "products" },
        { name: "Action", id: "action" }
    ];


    //On Delete
    const onDelete = (id: number | null) => {
        if (id) {
            mutate({ variables: { deleteSectionId: id } });
        }
    }

    return (
        <div>
            <TableHeader
                name={name}
                placeholder={`${name.toLowerCase()} name`}
                path="/home-page/add-new"
                data={data?.getSections.results?.map(item => ({ id: item.id, title: item.title, type: item.type })) as any[]}
                headers={["ID", "Title", "Type"]}
                onChange={(e) => setPagination((prev) => ({ ...prev, search: e }))}
            />
            <Table
                head={TABLE_HEAD}
                sortingField={["title", "icon", "type", "position"]}
                data={data?.getSections.results || []}
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
                                            {item.position}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            <div className="text-xl" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px] capitalize">
                                            {item.type}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.products?.length}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex gap-3 justify-center items-center">
                                            <Tippy content="Edit" className="bg-gray-600 text-white py-[3px] px-2.5 rounded-md text-sm">
                                                <Link href={`/home-page/${item.id}`}>
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
                meta={data?.getSections.meta}
                onChange={(e) => setPagination((prev) => ({ ...prev, page: e }))}
                onLimitChange={(e) => setPagination((prev) => ({ ...prev, limit: e }))}
            />
        </div>
    );
};

export default Lists;