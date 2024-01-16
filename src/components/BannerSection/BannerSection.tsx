"use client";
import Link from "next/link";
import Image from "next/image";
import { getTimeElapsed } from "../../helpers/getFormattedDate";
import { usePathname } from "next/navigation";
import { BannerSectionProps } from "@/app/type";




const BannerSection: React.FC<BannerSectionProps> = ({
  featuredImage,
  categories,
  title,
  slug,
  databaseId,
  date,
  categoryName,
  showCategory,
}) => {
    
  const pathname = usePathname();
  const label = categories.edges.find(
    ({ node }) => node.slug === pathname.split("/").pop()

  );
  const cName= categories.edges.find(
    ({ node }) => node.slug === categoryName

  );
  // console.log("jhsdvfaesvfhjewfhjafhj",pathname)

  return (
    <>
      <div className="mx-4 md:mt-2 md:mx-0 overflow-hidden border-b-2">
        <div className="">
          <div className="md:flex-shrink-0 relative xl:h-72">
            <Link
              href={`/${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}
            >
              <Image
                layout="responsive"
                className="object-fill static newclass"
                src={
                  featuredImage?.node?.sourceUrl
                    ? featuredImage?.node?.sourceUrl
                    : "/education/logo.png"
                }
                alt={featuredImage?.node?.title}
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="pt-4 md:w-full">
            <div className="flex justify-between lg:mt-6">
            {showCategory && (
                <Link href={`/category/${categories?.edges[0]?.node.slug}`}>
                  <div
                    className="py-2 tracking-wide text-sm mt-1 font-semibold"
                    style={{ color: "#18479e" }}
                  >
                    {categories.edges[0]?.node.name}
                  </div>
                </Link>
              )}
              <span className="mt-1" style={{ color: "#44c542" }}> {getTimeElapsed(date)} </span>
            </div>
            <Link
              href={`/${categories.edges[0]?.node.slug}/${slug}/${databaseId}`}
            >
              <h3 className="pr-4 pt-2 md:font-medium text-lg md:text-1xl md:leading-8 leading-6 mb-6 lg:mb-4">
                {title}
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default BannerSection;
