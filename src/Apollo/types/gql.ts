/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    message\n  }\n}\n": types.SignupDocument,
    "\nmutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {\n  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {\n    message\n    token\n  }\n}\n": types.VerifyPhoneDocument,
    "\nmutation resendOtp($phone: String!) {\n  resendOtp(phone: $phone) {\n    message\n  }\n}\n": types.ResendOtpDocument,
    "\nquery getProfile {\n  getProfile {\n    id\n    name\n    phone\n    email\n    avatar\n    is_verified\n    role\n  }\n}\n": types.GetProfileDocument,
    "\nmutation addCategory($categoryDto: CategoryDto!) {\n  addCategory(categoryDto: $categoryDto) {\n    message\n  }\n}\n": types.AddCategoryDocument,
    "\nquery getCategories($searchDto: SearchDto!) {\n  getCategories(searchDto: $searchDto) {\n    results {\n      id\n      name\n      icon\n      slug\n      position\n      is_top\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetCategoriesDocument,
    "\nmutation deleteCategory($deleteCategoryId: Float!) {\n  deleteCategory(id: $deleteCategoryId) {\n    message\n  }\n}\n": types.DeleteCategoryDocument,
    "\nquery getCategory($slug: String!) {\n  getCategory(slug: $slug) {\n    id\n    name\n    description\n    icon\n    position\n    is_top\n  }\n}\n": types.GetCategoryDocument,
    "\nmutation updateCategory($categoryDto: CategoryDto!, $updateCategoryId: Float!) {\n  updateCategory(categoryDto: $categoryDto, id: $updateCategoryId) {\n    message\n  }\n}\n": types.UpdateCategoryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {\n  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {\n    message\n    token\n  }\n}\n"): (typeof documents)["\nmutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {\n  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {\n    message\n    token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation resendOtp($phone: String!) {\n  resendOtp(phone: $phone) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation resendOtp($phone: String!) {\n  resendOtp(phone: $phone) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getProfile {\n  getProfile {\n    id\n    name\n    phone\n    email\n    avatar\n    is_verified\n    role\n  }\n}\n"): (typeof documents)["\nquery getProfile {\n  getProfile {\n    id\n    name\n    phone\n    email\n    avatar\n    is_verified\n    role\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addCategory($categoryDto: CategoryDto!) {\n  addCategory(categoryDto: $categoryDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addCategory($categoryDto: CategoryDto!) {\n  addCategory(categoryDto: $categoryDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getCategories($searchDto: SearchDto!) {\n  getCategories(searchDto: $searchDto) {\n    results {\n      id\n      name\n      icon\n      slug\n      position\n      is_top\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getCategories($searchDto: SearchDto!) {\n  getCategories(searchDto: $searchDto) {\n    results {\n      id\n      name\n      icon\n      slug\n      position\n      is_top\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteCategory($deleteCategoryId: Float!) {\n  deleteCategory(id: $deleteCategoryId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteCategory($deleteCategoryId: Float!) {\n  deleteCategory(id: $deleteCategoryId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getCategory($slug: String!) {\n  getCategory(slug: $slug) {\n    id\n    name\n    description\n    icon\n    position\n    is_top\n  }\n}\n"): (typeof documents)["\nquery getCategory($slug: String!) {\n  getCategory(slug: $slug) {\n    id\n    name\n    description\n    icon\n    position\n    is_top\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateCategory($categoryDto: CategoryDto!, $updateCategoryId: Float!) {\n  updateCategory(categoryDto: $categoryDto, id: $updateCategoryId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateCategory($categoryDto: CategoryDto!, $updateCategoryId: Float!) {\n  updateCategory(categoryDto: $categoryDto, id: $updateCategoryId) {\n    message\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;