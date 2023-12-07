import Link from "next/link";

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
      const response = await fetch(`https://e24bollywood.com/wp-json/wp/v2/web-stories/1/10/`);
      if (response.ok) {
        const data = await response.json();
        return data
      } else {
        console.error('Failed to fetch web story');
      }
    } catch (error) {
      console.error('Error fetching web story', error);
    }
  }
const data: WebStoriesResponse = await fetchData();

  return (
    <div className="">
      {data.map(({id ,author_name, title, image_path, created_at, link }) =>
       (
        <div className="webstories-item inline-block w-1/2 p-0 sm:p-5 mb-10 box-border" key={id}>
          <Link href="" className="block text-white no-underline rounded-md shadow-md overflow-hidden relative">
            <img src={image_path} alt={title} className="lazyloaded" data-ll-status="loaded" />
            <h3 className="text-white text-14 font-bold mb-10 flex-basis-100 text-left">{title}</h3>
            <div className="time text-14 font-normal text-white text-left flex items-end">{created_at} | {author_name}</div>
            <img className="logo-img lazyloaded" src="" alt="News24" title="News24" data-ll-status="loaded" />
          </Link>
        </div>
      )
      
      )}
      
    </div>
  )
}

export default WebStoryPage

