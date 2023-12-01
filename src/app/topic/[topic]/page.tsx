import BannerSection from '@/components/BannerSection/BannerSection';
import ListView from '@/components/Cards/Card';
import CenterCards from '@/components/CenterCards/CenterCards';
import { fetchData } from '@/helpers/graphql';
import { gql } from '@apollo/client';
import React from 'react'

const Topic = async ({ params }: { params: { topic: string } }) => {

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // }
  
  const getTagPosts = gql`
  query GetCatergoryPosts ($slug: String) {
    posts(where: {tag: $slug}) {
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
`

// console.log(GetTagPosts);

  // Call the async function
 const data= await fetchData(getTagPosts,params.topic);

//  console.log(data.tags);
 


  return (
   
    <CenterCards data={data} />
  )
}

export default Topic
