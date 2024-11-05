//Components
import Edit from "@/Components/Section/Edit";

//Interface
interface Props {
    params: {
        slug: string;
    }
}

const Page = async ({ params }: Props) => {
    return (
        <Edit id={params.slug} />
    );
};

export default Page;