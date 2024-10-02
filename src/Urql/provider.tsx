"use client"
import { useMemo, ReactNode } from "react";
import { UrqlProvider, ssrExchange, cacheExchange, fetchExchange, createClient, errorExchange } from "@urql/next";
import { getCookie } from "cookies-next";

//Interface
interface Props {
    children: ReactNode;
    cookie: string;
}

const Provider = ({ children, cookie }: Props) => {
    //Cookie
    const token = getCookie("NAOWSbL1sKQ30aq9", { path: "/" });

    //Client
    const [client, ssr] = useMemo(() => {
        const ssr = ssrExchange({
            isClient: typeof window !== "undefined"
        });
        const client = createClient({
            url: process.env.NEXT_PUBLIC_API_URL as string,
            exchanges: [errorExchange({
                onError: (error) => {
                    error.message = error.message.replace(/^\[.*\]\s*/, "");
                }
            }), cacheExchange, ssr, fetchExchange],
            suspense: true,
            fetchOptions: {
                cache: "no-store",
                headers: {
                    authorization: `Bearer ${cookie ?? token}`
                }
            }
        })
        return [client, ssr]
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <UrqlProvider client={client} ssr={ssr}>
            {children}
        </UrqlProvider>
    );
};

export default Provider;