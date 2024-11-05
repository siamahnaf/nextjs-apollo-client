import { gql } from "@/Apollo/types";

export const GET_WITHDRAW = gql(`
query getWithdrawByAdmin($searchDto: SearchDto!) {
  getWithdrawByAdmin(searchDto: $searchDto) {
    results {
      id
      seller {
        id
        owner_name
        contact_number
        email
        shop_name
        address
        method {
          id
          bank_name
          acc_number
          routing
          branch
          acc_holder_name
          bkash
          nagad
          upay
          rocket
          updated_at
          created_at
        }
      }
      amount
      released_by {
        id
        name
      }
      method
      status
    }
    meta {
      itemCount
      totalItems
      itemsPerPage
      totalPages
      currentPage
    }
  }
}
`);

export const RELEASE_PAYMENT = gql(`
mutation releasePayment($releasePaymentId: Float!, $status: String!) {
  releasePayment(id: $releasePaymentId, status: $status) {
    message
  }
}
`);


export const GET_SELLER_ANALYTICS = gql(`
query getSellerAnalyticsForAdmin($getSellerAnalyticsForAdminId: Float!) {
  getSellerAnalyticsForAdmin(id: $getSellerAnalyticsForAdminId) {
    totalDue
    totalIncome
    totalIncomeWithoutCharge
    totalWithdraw
  }
}
`);