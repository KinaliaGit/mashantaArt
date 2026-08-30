import type { CSSProperties } from "react"
import sig from "../assets/mashanta-signature.webp"

type WordmarkProps = {
  /** Width / positioning utilities. Height stays auto (keeps the aspect ratio). */
  className?: string
  style?: CSSProperties
  /**
   * Which surface the signature sits on:
   *  - "ink"   → rendered solid near-black (default; light surfaces)
   *  - "paper" → rendered solid white (dark surfaces)
   *  - "gold"  → the original gold handwriting, untouched
   */
  tone?: "ink" | "paper" | "gold"
  /** Kept for call-site compatibility — the signature no longer self-draws. */
  animate?: boolean
}

const toneFilter: Record<NonNullable<WordmarkProps["tone"]>, string | undefined> = {
  ink: "brightness(0) saturate(100%)",
  paper: "brightness(0) saturate(100%) invert(1)",
  gold: undefined,
}

/**
 * The "mashanta" signature — single source of truth for nav, hero and footer.
 * It's the artist's real handwriting; the redesign keeps it as the identity mark
 * but presents it plainly (no reveal animation) and lets it be tinted to sit on
 * either a light or a dark surface.
 */
export function Wordmark({ className = "", style, tone = "ink" }: WordmarkProps) {
  return (
    <img
      src={sig}
      alt="Mashanta"
      draggable={false}
      className={`pointer-events-none select-none ${className}`}
      style={{ height: "auto", filter: toneFilter[tone], ...style }}
    />
  )
}
