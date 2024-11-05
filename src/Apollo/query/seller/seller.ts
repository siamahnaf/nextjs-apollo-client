import { gql } from "@/Apollo/types";

export const SELLER_LIST = gql(`
query getSellers($searchDto: SearchDto!) {
  getSellers(searchDto: $searchDto) {
    results {
      id
      type
      owner_name
      contact_number
      email
      shop_name
      slug
      address
      organization_name
      trade_license
      tin
      logo
      banner
      is_verified
      need_review
      user {
        id
        name
        phone
        email
        avatar
      }
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

export const DELETE_SELLER = gql(`
mutation deleteSeller($deleteSellerId: Float!) {
  deleteSeller(id: $deleteSellerId) {
    message
  }
}
`);


export const ACCEPT_SELLER = gql(`
mutation acceptSeller($acceptSellerId: Float!) {
  acceptSeller(id: $acceptSellerId) {
    message
  }
}
`);

export const REVIEW_SELLER_ACCEPT = gql(`
mutation reviewSellerAccept($reviewSellerAcceptId: Float!) {
  reviewSellerAccept(id: $reviewSellerAcceptId) {
    message
  }
}
`);