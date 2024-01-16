import Link from 'next/link';
import Image from 'next/image';
import BannerSection from '../BannerSection/BannerSection';
import {getTimeElapsed} from "../../helpers/getFormattedDate";
import {ListViewProps} from "@/app/type";


const ListView: React.FC<ListViewProps> = ({ featuredImage,categories, title, slug, databaseId, date , showCategory, }) => {


  return (
    <>
          
    <div className="mx-4 pb-3 md:mx-0 overflow-hidden border-b-2">
      <div className="flex justify-between">
        
        <div className="xl:pt-4 pt-3 pr-2 w-full">
          
          <Link href={`/${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}>
           
              <h3 className="xl:w-full xl:text-base xl:leading-8 catTextLimit">
                {title}
              </h3>
       
          </Link>

          <div className="tracking-wide xl:text-sm text-xs font-semibold py-2 flex" style={{ color: "#18479e" }}>
          {showCategory && (
                <><Link href={`/category/${categories?.edges[0]?.node.slug}`}>
                  <span>{categories?.edges[0]?.node.name}</span>
                </Link><span className='mx-3'>|</span></>
              )}
            <span>{getTimeElapsed(date)}</span>
          </div>
        </div>
        <div className="md:flex-shrink-0 flex relative w-40 h-24">
          <Link href={`/${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}>
              <Image 
                layout="fill"
                className="w-full h-40 md:h-auto object-contain rounded-t-md md:rounded-l-md lg:mt-4 mt-0"
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
