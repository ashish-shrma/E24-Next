import CenterCards from "@/components/CenterCards/CenterCards";
import { fetchData } from "@/helpers/graphql";
import { getPostsQuery, loadMorePostsQuery } from "@/queries/getPagePosts";


const Home = async () => {
  const data = await fetchData(getPostsQuery);

  return<CenterCards data={data} query={loadMorePostsQuery} /> ;
};

export default Home;


