import Lists from "@/Components/Writer/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { WRITER_LIST } from "@/Apollo/query/writer/writer";

const Page = async () => {
    return (
        <PreloadQuery query={WRITER_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;