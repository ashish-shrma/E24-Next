
import MainCards from "@/components/MainCards/MainCards";
import { fetchData } from "@/helpers/graphql";
import { getPostsQuery, loadMorePostsQuery , homePageNews } from "@/queries/getPagePosts";
import WebStoryPage from "./web-stories/page";


const Home = async () => {

  
  const data = await fetchData(homePageNews);

  const { entertainment, lifestyle, fashion, health, tech , latest } = data;



  // console.log("jhbsdhjasd",data)


  return(

     <div className="w-full md:w-1/2 lg:w-6/12 lg:px-4 lg:mt-4 p-0 bg-white">
      {Object.keys(data).map(key=> <MainCards data={data[key]} key={key} categoryName={key.replace("0","-")}/>
)}
    </div>



  )
};

export default Home;


