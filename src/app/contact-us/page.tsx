import type { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/PageHero"
import { SiteShell } from "@/components/SiteShell"
import { breadcrumb, jsonGraph, organizationId, webPage } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site"

const description =
  "Plan a private or small-group journey with Namaste India 24. Call, email or send a tour enquiry to our Udaipur team, available 24/7."

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description,
  path: "/contact-us/",
  image: "/images/btm-copy.jpg",
})

type SearchParams = {
  type?: string | string[]
  interest?: string | string[]
}

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams

  return (
    <SiteShell>
      <PageHero
        eyebrow="Let’s plan your adventure"
        title="Where would you like to go?"
        copy="Tell us what inspires you. A local expert will help shape the right journey."
        image="/images/btm-copy.jpg"
      />
      <section className="inner-section contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>A real person, from the first hello.</h2>
            <p>Our team is here every step of the way.</p>
            <div className="contact-cards">
              <a href={`tel:${PHONE_TEL}`}>
                <small>Call us</small>
                <b>{PHONE_DISPLAY}</b>
              </a>
              <a href={`mailto:${EMAIL}`}>
                <small>Email us</small>
                <b>{EMAIL}</b>
              </a>
              <div>
                <small>Visit us</small>
                <b>709 D, Sector 11, Udaipur</b>
              </div>
            </div>
          </div>
          <ContactForm
            initialType={first(params.type)}
            initialInterest={first(params.interest) ?? ""}
          />
        </div>
      </section>
      <JsonLd
        data={jsonGraph(
          webPage({
            name: "Contact Us",
            path: "/contact-us/",
            description,
            type: "ContactPage",
          }),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact-us/" },
          ]),
          {
            "@type": "ContactPage",
            name: "Contact Namaste India 24",
            url: "https://namasteindia24.com/contact-us/",
            mainEntity: { "@id": organizationId },
          },
        )}
      />
    </SiteShell>
  )
}
