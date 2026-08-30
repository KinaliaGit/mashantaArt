import { accentHex, type ArtAccent } from "../lib/data"

type MockArtCardProps = {
  accent: ArtAccent
  label?: string
  className?: string
}

/**
 * Stand-in for a photo that hasn't been taken yet — reads as a deliberate
 * "not photographed" card, not a broken image. Near-black ground, a faint
 * canvas-weave hatch and one small magenta mark.
 */
export function MockArtCard({ accent, label, className = "" }: MockArtCardProps) {
  const hex = accentHex[accent]
  return (
    <div className={`relative flex items-end overflow-hidden bg-ink ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 7px)",
        }}
      />
      <span className="absolute left-4 top-4 h-2 w-2" style={{ background: hex }} />
      {label && (
        <span className="relative w-full p-4 font-display text-[clamp(0.95rem,2.2vw,1.2rem)] leading-tight text-bone-shade-2">
          {label}
        </span>
      )}
    </div>
  )
}
