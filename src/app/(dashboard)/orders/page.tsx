import Lists from "@/Components/Orders/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { GET_ORDERS } from "@/Apollo/query/order/order";

const Page = async () => {
    return (
        <PreloadQuery query={GET_ORDERS} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;