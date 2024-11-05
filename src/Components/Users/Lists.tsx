"use client"
import { useState, Fragment } from "react";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import toast from "react-hot-toast";
import { FaBan } from "react-icons/fa";

//Components
import { TableHeader, Table, TablePagination, ConfirmDialog } from "@/Components/UI";

//Default Value
import { defaultSearch, SearchInput } from "@/Utils/search.default";

//Apollo
import { useMutation, useSuspenseQuery } from "@apollo/client";
import { USER_LIST, BANED_UNBANNED_USER } from "@/Apollo/query/users/user";

const Lists = () => {
    //Name
    const name = "Users"

    //State
    const [pagination, setPagination] = useState<SearchInput>(defaultSearch);
    const [confirm, setConfirm] = useState<number | null>(null);

    //Apollo
    const { data } = useSuspenseQuery(USER_LIST, { variables: { searchInput: pagination }, errorPolicy: "all" });
    const [mutate, { loading }] = useMutation(BANED_UNBANNED_USER, {
        onCompleted: (data) => {
            toast.success(data.banOrUnbannedUser.message);
            setConfirm(null);
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getUsers"],
        awaitRefetchQueries: true
    });

    //Const Table Head
    const TABLE_HEAD = [
        { name: "ID", id: "id" },
        { name: "Name", id: "name" },
        { name: "Phone/Email", id: "phone" },
        { name: "Provider", id: "provider" },
        { name: "Avatar", id: "avatar" },
        { name: "Status", id: "is_banned" },
        { name: "Action", id: "action" }
    ];


    //On Delete
    const onDelete = (id: number | null) => {
        if (id) {
            mutate({ variables: { banOrUnbannedUserId: id } });
        }
    }

    return (
        <div>
            <TableHeader
                name={name}
                placeholder={`${name.toLowerCase()} name`}
                path=""
                data={data?.getUsers.results?.map(item => ({ id: item.id, name: item.name })) as any[]}
                headers={["ID", "Name"]}
                onChange={(e) => setPagination((prev) => ({ ...prev, search: e }))}
            />
            <Table
                head={TABLE_HEAD}
                sortingField={["name", "phone", "avatar", "is_banned"]}
                data={data?.getUsers.results || []}
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
                                            {item.phone || item.email}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.provider?.name}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        {item.avatar &&
                                            <Image src={process.env.NEXT_PUBLIC_IMAGE_URL + item.avatar} alt={item.name || ""} width={100} height={100} className="w-[35px] rounded-full" />
                                        }
                                    </td>
                                    <td className={classes}>
                                        <p className={`font-semibold text-[15px] ${item.is_banned ? "text-red-600" : "text-green-600"}`}>
                                            {item.is_banned ? "Banned" : "Active"}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex gap-3 justify-center items-center">
                                            <Tippy content={item.is_banned ? "Unbanned" : "Banned"} className="bg-gray-600 text-white py-[3px] px-2.5 rounded-md text-sm">
                                                <button onClick={() => setConfirm(Number(item.id))}>
                                                    <FaBan className="text-red-600" />
                                                </button>
                                            </Tippy>
                                            <ConfirmDialog
                                                id={confirm}
                                                onConfirm={(id) => onDelete(id)}
                                                open={confirm === Number(item.id)}
                                                onClose={() => setConfirm(null)}
                                                isFetching={loading}
                                                title={item.is_banned ? "Banned" : "Unbanned"}
                                                subtitle="You can change this later"
                                                buttonText={item.is_banned ? "Un-ban" : "Ban"}
                                                icon={<FaBan className="text-7xl mx-auto text-red-600" />}
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
                meta={data?.getUsers.meta}
                onChange={(e) => setPagination((prev) => ({ ...prev, page: e }))}
                onLimitChange={(e) => setPagination((prev) => ({ ...prev, limit: e }))}
            />
        </div>
    );
};

export default Lists;