import Lists from "@/Components/Requests/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { REQUEST_LIST } from "@/Apollo/query/request/request";

const Page = async () => {
    return (
        <PreloadQuery query={REQUEST_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;