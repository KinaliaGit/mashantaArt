import type { CSSProperties } from "react"
import sig from "../assets/mashanta-signature.webp"

type WordmarkProps = {
  /** Width / positioning utilities. Height stays auto (keeps the aspect ratio). */
  className?: string
  style?: CSSProperties
  /** When true, the signature "writes itself" once on mount (hero use). */
  animate?: boolean
}

/**
 * The "mashanta" signature — single source of truth for nav, hero and footer.
 * It's the artist's real handwriting (gold on transparent), so it is NOT
 * recoloured; it sits on dark surfaces everywhere it's used.
 *
 * When `animate`, an SVG mask made of two hand-traced centre-lines (the word,
 * then the long t-bar flourish) is revealed with `stroke-dashoffset`, so the
 * image appears to be drawn in writing order. `prefers-reduced-motion` shows it
 * already finished.
 */
export function Wordmark({ className = "", style, animate = false }: WordmarkProps) {
  if (!animate) {
    return (
      <img
        src={sig}
        alt="Mashanta"
        draggable={false}
        className={`pointer-events-none select-none ${className}`}
        style={{ height: "auto", ...style }}
      />
    )
  }

  return (
    <svg
      viewBox="0 0 1400 534"
      className={`wordmark-draw ${className}`}
      style={style}
      role="img"
      aria-label="Mashanta"
    >
      <defs>
        <mask id="wordmark-reveal" maskUnits="userSpaceOnUse">
          <path
            className="wm-stroke wm-stroke-1"
            pathLength={1}
            d="M18 430 C 24 300, 26 200, 30 175 C 36 300, 44 420, 52 452
               C 70 250, 92 150, 110 150 C 124 260, 136 400, 140 458
               C 150 250, 172 150, 188 150 C 200 260, 206 400, 210 452
               C 250 300, 285 175, 300 165 C 260 280, 240 380, 235 420
               C 245 448, 275 452, 300 452 C 315 300, 322 200, 325 175
               C 330 300, 334 420, 335 455
               C 370 260, 405 165, 418 165 C 380 230, 358 270, 355 285
               C 375 340, 405 390, 420 410 C 428 445, 400 458, 390 460
               C 460 250, 545 45, 585 35 C 566 160, 552 320, 545 455
               C 560 260, 605 175, 622 175 C 634 300, 642 420, 645 455
               C 680 260, 706 165, 720 165 C 682 270, 668 380, 665 420
               C 685 448, 706 452, 720 452 C 735 300, 742 200, 745 175
               C 750 300, 754 420, 755 455
               C 768 260, 782 175, 786 175 C 790 300, 798 420, 800 455
               C 815 270, 838 175, 852 175 C 860 300, 868 420, 870 455
               C 885 260, 918 90, 935 55 C 928 260, 926 400, 924 470
               C 1000 360, 1120 200, 1180 155 C 1130 250, 1108 350, 1105 420
               C 1130 450, 1160 452, 1172 452 C 1195 320, 1206 230, 1210 180
               C 1222 300, 1236 400, 1250 430 C 1290 452, 1320 448, 1345 420"
          />
          <path
            className="wm-stroke wm-stroke-2"
            pathLength={1}
            d="M950 122 C 1080 106, 1240 96, 1400 86"
          />
        </mask>
      </defs>
      <image href={sig} x="0" y="0" width="1400" height="534" mask="url(#wordmark-reveal)" />
    </svg>
  )
}
