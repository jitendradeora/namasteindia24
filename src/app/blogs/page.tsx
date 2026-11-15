import type { Metadata } from "next"
import { JournalView } from "@/components/pages/JournalView"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "India Travel Journal",
  description:
    "Travel guides and practical advice for meaningful journeys through India and Nepal, written by the Namaste India 24 team.",
  path: "/blogs/",
  image: "/images/NI2.jpg",
})

export default function BlogsPage() {
  return <JournalView />
}
