import { gql } from "apollo-server";

/**
 * @description holds book schema
 */

export const BookSchema = gql`
  # prettier-ignore
  type Book {
    id: ID!,
    name: String!,
    description: String!
  }

  # prettier-ignore
  input CreateBookInput {
    name: String!,
    description: String!
  }

  # prettier-ignore
  input UpdateBookInput {
    id: String!,
    name: String!,
    description: String!
  }

  # prettier-ignore
  extend type Query {
    books: [Book]
    book(id: String!): Book
  }

  # prettier-ignore
  extend type Mutation {
    createBook(input: CreateBookInput!): Book
    updateBook(input: UpdateBookInput!): Book
    deleteBook(id: String!): Book
  }
`;
