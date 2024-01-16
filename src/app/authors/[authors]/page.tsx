import AuthorSection from "@/components/AuthorCard/AuthorSection";
import BannerSection from "@/components/BannerSection/BannerSection";
import ListView from "@/components/Cards/Card";
import CenterCards from "@/components/CenterCards/CenterCards";
import { fetchData } from "@/helpers/graphql";
import { getAuthorPosts, getLoadAuthorPosts } from "@/queries/getPagePosts";
import React from "react";

const Authors = async ({ params }: { params: { authors: string } }) => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // }

  // const getAuthorPosts = gql`
  //   query GetAuthorPosts($slug: String, $userId: ID!) {
  //     posts(where: { authorName: $slug }) {
  //       edges {
  //         node {
  //           slug
  //           title
  //           databaseId
  //           featuredImage {
  //             node {
  //               sourceUrl
  //               title
  //             }
  //           }
  //           categories {
  //             edges {
  //               node {
  //                 slug
  //                 name
  //               }
  //             }
  //           }
  //           date
  //         }
  //       }
  //     }
  //     user(idType: SLUG, id: $userId) {
  //       firstName
  //       avatar {
  //         url
  //       }
  //       lastName
  //       description
  //       seo {
  //         social {
  //           instagram
  //           twitter
  //           facebook
  //           linkedIn
  //         }
  //       }
  //     }
  //   }
  // `;

  // console.log(GetTagPosts);

  // Call the async function
  const data = await fetchData(getAuthorPosts, params.authors);


  //  console.log("authorDataNew", authorData);

  return (
    <>
     <div className="w-full md:w-1/2 lg:w-6/12 lg:px-4 lg:mt-4 p-0 bg-white">
      <AuthorSection authorData={data.user} />
      <CenterCards data={data} query={getLoadAuthorPosts} slug={params.authors}/>
      </div>
    </>
  );
};

export default Authors;
