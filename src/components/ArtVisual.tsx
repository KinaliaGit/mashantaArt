import { useState } from "react"
import { MockArtCard } from "./MockArtCard"
import type { ArtAccent } from "../lib/data"

type ArtVisualProps = {
  image?: string
  seed: string
  accent: ArtAccent
  alt: string
  className?: string
  /**
   * "cover" (default) fills the box and crops — right for a grid thumbnail,
   * where every card needs to line up. "contain" shows the whole piece
   * uncropped, letterboxed on its own background — right for a detail view,
   * where cropping the actual artwork would defeat the point of looking at it.
   */
  fit?: "cover" | "contain"
}

/**
 * Fills the same slot everywhere in the site: a real photo when one loads,
 * a dark mock card otherwise — whether that's because no image was set or
 * because the network request for it failed (blocked, offline, rate-limited).
 * Never leaves an empty or broken box in the layout.
 */
export function ArtVisual({ image, seed, accent, alt, className = "", fit = "cover" }: ArtVisualProps) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <img
        key={seed}
        src={image}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      />
    )
  }

  return <MockArtCard accent={accent} label={alt} className={className} />
}
