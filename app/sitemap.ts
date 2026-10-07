import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://beef3casino.vercel.app/',
      lastModified: new Date('2026-10-08'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
