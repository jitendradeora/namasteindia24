import type { Metadata } from "next"
import { AboutView } from "@/components/pages/AboutView"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet Namaste India 24, the Udaipur team crafting private and small-group journeys through India with transparent pricing and local care.",
  path: "/about-us/",
  image: "/images/ab-ni24-1.png",
})

export default function AboutPage() {
  return <AboutView />
}
