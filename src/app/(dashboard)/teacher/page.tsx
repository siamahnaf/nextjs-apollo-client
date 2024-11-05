import Lists from "@/Components/Teacher/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { TEACHER_LIST } from "@/Apollo/query/teacher/teacher";

const Page = async () => {
    return (
        <PreloadQuery query={TEACHER_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;