import { format } from 'date-fns';

export default function sitemap(): string {
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;
  const currentDate = new Date();
  let sitemaps = '';

  for (let i = 0; i < 15; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);

    const yyyy = format(date, 'yyyy');
    const mm = format(date, 'MM');
    const dd = format(date, 'dd');
    const sitemapUrl = `${baseUrl}/sitemap.xml?yyyy=${yyyy}&mm=${mm}&dd=${dd}`;
    sitemaps += `<sitemap><loc>${sitemapUrl}</loc></sitemap>\n`;
  }
  // console.log("hbjhasbdjhbd", sitemaps);

  return `<sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}</sitemapindex>`;
}
