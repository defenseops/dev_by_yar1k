import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://dev-by-yar1k.vercel.app/sitemap.xml',
    host: 'https://dev-by-yar1k.vercel.app',
  }
}
