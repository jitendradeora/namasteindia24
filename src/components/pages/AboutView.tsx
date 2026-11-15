import Link from "next/link"
import { values } from "@/lib/content"
import { breadcrumb, jsonGraph, webPage } from "@/lib/schema"
import { ArrowRightIcon } from "@/components/icons"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/PageHero"
import { SiteShell } from "@/components/SiteShell"

export function AboutView({ personal = false }: { personal?: boolean }) {
  const path = personal ? "/about-me/" : "/about-us/"
  const name = personal ? "Meet Sunny" : "About Us"
  const description = personal
    ? "Meet Suryabhan “Sunny” Purawat, founder of Namaste India 24, and how small-group and tailor-made India tours are planned."
    : "Meet Namaste India 24, the Udaipur team crafting private and small-group journeys through India with transparent pricing and local care."

  return (
    <SiteShell>
      <PageHero
        eyebrow={personal ? "Meet your host" : "About Namaste India 24"}
        title={
          personal
            ? "Travel is personal. So is our service."
            : "Travel shaped by trust, curiosity and care."
        }
        image={personal ? "/images/NI1.jpg" : "/images/ab-ni24-1.png"}
      />
      <section className="inner-section">
        <div className="container inner-split">
          <div>
            <p className="eyebrow">{personal ? "About me" : "Our story"}</p>
            <h2>
              {personal
                ? "I’m Suryabhan—most people call me Sunny."
                : "More than sightseeing"}
            </h2>
          </div>
          <div className="rich-copy">
            {personal ? (
              <>
                <p>
                  I’ve spent many years guiding guests from around the world and helping
                  them experience India in a way that feels real, personal and meaningful.
                </p>
                <p>
                  Travellers want fair pricing, honest planning, local experiences and
                  better service. I measure success by the friends we make across borders.
                </p>
                <p>
                  Today, my trusted team designs tailor-made tours and small groups of 5
                  to 15 people, so every guest gets personal attention.
                </p>
              </>
            ) : (
              <>
                <p>
                  From Jaisalmer’s golden sands to Jodhpur’s royal charm, we craft
                  journeys that capture India’s spirit, cultural warmth and breathtaking
                  landscapes.
                </p>
                <p>
                  Our tours are for travellers who want connection, stories and authentic
                  experiences that stay long after the trip ends.
                </p>
                <p>
                  Every journey reflects our commitment to quality, safety, comfort and
                  transparent planning.
                </p>
              </>
            )}
            <Link className="button" href="/contact-us/?type=Tailor-made%20tour">
              Start a conversation <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>
      {personal ? null : (
        <section className="values">
          <div className="container">
            <p className="eyebrow light">Why choose us</p>
            <h2>All the benefits, at a glance</h2>
            <div className="value-grid">
              {values.map(([index, title, copy]) => (
                <article key={index}>
                  <b>{index}</b>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <JsonLd
        data={jsonGraph(
          webPage({
            name,
            path,
            description,
            type: personal ? "ProfilePage" : "AboutPage",
          }),
          breadcrumb([
            { name: "Home", path: "/" },
            { name, path },
          ]),
          ...(personal
            ? [
                {
                  "@type": "Person",
                  name: "Suryabhan Singh Purawat",
                  alternateName: "Sunny",
                  jobTitle: "Founder",
                  worksFor: { "@id": "https://namasteindia24.com/#organization" },
                  url: "https://namasteindia24.com/about-me/",
                },
              ]
            : []),
        )}
      />
    </SiteShell>
  )
}
