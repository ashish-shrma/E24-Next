import { gql } from "@apollo/client";

export const getCategoryPosts = `
query GetCatergoryPosts ($slug: String) {
  posts(where: {categoryName: $slug}) {
    edges {
      node {
        slug
        title
        databaseId
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
        date
      }
    }
  }
}
`;
  

  

export const getCategoryPageData = gql`
query GET_CATEGORY_POSTS($slug: [String] $after: String) {
  ${getCategoryPosts}
}
`

export const getLoadMoreCategoryPageData = gql`
query GET_LOADMORE_CATEGORY_POSTS($slug: String $after: String) {
  posts(first: 10, after: $after, where: {categoryName: $slug}) {
    nodes {
      ...postPreview
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`