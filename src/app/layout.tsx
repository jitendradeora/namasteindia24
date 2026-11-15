import type { Metadata, Viewport } from "next"
import { DM_Sans, Marcellus } from "next/font/google"
import { JsonLd } from "@/components/JsonLd"
import { jsonGraph, organization, website } from "@/lib/schema"
import { SITE_NAME, SITE_URL } from "@/lib/site"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `India & Nepal Tours | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Discover tailor-made private tours and small-group journeys across India and Nepal with local experts, authentic experiences and 24/7 support.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "travel",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

export const viewport: Viewport = {
  themeColor: "#173d2d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${marcellus.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <JsonLd data={jsonGraph(organization, website)} />
      </body>
    </html>
  )
}
