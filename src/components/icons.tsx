import type { ReactNode, SVGProps } from "react"

export type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Icon({
  size = 16,
  children,
  className,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className ? `icon ${className}` : "icon"}
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  )
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </Icon>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </Icon>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 9l6 6 6-6" />
    </Icon>
  )
}

export function PlusIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Icon>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12.5l4.2 4.2L19 7.5" />
    </Icon>
  )
}

export function CrosshairIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v4.2M12 17.3V21.5M2.5 12h4.2M17.3 12H21.5" />
    </Icon>
  )
}

export function SupportIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
    </Icon>
  )
}

export function DiamondIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.2l8 8.8-8 8.8-8-8.8 8-8.8z" />
    </Icon>
  )
}

export function TargetIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  )
}

const socialMarks = {
  Facebook: (
    <path
      fill="currentColor"
      d="M14.8 8.4h-2V7.1c0-.5.3-.6.6-.6H14.7V4h-1.9C10.6 4 9.8 5.6 9.8 7v1.4H8v2.6h1.8V20h2.6v-9h2.1l.3-2.6z"
    />
  ),
  Instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  Pinterest: (
    <path
      fill="currentColor"
      d="M12 3.2C7.8 3.2 5.2 6.3 5.2 9.8c0 2.2 1.2 3.5 2 3.5.3 0 .5-.8.5-1 0-.3-.7-.9-.7-2.1 0-2.4 1.9-4.6 4.8-4.6 2.6 0 4.1 1.6 4.1 3.8 0 2.8-1.3 5.2-3.1 5.2-1 0-1.8-.9-1.5-1.9.3-1.2.8-2.5.8-3.4 0-.8-.4-1.4-1.3-1.4-1 0-1.8 1-1.8 2.4 0 .9.3 1.5.3 1.5L8.2 17c-.3 1.4-.1 3.2 0 3.4.1.1.2 0 .2-.1.3-.4 1.1-1.4 1.5-2.8.2-.6.8-2.3.8-2.3.4.7 1.5 1.4 2.8 1.4 3.6 0 6.2-3.3 6.2-7.8 0-3.9-3.2-6.6-7.7-6.6z"
    />
  ),
  YouTube: (
    <>
      <rect x="2.8" y="6.2" width="18.4" height="11.6" rx="3" fill="currentColor" />
      <path d="M10.4 9.4v5.2l4.8-2.6-4.8-2.6z" fill="#173d2d" />
    </>
  ),
} as const

export function SocialIcon({
  name,
  size = 18,
}: {
  name: keyof typeof socialMarks
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="icon"
    >
      {socialMarks[name]}
    </svg>
  )
}

export function StarIcon({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className ? `icon ${className}` : "icon"}
      fill="currentColor"
      {...props}
    >
      <path d="M12 2.4l2.6 5.4 6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.4 8.7l6-.9L12 2.4z" />
    </svg>
  )
}

export function StarRating({
  count = 5,
  size = 12,
}: {
  count?: number
  size?: number
}) {
  return (
    <span className="stars" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, index) => (
        <StarIcon key={index} size={size} />
      ))}
    </span>
  )
}
