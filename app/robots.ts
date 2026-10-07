import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://beef3casino.vercel.app/sitemap.xml',
    host: 'https://beef3casino.vercel.app',
  }
}
