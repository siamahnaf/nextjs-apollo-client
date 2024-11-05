import { gql } from "@/Apollo/types";


export const USER_LIST = gql(`
query getUsers($searchInput: SearchDto!) {
  getUsers(searchInput: $searchInput) {
    results {
      id
      name
      phone
      email
      avatar
      provider {
        name
      }
      is_banned
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

export const BANED_UNBANNED_USER = gql(`
mutation banOrUnbannedUser($banOrUnbannedUserId: Float!) {
  banOrUnbannedUser(id: $banOrUnbannedUserId) {
    message
  }
}
`);

export const ADD_ADMIN = gql(`
mutation addAdmins($adminInput: AdminInput!) {
  addAdmins(adminInput: $adminInput) {
    message
  }
}
`);

export const GET_ADMINS = gql(`
query getAdmins($searchInput: SearchDto!) {
  getAdmins(searchInput: $searchInput) {
    results {
      id
      name
      phone
      email
      avatar
      role
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

export const REMOVE_ADMIN = gql(`
mutation removeAdmin($removeAdminId: String!) {
  removeAdmin(id: $removeAdminId) {
    message
  }
}
`);