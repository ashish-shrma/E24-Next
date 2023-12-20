"use client"

import { usePathname } from 'next/navigation';
import { Graph } from 'schema-dts';

const BreadCrumb = () => {

   const pathName  = usePathname() ;
   


    const breadcrumbs: Graph = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'item': {
                  '@type': 'Thing',
                  '@id': `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}`,
                  'name': 'Home',
                },
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'item': {
                  '@type': 'Thing',
                  '@id': `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL+"/"+ pathName.split("/")[1]}`,
                  'name': pathName.split("/")[1],
                },
              },
            ],
          },
        ],
      };

  return (
    <>
     {breadcrumbs && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs, null, 2) }}
      />
    )}
    </>
  )
}

export default BreadCrumb