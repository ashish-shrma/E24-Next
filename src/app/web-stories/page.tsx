import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Logo.webp";
import WebstoryCards, { WebstoryCardsItems } from "@/components/WebstoryCard/WebstoryCard";
import {WebStory} from "@/app/type";


export type WebStoriesResponse = WebStory[];

const WebStoryPage = async () => {
  const fetchData = async () => {
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
  const data: WebStoriesResponse = await fetchData();

  return (
    <div className="w-full md:w-1/2 lg:w-6/12 lg:py-1 md:p-0 mt-4 bg-white">
      <div className="main-webstories web-stories lg:mx-1 text-center md:pt-4">
      <ul className="flex flex-wrap items-center py-2">
      {data.map((item) => (
            <li className="px-1 mb-2 box-border w-1/2" key={item.id}>
              <WebstoryCardsItems {...item} />
            </li>
      ))}
       </ul>
       </div>
    </div>
  );
};

export default WebStoryPage;
