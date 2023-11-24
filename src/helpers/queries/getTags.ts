import { gql } from "@apollo/client";

export const getTagPosts = `
        query GetTagPosts {
            tags(where: {slug: "salman-khan"}) {
            edges {
                node {
                name
                databaseId
                slug
                posts {
                    edges {
                    node {
                        title
                    }
                    }
                }
                }
            }
            }
        }
`;


  

export const getCategoryPageData = gql`
query GET_CATEGORY_POSTS($slug: [String] $after: String) {
  ${getTagPosts}
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