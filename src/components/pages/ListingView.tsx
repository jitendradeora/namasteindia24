import { breadcrumb, jsonGraph, webPage } from "@/lib/schema"
import { SITE_URL } from "@/lib/site"
import { tours } from "@/lib/tours"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/PageHero"
import { SiteShell } from "@/components/SiteShell"
import { TourCard } from "@/components/TourCard"

export function ListingView({ nepal = false }: { nepal?: boolean }) {
  const shown = nepal ? tours.filter((tour) => tour.region === "India & Nepal") : tours
  const path = nepal ? "/nepal-tour/" : "/india-tour/"
  const title = nepal ? "India & Nepal Tours" : "India Tour Packages"
  const description = nepal
    ? "Explore India and Nepal journeys with Himalayan lakes, jungle safaris, Kathmandu Valley and North India’s heritage cities."
    : "Browse private and small-group India tour packages, from Rajasthan and Gujarat to North India, the Taj Mahal and Varanasi."

  return (
    <SiteShell>
      <PageHero
        eyebrow="Handpicked journeys"
        title={`${nepal ? "Nepal" : "India"} tours, made personal`}
        copy={
          nepal
            ? "Himalayan landscapes and living heritage, paired with a thoughtfully paced journey through India."
            : "Royal cities, sacred rivers, wildlife and everyday culture—explored with people who call India home."
        }
        image={nepal ? "/images/NI6-1.jpg" : "/images/tm-copy.jpg"}
      />
      <section className="inner-section">
        <div className="container">
          <div className="inner-heading">
            <div>
              <p className="eyebrow">Handpicked travel</p>
              <h2>Travel deeper, not faster</h2>
            </div>
            <p>Book an itinerary as shown or tailor it around your own pace and interests.</p>
          </div>
          <div className="tour-grid">
            {shown.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>
      <JsonLd
        data={jsonGraph(
          webPage({ name: title, path, description }),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: nepal ? "Nepal tours" : "India tours", path },
          ]),
          {
            "@type": "ItemList",
            name: title,
            itemListElement: shown.map((tour, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tour.name,
              url: `${SITE_URL}/${tour.slug}/`,
            })),
          },
        )}
      />
    </SiteShell>
  )
}
