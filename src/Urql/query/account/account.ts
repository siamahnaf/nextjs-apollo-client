import { graphql } from "@/Urql/gql";


export const LOGIN_ACCOUNT = graphql(`
mutation signup($signupInput: SignupInput!) {
  signup(signupInput: $signupInput) {
    message
  }
}
`);

export const VERIFY_OTP = graphql(`
mutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {
  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {
    message
    token
  }
}
`);


export const GET_PROFILE = graphql(`
query getProfile {
  getProfile {
    id
    name
    phone
    email
    avatar
    is_verified
    role
  }
}
`);