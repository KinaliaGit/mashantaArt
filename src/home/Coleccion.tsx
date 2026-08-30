import { Link } from "react-router-dom"
import { artworks, currentCollection, waLink } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"
import { ClosingNoteReveal } from "../components/ClosingNoteReveal"

const waColeccion = waLink(
  `Hola Mashanta, me interesa la colección ${currentCollection.name}. ¿Me compartes disponibilidad y precios?`,
)

const shown = artworks.slice(0, 6)

export function Coleccion() {
  return (
    <section className="border-b border-ink/10 bg-bone py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="mb-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-16">
          <div>
            <div className="mb-1 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="label text-ink">Colección en cierre</span>
              <span className="label text-graphite-soft">{currentCollection.year}</span>
            </div>
            <h2 className="heading text-[clamp(2.6rem,7vw,5rem)] leading-[0.95]">
              {currentCollection.name}
            </h2>
            <p className="mt-6 max-w-xl text-ink-soft">{currentCollection.description}</p>
          </div>

          <ClosingNoteReveal text={currentCollection.closingNote} className="lg:mt-2" />
        </Reveal>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((art, i) => (
            <Reveal key={art.slug} delay={i * 0.05}>
              <ArtworkCard art={art} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Link
            to="/colecciones"
            className="label border-b-2 border-ink pb-1 transition-colors hover:border-rosa"
          >
            Ver colección completa
          </Link>
          <a
            href={waColeccion}
            target="_blank"
            rel="noreferrer"
            className="label border-b-2 border-transparent pb-1 text-graphite transition-colors hover:border-rosa hover:text-ink"
          >
            Preguntar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function ArtworkCard({ art }: { art: (typeof artworks)[number] }) {
  return (
    <Link to={`/colecciones/${art.slug}`} className="group block">
      <div className="aspect-[4/5] w-full overflow-hidden border border-ink/10">
        <ArtVisual
          image={art.image}
          seed={art.slug}
          accent={art.accent}
          alt={art.title}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start gap-2.5 border-t border-ink pt-3">
        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-rosa" />
        <div>
          <p className="font-display text-lg leading-tight transition-colors group-hover:text-rosa">{art.title}</p>
          <p className="label mt-1.5 text-graphite">
            {art.technique} · {art.year}
          </p>
        </div>
      </div>
    </Link>
  )
}
