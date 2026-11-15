import Link from "next/link"
import { blogPost } from "@/lib/siteContent"
import { breadcrumb, jsonGraph, organizationId, webPage } from "@/lib/schema"
import { SITE_NAME, SITE_URL } from "@/lib/site"
import { prepareHtml } from "@/lib/html"
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons"
import { CoverImage } from "@/components/CoverImage"
import { JsonLd } from "@/components/JsonLd"
import { SiteShell } from "@/components/SiteShell"

const articlePath = `/${blogPost.slug}/`

export function BlogArticle() {
  return (
    <SiteShell>
      <section className="article-hero">
        <CoverImage
          src="/images/nepal-trip-planning-guide.webp"
          alt="Nepal trip planning guide"
          priority
          sizes="100vw"
        />
        <div className="shade" />
        <div className="container">
          <Link href="/blogs/" className="article-back">
            <ArrowLeftIcon size={16} /> Travel journal
          </Link>
          <p className="eyebrow light">Nepal travel guide</p>
          <h1>{blogPost.title}</h1>
          <time dateTime={blogPost.date}>Published February 2, 2026</time>
        </div>
      </section>
      <section className="article-layout">
        <article
          className="article-content"
          dangerouslySetInnerHTML={{ __html: prepareHtml(blogPost.contentHtml) }}
        />
        <aside>
          <p className="eyebrow">Plan with a local</p>
          <h2>Make Nepal part of your journey.</h2>
          <p>
            Explore our India and Nepal itineraries or ask us to tailor one around your
            dates and interests.
          </p>
          <Link className="button" href="/contact-us/?type=Tailor-made%20tour">
            Start planning <ArrowRightIcon size={16} />
          </Link>
        </aside>
      </section>
      <JsonLd
        data={jsonGraph(
          {
            ...webPage({
              name: blogPost.title,
              path: articlePath,
              description: blogPost.excerpt,
              type: "BlogPosting",
            }),
            headline: blogPost.title,
            datePublished: blogPost.date,
            dateModified: blogPost.date,
            image: `${SITE_URL}/images/nepal-trip-planning-guide.webp`,
            mainEntityOfPage: { "@id": `${SITE_URL}${articlePath}#webpage` },
            isPartOf: { "@id": `${SITE_URL}/blogs/#webpage` },
            author: { "@id": organizationId },
            publisher: {
              "@type": "Organization",
              "@id": organizationId,
              name: SITE_NAME,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/brand/namaste-india-24-logo.webp`,
              },
            },
          },
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Travel journal", path: "/blogs/" },
            { name: "Nepal trip planning guide", path: articlePath },
          ]),
        )}
      />
    </SiteShell>
  )
}
