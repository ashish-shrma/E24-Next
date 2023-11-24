import Link from 'next/link';
import Image from 'next/image';
import {getTimeElapsed} from "../../helpers/queries/getFormattedDate";

type BannerSectionProps ={

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

const BannerSection: React.FC<BannerSectionProps> = ({ featuredImage,categories, title, slug, databaseId, date  }) => {
    // console.log(categories)
    return (
            <>
            
            <div className="mx-4 md:mt-2 md:mx-0 bg-white rounded-lg shadow-md overflow-hidden">
                <div className=''>
                    <div className="md:flex-shrink-0 relative xl:h-72">
                        
                    <Link href={`${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}>
                   
                                <Image layout="fill" className="object-fill static newclass" src={featuredImage?.node?.sourceUrl ? featuredImage?.node?.sourceUrl : '/education/logo.png'} alt={featuredImage?.node?.title} />
                    
                    </Link>
                    </div>
                    <div className="p-4 md:w-full">
                        <div className="flex justify-between">
                                <Link href={`${categories?.edges[0]?.node.slug}`}>
                                
                                        <div className="py-2 tracking-wide text-sm font-semibold" style={{ color: "#18479e" }}> {categories.edges[0]?.node.name} <span style={{ color: "#44c542" }}> {getTimeElapsed(date)}  </span></div>
                                  
                                </Link>

                        </div>
                        <Link href={`/${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}>
                        
                                <h3 className="pr-4 pt-2 md:font-medium text-lg md:text-2xl md:leading-8 leading-6">
                                    {title ?
                                        <>
                                            <span style={{ color: "#f30000" }}>
                                                {title}:
                                            </span>
                                            {title}

                                        </>
                                        :
                                        title
                                    }
                                </h3>
                        
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BannerSection;