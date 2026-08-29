import { Link } from "react-router-dom"
import { artworks, courses, restorationSteps, waLink } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

const availabilityLabel: Record<string, { text: string; tone: string }> = {
  disponible: { text: "Disponible", tone: "text-verde" },
  "ultimos-lugares": { text: "Últimos lugares", tone: "text-ocre" },
  agotado: { text: "Agotado", tone: "text-graphite" },
}

const restauraciones = artworks.filter((a) => a.series === "Restauración")

const waRestauracion = waLink(
  "Hola Mashanta, tengo una obra que me gustaría restaurar. ¿Te comparto fotos por aquí?",
)

export function Otros() {
  return (
    <div>
      <header className="border-b border-ink bg-ink px-5 pb-10 pt-12 text-bone sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-bone-shade-2">Otros</span>
          <h1 className="mt-3 font-display text-[clamp(2.6rem,9vw,6rem)] uppercase leading-[0.86] text-balance">
            Cursos y
            <br />
            restauración
          </h1>
          <p className="mt-4 max-w-md text-bone-shade-2">
            Además de la obra de colección y las comisiones, el estudio enseña y repara. Clases permanentes para todas las edades y restauración de piezas familiares o de colección.
          </p>
          <nav className="mt-6 flex flex-wrap gap-2 font-mono text-[0.66rem] uppercase tracking-widest">
            <a href="#cursos" className="border border-bone-shade-2 px-3 py-1.5 text-bone-shade-2 hover:border-bone hover:text-bone">
              Cursos
            </a>
            <a href="#restauracion" className="border border-bone-shade-2 px-3 py-1.5 text-bone-shade-2 hover:border-bone hover:text-bone">
              Restauración
            </a>
          </nav>
        </div>
      </header>

      {/* Cursos */}
      <section id="cursos" className="mx-auto max-w-[1440px] px-5 pt-12 sm:px-8 sm:pt-16">
        <Reveal className="mb-2 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] uppercase leading-none">Cursos y talleres</h2>
        </Reveal>
        <p className="mb-4 max-w-md text-sm text-ink-soft">
          Clases permanentes de pintura, restauración e ilustración. Esta página es informativa — escríbenos para conocer el cupo actual de cada sesión.
        </p>

        {courses.map((c, i) => {
          const av = availabilityLabel[c.availability]
          return (
            <Reveal key={c.slug} variant="rise" delay={i * 0.05}>
              <Link
                to={`/otros/cursos/${c.slug}`}
                data-cursor="VER"
                className="group grid grid-cols-[auto_1fr] items-center gap-5 border-b border-bone-shade-2 py-6 sm:grid-cols-[120px_auto_1fr_auto] sm:gap-8"
              >
                <div className="row-span-2 aspect-square w-16 overflow-hidden border border-ink/60 sm:row-span-1 sm:w-[120px]">
                  <ArtVisual image={c.image} seed={c.slug} accent={c.accent} alt={c.title} className="h-full w-full" />
                </div>

                <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite sm:order-2">{c.date}</span>

                <div className="col-span-2 sm:order-3 sm:col-span-1">
                  <h3 className="font-display text-[clamp(1.3rem,3.4vw,2.2rem)] uppercase leading-none transition-colors group-hover:text-terracota">
                    {c.title}
                  </h3>
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
      </section>

      {/* Restauración */}
      <section id="restauracion" className="border-t border-ink bg-bone-shade py-14 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <Reveal variant="rise" className="mb-8">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Servicio</span>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,5vw,3rem)] uppercase leading-none">Restauración</h2>
            <p className="mt-4 max-w-xl text-ink-soft">
              Recuperación de retratos de familia, óleos con humedad y piezas sin firma. Cada intervención parte de un diagnóstico y es reversible. El tiempo y el presupuesto dependen del estado de la obra — se define caso por caso.
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.06}>
            <ol className="grid gap-0 border-t border-ink sm:grid-cols-2">
              {restorationSteps.map((s, i) => (
                <li
                  key={s.title}
                  className="border-b border-bone-shade-2 py-6 sm:border-r sm:px-6 sm:odd:pl-0 sm:even:border-r-0"
                >
                  <span className="font-mono text-[0.7rem] text-graphite">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-display text-xl uppercase">{s.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-soft">{s.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {restauraciones.length > 0 && (
            <Reveal variant="rise" delay={0.1} className="mt-12">
              <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Trabajos recientes</span>
              <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {restauraciones.map((r) => (
                  <div key={r.slug}>
                    <div className="aspect-[4/5] overflow-hidden border border-ink/70">
                      <ArtVisual image={r.image} seed={r.slug} accent={r.accent} alt={r.title} className="h-full w-full" />
                    </div>
                    <div className="mt-2 font-mono text-[0.66rem] uppercase tracking-wide text-ink">{r.title}</div>
                    <div className="font-mono text-[0.62rem] uppercase tracking-wide text-graphite-soft">
                      {r.technique} — {r.year} — {r.dimensions}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal variant="rise" delay={0.14} className="mt-10">
            <a
              href={waRestauracion}
              target="_blank"
              rel="noreferrer"
              data-cursor="VER"
              className="inline-flex items-center gap-2 border border-terracota bg-terracota px-5 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
            >
              Consultar una restauración · WhatsApp →
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
