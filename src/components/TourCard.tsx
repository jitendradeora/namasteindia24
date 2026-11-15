import Link from "next/link"
import { CoverImage } from "./CoverImage"
import { ArrowRightIcon, StarIcon } from "./icons"
import type { Tour } from "@/lib/tours"
import { tourPath } from "@/lib/tours"

export function TourCard({
  tour,
  showPerPerson = false,
}: {
  tour: Tour
  showPerPerson?: boolean
}) {
  const href = tourPath(tour.slug)

  return (
    <article className="tour-card">
      <div className="tour-image">
        <Link href={href} aria-label={`${tour.name} travel experience`}>
          <CoverImage
            src={tour.image}
            alt=""
            sizes="(max-width: 560px) 92vw, (max-width: 1000px) 46vw, 360px"
            quality={65}
          />
        </Link>
        <span>
          <StarIcon size={11} /> {tour.rating}
        </span>
      </div>
      <div className="tour-body">
        <p className="meta">
          {tour.days} days · {tour.region}
        </p>
        <h3>
          <Link href={href}>{tour.name}</Link>
        </h3>
        <div className="tags">
          {tour.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="price">
          <p>
            <small>From</small>
            <b>{tour.listPrice}</b>
            {showPerPerson ? <span> per person</span> : null}
          </p>
          <Link href={href} aria-label={`View ${tour.name}`}>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
