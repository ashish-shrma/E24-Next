import { MetadataRoute } from 'next'
import { fetchData } from '@/helpers/graphql';
import { getCategoryPosts, getLoadMoreCategoryPageData } from '@/queries/getPagePosts';

export async function generateSitemaps() {
    const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;
    return []
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {

  
  const category = await fetchData(getCategoryPosts);

  return category.map((category: { id: number, date: any; }) => ({
    url: `baseUrl/product/${category.id}`,
    lastModified: category.date,
  }))
}
