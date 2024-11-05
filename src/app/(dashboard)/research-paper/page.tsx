import Lists from "@/Components/Paper/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { PAPER_LIST } from "@/Apollo/query/paper/paper";

const Page = async () => {
    return (
        <PreloadQuery query={PAPER_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;