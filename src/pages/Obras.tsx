import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { artworks } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"

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

export function Obras() {
  const [filter, setFilter] = useState("Todas")
  const list = useMemo(() => (filter === "Todas" ? artworks : artworks.filter((a) => a.series === filter)), [filter])

  return (
    <div className="paper-grain">
      <header className="border-b border-ink px-5 pb-10 pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Obras</span>
          <h1 className="mt-3 font-display text-[clamp(2.6rem,9vw,6rem)] uppercase leading-[0.86] text-balance">
            Cada pieza,
            <br />
            catalogada
          </h1>
          <p className="mt-4 max-w-md text-ink-soft">
            Óleo, acuarela, restauración e ilustración. Técnica, año y medidas de cada obra, como en la pared de un estudio real.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
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
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:balance]">
          {list.map((art, i) => (
            // Plain (unrevealed) on purpose: entrance transitions on children of a
            // CSS multi-column container (columns-*) never settle in some browsers —
            // reproduced independently of scroll position or tab focus. Not worth the risk here.
            <div key={art.slug} className="mb-8 break-inside-avoid">
              <Link to={`/obras/${art.slug}`} data-cursor="VER" className="group block" style={{ transform: `rotate(${i % 2 === 0 ? -1.4 : 1.2}deg)` }}>
                <div
                  className={`relative overflow-hidden border border-ink/70 shadow-[4px_4px_0_rgba(23,20,14,0.14)] transition-transform duration-300 group-hover:-translate-y-1.5 ${
                    i % 2 === 0 ? "group-hover:-rotate-1" : "group-hover:rotate-1"
                  }`}
                >
                  <ArtVisual image={art.image} seed={art.slug} accent={art.accent} alt={art.title} className="h-full w-full" />
                  <span className={`absolute right-2 top-2 border border-ink bg-bone px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide ${statusTone[art.status]}`}>
                    {statusLabel[art.status]}
                  </span>
                </div>
                <div className="mt-3 flex items-start justify-between gap-3 font-mono text-[0.68rem] uppercase tracking-wide text-graphite">
                  <span className="text-ink">{art.title}</span>
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
    </div>
  )
}
