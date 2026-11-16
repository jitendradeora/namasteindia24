import type { Metadata } from "next"
import { AboutView } from "@/components/pages/AboutView"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Namaste India Tour & Travels crafts journeys through Rajasthan and India, with personal itineraries, transparent pricing, and round-the-clock support.",
  path: "/about-us/",
  image: "/images/ab-ni24-1.png",
})

export default function AboutPage() {
  return <AboutView />
}
