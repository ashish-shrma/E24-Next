
import MainCards from "@/components/MainCards/MainCards";
import WebstoryCards from "@/components/WebstoryCard/WebstoryCard";
import { fetchData } from "@/helpers/graphql";
import { getPostsQuery, loadMorePostsQuery , homePageNews } from "@/queries/getPagePosts";
import { WebStoriesResponse } from "./web-stories/page";




const Home = async () => {

  
  const data = await fetchData(homePageNews);

  const { entertainment, lifestyle, fashion, health, tech , latest } = data;

  const fetchDataWebstory = async () => {
    try {
      const response = await fetch(
        `https://e24bollywood.com/wp-json/wp/v2/web-stories/1/10/`
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Failed to fetch web story");
      }
    } catch (error) {
      console.error("Error fetching web story", error);
    }
  };
  const WebstoryData: WebStoriesResponse = await fetchDataWebstory();




  // console.log("jhbsdhjasd",data)


  return(

     <div className="w-full md:w-1/2 lg:w-6/12 lg:px-4 lg:mt-4 p-0 bg-white">
      <WebstoryCards data={WebstoryData}/>
      {Object.keys(data).map(key=> <MainCards data={data[key]} key={key} categoryName={key.replace("0","-")}/>
)}
    </div>



  )
};

export default Home;


