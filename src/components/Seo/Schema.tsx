import React from 'react';
import { Graph } from 'schema-dts';
import { sanitize } from 'isomorphic-dompurify';


type AuthorData  = {
    node: {
      name: string;
      slug: string;
      uri: string;
      avatar: {
        url: string;
        foundAvatar: boolean;
      };
    };
  }

  type CategoryData = {
    nodes: {
      name: string;
      slug: string;
      databaseId: number;
    }[];
  };


type SchemaProps = {
  data: {
    name: string;
    uri: string;
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    author: AuthorData;
    categories: CategoryData;
    imgSourceUrl: string;
    imgCaption: string;
    imgDescription: string;
    authorUrl: AuthorData;
  };
};


const Schema: React.FC<SchemaProps> = ({ data }) => {

    const {name, slug, avatar} = data.author?.node;

    const categoryNames = data.categories?.nodes.map(category => category.name) || [];
    


  const articleSchema: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NewsArticle',
        'headline': data.headline,
        'description': sanitize(data.description),
        'articleSection': categoryNames,
        'url': data.uri || window.location.href,
        'inLanguage': 'hi',
        'dateModified': data.dateModified,
        'datePublished': data.datePublished,
        'thumbnailUrl': data.imgSourceUrl,
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': data.uri || window.location.href,
        },
        'image': {
          '@type': 'ImageObject',
          'url': data.imgSourceUrl,
          'width': "1200",
          'height': "675",
          'caption': data.imgCaption,
          'description' : data.imgDescription,
        },
        'author': {
          '@type': 'Person',
          'name': data.author.node.name,
          'url': data.author.node.uri,
        },
        'contentLocation': {
          '@type': 'AdministrativeArea',
          'name': 'Noida, India',
        },
        'publisher': {
          '@type': 'NewsMediaOrganization',
          'name': 'E24 Bollywood',
          'url': 'https://e24bollywood.com/',
          'foundingDate': '2007',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://e24bollywood.com/wp-content/uploads/2023/01/e24Logo-1.webp',
            'width': "150",
            'height': "60",
          },
        },
        
      },
    ],
  };

  
  // console.log("mhdvsgsdadashadadajds", data) ;
  

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema, null, 2) }}
      />
    </>
  );
};

export default Schema;
