import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticle } from "@/components/pages/BlogArticle"
import { TourView } from "@/components/pages/TourView"
import { pageMetadata } from "@/lib/seo"
import { blogPost } from "@/lib/siteContent"
import { getTour, tours } from "@/lib/tours"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return [...tours.map((tour) => ({ slug: tour.slug })), { slug: blogPost.slug }]
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTour(slug)
  if (tour) {
    return pageMetadata({
      title: tour.title,
      description: tour.description,
      path: `/${tour.slug}/`,
      image: tour.hero,
    })
  }
  if (slug === blogPost.slug) {
    return pageMetadata({
      title: blogPost.title,
      description:
        "Plan a Nepal trip with the best time to go, Kathmandu, Pokhara, Chitwan, budgets, and how to pair Nepal with an India tour.",
      path: `/${blogPost.slug}/`,
      image: "/images/nepal-trip-planning-guide.webp",
      type: "article",
      publishedTime: blogPost.date,
    })
  }
  return { title: "Page not found", robots: { index: false, follow: false } }
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params
  const tour = getTour(slug)
  if (tour) return <TourView tour={tour} />
  if (slug === blogPost.slug) return <BlogArticle />
  notFound()
}
