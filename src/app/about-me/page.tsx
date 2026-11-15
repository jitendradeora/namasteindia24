import type { Metadata } from "next"
import { AboutView } from "@/components/pages/AboutView"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Meet Sunny",
  description:
    "Meet Suryabhan “Sunny” Purawat, founder of Namaste India 24, and how small-group and tailor-made India tours are planned.",
  path: "/about-me/",
  image: "/images/NI1.jpg",
})

export default function AboutMePage() {
  return <AboutView personal />
}
