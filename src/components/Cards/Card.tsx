import Link from 'next/link';
import Image from 'next/image';
import BannerSection from '../BannerSection/BannerSection';
import {getTimeElapsed} from "../../helpers/queries/getFormattedDate";

type ListViewProps ={

    featuredImage: { 
      node: {
        sourceUrl: string;
        title: string;
      };
    };
    categories: {
      edges: {
       node:{
        slug: string;
        name: string;
       }
      }[];
    };
    title: string;
    slug: string;
    databaseId: number;
    date: string;
  
}

const ListView: React.FC<ListViewProps> = ({ featuredImage,categories, title, slug, databaseId, date  }) => {


//   const composedTitle = composeTitle(title);

  return (
    <>
          
    <div className="my-4 mx-4 md:mx-0 overflow-hidden border-b-2">
      <div className="flex justify-between">
        
        <div className="xl:p-4 p-2 w-full">
          
          <Link href={`/${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}>
           
              <h3 className="xl:w-full xl:text-base xl:leading-8 catTextLimit">
                {title}
              </h3>
       
          </Link>

          <div className="tracking-wide xl:text-sm text-xs font-semibold py-2 flex" style={{ color: "#18479e" }}>
            <Link href={`/${categories?.edges[0]?.node.slug}`}>
                 <span>{categories?.edges[0]?.node.name}</span> 
            </Link>
            <span className='mx-3'>|</span>
            <span>{getTimeElapsed(date)}</span>
          </div>
        </div>
        <div className="md:flex-shrink-0 flex relative w-40 h-24">
          <Link href={`/${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}>
              <Image 
                layout="fill"
                className="w-full h-40 md:h-auto object-contain rounded-t-md md:rounded-l-md mt-4"
                src={featuredImage?.node?.sourceUrl || '/education/logo.png'}
                alt={featuredImage?.node?.title}
              />
           
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ListView;
