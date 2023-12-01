import BannerSection from '@/components/BannerSection/BannerSection';
import ListView from '@/components/Cards/Card';
import CenterCards from '@/components/CenterCards/CenterCards';
import { fetchData } from '@/helpers/graphql';
import { gql } from '@apollo/client';
import React from 'react'

const Category = async ({ params }: { params: { category: string } }) => {

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // }
  // console.log(params.category)
  const getCategoryPosts = gql`
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
`
  
  // Call the async function
 const data= await fetchData(getCategoryPosts,params.category);



  return (
    <CenterCards data={data} />

  )
}

export default Category
