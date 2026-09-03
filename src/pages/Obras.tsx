import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { artworks, obrasIntro, waLink } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { ClosingNoteReveal } from "../components/ClosingNoteReveal"
import { NextWorkTeaser } from "../home/NextWorkTeaser"

const series = ["Todas", ...Array.from(new Set(artworks.map((a) => a.series)))]

const waObras = waLink(
  "Hola Mashanta, me interesa tu obra. ¿Me compartes qué piezas están disponibles y sus precios?",
)

export function Obras() {
  const [filter, setFilter] = useState("Todas")
  const list = useMemo(
    () => (filter === "Todas" ? artworks : artworks.filter((a) => a.series === filter)),
    [filter],
  )

  return (
    <div className="paper-grain">
      <div className="border-b border-ink/10 bg-bone px-5 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-14">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <div>
            <h1 className="heading text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] text-balance text-ink">
              {obrasIntro.title}
            </h1>
            <p className="mt-4 max-w-xl text-ink-soft">{obrasIntro.description}</p>

            <div className="mt-6 border-t border-ink pt-3">
              <p className="label text-ink">Disponibilidad</p>
              <p className="mt-1.5 max-w-xl text-sm text-ink-soft">{obrasIntro.availabilityNote}</p>
            </div>

            <div className="mt-5 border-t border-ink pt-3">
              <p className="label text-ink">Sobre las copias</p>
              <p className="mt-1.5 max-w-xl text-sm text-ink-soft">{obrasIntro.originalityNote}</p>
            </div>

            <a
              href={waObras}
              target="_blank"
              rel="noreferrer"
              data-cursor="VER"
              className="label mt-7 inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              Preguntar por disponibilidad · WhatsApp →
            </a>
          </div>

          <ClosingNoteReveal
            label="Cada obra es única"
            text={obrasIntro.uniquenessNote}
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-10 flex flex-wrap gap-2">
          {series.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={`border px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-widest transition-colors ${
                filter === s
                  ? "border-ink bg-ink text-bone"
                  : "border-bone-shade-2 text-graphite hover:border-ink hover:text-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Masonry: cada obra conserva su proporción real, así el muro mezcla
            piezas grandes y pequeñas como una sala de exposición. */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:balance]">
          {list.map((art) => (
            <ArtworkCard key={art.slug} art={art} />
          ))}
        </div>
      </div>

      <NextWorkTeaser />
    </div>
  )
}

function ArtworkCard({ art }: { art: (typeof artworks)[number] }) {
  return (
    <div className="mb-8 break-inside-avoid">
      <Link to={`/obras/${art.slug}`} data-cursor="VER" className="group block">
        <div className="relative overflow-hidden border border-ink/15 shadow-soft transition-transform duration-300 group-hover:-translate-y-1.5">
          <ArtVisual image={art.image} seed={art.slug} accent={art.accent} alt={art.title} className="h-full w-full" />
        </div>
        <div className="mt-3 flex items-start justify-between gap-3 font-mono text-[0.68rem] uppercase tracking-wide text-graphite">
          <span className="text-ink transition-colors group-hover:text-rosa">{art.title}</span>
          {art.price && <span className="shrink-0">{art.price}</span>}
        </div>
        <div className="font-mono text-[0.62rem] uppercase tracking-wide text-graphite-soft">
          {art.technique} · {art.year} · {art.dimensions}
        </div>
      </Link>
    </div>
  )
}
