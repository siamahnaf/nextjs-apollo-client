//Components
import Edit from "@/Components/Teacher/Edit";

//Interface
interface Props {
    params: {
        slug: string;
    }
}

const Page = async ({ params }: Props) => {
    return (
        <Edit slug={params.slug} />
    );
};

export default Page;