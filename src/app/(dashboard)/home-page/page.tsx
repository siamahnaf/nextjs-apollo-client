import Lists from "@/Components/Section/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { SECTION_LIST } from "@/Apollo/query/section/section";

const Page = () => {
    return (
        <PreloadQuery query={SECTION_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;