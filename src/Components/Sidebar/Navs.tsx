"use client"
import { useState, useMemo, cloneElement } from "react";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import { deleteCookie } from "cookies-next";

//Data
import { AdminNavs, ModeratorNavs } from "./data";

//Urql
import { useQuery } from "@urql/next";
import { GET_PROFILE } from "@/Urql/query/account/account";

//Interface
interface NavTypes {
    id: string;
    name: string;
    icon: JSX.Element;
    path: string;
}


const Navs = () => {
    //State
    const [navs, setNavs] = useState<NavTypes[]>([]);

    //Urql
    const [{ data }] = useQuery({ query: GET_PROFILE });

    const LogoutHandler = () => {
        deleteCookie("NAOWSbL1sKQ30aq9", { sameSite: "lax", path: "/" })
        window.location.reload();
    }

    //Hook
    useMemo(() => {
        if (data?.getProfile.role === "admin") {
            setNavs(AdminNavs)
        } else if (data?.getProfile.role === "moderator") {
            setNavs(ModeratorNavs)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.getProfile])

    return (
        <div className="px-2 py-5">
            <ul>
                {navs.map((item, i) => (
                    <li key={i} className="my-1">
                        <Link href={item.path} className={`flex items-center gap-3 text-gray-600 py-2 px-3 rounded group hover:bg-main/10 hover:text-text`}>

                            {cloneElement(item.icon, {
                                className: "text-base group-hover:text-main"
                            })}
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    </li>
                ))}
                <li>
                    <button onClick={LogoutHandler} className={`flex items-center gap-3 text-gray-600 py-2 px-3 rounded group hover:bg-main/10 hover:text-text w-full`}>
                        <IoLogOutOutline className={`text-base -mb-[3px] group-hover:text-main`} />
                        <span className="text-sm">Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navs;