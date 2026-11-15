import type { Metadata } from "next"
import { ListingView } from "@/components/pages/ListingView"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "India Tour Packages",
  description:
    "Browse private and small-group India tour packages, from Rajasthan and Gujarat to North India, the Taj Mahal and Varanasi.",
  path: "/india-tour/",
  image: "/images/tm-copy.jpg",
})

export default function IndiaTourPage() {
  return <ListingView />
}
