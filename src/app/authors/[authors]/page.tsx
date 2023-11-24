import BannerSection from '@/components/BannerSection/BannerSection';
import ListView from '@/components/Cards/Card';
import { fetchData } from '@/helpers/graphql';
import { gql } from '@apollo/client';
import React from 'react'

const Authors = async ({ params }: { params: { topic: string } }) => {

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // }

  
  const getAuthorPosts = gql`
      query GetAuthorPosts {
        posts(where: {authorName: "Sakshi Pandey"}) {
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
              author {
                node {
                  description
                  lastName
                  firstName
                }
              }
            }
          }
        }
      }
`

// console.log(GetTagPosts);

  // Call the async function
 const data= await fetchData(getAuthorPosts,params.topic);

//  console.log(data.tags);
 


  return (

  <>
   
   <div className="w-full md:w-1/2 lg:w-6/12 p-4">
        <div>
      {data &&
        data.posts?.edges.map((post: any, index: number) => {
          const { node } = post;
          const { title, slug, databaseId, date, featuredImage, categories } = node;
          return index===0?      <BannerSection  title={title} slug={slug} databaseId={databaseId} date={date} featuredImage={featuredImage} categories={categories} />
          :<ListView title={title} slug={slug} databaseId={databaseId} date={date} featuredImage={featuredImage} categories={categories} />;
        })}
      </div>
      </div>

      </>
  )
}

export default Authors;
