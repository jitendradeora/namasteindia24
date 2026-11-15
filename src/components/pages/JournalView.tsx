import Link from "next/link"
import { blogPost } from "@/lib/siteContent"
import { breadcrumb, jsonGraph, webPage } from "@/lib/schema"
import { ArrowRightIcon } from "@/components/icons"
import { CoverImage } from "@/components/CoverImage"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/PageHero"
import { SiteShell } from "@/components/SiteShell"

const description =
  "Travel guides and practical advice for meaningful journeys through India and Nepal, written by the Namaste India 24 team."

export function JournalView() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Travel journal"
        title="Ideas for a more meaningful journey"
        copy="Destination guidance and practical travel advice from the Namaste India 24 team."
        image="/images/NI2.jpg"
      />
      <section className="inner-section journal-page">
        <div className="container">
          <article className="featured-post">
            <Link className="featured-post-image" href={`/${blogPost.slug}/`}>
              <CoverImage
                src="/images/nepal-trip-planning-guide.webp"
                alt="Nepal trip planning guide"
                sizes="(max-width: 900px) 100vw, 640px"
              />
            </Link>
            <div>
              <p className="eyebrow">Nepal travel guide</p>
              <time dateTime={blogPost.date}>February 2, 2026</time>
              <h2>
                <Link href={`/${blogPost.slug}/`}>{blogPost.title}</Link>
              </h2>
              <p>{blogPost.excerpt}</p>
              <Link href={`/${blogPost.slug}/`} className="underlink dark">
                Read the full guide <ArrowRightIcon size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>
      <JsonLd
        data={jsonGraph(
          {
            ...webPage({ name: "India Travel Journal", path: "/blogs/", description, type: "Blog" }),
            blogPost: [
              {
                "@type": "BlogPosting",
                headline: blogPost.title,
                datePublished: blogPost.date,
                url: `https://namasteindia24.com/${blogPost.slug}/`,
              },
            ],
          },
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Travel journal", path: "/blogs/" },
          ]),
        )}
      />
    </SiteShell>
  )
}
