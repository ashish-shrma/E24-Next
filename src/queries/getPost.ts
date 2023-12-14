import { gql } from "@apollo/client";

export const getPost = gql`query GetPost($slug: ID!) {
    post: post(id: $slug , idType: DATABASE_ID) {
      title
      slug
      uri
      databaseId
      id
      content
      modified
      date
      excerpt
      author {
        node {
          name
          slug
          uri
          avatar {
            url
            foundAvatar
          }
        }
      }
      tags {
        nodes {
          databaseId
          name
          slug
        }
      }
      categories {
        nodes {
          name
          slug
          databaseId
        }
      }
      featuredImage {
        node {
          title
          sourceUrl
          caption
          description
        }
      }
      seo {
        metaKeywords
        metaDesc
        readingTime
        opengraphPublishedTime
      }
    }
    
  }`

  export default getPost;