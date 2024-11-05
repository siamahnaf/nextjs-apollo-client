import { gql } from "@/Apollo/types";


export const GET_ANALYTICS = gql(`
query getAdminAnalytics {
  getAdminAnalytics {
    platformCharge
    totalProducts
    totalReviews
    totalOrders
    totalSeller
    totalIncome
    totalPaid
    currentAmount
    totalSale
  }
}
`);