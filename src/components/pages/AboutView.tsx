import Link from "next/link"
import { aboutBenefits, aboutPrinciples, aboutStats } from "@/lib/content"
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
    : "Namaste India Tour & Travels crafts journeys through Rajasthan and India, with personal itineraries, transparent pricing, and round-the-clock support."

  return (
    <SiteShell>
      <PageHero
        eyebrow={personal ? "Meet your host" : "Namaste India Tour & Travels"}
        title={
          personal ? "Travel is personal. So is our service." : "About us at a glance"
        }
        copy={
          personal
            ? undefined
            : "Your trusted companion for exploring the vibrant heart of India."
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
                : "From golden sands to royal forts"}
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
                  From the golden sands of Jaisalmer to the royal charm of Jodhpur, we
                  craft journeys that capture Rajasthan’s spirit, its timeless forts,
                  cultural warmth, and breathtaking landscapes.
                </p>
                <p>
                  Our tours are designed for travellers who want more than sightseeing.
                  They want connection, stories, and authentic experiences that stay with
                  them long after the trip ends.
                </p>
              </>
            )}
            {personal ? (
              <Link className="button" href="/contact-us/?type=Tailor-made%20tour">
                Start a conversation <ArrowRightIcon size={16} />
              </Link>
            ) : null}
          </div>
        </div>
      </section>
      {personal ? null : (
        <section className="values">
          <div className="container">
            <p className="eyebrow light">Namaste India because…</p>
            <h2>All benefits at a glance</h2>
            <div className="value-grid benefit-grid">
              {aboutBenefits.map((benefit, index) => (
                <article key={benefit}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <h3>{benefit}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {personal ? null : (
        <section className="inner-section about-mission">
          <div className="container inner-split">
            <div>
              <p className="eyebrow">Namaste India Tour</p>
              <h2>Namaste India Tour & Travels</h2>
            </div>
            <div className="rich-copy">
              <p>
                At Namaste India, our mission is to redefine travel through trust,
                transparency, and passion. We aim to be India’s most reliable travel
                management company, setting benchmarks in professionalism and customer
                satisfaction.
              </p>
              <p>
                Every journey we plan reflects our commitment to quality, safety, and
                comfort. Whether it’s a family vacation, a honeymoon escape, or an
                adventure through the dunes, we ensure your travel experience is seamless
                and unforgettable.
              </p>
              <p>
                Our strength lies in our people, travel enthusiasts who go beyond
                itineraries to create experiences that inspire. With personalized planning
                and attention to detail, we make sure every traveler feels valued, cared
                for, and delighted.
              </p>
            </div>
          </div>
        </section>
      )}
      {personal ? null : (
        <section className="about-principles">
          <div className="container">
            <p className="eyebrow">Our core values</p>
            <ul className="principle-list">
              {aboutPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
            <p>
              These five principles guide everything we do, from designing routes to
              delivering exceptional service. We believe travel should not just move you
              across places, but connect you to the culture, people, and essence of India.
            </p>
          </div>
        </section>
      )}
      {personal ? null : (
        <section className="inner-section">
          <div className="container inner-split">
            <div>
              <p className="eyebrow">Why choose us?</p>
              <h2>Reliability, expertise, and care</h2>
              <p className="about-aside">
                We don’t just take you places. We create experiences tailored to your
                interests and comfort. Our local insight helps you discover hidden gems
                and authentic moments beyond the guidebooks.
              </p>
            </div>
            <div>
              <p className="eyebrow">At a glance</p>
              <div className="about-stats">
                {aboutStats.map(([figure, label]) => (
                  <article key={label}>
                    <b>{figure}</b>
                    <span>{label}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {personal ? null : (
        <section className="book-strip">
          <div className="container">
            <div>
              <p className="eyebrow">Join the journey</p>
              <h2>Let’s plan your next adventure.</h2>
              <p>
                Whether you dream of camel rides in Jaisalmer, sunrise views over the Taj
                Mahal, or a serene escape to the Himalayas, Namaste India Tour & Travels
                turns every trip into a lifelong memory. With Namaste India, you don’t
                just travel. You truly experience India.
              </p>
            </div>
            <Link className="button" href="/contact-us/?type=Tailor-made%20tour">
              Plan my tour <ArrowRightIcon size={16} />
            </Link>
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
