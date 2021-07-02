import { gql } from "apollo-server";

/**
 * @description holds default schema
 */

export const DefaultSchema = gql`
  # prettier-ignore
  type Query {
    _empty: String
  }

  # prettier-ignore
  type Mutation {
    _empty: String
  }
`;
