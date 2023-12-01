import BannerSection from "@/components/BannerSection/BannerSection";
import ListView from "@/components/Cards/Card";
import CenterCards from "@/components/CenterCards/CenterCards";
import Menu from "@/components/Header/Menu";
import { MENU_QUERY } from "@/components/Header/MenuQuery";
import { fetchData } from "@/helpers/graphql";
import { DocumentNode, gql } from "@apollo/client";
import React from "react";
import client from "../helpers/apollo/client";

const Home = async () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // }

  const getPostsQuery = gql`
    query GetPosts {
      posts {
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

  // Call the async function
  const data = await fetchData(getPostsQuery);

  return (
    <CenterCards data={data} />
  );
};

export default Home;
