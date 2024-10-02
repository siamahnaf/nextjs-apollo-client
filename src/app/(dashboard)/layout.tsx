//Components
import Sidebar from "@/Layout/Sidebar";

//UI
import Container from "@/Components/UI/Container";

const Layout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Container>
            <div className="flex gap-5 my-2">
                <div className="w-[300px]">
                    <Sidebar />
                </div>
                <div className="flex-1 py-2">

                    {children}
                </div>
            </div>
        </Container>
    );
};

export default Layout;