import Image from "next/image"
import Link from "next/link"
import footerlogo from "@/assets/namaste-india-footer-logo.webp"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="foot-branda">
          <Link href="/" aria-label="Namaste India 24 home">
            <span className="brand-logo-frame">
              <Image
                src={footerlogo}
                alt="Namaste India 24"
                fill
                sizes="245px"
                className="brand-logo"
              />
            </span>
          </Link>
          <p>
            At Namaste India, our mission is to redefine travel through trust, transparency, and passion. We aim to be India’s most reliable travel management company, setting benchmarks in professionalism and customer satisfaction.
          </p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/about-us/">About us</Link>
          <Link href="/india-tour/">India tours</Link>
          <Link href="/nepal-tour/">Nepal tours</Link>
          <Link href="/our-gallery/">Gallery</Link>
        </div>
        <div>
          <p className="footer-label">Company</p>
          <Link href="/about-me/">Meet Sunny</Link>
          <Link href="/blogs/">Travel journal</Link>
          <Link href="/faq/">FAQs</Link>
          <Link href="/contact-us/">Contact us</Link>
        </div>
        <div>
          <p className="footer-label">Talk to us</p>
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>Email us</a>
          <p>709 D, Sector 11, Udaipur, Rajasthan, India</p>
        </div>
      </div>
      <div className="container copyright">
        <span>© 2026 Namaste India 24. All rights reserved.</span>
        <div>
          <Link href="/terms-and-conditions/">Terms &amp; Conditions</Link>
          <Link href="/privacy-policy/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
