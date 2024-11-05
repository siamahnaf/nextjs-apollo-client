import { gql } from "@/Apollo/types";


export const ADD_FEEDBACK = gql(`
mutation addFeedback($feedbackDto: FeedbackDto!) {
  addFeedback(feedbackDto: $feedbackDto) {
    message
  }
}
`);

export const FEEDBACK_LIST = gql(`
query getFeedbacks($searchDto: SearchDto!) {
  getFeedbacks(searchDto: $searchDto) {
    results {
      id
      name
      title
      image
      description
      rating
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

export const DELETE_FEEDBACK = gql(`
mutation deleteFeedback($deleteFeedbackId: Float!) {
  deleteFeedback(id: $deleteFeedbackId) {
    message
  }
}
`);

export const GET_FEEDBACK = gql(`
query getFeedback($getFeedbackId: Float!) {
  getFeedback(id: $getFeedbackId) {
    id
    name
    title
    image
    description
    rating
  }
}
`);


export const UPDATE_FEEDBACK = gql(`
mutation updateFeedback($feedbackDto: FeedbackDto!, $updateFeedbackId: Float!) {
  updateFeedback(feedbackDto: $feedbackDto, id: $updateFeedbackId) {
    message
  }
}
`);