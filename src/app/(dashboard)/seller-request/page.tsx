import Lists from "@/Components/Seller/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { SELLER_LIST } from "@/Apollo/query/seller/seller";

const Page = async () => {
    return (
        <PreloadQuery query={SELLER_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;