import Lists from "@/Components/Categories/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { CATEGORY_LIST } from "@/Apollo/query/category/category";

const Page = async () => {
    return (
        <PreloadQuery query={CATEGORY_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;