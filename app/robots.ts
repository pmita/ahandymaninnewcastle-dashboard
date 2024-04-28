import { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          "/privacy-policy",
          '/_next',
          '/api',
          '/sitemap.xml',
          '/robots.txt',
        ],
        crawlDelay: 10,
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`
  }
}