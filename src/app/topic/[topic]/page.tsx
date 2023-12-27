import CenterCards from '@/components/CenterCards/CenterCards';
import { fetchData } from '@/helpers/graphql';
import { getLoadMoreTagPosts, getTagPosts } from '@/queries/getPagePosts';
import { gql } from '@apollo/client';
import React from 'react'

const Topic = async ({ params }: { params: { topic: string } }) => {


// console.log(GetTagPosts);

  // Call the async function
 const data= await fetchData(getTagPosts,params.topic);

//  console.log(data.tags);
 


  return (
   <>
   <div className="w-full md:w-1/2 lg:w-6/12 lg:px-4 lg:mt-4 p-0 bg-white">
   <CenterCards data={data} query={getLoadMoreTagPosts} slug={params.topic} />
   </div>
   </>
  )
}

export default Topic
