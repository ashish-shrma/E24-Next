import { MetadataRoute } from 'next';
import { format } from 'date-fns';

export default function sitemap(): MetadataRoute.Sitemap[] {
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;
  const currentDate = new Date();
  const sitemaps: MetadataRoute.Sitemap[] = [];

  for (let i = 0; i < 365; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);

    const yyyy = format(date, 'yyyy');
    const mm = format(date, 'MM');
    const dd = format(date, 'dd');
    const sitemapUrl = `${baseUrl}/sitemap.xml?yyyy=${yyyy}&mm=${mm}&dd=${dd}`;

    // console.log("mhsabdasj",sitemapUrl)

  }

  return sitemaps;
}
