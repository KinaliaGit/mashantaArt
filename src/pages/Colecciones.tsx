import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { artworks, currentCollection, waLink } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { ClosingNoteReveal } from "../components/ClosingNoteReveal"
import { NextCollectionTeaser } from "../home/NextCollectionTeaser"

const series = ["Todas", ...Array.from(new Set(artworks.map((a) => a.series)))]

const statusLabel: Record<string, string> = {
  disponible: "Disponible",
  reservada: "Reservada",
  vendida: "Vendida",
  coleccion: "Colección privada",
}

const statusTone: Record<string, string> = {
  disponible: "text-verde",
  reservada: "text-ocre",
  vendida: "text-graphite",
  coleccion: "text-ultramar",
}

const waColeccion = waLink(
  `Hola Mashanta, me interesa la colección ${currentCollection.name}. ¿Me compartes disponibilidad y precios?`,
)

export function Colecciones() {
  const [filter, setFilter] = useState("Todas")
  const list = useMemo(() => (filter === "Todas" ? artworks : artworks.filter((a) => a.series === filter)), [filter])

  return (
    <div className="paper-grain">
      <div className="border-b border-ink/10 bg-bone px-5 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-14">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <div>
            <h1 className="heading text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] text-balance text-ink">
              {currentCollection.name}
            </h1>
            <p className="mt-4 text-ink-soft">{currentCollection.description}</p>
            <p className="mt-4 text-sm text-ink-soft">{currentCollection.descriptionLong}</p>

            <a
              href={waColeccion}
              target="_blank"
              rel="noreferrer"
              data-cursor="VER"
              className="label mt-7 inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              Preguntar por la colección · WhatsApp →
            </a>
          </div>

          <ClosingNoteReveal
            label={`Colección en cierre — ${currentCollection.year}`}
            text={currentCollection.closingNote}
            footer={currentCollection.discount && <p className="label mt-1 text-graphite">{currentCollection.discount}</p>}
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
                filter === s ? "border-ink bg-ink text-bone" : "border-bone-shade-2 text-graphite hover:border-ink hover:text-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:balance]">
          {list.map((art) => (
            // Plain (unrevealed) on purpose: entrance transitions on children of a
            // CSS multi-column container (columns-*) never settle in some browsers —
            // reproduced independently of scroll position or tab focus. Not worth the risk here.
            <div key={art.slug} className="mb-8 break-inside-avoid">
              <Link to={`/colecciones/${art.slug}`} data-cursor="VER" className="group block">
                <div className="relative overflow-hidden border border-ink/15 shadow-soft transition-transform duration-300 group-hover:-translate-y-1.5">
                  <ArtVisual image={art.image} seed={art.slug} accent={art.accent} alt={art.title} className="h-full w-full" />
                  <span className={`absolute right-2 top-2 border border-ink bg-bone px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide ${statusTone[art.status]}`}>
                    {statusLabel[art.status]}
                  </span>
                </div>
                <div className="mt-3 flex items-start justify-between gap-3 font-mono text-[0.68rem] uppercase tracking-wide text-graphite">
                  <span className="text-ink transition-colors group-hover:text-rosa">{art.title}</span>
                  {art.price && <span className="shrink-0">{art.price}</span>}
                </div>
                <div className="font-mono text-[0.62rem] uppercase tracking-wide text-graphite-soft">
                  {art.technique} — {art.year} — {art.dimensions}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <NextCollectionTeaser />
    </div>
  )
}
