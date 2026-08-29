import { Link } from "react-router-dom"
import { artworks, currentCollection, waLink } from "../lib/data"

const waColeccion = waLink(
  `Hola Mashanta, me interesa la colección ${currentCollection.name}. ¿Me compartes disponibilidad y precios?`,
)
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

// Card height comes from its own width (aspect-[4/5]), not the container —
// so top% + width%*1.25/0.75 must stay under 100% (0.75 = the collage's
// aspect-[4/3]) or a card overflows the wrapper and overlaps what follows.
const layout = [
  { art: artworks[0], top: "0%", left: "3%", w: "40%", rotate: -3, z: 1 },
  { art: artworks[2], top: "6%", left: "40%", w: "28%", rotate: 2, z: 2 },
  { art: artworks[6], top: "0%", left: "66%", w: "30%", rotate: -2, z: 3 },
  { art: artworks[5], top: "50%", left: "8%", w: "24%", rotate: 3, z: 4 },
  { art: artworks[4], top: "40%", left: "34%", w: "30%", rotate: -1.5, z: 5 },
]

export function Coleccion() {
  return (
    <section className="border-b border-bone-shade-2 py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="mb-8 flex flex-wrap items-center gap-3">
          <span className="border border-terracota px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-terracota">
            Colección en cierre
          </span>
          <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">{currentCollection.year}</span>
        </Reveal>

        <Reveal className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 lg:flex-row lg:items-end">
          <h2 className="font-display text-[clamp(2.4rem,6.5vw,4.8rem)] uppercase leading-[0.9]">
            {currentCollection.name}
          </h2>
          <p className="max-w-sm text-ink-soft">{currentCollection.description}</p>
        </Reveal>

        <Reveal className="mb-10 border border-terracota bg-terracota/5 p-5 sm:mb-14 sm:p-6">
          <p className="font-display text-lg uppercase leading-snug text-ink sm:text-xl">{currentCollection.closingNote}</p>
          {currentCollection.discount && (
            <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-wide text-terracota">{currentCollection.discount}</p>
          )}
        </Reveal>

        <div className="relative hidden aspect-[4/3] md:block">
          {layout.map((item, i) => (
            <Reveal
              key={item.art.slug}
              delay={i * 0.08}
              className="absolute"
              style={{ top: item.top, left: item.left, width: item.w, zIndex: item.z, transform: `rotate(${item.rotate}deg)` }}
            >
              <ArtworkCard art={item.art} />
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:hidden">
          {layout.slice(0, 4).map((item, i) => (
            <Reveal key={item.art.slug} delay={i * 0.06}>
              <div style={{ transform: `rotate(${item.rotate / 2}deg)` }}>
                <ArtworkCard art={item.art} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 sm:mt-16">
          <Link
            to="/colecciones"
            data-cursor="VER"
            className="inline-flex items-center gap-3 border-b border-ink pb-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-terracota hover:border-terracota"
          >
            Ver colección completa →
          </Link>
          <a
            href={waColeccion}
            target="_blank"
            rel="noreferrer"
            data-cursor="VER"
            className="inline-flex items-center gap-3 border-b border-terracota pb-1 font-mono text-xs uppercase tracking-widest text-terracota transition-colors hover:text-ink hover:border-ink"
          >
            Preguntar por WhatsApp →
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function ArtworkCard({ art }: { art: (typeof artworks)[number] }) {
  return (
    <Link to={`/colecciones/${art.slug}`} data-cursor="VER" className="group block">
      <div className="aspect-[4/5] w-full overflow-hidden border border-ink/70 shadow-[4px_4px_0_rgba(23,20,14,0.14)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:-rotate-1">
        <ArtVisual image={art.image} seed={art.slug} accent={art.accent} alt={art.title} className="h-full w-full" />
      </div>
      <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-wide text-graphite">
        {art.title} — {art.technique}, {art.year}
      </div>
    </Link>
  )
}
