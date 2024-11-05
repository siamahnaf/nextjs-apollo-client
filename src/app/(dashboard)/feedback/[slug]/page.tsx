//Components
import Edit from "@/Components/Feedback/Edit";

//Interface
interface Props {
    params: {
        slug: string;
    }
}

const Page = async ({ params }: Props) => {
    return (
        <Edit id={Number(params.slug)} />
    );
};

export default Page;