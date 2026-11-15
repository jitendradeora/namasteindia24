"use client"

import { useState } from "react"
import { ChevronDownIcon, PlusIcon } from "./icons"

type Item = readonly [string, string]

export function FaqList({
  items,
  variant,
}: {
  items: readonly Item[]
  variant: "home" | "page"
}) {
  const [open, setOpen] = useState(0)

  return (
    <div className={variant === "home" ? "accordion" : "faq-list"}>
      {items.map(([question, answer], index) => {
        const expanded = open === index
        const panelId = `${variant}-faq-${index}`
        if (variant === "home") {
          return (
            <div className={expanded ? "faq active" : "faq"} key={question}>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                <span>{question}</span>
                <b>
                  <ChevronDownIcon size={18} />
                </b>
              </button>
              <div id={panelId} role="region" aria-hidden={!expanded}>
                <p>{answer}</p>
              </div>
            </div>
          )
        }

        return (
          <article className={expanded ? "open" : ""} key={question}>
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              <span>{question}</span>
              <b aria-hidden="true">
                <PlusIcon size={16} />
              </b>
            </button>
            <div id={panelId} role="region" aria-hidden={!expanded}>
              <p>{answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
