import { gql } from "@/Apollo/types";

export const ADD_BANNERS = gql(`
mutation addBanners($bannerDto: BannerDto!) {
  addBanners(bannerDto: $bannerDto) {
    message
  }
}
`);

export const GET_BANNERS = gql(`
query getBanners {
  getBanners {
    id
    name
    url
  }
}
`);

export const UPDATE_BANNER = gql(`
mutation updateBanner($bannerDto: BannerDto!, $updateBannerId: Float!) {
  updateBanner(bannerDto: $bannerDto, id: $updateBannerId) {
    message
  }
}
`);

export const DELETE_BANNER = gql(`
mutation deleteBanner($deleteBannerId: Float!) {
  deleteBanner(id: $deleteBannerId) {
    message
  }
}
`);
