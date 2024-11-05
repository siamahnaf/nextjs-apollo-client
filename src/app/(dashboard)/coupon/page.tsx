import Lists from "@/Components/Coupon/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { COUPON_LIST } from "@/Apollo/query/coupon/coupon";

const Page = async () => {
    return (
        <PreloadQuery query={COUPON_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;