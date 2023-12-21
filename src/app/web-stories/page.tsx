import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Logo.webp";

type WebStory = {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  link: string;
  slug: string;
  image_path: string;
  image_caption: string;
  image_alt: string;
  author: number;
  author_name: string;
};

type WebStoriesResponse = WebStory[];

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
    <div className="w-full md:w-1/2 lg:w-6/12 p-4 mt-4 bg-white">
      <div className="main-webstories web-stories mx-1 text-center">
      <ul className="flex flex-wrap items-center">
      {data.map(({ id, author_name, title, image_path, created_at, link }) => (
            <li className="px-1 mb-2 box-border w-1/2" key={id}>
              <div className="webstories-item">
                <Link
                  href={link}
                  className="block text-white rounded overflow-hidden relative"
                >
                  <div className="iconofwebstoires absolute left-4 top-3">
                    <span className="webstories-icon"></span>
                  </div>
                  <Image
                    src={image_path}
                    alt={title}
                    width={640}
                    height={700}
                    className="lazyloaded w-full block"
                    data-ll-status="loaded"
                  />
                  <div className="gradient flex flex-wrap items-center justify-between p-3 absolute left-0 bottom-0 bg-gradient-to-b from-transparent via-black to-black border-t border-dashed border-white w-full min-h-[118px] box-border">
                    <h3 className="text-white text-base font-bold leading-6 font-lato mb-2 w-full min-h-[40px] text-left">
                      {title}
                    </h3>
                    <div className="time text-gray-200 text-base font-light leading-4 font-lato text-left flex items-end">
                      {created_at &&
                        format(new Date(created_at), "yyyy-MM-dd HH:mm")}{" "}
                      | {author_name}
                    </div>
                    <Image
                      width={40}
                      height={40}
                      className="logo-img absolute bottom-4 right-2 max-w-[30px]"
                      src={Logo}
                      alt="News24"
                      title="News24"
                    />
                  </div>
                </Link>
              </div>
            </li>
      ))}
       </ul>
       </div>
    </div>
  );
};

export default WebStoryPage;
