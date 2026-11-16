import type { ReactNode } from "react"
import { BackToTop } from "./BackToTop"
import { SiteFooter } from "./SiteFooter"
import { SiteHeader } from "./SiteHeader"
import { SocialStrip } from "./SocialStrip"

export function SiteShell({
  variant = "inner",
  children,
}: {
  variant?: "home" | "inner"
  children: ReactNode
}) {
  return (
    <div className="site-shell">
      <SiteHeader variant={variant} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SocialStrip />
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
