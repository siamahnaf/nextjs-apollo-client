import { gql } from "@/Apollo/types";

export const ADD_SECTION = gql(`
mutation addSection($sectionDto: SectionDto!) {
  addSection(sectionDto: $sectionDto) {
    message
  }
}
`);

export const SECTION_LIST = gql(`
query getSections($searchDto: SearchDto!) {
  getSections(searchDto: $searchDto) {
    results {
      id
      title
      icon
      type
      position
      products {
        id
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

export const DELETE_SECTION = gql(`
mutation deleteSection($deleteSectionId: Float!) {
  deleteSection(id: $deleteSectionId) {
    message
  }
}
`);

export const GET_SECTION = gql(`
query getSection($getSectionId: Float!) {
  getSection(id: $getSectionId) {
    id
    title
    icon
    type
    position
    category {
      id
      name
    }
    writer {
      id
      name
    }
    publisher {
      id
      name
    }
    teacher {
      id
      name
    }
    institution {
      id
      name
    }
    paper {
      id
      name
    }
    products {
      id
      name
    }
  }
}
`);


export const UPDATE_SECTION = gql(`
mutation updateSection($sectionDto: SectionDto!, $updateSectionId: Float!) {
  updateSection(sectionDto: $sectionDto, id: $updateSectionId) {
    message
  }
}
`);