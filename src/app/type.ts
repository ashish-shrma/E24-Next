export type AuthorData = {
    node: { name: any; slug: any; avatar: any; };
    firstName: string;
    lastName: string;
    description: string;
    avatar?: {
      url: string;
    };
    seo?: {
      social?: {
        twitter?: string;
        facebook?: string;
        linkedIn?: string;
      };
    };
};

 export type BannerSectionProps = {
    featuredImage: {
      node: {
        sourceUrl: string;
        title: string;
      };
    };
    categories: {
      edges: {
        node: {
          slug: string;
          name: string;
        };
      }[];
    };
    title: string;
    slug: string;
    databaseId: number;
    date: string;
    categoryName?: string;
    showCategory?: string;
  };
  
  export type WebStory = {
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


export type ListViewProps ={

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
    showCategory?: any;  
}

export type PostEdge = {
    node: {
      title: string;
      slug: string;
      databaseId: number;
      date: string;
      featuredImage: any;
      categories: any;
    };
  };
  
  export type InitialData = {
    edges: never[];
    posts: {
      edges: PostEdge[];
      pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
      };
    };
  };
  
export type CenterCardsProps = {
    data: InitialData;
    query: string;
    slug?: string;
    showCategory?: any;
    // fetchData: (query: DocumentNode, page: number) => Promise<any>;
  };

export type MainCardsProps = {
    data: InitialData;
    categoryName: string;
};
