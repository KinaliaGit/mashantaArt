import { Link } from "react-router-dom"
import { courses } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

const availabilityLabel: Record<string, { text: string; tone: string }> = {
  disponible: { text: "Disponible", tone: "text-verde" },
  "ultimos-lugares": { text: "Últimos lugares", tone: "text-ocre" },
  agotado: { text: "Agotado", tone: "text-graphite" },
}

export function Cursos() {
  return (
    <div>
      <header className="border-b border-ink bg-ink px-5 pb-10 pt-12 text-bone sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-bone-shade-2">Talleres</span>
          <h1 className="mt-3 font-display text-[clamp(2.6rem,9vw,6rem)] uppercase leading-[0.86] text-balance">
            Además del
            <br />
            estudio
          </h1>
          <p className="mt-4 max-w-md text-bone-shade-2">
            Clases permanentes de pintura, restauración e ilustración para todas las edades, y visitas guiadas a museos. Esta página es informativa — escríbenos para conocer el cupo actual de cada sesión.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8">
        {courses.map((c, i) => {
          const av = availabilityLabel[c.availability]
          return (
            <Reveal key={c.slug} variant="rise" delay={i * 0.05}>
              <Link
                to={`/cursos/${c.slug}`}
                data-cursor="VER"
                className="group grid grid-cols-[auto_1fr] items-center gap-5 border-b border-bone-shade-2 py-6 sm:grid-cols-[120px_auto_1fr_auto] sm:gap-8"
              >
                <div className="row-span-2 aspect-square w-16 overflow-hidden border border-ink/60 sm:row-span-1 sm:w-[120px]">
                  <ArtVisual image={c.image} seed={c.slug} accent={c.accent} alt={c.title} className="h-full w-full" />
                </div>

                <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite sm:order-2">{c.date}</span>

                <div className="col-span-2 sm:order-3 sm:col-span-1">
                  <h2 className="font-display text-[clamp(1.3rem,3.4vw,2.2rem)] uppercase leading-none transition-colors group-hover:text-terracota">
                    {c.title}
                  </h2>
                  <p className="mt-1 font-mono text-[0.64rem] uppercase tracking-wide text-graphite-soft">
                    {c.level} — {c.location}
                  </p>
                </div>

                <div className="col-span-2 flex items-center justify-between gap-4 sm:order-4 sm:col-span-1 sm:flex-col sm:items-end sm:gap-1">
                  <span className="font-mono text-sm text-ink">{c.price}</span>
                  <span className={`font-mono text-[0.62rem] uppercase tracking-widest ${av.tone}`}>{av.text}</span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
