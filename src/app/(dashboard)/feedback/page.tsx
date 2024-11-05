import Lists from "@/Components/Feedback/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { FEEDBACK_LIST } from "@/Apollo/query/feedback/category";

const Page = () => {
    return (
        <PreloadQuery query={FEEDBACK_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;