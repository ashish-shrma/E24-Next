import { gql } from "@apollo/client";

const postFieldsFragmentString = `
  slug
  title
  databaseId
  date
  featuredImage {
    node {
      sourceUrl
      title
    }
  }
  categories {
    edges {
      node {
        slug
        name
      }
    }
  }
`;

const postFieldsFragment = gql`
  fragment PostFields on Post {
    ${postFieldsFragmentString}
  }
`;

export const getPostsQuery = gql`
  query GetPosts {
    posts {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
  ${postFieldsFragment}
`;

export const loadMorePostsQuery = `query GetPosts($cursor: String) {
  posts(first: 10, after: $cursor) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        ${postFieldsFragmentString}
      }
    }
  }
}`;