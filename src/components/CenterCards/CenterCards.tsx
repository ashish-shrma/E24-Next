"use client"
import BannerSection from "@/components/BannerSection/BannerSection";
import ListView from "@/components/Cards/Card";
import { useEffect, useState } from "react";

type PostEdge = {
  node: {
    title: string;
    slug: string;
    databaseId: number;
    date: string;
    featuredImage: any;
    categories: any;
  };
};

type InitialData = {
  posts: {
    edges: PostEdge[];
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    }
  };
};

type CenterCardsProps = {
  data: InitialData;
  query: string;
  // fetchData: (query: DocumentNode, page: number) => Promise<any>;
};

const CenterCards = ({ data, query }: CenterCardsProps) => {
  const [posts, setPosts] = useState(data.posts.edges);
  const [cursor, setCursor] = useState(data.posts.pageInfo.endCursor);
  const loadMore = async () => {
      console.log('Fetching more posts', cursor);
        const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: query,
            variables: {
              after: cursor,
            },
          }),
        });
        const newData = await response.json();
      setPosts([...posts, ...newData.data.posts.edges]);
      setCursor(newData.data.posts.pageInfo.endCursor);

  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      loadMore();
      console.log('Fetch more list items!')
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [posts, cursor]);

  
  return (
    <div className="w-full md:w-1/2 lg:w-6/12 p-4 bg-white">
      <div>
        {posts &&
          posts.map((post: PostEdge, index: number) => {
            const { node } = post;
            const { title, slug, databaseId, date, featuredImage, categories } =
              node;
            return index === 0 ? (
              <BannerSection
                title={title}
                slug={slug}
                databaseId={databaseId}
                date={date}
                featuredImage={featuredImage}
                categories={categories}
              />
            ) : (
              <ListView
                title={title}
                slug={slug}
                databaseId={databaseId}
                date={date}
                featuredImage={featuredImage}
                categories={categories}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CenterCards;
