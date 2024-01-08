import BannerSection from "@/components/BannerSection/BannerSection";
import ListView from "@/components/Cards/Card";

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
  edges: PostEdge[];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
};

type MainCardsProps = {
  data: InitialData;
  categoryName: string;
};

const MainCards = ({ data, categoryName }: MainCardsProps) => {
  const postsEdges = data?.edges || [];

  // console.log("hnbvfhdsdfsefhjwb",categoryName);

  return (
    <>
      <div className="mb-6">
        {postsEdges.map((post: PostEdge, index: number) => {
          const { node } = post;
          const { title, slug, databaseId, date, featuredImage, categories } =
            node;
          const cName = categories.edges.find(
            ({ node }: { node: any }) => node.slug === categoryName
          );
          return index === 0 ? (
            <>
              <div className="cat-main-div relative flex justify-center">
                <h2 className="text-3xl font-bold bg-white text-gray-800 z-10 text-center inline-block px-2 py-2">
                  {cName?cName?.node.name:"Latest News"}
                </h2>
                <span
                  className="absolute left-0 h-1 w-full border-t border-b border-blue-700 top-1/2 transform -translate-y-1/2 z-0"
                  style={{ borderColor: "#032a63" }}
                ></span>
              </div>
              <BannerSection
                title={title}
                slug={slug}
                databaseId={databaseId}
                date={date}
                featuredImage={featuredImage}
                categories={categories}
                categoryName={categoryName}
              />
            </>
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
    </>
  );
};

export default MainCards;
