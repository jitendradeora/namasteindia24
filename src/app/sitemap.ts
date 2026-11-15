import type { MetadataRoute } from "next"
import { blogPost } from "@/lib/siteContent"
import { SITE_URL } from "@/lib/site"
import { tours } from "@/lib/tours"

type Entry = {
  path: string
  priority: number
  changeFrequency: "weekly" | "monthly" | "yearly"
  lastModified?: Date
}

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-11-15")
  const entries: Entry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/india-tour/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/nepal-tour/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about-us/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about-me/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/our-gallery/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact-us/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blogs/", priority: 0.7, changeFrequency: "weekly" },
    { path: "/faq/", priority: 0.5, changeFrequency: "monthly" },
    { path: "/terms-and-conditions/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" },
    ...tours.map((tour) => ({
      path: `/${tour.slug}/`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    {
      path: `/${blogPost.slug}/`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(blogPost.date),
    },
  ]

  return entries.map((entry) => ({
    url: new URL(entry.path, SITE_URL).toString(),
    lastModified: entry.lastModified ?? updated,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
