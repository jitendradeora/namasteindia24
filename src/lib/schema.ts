import { organizationId, SITE_NAME, SITE_URL, websiteId } from "./site"

export { organizationId, websiteId }

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function webPage({
  name,
  path,
  description,
  type = "WebPage",
}: {
  name: string
  path: string
  description: string
  type?: string
}) {
  return {
    "@type": type,
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: "en",
    publisher: { "@id": organizationId },
  }
}

export function jsonGraph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  }
}

export const organization = {
  "@type": "TravelAgency",
  "@id": organizationId,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/brand/namaste-india-24-logo.webp`,
  image: `${SITE_URL}/images/rj-copy.jpg`,
  telephone: "+91-97993-58830",
  email: "info@namasteindia24.com",
  priceRange: "€€",
  description:
    "Tailor-made private tours and small-group journeys across India and Nepal.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "709 D, Sector 11",
    addressLocality: "Udaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Nepal" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-97993-58830",
    email: "info@namasteindia24.com",
    contactType: "customer support",
    availableLanguage: "English",
    areaServed: ["IN", "NP"],
  },
}

export const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: "en",
  publisher: { "@id": organizationId },
}
