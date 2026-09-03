import { Link } from "react-router-dom"
import { artworks, obrasIntro, waLink } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"
import { ClosingNoteReveal } from "../components/ClosingNoteReveal"

const waObras = waLink(
  "Hola Mashanta, me interesa tu obra. ¿Me compartes qué piezas están disponibles y sus precios?",
)

const shown = artworks.slice(0, 6)

export function ObrasPreview() {
  return (
    <section className="border-b border-ink/10 bg-bone py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="mb-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-16">
          <div>
            <div className="mb-1 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="label text-ink">Obras</span>
            </div>
            <h2 className="heading text-[clamp(2.6rem,7vw,5rem)] leading-[0.95]">{obrasIntro.title}</h2>
            <p className="mt-6 max-w-xl text-ink-soft">{obrasIntro.description}</p>
          </div>

          <ClosingNoteReveal
            label="Cada obra es única"
            text={obrasIntro.uniquenessNote}
            className="lg:mt-2"
          />
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
            to="/obras"
            className="label border-b-2 border-ink pb-1 transition-colors hover:border-rosa"
          >
            Ver todas las obras
          </Link>
          <a
            href={waObras}
            target="_blank"
            rel="noreferrer"
            className="label border-b-2 border-transparent pb-1 text-graphite transition-colors hover:border-rosa hover:text-ink"
          >
            Preguntar por disponibilidad
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function ArtworkCard({ art }: { art: (typeof artworks)[number] }) {
  return (
    <Link to={`/obras/${art.slug}`} className="group block">
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
