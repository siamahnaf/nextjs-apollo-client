import { gql } from "@/Apollo/types";

export const ADD_SITE_TERMS = gql(`
mutation addSiteTerms($termsDto: TermsDto!) {
  addSiteTerms(termsDto: $termsDto) {
    message
  }
}
`);

export const GET_SITE_TERMS = gql(`
query getSiteTerms {
  getSiteTerms {
    id
    terms_and_condition
    privacy_policy
  }
}
`);