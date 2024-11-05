import Add from "@/Components/Admin/Add";
import Lists from "@/Components/Admin/List";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { GET_BANNERS } from "@/Apollo/query/banners/banner";

const Page = async () => {
    return (
        <PreloadQuery query={GET_BANNERS}>
            <Add />
            <Lists />
        </PreloadQuery>
    );
};

export default Page;