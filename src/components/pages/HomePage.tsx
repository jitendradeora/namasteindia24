import Link from "next/link"
import { benefits, homeFaqs, reviews } from "@/lib/content"
import { breadcrumb, jsonGraph, webPage } from "@/lib/schema"
import { SITE_URL } from "@/lib/site"
import { tours } from "@/lib/tours"
import { CoverImage } from "@/components/CoverImage"
import { NewsletterForm } from "@/components/NewsletterForm"
import { FaqList } from "@/components/FaqList"
import { JsonLd } from "@/components/JsonLd"
import { SiteShell } from "@/components/SiteShell"
import { TourCard } from "@/components/TourCard"
import {
  ArrowRightIcon,
  CrosshairIcon,
  DiamondIcon,
  StarRating,
  SupportIcon,
  TargetIcon,
} from "@/components/icons"

const benefitIcons = {
  crosshair: CrosshairIcon,
  support: SupportIcon,
  diamond: DiamondIcon,
  target: TargetIcon,
}

const description =
  "Discover tailor-made private tours and small-group journeys across India and Nepal with local experts, authentic experiences and 24/7 support."

export function HomePage() {
  return (
    <SiteShell variant="home">
      <section className="hero" id="home">
        <CoverImage
          src="/images/rj-copy.jpg"
          alt="Rajasthan tour experience for families"
          priority
          className="hero-cover"
          sizes="100vw"
        />
        <div className="shade" />
        <div className="container hero-content">
          <p className="eyebrow light">Travel with heart. Discover with soul.</p>
          <h1>
            India, deeply felt.
            <br />
            Journeys, beautifully made.
          </h1>
          <p className="lead">
            Tailor-made private tours and vibrant group adventures, crafted by local
            experts with 15+ years of experience.
          </p>
          <div className="hero-actions">
            <a className="button" href="#tours">
              Explore our journeys <ArrowRightIcon size={16} />
            </a>
            <Link className="underlink" href="/contact-us/?type=Tailor-made%20tour">
              Create a custom trip <ArrowRightIcon size={16} />
            </Link>
          </div>
          <div className="proof">
            <div>
              <b>4.9</b>
              <span>
                <StarRating size={10} />
                <small>Guest rating</small>
              </span>
            </div>
            <div>
              <b>15+</b>
              <span>
                <small>Years of local expertise</small>
              </span>
            </div>
            <div>
              <b>24/7</b>
              <span>
                <small>Support while you travel</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="container split">
          <div>
            <p className="eyebrow">Welcome to Namaste India 24</p>
            <h2>Your local friends in India</h2>
          </div>
          <div className="copy">
            <p>
              We believe every journey should touch your heart, open your mind, and
              leave you with stories that last a lifetime. We are more than a travel
              agency—we are passionate travellers, storytellers, and your local friends
              in India.
            </p>
            <p>
              From Rajasthan’s majestic forts to the spiritual banks of the Ganges, we
              take you beyond the usual routes to experience the real India.
            </p>
            <Link className="underlink dark" href="/about-us/">
              Meet our story <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section tours" id="tours">
        <div className="container">
          <div className="heading">
            <div>
              <p className="eyebrow">Handpicked travel experiences</p>
              <h2>Journeys worth taking</h2>
            </div>
            <p>
              Thoughtfully curated with a balance of culture, comfort, and meaningful
              exploration.
            </p>
          </div>
          <div className="tour-grid">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} showPerPerson />
            ))}
          </div>
        </div>
      </section>

      <section className="why">
        <div className="container split">
          <div>
            <p className="eyebrow light">Why travel with us</p>
            <h2>
              Care in every detail.
              <br />
              Freedom in every day.
            </h2>
            <p className="soft">
              Every stay, experience and transfer is planned with authenticity and your
              comfort in mind.
            </p>
          </div>
          <div className="benefits">
            {benefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon]
              return (
                <article key={benefit.title}>
                  <span className="benefit-icon">
                    <Icon size={26} />
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.copy}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="container">
          <div className="heading center">
            <div>
              <p className="eyebrow">Guest stories</p>
              <h2>Travel memories that stay</h2>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <blockquote key={review.name}>
                <StarRating />
                <p>“{review.quote}”</p>
                <footer>
                  <b>{review.name}</b>
                  <small>{review.trip}</small>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section faqs">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2>Questions, answered</h2>
            <p className="soft">
              Still wondering about something? Our local team is always happy to help.
            </p>
            <Link className="underlink dark" href="/contact-us/">
              Ask us anything <ArrowRightIcon size={16} />
            </Link>
          </div>
          <FaqList items={homeFaqs} variant="home" />
        </div>
      </section>

      <section className="final-cta">
        <CoverImage
          src="/images/vn1-copy-3.jpg"
          alt="Spiritual sunrise on the banks of the Ganges in Varanasi"
          sizes="100vw"
        />
        <div className="shade" />
        <div className="container">
          <p className="eyebrow light">Your journey begins here</p>
          <h2>
            Ready to see India
            <br />
            your way?
          </h2>
          <p>
            Tell us what inspires you. We’ll turn it into a journey that feels entirely
            your own.
          </p>
          <Link className="button" href="/contact-us/">
            Start planning <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>
      <NewsletterForm />
      <JsonLd
        data={jsonGraph(
          webPage({
            name: "India & Nepal Tours",
            path: "/",
            description,
          }),
          breadcrumb([{ name: "Home", path: "/" }]),
          {
            "@type": "ItemList",
            name: "India and Nepal journeys",
            itemListElement: tours.map((tour, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tour.name,
              url: `${SITE_URL}/${tour.slug}/`,
            })),
          },
          {
            "@type": "FAQPage",
            mainEntity: homeFaqs.map(([name, text]) => ({
              "@type": "Question",
              name,
              acceptedAnswer: { "@type": "Answer", text },
            })),
          },
          ...reviews.map((review) => ({
            "@type": "Review",
            author: { "@type": "Person", name: review.name },
            reviewBody: review.quote,
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            itemReviewed: { "@id": `${SITE_URL}/#organization` },
          })),
        )}
      />
    </SiteShell>
  )
}
