import { gql } from "@/Apollo/types";

export const GET_ORDERS = gql(`
query getOrders($searchDto: SearchDto!) {
  getOrders(searchDto: $searchDto) {
    results {
      id
      orderId
      products {
        id
        name
        category {
          id
          name
        }
        writer {
          id
          name
        }
        teacher {
          id
          name
        }
        seller {
          id
          shop_name
        }
        total_price
        image
      }
      coupon_amount
      download_limit
      download_number {
        id
        download
      }
      applied_coupon
      total_price
      payment_id
      user {
        id
        name
        phone
        email
        avatar
      }
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


export const INCREASE_ORDER_LIMIT = gql(`
mutation increaseDownloadLimit($increaseDownloadLimitId: Float!, $limit: Float!) {
  increaseDownloadLimit(id: $increaseDownloadLimitId, limit: $limit) {
    message
  }
}
`);