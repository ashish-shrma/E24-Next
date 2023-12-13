import { gql } from "@apollo/client";

export const getPostsQuery = gql`
query GetPosts {
  posts {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
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
      }
    }
  }
}
`;

export const loadMorePostsQuery = `query GetPosts($cursor: String) {
  posts(first: 10, after: $cursor) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
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
      }
    }
  }
}`