import Lists from "@/Components/Product/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { PRODUCT_LIST } from "@/Apollo/query/products/product";

const Page = async () => {
    return (
        <PreloadQuery query={PRODUCT_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;