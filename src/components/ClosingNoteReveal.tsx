import { useEffect, useRef, useState, type ReactNode } from "react"

const BAR_MS = 500
const TEXT_MS = 650
/** Safety-net only — the real trigger is the IntersectionObserver below, so
 * the bar never plays before the note has actually scrolled into view. This
 * just guarantees the content isn't stuck invisible if the browser somehow
 * never delivers an observer callback at all. */
const FALLBACK_MS = 4000

/**
 * Two-stage entrance: the rule grows upward first (transform-origin at its
 * foot, so it reads as rising off the baseline), then the line settles and
 * the text wipes in left to right, clipped rather than faded, so it feels
 * like it's being revealed, not just fading up. Used everywhere the site
 * calls out a "collection closing" note, so it reads as one consistent
 * signature moment rather than a one-off on the homepage.
 *
 * Same safety-net pattern as the rest of the site's entrance effects — always
 * visible by default and a timeout that forces it shown no matter what — but
 * unlike TagReveal's ancestor, there's no synchronous "already on screen at
 * mount" shortcut: that fired before the browser had painted the hidden
 * state at all, so the note simply appeared solved on page load instead of
 * animating. The observer is the only normal trigger now.
 */
export function ClosingNoteReveal({
  label,
  text,
  footer,
  className = "",
}: {
  label?: string
  text: string
  footer?: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [barIn, setBarIn] = useState(false)
  const [textIn, setTextIn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let textTimer: ReturnType<typeof setTimeout>
    const play = () => {
      setBarIn(true)
      textTimer = setTimeout(() => setTextIn(true), BAR_MS)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play()
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)

    const fallback = setTimeout(play, FALLBACK_MS)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
      clearTimeout(textTimer)
    }
  }, [])

  return (
    <div ref={ref} className={`flex h-fit gap-6 self-start ${className}`}>
      <span
        aria-hidden
        className="w-[2px] shrink-0 origin-bottom bg-rosa transition-transform ease-out"
        style={{ transform: barIn ? "scaleY(1)" : "scaleY(0)", transitionDuration: `${BAR_MS}ms` }}
      />
      <div
        className="transition-[clip-path] ease-out"
        style={{ clipPath: textIn ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)", transitionDuration: `${TEXT_MS}ms` }}
      >
        {label && <p className="label text-ink">{label}</p>}
        <p className={`text-[clamp(1rem,2vw,1.2rem)] leading-snug text-ink ${label ? "mt-2 text-base" : ""}`}>{text}</p>
        {footer}
      </div>
    </div>
  )
}
