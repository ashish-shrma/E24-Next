import Link from 'next/link';
import Image from 'next/image';
import BannerSection from '../BannerSection/BannerSection';

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
          
    <div className="my-4 mx-4 md:mx-0 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between">
        <div className="md:flex-shrink-0 flex relative xl:w-64 w-60">
          <Link href={`/${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}>
              <Image 
                layout="fill"
                className="object-cover lg:p-4 rounded-md"
                src={featuredImage?.node?.sourceUrl || '/education/logo.png'}
                alt={featuredImage?.node?.title}
              />
           
          </Link>
        </div>
        <div className="xl:p-4 p-2 w-full">
          <div className="flex justify-between">
            <Link href={`/${categories?.edges[0]?.node.slug}`}>
              
                <div className="tracking-wide xl:text-sm text-xs font-semibold py-2" style={{ color: "#18479e" }}>
                  {/* {categories?.nodes[0]?.name} | <span style={{ color: "#44c542" }}>{getTimeElapsed(date)}</span> */}
                </div>
          
            </Link>
          </div>
          <Link href={`/${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}>
           
              <h3 className="xl:w-full xl:text-xl xl:leading-9 catTextLimit">
                {title}
              </h3>
       
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ListView;
