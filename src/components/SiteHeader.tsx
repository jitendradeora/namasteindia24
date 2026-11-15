"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "@/assets/namaste-india-24-logo.webp"
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site"
import { ArrowRightIcon, CloseIcon, MenuIcon } from "./icons"

const homeLinks = [
  { href: "/#home", label: "Home" },
  { href: "/about-us/", label: "About us" },
  { href: "/india-tour/", label: "India tours" },
  { href: "/nepal-tour/", label: "Nepal tours" },
  { href: "/#reviews", label: "Guest stories" },
  { href: "/contact-us/", label: "Contact" },
]

const innerLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About us" },
  { href: "/india-tour/", label: "India tours" },
  { href: "/nepal-tour/", label: "Nepal tours" },
  { href: "/our-gallery/", label: "Gallery" },
  { href: "/blogs/", label: "Journal" },
  { href: "/contact-us/", label: "Contact" },
]

function normalize(path: string) {
  if (!path || path === "/") return "/"
  return path.endsWith("/") ? path : `${path}/`
}

export function SiteHeader({ variant = "inner" }: { variant?: "home" | "inner" }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const links = variant === "home" ? homeLinks : innerLinks
  const current = normalize(pathname)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container">
          <span>Private & small-group journeys across India and Nepal</span>
          <a href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY} · 24/7 support</a>
        </div>
      </div>
      <div className="container navbar">
        <Link
          className="brand"
          href={variant === "home" ? "/#home" : "/"}
          aria-label="Namaste India 24 home"
        >
          <span className="brand-logo-frame">
            <Image
              src={logo}
              alt="Namaste India 24"
              fill
              sizes="225px"
              className="brand-logo"
              loading="eager"
              fetchPriority="low"
            />
          </span>
        </Link>
        <nav id="primary-nav" className={open ? "open" : ""} aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.href === current ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link className="mobile-plan" href="/contact-us/" onClick={() => setOpen(false)}>
            Plan my tour
          </Link>
        </nav>
        <Link className="button nav-button" href="/contact-us/">
          Plan my tour <ArrowRightIcon size={16} />
        </Link>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          {open ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>
    </header>
  )
}
