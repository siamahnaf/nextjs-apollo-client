import { cacheExchange, createClient, fetchExchange, errorExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { cookies } from "next/headers";

const makeClient = () => {
    //Cookie
    const cookie = cookies().get("NAOWSbL1sKQ30aq9");

    return createClient({
        url: process.env.NEXT_PUBLIC_API_URL as string,
        exchanges: [errorExchange({
            onError: (error) => {
                error.message = error.message.replace(/^\[.*\]\s*/, "");
            }
        }), cacheExchange, fetchExchange],
        fetchOptions: {
            cache: "no-store",
            headers: {
                authorization: cookie ? `Bearer ${cookie.value}` : ""
            }
        }
    });
}

export const { getClient } = registerUrql(makeClient);