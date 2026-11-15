import type { Metadata } from "next"
import Link from "next/link"
import { termsSections } from "@/lib/content"
import { privacyContentHtml } from "@/lib/siteContent"
import { breadcrumb, jsonGraph, webPage } from "@/lib/schema"
import { prepareHtml } from "@/lib/html"
import { pageMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/PageHero"
import { SiteShell } from "@/components/SiteShell"

const pages = {
  terms: {
    title: "Terms & Conditions",
    path: "/terms-and-conditions/",
    description:
      "Read the terms for Namaste India 24 enquiries, bookings, payments, changes, cancellations and traveller responsibilities.",
    copy: "Important information about enquiries, bookings, payments, changes, and travel responsibilities.",
  },
  privacy: {
    title: "Privacy Policy",
    path: "/privacy-policy/",
    description:
      "How Namaste India 24 collects, uses, protects and shares information from the website and travel enquiries.",
    copy: "How we collect, use, store, and protect the information you share with us.",
  },
} as const

export function legalMetadata(kind: keyof typeof pages): Metadata {
  const page = pages[kind]
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    image: "/images/ab-ni24-1.png",
  })
}

export function LegalView({ kind }: { kind: keyof typeof pages }) {
  const page = pages[kind]
  const privacy = kind === "privacy"

  return (
    <SiteShell>
      <PageHero
        eyebrow="Namaste India 24"
        title={page.title}
        copy={page.copy}
        image="/images/ab-ni24-1.png"
      />
      <section className="inner-section legal-page">
        <div className="container legal-layout">
          <aside>
            <p className="eyebrow">Legal information</p>
            <Link href="/terms-and-conditions/">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/contact-us/">Contact us</Link>
          </aside>
          {privacy ? (
            <article
              className="prose"
              dangerouslySetInnerHTML={{ __html: prepareHtml(privacyContentHtml) }}
            />
          ) : (
            <article className="prose">
              <p>
                These Terms &amp; Conditions explain the basis on which Namaste India 24
                provides travel planning and related services. By confirming a booking,
                you agree to the terms below.
              </p>
              {termsSections.map(([title, copy]) => (
                <section key={title}>
                  <h2>{title}</h2>
                  <p>{copy}</p>
                </section>
              ))}
            </article>
          )}
        </div>
      </section>
      <JsonLd
        data={jsonGraph(
          webPage({ name: page.title, path: page.path, description: page.description }),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: page.title, path: page.path },
          ]),
        )}
      />
    </SiteShell>
  )
}
