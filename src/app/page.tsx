import CenterCards from "@/components/CenterCards/CenterCards";
import { fetchData } from "@/helpers/graphql";
import { getPostsQuery, loadMorePostsQuery } from "@/queries/getPagePosts";


const Home = async () => {
  const data = await fetchData(getPostsQuery);

  return(
    <>
     <div className="w-full md:w-1/2 lg:w-6/12 lg:px-4 lg:mt-4 p-0 bg-white">
     <CenterCards data={data} query={loadMorePostsQuery} /> 
    </div>
    </>

  )
};

export default Home;


