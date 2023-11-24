import { gql } from "@apollo/client";

export const CATEGORY_QUERY = gql`
query MenuQuery {
  categories {
    edges {
      node {
        name
        id
        databaseId
      }
    }
  }
}
`;
