import type { Metadata } from "next"
import { HomePage } from "@/components/pages/HomePage"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "India & Nepal Tours",
  description:
    "Discover tailor-made private tours and small-group journeys across India and Nepal with local experts, authentic experiences and 24/7 support.",
  path: "/",
  image: "/images/rj-copy.jpg",
})

export default function Page() {
  return <HomePage />
}
