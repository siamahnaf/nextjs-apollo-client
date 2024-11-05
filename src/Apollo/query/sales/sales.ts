import { gql } from "@/Apollo/types";


export const ADD_SALES = gql(`
mutation addSale($salesDto: SalesDto!) {
  addSale(salesDto: $salesDto) {
    message
  }
}
`);

export const SALES_LIST = gql(`
query getSales($searchDto: SearchDto!) {
  getSales(searchDto: $searchDto) {
    results {
      id
      slug
      title
      image
      start_on
      expires_on
      discount
      discount_unit
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

export const DELETE_SALES = gql(`
mutation deleteSale($deleteSaleId: Float!) {
  deleteSale(id: $deleteSaleId) {
    message
  }
}
`);

export const GET_SALES = gql(`
query getSale($slug: String!) {
  getSale(slug: $slug) {
    id
    slug
    title
    en_title
    image
    start_on
    expires_on
    discount
    discount_unit
  }
}
`);


export const UPDATE_SALES = gql(`
mutation updateSale($salesDto: SalesDto!, $updateSaleId: Float!) {
  updateSale(salesDto: $salesDto, id: $updateSaleId) {
    message
  }
}
`);