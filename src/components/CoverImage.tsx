import Image, { type ImageProps } from "next/image"

type CoverImageProps = Omit<ImageProps, "fill" | "width" | "height"> & {
  alt: string
}

export function CoverImage({
  alt,
  className,
  sizes = "100vw",
  priority,
  ...props
}: CoverImageProps) {
  return (
    <Image
      fill
      alt={alt}
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      className={className ? `cover-image ${className}` : "cover-image"}
      {...props}
    />
  )
}
