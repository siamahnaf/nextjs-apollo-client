import Lists from "@/Components/Publisher/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { PUBLISHER_LIST } from "@/Apollo/query/publisher/publisher";

const Page = async () => {
    return (
        <PreloadQuery query={PUBLISHER_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;