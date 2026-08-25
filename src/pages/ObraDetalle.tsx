import { Link, useParams } from "react-router-dom"
import { artworks, currentCollection } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"
import { NotFound } from "./NotFound"

const statusLabel: Record<string, string> = {
  disponible: "Disponible",
  reservada: "Reservada",
  vendida: "Vendida",
  coleccion: "Colección privada",
}

export function ObraDetalle() {
  const { slug } = useParams()
  const art = artworks.find((a) => a.slug === slug)
  if (!art) return <NotFound />

  const related = artworks.filter((a) => a.series === art.series && a.slug !== art.slug).slice(0, 3)

  return (
    <div>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <Reveal variant="wipe" className="border border-ink/70 shadow-[6px_6px_0_rgba(23,20,14,0.14)]">
          <ArtVisual image={art.image} seed={art.slug} accent={art.accent} alt={art.title} className="aspect-[4/5] w-full" />
        </Reveal>

        <Reveal variant="rise" delay={0.1}>
          <Link to="/obras" className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite hover:text-ink">
            ← Obras
          </Link>
          <span className="mt-6 block font-mono text-[0.68rem] uppercase tracking-widest text-graphite">{art.series}</span>
          <h1 className="mt-2 font-display text-[clamp(2.2rem,6vw,4rem)] uppercase leading-[0.9] text-balance">{art.title}</h1>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-bone-shade-2 py-5 font-mono text-[0.7rem] uppercase tracking-wide">
            <div>
              <dt className="text-graphite">Técnica</dt>
              <dd className="mt-0.5 text-ink">{art.technique}</dd>
            </div>
            <div>
              <dt className="text-graphite">Año</dt>
              <dd className="mt-0.5 text-ink">{art.year}</dd>
            </div>
            <div>
              <dt className="text-graphite">Dimensiones</dt>
              <dd className="mt-0.5 text-ink">{art.dimensions}</dd>
            </div>
            <div>
              <dt className="text-graphite">Estado</dt>
              <dd className="mt-0.5 text-ink">{statusLabel[art.status]}</dd>
            </div>
          </dl>

          <p className="mt-6 max-w-md text-ink-soft">{art.description}</p>

          {art.price && <p className="mt-6 font-display text-3xl uppercase">{art.price}</p>}

          {art.status === "disponible" && (
            <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-wide text-terracota">
              Colección {currentCollection.name} en cierre — {currentCollection.discount}
            </p>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            {art.status === "disponible" ? (
              <Link
                to="/adquirir"
                data-cursor="VER"
                className="border border-terracota bg-terracota px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
              >
                Adquirir esta obra
              </Link>
            ) : (
              <Link
                to="/adquirir"
                data-cursor="VER"
                className="border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                Comisionar una pieza similar
              </Link>
            )}
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="border-t border-bone-shade-2 py-14 sm:py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">
              También en {art.series}
            </span>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to={`/obras/${r.slug}`} data-cursor="VER" className="group block">
                  <div className="aspect-[4/5] overflow-hidden border border-ink/70 transition-transform group-hover:-translate-y-1">
                    <ArtVisual image={r.image} seed={r.slug} accent={r.accent} alt={r.title} className="h-full w-full" />
                  </div>
                  <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-wide text-graphite">{r.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
