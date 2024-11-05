import Update from "@/Components/Profile/Update";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { GET_PROFILE } from "@/Apollo/query/account/account";

const Page = async () => {
    return (
        <PreloadQuery query={GET_PROFILE}>
            <Update />
        </PreloadQuery>
    );
};

export default Page;