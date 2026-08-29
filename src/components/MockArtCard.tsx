import { accentHex, type ArtAccent } from "../lib/data"

type MockArtCardProps = {
  accent: ArtAccent
  label?: string
  className?: string
}

/**
 * Dark stand-in for a missing photo — reads as a deliberate "piece not
 * photographed yet" card rather than a broken image. Canvas-weave hatch +
 * a dot in the piece's own accent, echoing the "color is borrowed from the
 * work" thesis even when there's no photo to borrow it from.
 */
export function MockArtCard({ accent, label, className = "" }: MockArtCardProps) {
  const hex = accentHex[accent]
  return (
    <div className={`relative flex items-end overflow-hidden bg-ink ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "repeating-linear-gradient(135deg, #F5F2EE 0, #F5F2EE 1px, transparent 1px, transparent 7px)" }}
      />
      <span className="absolute left-4 top-4 h-2 w-2 rounded-full" style={{ background: hex }} />
      {label && (
        <span className="relative w-full p-4 font-display text-[clamp(0.9rem,2.2vw,1.15rem)] uppercase leading-[1.05] text-bone-shade-2">
          {label}
        </span>
      )}
    </div>
  )
}
