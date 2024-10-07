//Components
import Edit from "@/Components/Categories/Edit";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { GET_CATEGORY } from "@/Apollo/query/category/category";

//Interface
interface Props {
    params: {
        slug: string;
    }
}

const Page = async ({ params }: Props) => {
    return (
        <PreloadQuery query={GET_CATEGORY} variables={{ slug: params.slug }}>
            <Edit slug={params.slug} />
        </PreloadQuery>
    );
};

export default Page;