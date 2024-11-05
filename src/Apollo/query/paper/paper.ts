import { gql } from "@/Apollo/types";


export const ADD_PAPER = gql(`
mutation addPaper($paperDto: PaperDto!) {
  addPaper(paperDto: $paperDto) {
    message
  }
}
`);

export const PAPER_LIST = gql(`
query getPapers($searchDto: SearchDto!) {
  getPapers(searchDto: $searchDto) {
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

export const DELETE_PAPER = gql(`
mutation deletePaper($deletePaperId: Float!) {
  deletePaper(id: $deletePaperId) {
    message
  }
}
`);

export const GET_PAPER = gql(`
query getPaper($slug: String!) {
  getPaper(slug: $slug) {
    id
    slug
    name
    en_name
    description
    image
  }
}
`);


export const UPDATE_PAPER = gql(`
mutation updatePaper($paperDto: PaperDto!, $updatePaperId: Float!) {
  updatePaper(paperDto: $paperDto, id: $updatePaperId) {
    message
  }
}
`);