import { gql } from "@/Apollo/types";

export const ADD_SITE_SETTINGS = gql(`
mutation addSiteSetting($siteDto: SettingsDto!) {
  addSettings(siteDto: $siteDto) {
    message
  }
}
`);

export const GET_SETTINGS = gql(`
query getSiteSetting {
  getSiteSetting {
    id
    logo
    icon
    site_title
    slogan
    meta_title
    meta_description
    keywords
    og_title
    og_description
    og_image
    facebook
    instagram
    youtube
    twitter
    footer_note
  }
}
`);