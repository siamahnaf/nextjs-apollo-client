import { gql } from "@/Apollo/types";


export const ADD_PUBLISHER = gql(`
mutation addPublisher($publisherDto: PublisherDto!) {
  addPublisher(publisherDto: $publisherDto) {
    message
  }
}
`);

export const PUBLISHER_LIST = gql(`
query getPublishers($searchDto: SearchDto!) {
  getPublishers(searchDto: $searchDto) {
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

export const DELETE_PUBLISHER = gql(`
mutation deletePublisher($deletePublisherId: Float!) {
  deletePublisher(id: $deletePublisherId) {
    message
  }
}
`);

export const GET_PUBLISHER = gql(`
query getPublisher($slug: String!) {
  getPublisher(slug: $slug) {
    id
    slug
    name
    en_name
    description
    image
  }
}
`);


export const UPDATE_PUBLISHER = gql(`
mutation updatePublisher($publisherDto: PublisherDto!, $updatePublisherId: Float!) {
  updatePublisher(publisherDto: $publisherDto, id: $updatePublisherId) {
    message
  }
}
`);