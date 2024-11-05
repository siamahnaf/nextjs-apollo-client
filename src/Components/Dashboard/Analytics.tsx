//UI
import { Wave } from "../UI";


//Apollo
import { query } from "@/Apollo/client";
import { GET_ANALYTICS } from "@/Apollo/query/analytics/analytic";

const Analytics = async () => {
    const { data } = await query({ query: GET_ANALYTICS, errorPolicy: "all" });

    return (
        <div className="grid grid-cols-3 gap-7">
            <div className="bg-gradientOne rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">৳{data.getAdminAnalytics.totalIncome?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h6>
                    <p className="text-base opacity-50">Total Income</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientTwo rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">৳{data.getAdminAnalytics.totalPaid?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h6>
                    <p className="text-base opacity-50">Total Paid</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientThree rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">৳{data.getAdminAnalytics.currentAmount?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h6>
                    <p className="text-base opacity-50">Current Balance</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientFour rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">৳{data.getAdminAnalytics.totalSale?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h6>
                    <p className="text-base opacity-50">Total Sales</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientFive rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">{data.getAdminAnalytics.platformCharge}%</h6>
                    <p className="text-base opacity-50">Current Platform Charge</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientSix rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">{data.getAdminAnalytics.totalOrders}</h6>
                    <p className="text-base opacity-50">Total Order</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientSeven rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">{data.getAdminAnalytics
                        .totalSeller}</h6>
                    <p className="text-base opacity-50">Total Seller</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientEight rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">{data.getAdminAnalytics.totalProducts}</h6>
                    <p className="text-base opacity-50">Total Products</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientTwo rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">{data.getAdminAnalytics.totalReviews}</h6>
                    <p className="text-base opacity-50">Total Reviews</p>
                </div>
                <Wave />
            </div>
        </div>
    );
};

export default Analytics;