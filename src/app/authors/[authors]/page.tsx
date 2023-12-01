import BannerSection from "@/components/BannerSection/BannerSection";
import ListView from "@/components/Cards/Card";
import CenterCards from "@/components/CenterCards/CenterCards";
import { fetchData } from "@/helpers/graphql";
import { gql } from "@apollo/client";
import React from "react";

const Authors = async ({ params }: { params: { authors: string } }) => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // }

  const getAuthorPosts = gql`
    query GetAuthorPosts($slug: String) {
      posts(where: { authorName: $slug }) {
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
      user(idType: SLUG, id: $slug) {
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
  `;

  // console.log(GetTagPosts);

  // Call the async function
  const data = await fetchData(getAuthorPosts, params.authors);
  

  //  console.log(data.tags);

  return (
    <>
      <CenterCards data={data} />
    </>
  );
};

export default Authors;
