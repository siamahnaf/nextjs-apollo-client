import { gql } from "@/Apollo/types";


export const ADD_INSTITUTION = gql(`
mutation addInstitution($institutionDto: InstitutionDto!) {
  addInstitution(institutionDto: $institutionDto) {
    message
  }
}
`);

export const INSTITUTION_LIST = gql(`
query getInstitutions($searchDto: SearchDto!) {
  getInstitutions(searchDto: $searchDto) {
    results {
      id
      slug
      name
      image
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

export const DELETE_INSTITUTION = gql(`
mutation deleteInstitution($deleteInstitutionId: Float!) {
  deleteInstitution(id: $deleteInstitutionId) {
    message
  }
}
`);

export const GET_INSTITUTION = gql(`
query getInstitution($slug: String!) {
  getInstitution(slug: $slug) {
    id
    slug
    name
    en_name
    description
    image
  }
}
`);


export const UPDATE_INSTITUTION = gql(`
mutation updateInstitution($institutionDto: InstitutionDto!, $updateInstitutionId: Float!) {
  updateInstitution(institutionDto: $institutionDto, id: $updateInstitutionId) {
    message
  }
}
`);