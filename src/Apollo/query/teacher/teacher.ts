import { gql } from "@/Apollo/types";

export const ADD_TEACHER = gql(`
mutation addTeacher($teacherDto: TeacherDto!) {
  addTeacher(teacherDto: $teacherDto) {
    message
  }
}
`);

export const TEACHER_LIST = gql(`
query getTeachers($searchDto: SearchDto!) {
  getTeachers(searchDto: $searchDto) {
    results {
      id
      slug
      name
      en_name
      description
      image
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

export const DELETE_TEACHER = gql(`
mutation deleteTeacher($deleteTeacherId: Float!) {
  deleteTeacher(id: $deleteTeacherId) {
    message
  }
}
`);

export const GET_TEACHER = gql(`
query getTeacher($slug: String!) {
  getTeacher(slug: $slug) {
    id
    slug
    name
    en_name
    description
    image
  }
}
`);


export const UPDATE_TEACHER = gql(`
mutation updateTeacher($teacherDto: TeacherDto!, $updateTeacherId: Float!) {
  updateTeacher(teacherDto: $teacherDto, id: $updateTeacherId) {
    message
  }
}
`);