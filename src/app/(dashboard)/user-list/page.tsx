import Lists from "@/Components/Users/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { USER_LIST } from "@/Apollo/query/users/user";

const Page = async () => {
    return (
        <PreloadQuery query={USER_LIST} variables={{ searchInput: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;