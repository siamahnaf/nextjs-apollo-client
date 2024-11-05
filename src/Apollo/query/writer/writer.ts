import { gql } from "@/Apollo/types";

export const ADD_WRITER = gql(`
mutation addWriter($writerDto: WriterDto!) {
  addWriter(writerDto: $writerDto) {
    message
  }
}
`);

export const WRITER_LIST = gql(`
query getWriters($searchDto: SearchDto!) {
  getWriters(searchDto: $searchDto) {
    results {
      id
      slug
      name
      image
      level
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

export const DELETE_WRITER = gql(`
mutation deleteWriter($deleteWriterId: Float!) {
  deleteWriter(id: $deleteWriterId) {
    message
  }
}
`);

export const GET_WRITER = gql(`
query getWriter($slug: String!) {
  getWriter(slug: $slug) {
    id
    slug
    name
    en_name
    bio
    image
    level
  }
}
`);


export const UPDATE_WRITER = gql(`
mutation updateWriter($writerDto: WriterDto!, $updateWriterId: Float!) {
  updateWriter(writerDto: $writerDto, id: $updateWriterId) {
    message
  }
}
`);