"use client"
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import InfiniteScroll from "react-infinite-scroll-component";
import { PiShieldWarningBold } from "react-icons/pi";

//UI
import { Loading } from "@/Components/UI";

//Apollo
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/Apollo/query/products/product";

//Interface
interface Props {
    error?: boolean;
    message?: string;
    onChange: (e: string[]) => void;
    value: string[];
    category?: string;
    writer?: string;
    publisher?: string;
    teacher?: string;
    institution?: string;
    research_paper?: string;
}

const Products = ({ error = false, message = "", value = [], onChange, category, writer, publisher, teacher, institution, research_paper }: Props) => {
    const defaultSearch = {
        search: "",
        category: category,
        writer: writer,
        publisher: publisher,
        teacher: teacher,
        institution: institution,
        paper: research_paper,
        limit: 25,
        page: 1
    }

    //Apollo
    const { data, loading, fetchMore, refetch, variables } = useQuery(GET_PRODUCTS, { variables: { productSearchDto: defaultSearch } });

    //Handler
    const onSelect = (id: string) => {
        const exists = value.find(a => a === id);
        if (exists) {
            const filters = value.filter(a => a !== id);
            onChange(filters);
        } else {
            onChange([...value, id])
        }
    };

    //Handler
    const onFetchMore = () => {
        fetchMore({
            variables: { searchDto: { ...variables?.productSearchDto, page: Number(variables?.productSearchDto.page) + 1 } },
            updateQuery: (previousData, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousData;

                const updatedFeed = [
                    ...(previousData.getProducts.results || []),
                    ...(fetchMoreResult.getProducts.results || []),
                ];

                return {
                    ...previousData,
                    getCategories: {
                        ...previousData.getProducts,
                        results: updatedFeed,
                        meta: fetchMoreResult.getProducts.meta,
                    },
                };
            },
        })
    }

    //Handler
    const onRefetch = (value: string) => {
        refetch({ productSearchDto: { ...variables?.productSearchDto, search: value } });
    }

    return (
        <div>
            <div className="border border-solid border-gray-300 mb-2 rounded-md flex items-center px-4 py-3">
                <h4 className="text-lg font-semibold text-gray-600 flex-1">Select Product from list</h4>
                <p>
                    <span className="text-lg font-semibold text-gray-600">{value.length}</span>{" "}
                    <span className="text-xs font-light text-gray-500">Selected</span>
                </p>
            </div>
            <div className={`border border-solid border-gray-300 rounded-md z-40 bg-white shadow-3xl`}>
                <div className="mx-4 my-3 relative">
                    <IoSearchOutline className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" />
                    <input
                        placeholder="Search"
                        className="border border-solid border-gray-300 w-full pl-8 pr-8 py-1.5 rounded focus:outline-none text-gray-500"
                        onChange={(e) => onRefetch(e.target.value)}
                    />
                    {loading &&
                        <div className="absolute top-1/2 -translate-y-1/2 right-3">
                            <Loading size={20} />
                        </div>
                    }
                </div>
                <div id="product_scroll_target" className="max-h-[450px] overflow-auto">
                    {data &&
                        <InfiniteScroll
                            dataLength={data?.getProducts.results.length}
                            next={() => onFetchMore()}
                            hasMore={!variables?.productSearchDto.search ? Number(data?.getProducts.meta?.currentPage) < Number(data?.getProducts.meta?.totalPages) : false}
                            loader={<span></span>}
                            scrollableTarget="product_scroll_target"
                        >
                            <ul>
                                {data.getProducts.results.map((item, i) => (
                                    <li
                                        key={i}
                                        className={`flex gap-3 px-4 py-1.5 items-center border-t border-solid border-gray-300 cursor-pointer select-none ${value.includes(item.id?.toString()) ? "bg-main" : ""}`}
                                        onClick={() => onSelect(item.id?.toString())}
                                    >
                                        <Image src={process.env.NEXT_PUBLIC_IMAGE_URL + item.image} alt={item.name} width={100} height={100} className="w-[30px] rounded-md" />
                                        <div>
                                            <h4 className={`text-base font-medium ${value.includes(item.id?.toString()) ? "text-white" : "text-gray-600"}`}>{item.name}</h4>
                                            <p className={`text-sm font-light ${value.includes(item.id?.toString()) ? "text-white" : "text-gray-600"}`}>{item.seller?.shop_name}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </InfiniteScroll>
                    }
                </div>
                {data?.getProducts.results.length === 0 && !loading && (
                    <p className="py-2 px-3 text-sm text-gray-500">No product found!</p>
                )}
            </div>
            <p className={`text-sm text-red-600 mt-1 flex items-center gap-1 transition-all ${error ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>
                <PiShieldWarningBold className="text-base -mt-[2px]" />
                <span>{message}</span>
            </p>
        </div>
    );
};

export default Products;