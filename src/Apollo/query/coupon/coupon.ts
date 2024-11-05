import { gql } from "@/Apollo/types";


export const ADD_COUPON = gql(`
mutation addCoupon($couponDto: CouponDto!) {
  addCoupon(couponDto: $couponDto) {
    message
  }
}
`);

export const COUPON_LIST = gql(`
query getCoupons($searchDto: SearchDto!) {
  getCoupons(searchDto: $searchDto) {
    results {
      id
      slug
      name
      code
      discount
      discount_unit
      minimum_purchase
      start_on
      expires_on
      uses_limit
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

export const DELETE_COUPON = gql(`
mutation deleteCoupon($deleteCouponId: Float!) {
  deleteCoupon(id: $deleteCouponId) {
    message
  }
}
`);

export const GET_COUPON = gql(`
query getCoupon($slug: String!) {
  getCoupon(slug: $slug) {
    id
    slug
    name
    en_name
    code
    discount
    discount_unit
    minimum_purchase
    start_on
    expires_on
    uses_limit
  }
}
`);


export const UPDATE_COUPON = gql(`
mutation updateCoupon($couponDto: CouponDto!, $updateCouponId: Float!) {
  updateCoupon(couponDto: $couponDto, id: $updateCouponId) {
    message
  }
}
`);