import { gql } from "@/Apollo/types";

export const REQUEST_LIST = gql(`
query getRequests($searchDto: SearchDto!) {
  getRequests(searchDto: $searchDto) {
    results {
      id
      email
      phone
      status
      message
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


export const DELETE_REQUEST = gql(`
mutation deleteRequest($deleteRequestId: Float!) {
  deleteRequest(id: $deleteRequestId) {
    message
  }
}
`);

export const APPROVED_REQUEST = gql(`
mutation approveRequest($approvedRequestId: Float!) {
  approvedRequest(id: $approvedRequestId) {
    message
  }
}
`);