import { gql } from "apollo-server";

/**
 * @description holds user schema
 */

export const UserSchema = gql`
  # prettier-ignore
  type User {
    id: ID!,
    name: String!,
    password: String!,
    email: String!
  }

  # prettier-ignore
  input CreateUserInput {
    name: String!,
    password: String!,
    email: String!
  }

  # prettier-ignore
  input UpdateUserInput {
    id: String!,
    name: String!,
    email: String!
  }

  # prettier-ignore
  extend type Query {
    users: [User]
    user(id: String!): User
  }

  # prettier-ignore
  extend type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: String!): User
  }
`;
