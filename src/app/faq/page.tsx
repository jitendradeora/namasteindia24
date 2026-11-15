import type { Metadata } from "next"
import Link from "next/link"
import { faqItems } from "@/lib/content"
import { breadcrumb, jsonGraph, webPage } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { ArrowRightIcon } from "@/components/icons"
import { FaqList } from "@/components/FaqList"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/PageHero"
import { SiteShell } from "@/components/SiteShell"

const description =
  "Answers about Namaste India 24 tours, bookings, custom itineraries, payments, changes and round-the-clock travel support."

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description,
  path: "/faq/",
  image: "/images/tm-copy.jpg",
})

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Helpful answers"
        title="Frequently asked questions"
        copy="Everything you need to know before planning a journey with Namaste India 24."
        image="/images/tm-copy.jpg"
      />
      <section className="inner-section faq-page">
        <div className="container faq-page-grid">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2>Planning should feel simple.</h2>
            <p>
              If your question is not answered here, our Udaipur-based team is available
              around the clock.
            </p>
            <Link className="button" href="/contact-us/">
              Ask our team <ArrowRightIcon size={16} />
            </Link>
          </div>
          <FaqList items={faqItems} variant="page" />
        </div>
      </section>
      <JsonLd
        data={jsonGraph(
          {
            ...webPage({
              name: "Frequently Asked Questions",
              path: "/faq/",
              description,
              type: "FAQPage",
            }),
            mainEntity: faqItems.map(([name, text]) => ({
              "@type": "Question",
              name,
              acceptedAnswer: { "@type": "Answer", text },
            })),
          },
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faq/" },
          ]),
        )}
      />
    </SiteShell>
  )
}
