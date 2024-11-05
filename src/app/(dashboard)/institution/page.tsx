import Lists from "@/Components/Institution/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { INSTITUTION_LIST } from "@/Apollo/query/institution/institution";

const Page = async () => {
    return (
        <PreloadQuery query={INSTITUTION_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;