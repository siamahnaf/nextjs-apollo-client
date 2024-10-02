"use client"
import Image from "next/image";

//Urql
import { useQuery } from "@urql/next";
import { GET_PROFILE } from "@/Urql/query/account/account";

const Profile = () => {
    //Urql
    const [{ data }] = useQuery({ query: GET_PROFILE });

    return (
        <div className="bg-main text-white text-center py-8 px-2">
            <div>
                {data?.getProfile?.avatar ? (
                    <Image src={(process.env.NEXT_PUBLIC_IMAGE_URL + data.getProfile.avatar)} alt={data.getProfile?.name || "Profile"} width={60} height={60} className="w-[60px] h-[60px] rounded-full mx-auto" />
                ) : (
                    <Image src="/avatar.png" alt={data?.getProfile?.name || "profile"} width={60} height={60} className="w-[60px] h-[60px] rounded-full mx-auto" />
                )}
            </div>
            <h6 className="font-bold text-lg mt-4">{data?.getProfile.name}</h6>
            <p className="text-base">+88{data?.getProfile.phone}</p>
            <p className="text-sm opacity-60 capitalize">{data?.getProfile.role}</p>
        </div>
    );
};

export default Profile;