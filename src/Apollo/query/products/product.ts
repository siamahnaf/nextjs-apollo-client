import { gql } from "@/Apollo/types";

export const PRODUCT_LIST = gql(`
query getAdminProducts($searchDto: SearchDto!) {
  getAdminProducts(searchDto: $searchDto) {
    results {
      id
      name
      en_name
      seller {
        id
        shop_name
        contact_number
      }
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
      keywords
      image
      file
      pages
      edition
      isbn
      flash {
        id
        title
      }
      price
      discount
      discount_unit
      description
      is_approved
      specification {
        key
        value
      }
      visibility
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

export const DELETE_PRODUCT = gql(`
mutation deleteProduct($deleteProductId: Float!) {
  deleteProduct(id: $deleteProductId) {
    message
  }
}
`);

export const APPROVED_PRODUCT = gql(`
mutation approvedProduct($approvedProductId: Float!, $approved: Boolean!) {
  approvedProduct(id: $approvedProductId, approved: $approved) {
    message
  }
}
`);

export const GET_PRODUCTS = gql(`
query getProducts($productSearchDto: ProductSearchDto!) {
  getProducts(productSearchDto: $productSearchDto) {
    results {
      id
      name
      image
      seller {
        id
        shop_name
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