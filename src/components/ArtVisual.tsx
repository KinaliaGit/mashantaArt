import { useState } from "react"
import { MockArtCard } from "./MockArtCard"
import type { ArtAccent } from "../lib/data"

type ArtVisualProps = {
  image?: string
  seed: string
  accent: ArtAccent
  alt: string
  className?: string
}

/**
 * Fills the same slot everywhere in the site: a real photo when one loads,
 * a dark mock card otherwise — whether that's because no image was set or
 * because the network request for it failed (blocked, offline, rate-limited).
 * Never leaves an empty or broken box in the layout.
 */
export function ArtVisual({ image, seed, accent, alt, className = "" }: ArtVisualProps) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <img
        key={seed}
        src={image}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`object-cover ${className}`}
      />
    )
  }

  return <MockArtCard accent={accent} label={alt} className={className} />
}
