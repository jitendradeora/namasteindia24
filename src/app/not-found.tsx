import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "@/components/icons"
import { SiteShell } from "@/components/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "Page not found | Namaste India 24" },
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <SiteShell>
      <section className="not-found">
        <div>
          <p className="eyebrow">404 · Lost, but not alone</p>
          <h1>This road isn’t on our map.</h1>
          <p>Let’s get you back to the journeys we know and love.</p>
          <Link className="button" href="/">
            Return home <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
