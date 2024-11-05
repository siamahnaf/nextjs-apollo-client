import Lists from "@/Components/Withdraw/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { GET_WITHDRAW } from "@/Apollo/query/withdraw/withdraw";

const Page = async () => {
    return (
        <PreloadQuery query={GET_WITHDRAW} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;