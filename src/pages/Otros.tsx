import { Link } from "react-router-dom"
import { artworks, courses, museumVisits, restorationNote, restorationSteps, waLink } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { PageHeader } from "../components/PageHeader"
import { SectionTitle } from "../components/SectionTitle"
import { Reveal } from "../components/Reveal"

const restauraciones = artworks.filter((a) => a.series === "Restauración")

const waRestauracion = waLink(
  "Hola Mashanta, tengo una obra que me gustaría restaurar. ¿Te comparto fotos por este medio?",
)
const waVisita = waLink(
  "Hola Mashanta, me interesan las visitas guiadas a museos. ¿Me compartes disponibilidad para agendar?",
)

export function Otros() {
  return (
    <div>
      <PageHeader
        title="Cursos, visitas guiadas y restauración"
        description="Además de la obra y las comisiones, el estudio enseña, acompaña a museos y repara piezas."
      >
        <nav className="mt-5 flex flex-wrap gap-4 label text-graphite">
          <a href="#cursos" className="border-b-2 border-transparent pb-0.5 hover:border-rosa hover:text-ink">
            Cursos
          </a>
          <a href="#visitas" className="border-b-2 border-transparent pb-0.5 hover:border-rosa hover:text-ink">
            Visitas guiadas
          </a>
          <a href="#restauracion" className="border-b-2 border-transparent pb-0.5 hover:border-rosa hover:text-ink">
            Restauración
          </a>
        </nav>
      </PageHeader>

      {/* Cursos */}
      <section id="cursos" className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 sm:pt-10">
        <SectionTitle>Cursos y talleres</SectionTitle>
        <p className="mt-6 mb-10 max-w-2xl text-sm text-ink-soft">
          Los talleres tienen tres modalidades. La restauración no es un curso, es un servicio aparte. Los precios que ves
          son de referencia, del año pasado, y puede haber ajustes menores. Escríbeme para confirmar disponibilidad y el
          precio de este ciclo.
        </p>

        {courses.map((c) => (
          <Reveal key={c.slug} variant="rise">
            <Link
              to={`/otros/cursos/${c.slug}`}
              data-cursor="VER"
              className="group grid grid-cols-[auto_1fr] items-center gap-5 border-b border-bone-shade-2 py-6 transition-colors hover:bg-rosa/10 sm:grid-cols-[120px_1fr_auto] sm:gap-8"
            >
              <div className="row-span-2 aspect-square w-16 overflow-hidden sm:row-span-1 sm:w-[120px]">
                <ArtVisual image={c.image} seed={c.slug} accent={c.accent} alt={c.title} className="h-full w-full" />
              </div>

              <div className="col-span-1">
                <h3 className="heading text-[clamp(1.3rem,3.4vw,2.2rem)] leading-none transition-colors group-hover:text-rosa">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{c.schedule}</p>
              </div>

              <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end sm:gap-1">
                <span className="font-mono text-sm text-ink">{c.price}</span>
                <span className="label text-graphite">Pregunta por disponibilidad</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* Visitas guiadas */}
      <section id="visitas" className="mt-14 border-t border-ink/10 bg-bone-shade py-14 sm:mt-20 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <Reveal variant="rise" className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-16">
            <div>
              <SectionTitle>{museumVisits.title}</SectionTitle>
              <p className="mt-6 max-w-xl text-ink-soft">{museumVisits.intro}</p>
              <ul className="mt-6 flex flex-col gap-3 border-t border-ink pt-5">
                {museumVisits.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-ink-soft">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-rosa" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waVisita}
                target="_blank"
                rel="noreferrer"
                data-cursor="ESCRIBIR"
                className="mt-7 inline-flex items-center gap-2 border border-terracota bg-terracota px-5 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
              >
                Preguntar por disponibilidad · WhatsApp →
              </a>
            </div>

            <div className="aspect-[4/5] w-full overflow-hidden border border-ink/10 lg:aspect-auto">
              <ArtVisual
                image={museumVisits.image}
                seed="visitas-guiadas"
                accent="terracota"
                alt="Grupo en una visita guiada a un museo"
                className="h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Restauración */}
      <section id="restauracion" className="mt-14 border-t border-ink/10 py-14 sm:mt-20 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <Reveal variant="rise" className="mb-10">
            <SectionTitle>Restauración</SectionTitle>
            <p className="mt-6 max-w-2xl text-ink-soft">
              Recuperación de retratos de familia, óleos con humedad y piezas sin firma. El tiempo y el presupuesto
              dependen del estado de la obra, así que se definen caso por caso.
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.06}>
            <ol className="grid border-t border-ink sm:grid-cols-3">
              {restorationSteps.map((s, i) => (
                <li
                  key={s.title}
                  className="flex items-baseline gap-3 border-b border-bone-shade-2 py-5 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                >
                  <span className="font-mono text-[0.7rem] text-graphite">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="heading text-xl">{s.title}</h3>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal variant="rise" delay={0.1} className="mt-8 border-t border-ink pt-4">
            <p className="label text-ink">Nota sobre este servicio</p>
            <p className="mt-1.5 max-w-2xl text-sm text-ink-soft">{restorationNote}</p>
          </Reveal>

          {restauraciones.length > 0 && (
            <Reveal variant="rise" delay={0.1} className="mt-12">
              <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Trabajos recientes</span>
              <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {restauraciones.map((r) => (
                  <div key={r.slug}>
                    <div className="aspect-[4/5] overflow-hidden border border-ink/15">
                      <ArtVisual image={r.image} seed={r.slug} accent={r.accent} alt={r.title} className="h-full w-full" />
                    </div>
                    <div className="mt-2 font-mono text-[0.66rem] uppercase tracking-wide text-ink">{r.title}</div>
                    <div className="font-mono text-[0.62rem] uppercase tracking-wide text-graphite-soft">
                      {r.technique} · {r.year} · {r.dimensions}
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
