import { Link } from "react-router-dom"
import { artistInfo } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

const practicas = [
  { title: "Pintura", detail: "Óleo, acrílico y acuarela — obra propia y por comisión, para colección privada." },
  { title: "Restauración", detail: "Limpieza, consolidación y reintegración cromática sobre piezas familiares y de colección." },
  { title: "Ilustración infantil", detail: "Personajes y narrativa visual, publicados en talleres y en un libro ilustrado en curso." },
  { title: "Enseñanza", detail: "Clases permanentes para todas las edades y visitas guiadas a museos de la ciudad." },
]

export function LaArtista() {
  return (
    <div>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1.1fr_1fr] md:gap-16 md:py-24">
        <Reveal variant="rise">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">La artista</span>
          <h1 className="mt-3 font-display text-[clamp(2.8rem,10vw,7rem)] uppercase leading-[0.84] text-balance">
            {artistInfo.name}
          </h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-wide text-graphite">{artistInfo.role}</p>
        </Reveal>

        <Reveal variant="wipe" delay={0.1} className="aspect-[4/5] w-full overflow-hidden border border-ink/70 shadow-[6px_6px_0_rgba(23,20,14,0.14)]">
          <ArtVisual
            image={artistInfo.handsImage}
            seed="artista-retrato"
            accent="terracota"
            alt="Manos de Mashanta trabajando en el caballete del estudio"
            className="h-full w-full"
          />
        </Reveal>
      </div>

      <div className="border-t border-ink bg-bone-shade py-14 sm:py-20">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Manifiesto</span>
          <div className="mt-4 flex flex-col gap-6">
            {artistInfo.manifesto.map((p, i) => (
              <Reveal key={i} variant="rise" delay={i * 0.08}>
                <p className="font-display text-[clamp(1.2rem,3vw,1.7rem)] leading-snug text-ink text-balance">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20">
        <Reveal variant="rise" className="mb-10">
          <h2 className="font-display text-[clamp(2rem,5.5vw,3.4rem)] uppercase leading-[0.9]">Cuatro oficios, una mesa</h2>
        </Reveal>
        <div className="grid gap-0 border-t border-ink sm:grid-cols-2">
          {practicas.map((p, i) => (
            <Reveal key={p.title} variant="rise" delay={i * 0.06} className="border-b border-bone-shade-2 py-6 sm:border-r sm:px-6 sm:odd:pl-0 sm:even:border-r-0">
              <h3 className="font-display text-xl uppercase">{p.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-ink-soft">{p.detail}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="rise" delay={0.1} className="mt-12 flex flex-wrap gap-3">
          <Link to="/obras" data-cursor="VER" className="border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-ink hover:text-bone">
            Ver obras
          </Link>
          <Link to="/cursos" data-cursor="RESERVAR" className="border border-terracota bg-terracota px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink">
            Ver talleres
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
