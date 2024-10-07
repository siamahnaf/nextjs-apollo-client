import { gql } from "@/Apollo/types";


export const LOGIN_ACCOUNT = gql(`
mutation signup($signupInput: SignupInput!) {
  signup(signupInput: $signupInput) {
    message
  }
}
`);

export const VERIFY_OTP = gql(`
mutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {
  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {
    message
    token
  }
}
`);

export const RESEND_OTP = gql(`
mutation resendOtp($phone: String!) {
  resendOtp(phone: $phone) {
    message
  }
}
`);



export const GET_PROFILE = gql(`
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
