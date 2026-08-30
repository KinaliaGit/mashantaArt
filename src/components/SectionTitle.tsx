/**
 * The centered wall-label device Maruani Mercier hangs its exhibition-list
 * sections on: a hairline either side of a short tracked caption. Reused
 * here to break up the long stretches of plain white on the listing pages —
 * "sin chiste" was the complaint, and a page of nothing but stacked text
 * blocks reads flatter than one with a couple of these marking a turn.
 */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5">
      <span className="h-px flex-1 bg-ink/15" aria-hidden />
      <span className="label shrink-0 text-graphite">{children}</span>
      <span className="h-px flex-1 bg-ink/15" aria-hidden />
    </div>
  )
}
