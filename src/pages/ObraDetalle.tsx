import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { artworks, waLink } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"
import { NotFound } from "./NotFound"

export function ObraDetalle() {
  const { slug } = useParams()
  const [flipped, setFlipped] = useState(false)
  // Al cambiar de obra (p. ej. desde "También en…") la tarjeta vuelve a su cara frontal.
  const [prevSlug, setPrevSlug] = useState(slug)
  if (slug !== prevSlug) {
    setPrevSlug(slug)
    setFlipped(false)
  }
  const art = artworks.find((a) => a.slug === slug)
  if (!art) return <NotFound />

  const related = artworks.filter((a) => a.series === art.series && a.slug !== art.slug).slice(0, 3)

  const waObra = waLink(
    `Hola Mashanta, me interesa "${art.title}" (${art.technique}, ${art.dimensions}${
      art.price ? `, ${art.price}` : ""
    }). ¿Sigue disponible?`,
  )
  const waSimilar = waLink(
    `Hola Mashanta, me gustaría un encargo similar o inspirado en "${art.title}" (${art.technique}, ${art.dimensions}).`,
  )

  return (
    <div>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <Reveal variant="wipe" className="flex flex-col gap-4">
          {/* La obra puede "voltearse" para mostrar el proceso creativo. La
              opacidad, junto con backface-visibility, es el respaldo para
              navegadores que no ocultan bien la cara trasera en preserve-3d. */}
          <div className="[perspective:1800px]">
            <div
              className="relative transition-transform duration-[650ms] ease-out [transform-style:preserve-3d]"
              style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
              <div
                className={`flex items-center justify-center [backface-visibility:hidden] ${flipped ? "pointer-events-none" : ""}`}
                style={{ transition: "opacity 0s 325ms", opacity: flipped ? 0 : 1 }}
              >
                <ArtVisual
                  image={art.image}
                  seed={art.slug}
                  accent={art.accent}
                  alt={art.title}
                  fit="contain"
                  className="max-h-[75vh] w-full"
                />
              </div>

              {art.process && (
                <div
                  className={`absolute inset-0 flex flex-col overflow-y-auto border border-ink bg-bone-shade [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                    flipped ? "" : "pointer-events-none"
                  }`}
                  style={{ transition: "opacity 0s 325ms", opacity: flipped ? 1 : 0 }}
                >
                  <div className="flex flex-col gap-5 p-5 sm:p-7">
                    <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">
                      Proceso creativo
                    </span>
                    {art.process.note && <p className="text-ink-soft">{art.process.note}</p>}
                    {art.process.images?.map((img) => (
                      <figure key={img.src} className="m-0">
                        <div className="overflow-hidden border border-ink/15">
                          <ArtVisual
                            image={img.src}
                            seed={`${art.slug}-${img.src}`}
                            accent={art.accent}
                            alt={img.caption ?? `Proceso de ${art.title}`}
                            className="h-full w-full"
                          />
                        </div>
                        {img.caption && (
                          <figcaption className="mt-2 font-mono text-[0.62rem] uppercase tracking-wide text-graphite">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {art.process && (
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              data-cursor="VER"
              className={`w-full border border-ink px-6 py-3.5 font-mono text-sm uppercase tracking-widest transition-colors ${
                flipped
                  ? "bg-ink text-bone hover:bg-bone hover:text-ink"
                  : "text-ink hover:bg-ink hover:text-bone"
              }`}
            >
              {flipped ? "← Volver a la obra" : "Ver el proceso creativo ↺"}
            </button>
          )}
        </Reveal>

        <Reveal variant="rise" delay={0.1}>
          <Link to="/obras" className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite hover:text-rosa">
            ← Obras
          </Link>
          <span className="mt-6 block font-mono text-[0.68rem] uppercase tracking-widest text-graphite">{art.series}</span>
          <h1 className="mt-2 heading text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] text-balance">{art.title}</h1>

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
              <dt className="text-graphite">Disponibilidad</dt>
              <dd className="mt-0.5 text-ink">Pregunta por WhatsApp</dd>
            </div>
          </dl>

          <p className="mt-6 max-w-md text-ink-soft">{art.description}</p>

          {art.price && <p className="mt-6 font-display text-3xl">{art.price}</p>}

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={waObra}
              target="_blank"
              rel="noreferrer"
              data-cursor="VER"
              className="border border-terracota bg-terracota px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
            >
              Preguntar por esta obra · WhatsApp
            </a>
            <a
              href={waSimilar}
              target="_blank"
              rel="noreferrer"
              data-cursor="VER"
              className="border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              Encargar algo similar o inspirado en esta obra · WhatsApp
            </a>
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
                  <div className="aspect-[4/5] overflow-hidden border border-ink/15 transition-transform group-hover:-translate-y-1">
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
