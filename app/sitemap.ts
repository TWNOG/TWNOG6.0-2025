import type { MetadataRoute } from "next";

const domain = "https://2025.twnog.net";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${domain}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${domain}/paper`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${domain}/agenda`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${domain}/traffic`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${domain}/sponsor`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${domain}/staff`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}