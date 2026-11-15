"use client"

import { FormEvent, useState } from "react"
import { enquiryTypes } from "@/lib/content"
import { WHATSAPP } from "@/lib/site"
import { ArrowRightIcon } from "./icons"

export function ContactForm({
  initialType = "General enquiry",
  initialInterest = "",
}: {
  initialType?: string
  initialInterest?: string
}) {
  const [opened, setOpened] = useState(false)
  const type = enquiryTypes.includes(initialType as (typeof enquiryTypes)[number])
    ? initialType
    : "General enquiry"

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      "Hello Namaste India 24,",
      `My name is ${data.get("name")}.`,
      `Email: ${data.get("email")}.`,
      `Enquiry type: ${data.get("type")}.`,
      data.get("interest") ? `Journey: ${data.get("interest")}.` : "",
      data.get("dates") ? `Preferred dates: ${data.get("dates")}.` : "",
      data.get("travellers") ? `Travellers: ${data.get("travellers")}.` : "",
      data.get("message") ? `Message: ${data.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n")
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
    setOpened(true)
  }

  return (
    <form onSubmit={submit} aria-label="Tour enquiry">
      <label>
        Enquiry type
        <select name="type" defaultValue={type}>
          {enquiryTypes.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        Your name
        <input name="name" required autoComplete="name" placeholder="How should we address you?" />
      </label>
      <label>
        Your email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </label>
      <label>
        Journey of interest (optional)
        <input name="interest" defaultValue={initialInterest} placeholder="Tour name or destination" />
      </label>
      <label>
        Preferred travel dates (optional)
        <input name="dates" placeholder="Month, year, or exact dates" />
      </label>
      <label>
        Number of travellers (optional)
        <input name="travellers" type="number" min="1" inputMode="numeric" placeholder="How many people?" />
      </label>
      <label>
        What are you imagining?
        <textarea name="message" rows={5} placeholder="Dates, group size, interests..." />
      </label>
      <button className="button" type="submit">
        Send one enquiry <ArrowRightIcon size={16} />
      </button>
      {opened ? (
        <p className="form-note" role="status">
          WhatsApp opened with your enquiry ready.
        </p>
      ) : null}
    </form>
  )
}
