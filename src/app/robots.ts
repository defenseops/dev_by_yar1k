import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://yaroslav.dev/sitemap.xml',
    host: 'https://yaroslav.dev',
  }
}
