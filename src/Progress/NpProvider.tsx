"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NpProvider = ({ children }: any) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#1dbf73"
                options={{ showSpinner: false }}
                delay={250}
                shallowRouting
            />
        </>
    );
};

export default NpProvider;