import { gql } from "@/Apollo/types";

export const GET_PLATFORM = gql(`
query getPlatform {
  getPlatform {
    charge
  }
}
`);

export const ADD_PLATFORM = gql(`
mutation addPlatform($platformDto: PlatformDto!) {
  addPlatform(platformDto: $platformDto) {
    message
  }
}
`);