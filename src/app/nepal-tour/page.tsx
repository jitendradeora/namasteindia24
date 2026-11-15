import type { Metadata } from "next"
import { ListingView } from "@/components/pages/ListingView"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "India & Nepal Tours",
  description:
    "Explore India and Nepal journeys with Himalayan lakes, jungle safaris, Kathmandu Valley and North India’s heritage cities.",
  path: "/nepal-tour/",
  image: "/images/NI6-1.jpg",
})

export default function NepalTourPage() {
  return <ListingView nepal />
}
