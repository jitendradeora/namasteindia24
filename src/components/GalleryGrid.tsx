"use client"

import { useEffect, useRef, useState } from "react"
import { gallery } from "@/lib/content"
import { CoverImage } from "./CoverImage"
import { CloseIcon } from "./icons"

export function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (selected === null) return
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null)
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    window.addEventListener("keydown", close)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", close)
    }
  }, [selected])

  return (
    <>
      <section className="inner-section gallery-section">
        <div className="container gallery-grid">
          {gallery.map((item, index) => (
            <button
              className={`gallery-item${index === 0 || index === 5 ? " wide" : ""}`}
              key={item.src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Open ${item.alt}`}
            >
              <CoverImage
                src={item.src}
                alt={item.alt}
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
              <span>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {item.alt}
              </span>
            </button>
          ))}
        </div>
      </section>
      {selected !== null ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={gallery[selected].alt}
          onClick={() => setSelected(null)}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close image"
            className="gallery-close"
          >
            <CloseIcon size={22} />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-frame">
              <CoverImage
                src={gallery[selected].src}
                alt={gallery[selected].alt}
                sizes="(max-width: 1100px) 100vw, 1100px"
              />
            </div>
            <figcaption>{gallery[selected].alt}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
