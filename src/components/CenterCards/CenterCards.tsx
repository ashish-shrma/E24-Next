import BannerSection from '@/components/BannerSection/BannerSection';
import ListView from '@/components/Cards/Card';

import React from 'react'

const CenterCards = ({ data }: any) => {

  return (
   
   <div className="w-full md:w-1/2 lg:w-6/12 p-4 bg-white">
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
  )
}

export default CenterCards;
