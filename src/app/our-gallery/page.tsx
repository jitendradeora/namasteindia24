import type { Metadata } from "next"
import { gallery } from "@/lib/content"
import { breadcrumb, jsonGraph, webPage } from "@/lib/schema"
import { SITE_URL } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"
import { GalleryGrid } from "@/components/GalleryGrid"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/PageHero"
import { SiteShell } from "@/components/SiteShell"

const description =
  "See real guest photos from Namaste India 24 journeys across Rajasthan, family holidays, desert evenings and shared meals."

export const metadata: Metadata = pageMetadata({
  title: "Travel Gallery",
  description,
  path: "/our-gallery/",
  image: gallery[1].src,
})

export default function GalleryPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Real journeys, real guests"
        title="Stories in pictures"
        copy="A glimpse of the places, people and moments that make each journey unforgettable."
        image={gallery[1].src}
      />
      <section className="gallery-intro">
        <div className="container">
          <div>
            <p className="eyebrow">India, as our guests lived it</p>
            <h2>Not staged. Not rushed. Just real moments.</h2>
          </div>
          <p>
            From shared meals and desert evenings to family adventures and Rajasthan’s
            living heritage, every frame comes from a journey made personal.
          </p>
        </div>
      </section>
      <GalleryGrid />
      <JsonLd
        data={jsonGraph(
          webPage({
            name: "Travel Gallery",
            path: "/our-gallery/",
            description,
            type: "ImageGallery",
          }),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/our-gallery/" },
          ]),
          {
            "@type": "ImageGallery",
            name: "Namaste India 24 travel gallery",
            description,
            url: `${SITE_URL}/our-gallery/`,
            image: gallery.map((item) => ({
              "@type": "ImageObject",
              contentUrl: `${SITE_URL}${item.src}`,
              name: item.alt,
            })),
          },
        )}
      />
    </SiteShell>
  )
}
