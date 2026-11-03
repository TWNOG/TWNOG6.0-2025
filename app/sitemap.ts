import type { MetadataRoute } from "next";

import { agenda } from "@/lib/agenda";

const domain = "https://twnog.net/2025";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const agendaRoutes = agenda.filter((item) => item.type !== "Break").map((item) => ({
    url: `${domain}/agenda/${item.id}`,
    lastModified: new Date(),
    priority: 1,
  }));

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
      priority: 1,
    },
    ...agendaRoutes,
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