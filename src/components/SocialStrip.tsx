import { SocialIcon } from "@/components/icons"
import { SOCIAL_LINKS } from "@/lib/site"

export function SocialStrip() {
  return (
    <nav className="social-strip" aria-label="Social media">
      <div className="container">
        <p>Follow the journey</p>
        <ul className="social-list">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <SocialIcon name={link.name} />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
