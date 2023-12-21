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
   
    <CenterCards data={data} query={getLoadMoreTagPosts} slug={params.topic} />
  )
}

export default Topic
