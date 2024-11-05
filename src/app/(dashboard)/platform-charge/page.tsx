import Card from "@/Components/Platform/Card";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { GET_PLATFORM } from "@/Apollo/query/platform/platform";

const Page = async () => {
    return (
        <PreloadQuery query={GET_PLATFORM}>
            <Card />
        </PreloadQuery>
    );
};

export default Page;