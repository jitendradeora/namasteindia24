"use client"

import { FormEvent, useState } from "react"
import { ArrowRightIcon } from "@/components/icons"
import { WHATSAPP } from "@/lib/site"

export function NewsletterForm() {
  const [opened, setOpened] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim()
    const message = [
      "Hello Namaste India 24,",
      "Please add me to the newsletter.",
      `Email: ${email}`,
    ].join("\n")
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    )
    setOpened(true)
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div>
          <p className="eyebrow">Letters from India</p>
          <h2>A note when a journey is worth taking.</h2>
          <p>
            New departures, seasonal routes, and the occasional story from the road.
            About once a month.
          </p>
        </div>
        <form onSubmit={submit} aria-label="Newsletter">
          <label htmlFor="newsletter-email">Email address</label>
          <div className="newsletter-row">
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
            <button className="button" type="submit">
              Subscribe <ArrowRightIcon size={16} />
            </button>
          </div>
          {opened ? (
            <p className="form-note" role="status">
              WhatsApp opened with your subscription ready to send.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
