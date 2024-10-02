import { ReactNode } from "react";

//Interface
interface Props {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={`2xl:container 3xl:mx-auto px-12 py-3 ${className}`}>
            {children}
        </div>
    );
};

export default Container;