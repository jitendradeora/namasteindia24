import Link from "next/link"
import { includedItems } from "@/lib/content"
import { liveItineraries } from "@/lib/itineraries"
import { breadcrumb, jsonGraph, organizationId, webPage } from "@/lib/schema"
import { SITE_URL } from "@/lib/site"
import { euroAmount, tourPath, type Tour } from "@/lib/tours"
import { ArrowRightIcon, CheckIcon } from "@/components/icons"
import { DayAccordion } from "@/components/DayAccordion"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/PageHero"
import { SiteShell } from "@/components/SiteShell"

export function TourView({ tour }: { tour: Tour }) {
  const path = tourPath(tour.slug)
  const itinerary = liveItineraries[path] ?? []
  const parent =
    tour.region === "India & Nepal"
      ? { name: "Nepal tours", path: "/nepal-tour/" }
      : { name: "India tours", path: "/india-tour/" }

  return (
    <SiteShell>
      <PageHero
        eyebrow={`${tour.days} days · Small group or private`}
        title={tour.title}
        copy={tour.intro}
        image={tour.hero}
      />
      <section className="tour-facts">
        <div className="container">
          <div>
            <small>Duration</small>
            <b>{tour.days} days</b>
          </div>
          <div>
            <small>From / person</small>
            <b>{tour.price}</b>
          </div>
          <div>
            <small>Group size</small>
            <b>5–15 guests</b>
          </div>
          <div>
            <small>Travel style</small>
            <b>Private A/C coach</b>
          </div>
        </div>
      </section>
      <section className="inner-section">
        <div className="container inner-split">
          <div>
            <p className="eyebrow">The journey</p>
            <h2>A route rich in contrast</h2>
          </div>
          <div className="rich-copy">
            <p>{tour.intro}</p>
            <div className="route-line">
              <small>Route</small>
              <b>{tour.route}</b>
            </div>
          </div>
        </div>
      </section>
      <section className="inner-section live-itinerary" id="itinerary">
        <div className="container">
          <div className="inner-heading">
            <div>
              <p className="eyebrow">Travel description</p>
              <h2>Day-by-Day Itinerary</h2>
            </div>
          </div>
          <DayAccordion sections={itinerary} />
        </div>
      </section>
      <section className="included">
        <div className="container">
          <div>
            <p className="eyebrow light">Travel with confidence</p>
            <h2>Thoughtfully included</h2>
          </div>
          <div className="included-grid">
            {includedItems.map((item) => (
              <p key={item}>
                <CheckIcon size={16} />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="book-strip">
        <div className="container">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Make this journey yours</h2>
          </div>
          <Link
            className="button"
            href={`/contact-us/?type=Tour%20enquiry&interest=${encodeURIComponent(tour.name)}`}
          >
            Talk to a local expert <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>
      <JsonLd
        data={jsonGraph(
          webPage({ name: tour.title, path, description: tour.description }),
          breadcrumb([
            { name: "Home", path: "/" },
            parent,
            { name: tour.name, path },
          ]),
          {
            "@type": "TouristTrip",
            name: tour.title,
            description: tour.intro,
            url: `${SITE_URL}${path}`,
            image: `${SITE_URL}${tour.hero}`,
            touristType: "Small group and private cultural travellers",
            itinerary: {
              "@type": "ItemList",
              numberOfItems: tour.stops.length,
              itemListElement: tour.stops.map((stop, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: `${stop.days}: ${stop.name}`,
                description: stop.copy,
              })),
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: euroAmount(tour.price),
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}${path}`,
            },
            provider: { "@id": organizationId },
          },
        )}
      />
    </SiteShell>
  )
}
