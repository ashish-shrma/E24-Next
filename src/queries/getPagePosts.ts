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

export const getCategoryPosts = gql`
query GetCatergoryPosts ($slug: String) {
  posts(where: {categoryName: $slug}) {
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
  

export const getLoadMoreCategoryPageData = `query GET_LOADMORE_CATEGORY_POSTS($slug: String $after: String)  {
  posts(first: 10, after: $after, where: {categoryName: $slug}) {
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


export const getTagPosts = gql`
  query GetCatergoryPosts ($slug: String) {
    posts(where: {tag: $slug}) {
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

export const getLoadMoreTagPosts = `query GET_LOADMORE_TAG_POSTS($slug: String $after: String)  {
  posts(first: 20, after: $after, where: {tag: $slug}) {
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


export const getAuthorPosts = gql`
  query GetAuthorPosts($slug: String, $userId: ID!) {
    posts(where: { authorName: $slug }) {
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
    user(idType: SLUG, id: $userId) {
      firstName
      avatar {
        url
      }
      lastName
      description
      seo {
        social {
          instagram
          twitter
          facebook
          linkedIn
        }
      }
    }
  }
  ${postFieldsFragment}
`;

  export const getLoadAuthorPosts = `query GET_LOADMORE_AUTHOR_POSTS($slug: String $after: String)  {
    posts(first: 20, after: $after, where: { authorName: $slug }) {
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