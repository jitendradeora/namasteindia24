import { CoverImage } from "./CoverImage"

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string
  title: string
  copy?: string
  image: string
}) {
  return (
    <section className="page-hero">
      <CoverImage src={image} alt="" priority sizes="100vw" />
      <div className="shade" />
      <div className="container">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        {copy ? <p>{copy}</p> : null}
      </div>
    </section>
  )
}
