"use client"

import { useState } from "react"
import type { ItinerarySection } from "@/lib/itineraries"
import { PlusIcon } from "./icons"

export function DayAccordion({ sections }: { sections: ItinerarySection[] }) {
  const [openDay, setOpenDay] = useState(0)

  return (
    <div className="day-accordion">
      {sections.map((section, index) => {
        const open = openDay === index
        const panelId = `day-${index}`
        return (
          <article className={open ? "open" : ""} key={`${section.summary}-${index}`}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenDay(open ? -1 : index)}
            >
              <span>{section.summary}</span>
              <b aria-hidden="true">
                <PlusIcon size={16} />
              </b>
            </button>
            <div className="day-content" id={panelId} role="region" aria-hidden={!open}>
              <div>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.summary}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
