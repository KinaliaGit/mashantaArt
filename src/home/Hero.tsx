import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { artworks, currentCollection } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"

type FloatingPieceData = {
  art: (typeof artworks)[number]
  top?: string
  bottom?: string
  left?: string
  right?: string
  w: string
  rotate: number
  parallax: number
  hideOnMobile?: boolean
}

const floating: FloatingPieceData[] = [
  { art: artworks[0], top: "8%", left: "4%", w: "w-28 sm:w-40 md:w-52", rotate: 0, parallax: 60 },
  { art: artworks[2], top: "12%", right: "5%", w: "w-24 sm:w-36 md:w-44", rotate: 0, parallax: 90 },
  { art: artworks[5], bottom: "16%", left: "9%", w: "w-20 sm:w-28 md:w-36", rotate: 0, parallax: 40 },
  { art: artworks[6], bottom: "8%", right: "12%", w: "w-24 sm:w-32 md:w-40", rotate: 0, parallax: 70 },
  { art: artworks[3], top: "42%", left: "1%", w: "w-16 sm:w-24 md:w-28", rotate: 0, parallax: 110, hideOnMobile: true },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-ink text-bone">
      {floating.map((f) => (
        <FloatingPiece key={f.art.slug} f={f} progress={scrollYProgress} reduce={!!reduce} />
      ))}

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 text-center">
        <p className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-rosa">
          Colección {currentCollection.name} — en cierre
        </p>
        <h1
          className="font-display uppercase leading-[0.9] tracking-[0.01em] text-bone"
          style={{ fontSize: "clamp(3rem, 12vw, 9.5rem)" }}
        >
          Mashanta
          <br />
          Art
        </h1>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/colecciones"
            data-cursor="VER"
            className="border border-terracota bg-terracota px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-bone hover:text-ink hover:border-bone"
          >
            Ver colección
          </Link>
          <Link
            to="/pedidos"
            data-cursor="VER"
            className="border border-bone/50 px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-bone hover:bg-bone hover:text-ink"
          >
            Pedidos o comisiones
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-widest text-graphite-soft sm:block">
        Desliza para recorrer el estudio ↓
      </div>
    </section>
  )
}

function FloatingPiece({
  f,
  progress,
  reduce,
}: {
  f: (typeof floating)[number]
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  reduce: boolean
}) {
  const y = useTransform(progress, [0, 1], [0, f.parallax])

  return (
    <motion.div
      className={`absolute z-0 ${f.w} ${f.hideOnMobile ? "hidden lg:block" : ""}`}
      style={{
        top: f.top,
        left: "left" in f ? f.left : undefined,
        right: "right" in f ? f.right : undefined,
        bottom: "bottom" in f ? f.bottom : undefined,
        rotate: f.rotate,
        y: reduce ? 0 : y,
      }}
    >
      <Link to={`/colecciones/${f.art.slug}`} data-cursor="VER" className="group block">
        <div className="aspect-[4/5] w-full overflow-hidden border border-bone/25 shadow-soft transition-transform duration-300 group-hover:-translate-y-1">
          <ArtVisual image={f.art.image} seed={f.art.slug} accent={f.art.accent} alt={f.art.title} className="h-full w-full" />
        </div>
        {/* Anchored to the same edge as the piece itself (left vs right) so the
            tooltip grows toward hero center instead of off-screen on edge pieces. */}
        <div
          className={`pointer-events-none absolute top-full z-20 mt-2 w-max max-w-[180px] border border-ink bg-bone px-2 py-1 text-center font-mono text-[0.6rem] uppercase tracking-wide opacity-0 transition-opacity duration-150 group-hover:opacity-100 ${
            f.right !== undefined ? "right-0" : "left-0"
          }`}
        >
          {f.art.title} — {f.art.year}
        </div>
      </Link>
    </motion.div>
  )
}
