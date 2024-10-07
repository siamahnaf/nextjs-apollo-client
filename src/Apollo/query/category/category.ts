import { gql } from "@/Apollo/types";


export const ADD_CATEGORY = gql(`
mutation addCategory($categoryDto: CategoryDto!) {
  addCategory(categoryDto: $categoryDto) {
    message
  }
}
`);

export const CATEGORY_LIST = gql(`
query getCategories($searchDto: SearchDto!) {
  getCategories(searchDto: $searchDto) {
    results {
      id
      name
      icon
      slug
      position
      is_top
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

export const DELETE_CATEGORY = gql(`
mutation deleteCategory($deleteCategoryId: Float!) {
  deleteCategory(id: $deleteCategoryId) {
    message
  }
}
`);

export const GET_CATEGORY = gql(`
query getCategory($slug: String!) {
  getCategory(slug: $slug) {
    id
    name
    description
    icon
    position
    is_top
  }
}
`);


export const UPDATE_CATEGORY = gql(`
mutation updateCategory($categoryDto: CategoryDto!, $updateCategoryId: Float!) {
  updateCategory(categoryDto: $categoryDto, id: $updateCategoryId) {
    message
  }
}
`);