import BannerSection from '@/components/BannerSection/BannerSection';
import ListView from '@/components/Cards/Card';
import CenterCards from '@/components/CenterCards/CenterCards';
import { fetchData } from '@/helpers/graphql';
import { getCategoryPosts, getLoadMoreCategoryPageData } from '@/queries/getPagePosts';
import { gql } from '@apollo/client';
import React from 'react';


const Category = async ({ params }: { params: { category: string } }) => {

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // }
  // console.log(params.category)
 
  
  // Call the async function
 const data= await fetchData(getCategoryPosts,params.category);



  return (

    <>
    
    <CenterCards data={data} query={getLoadMoreCategoryPageData}  slug={params.category}/>
    </>

  )
}

export default Category
