import { Link, Navigate, useParams } from "react-router-dom"
import { courses, waLink } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

export function CursoDetalle() {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)
  // Los cursos se reestructuraron: cualquier enlace viejo cae en la lista de Otros.
  if (!course) return <Navigate to="/otros" replace />

  const waCurso = waLink(
    `Hola Mashanta, me interesa "${course.title}". ¿Me compartes disponibilidad y el precio de este ciclo?`,
  )

  return (
    <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1fr_1.15fr] md:gap-16">
      <Reveal variant="wipe" className="flex items-center justify-center md:order-2">
        <ArtVisual
          image={course.image}
          seed={course.slug}
          accent={course.accent}
          alt={course.title}
          fit="contain"
          className="max-h-[65vh] w-full"
        />
      </Reveal>

      <Reveal variant="rise" delay={0.1} className="md:order-1">
        <Link to="/otros" className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite hover:text-rosa">
          ← Otros
        </Link>

        <div className="mt-6">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Cursos y talleres</span>
          <h1 className="mt-1 heading text-[clamp(1.6rem,3.6vw,2.25rem)] leading-[1.1] text-balance">{course.title}</h1>
        </div>

        <p className="mt-5 max-w-md text-ink-soft">{course.summary}</p>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-bone-shade-2 py-5 font-mono text-[0.7rem] uppercase tracking-wide">
          <div className="col-span-2">
            <dt className="text-graphite">Ritmo</dt>
            <dd className="mt-0.5 normal-case text-ink">{course.schedule}</dd>
          </div>
          <div>
            <dt className="text-graphite">Sede</dt>
            <dd className="mt-0.5 normal-case text-ink">{course.location}</dd>
          </div>
          <div>
            <dt className="text-graphite">Precio de referencia</dt>
            <dd className="mt-0.5 normal-case text-ink">{course.price}</dd>
            {course.priceNote && <dd className="mt-0.5 normal-case text-graphite">{course.priceNote}</dd>}
          </div>
        </dl>

        {course.materials && course.materials.length > 0 && (
          <div className="mt-6">
            <h2 className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Materiales incluidos</h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              {course.materials.map((m) => (
                <li key={m} className="border border-bone-shade-2 px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-wide text-ink-soft">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        )}

        {course.syllabus && course.syllabus.length > 0 && (
          <div className="mt-6">
            <h2 className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Temario</h2>
            <ol className="mt-3 flex flex-col gap-4">
              {course.syllabus.map((s, i) => (
                <li key={s.title} className="flex gap-4 border-t border-bone-shade-2 pt-3 first:border-t-0 first:pt-0">
                  <span className="font-mono text-[0.7rem] text-graphite">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-ink">{s.title}</p>
                    <p className="text-sm text-ink-soft">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-8 border-t border-bone-shade-2 pt-6">
          <p className="text-sm text-ink-soft">
            Los precios que ves son de referencia, del año pasado, y puede haber ajustes menores. Pregunta por
            disponibilidad y por el precio de este ciclo antes de apartar tu lugar.
          </p>
          <a
            href={waCurso}
            target="_blank"
            rel="noreferrer"
            data-cursor="ESCRIBIR"
            className="mt-4 inline-flex items-center gap-2 border border-terracota bg-terracota px-5 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
          >
            Preguntar por disponibilidad · WhatsApp →
          </a>
        </div>
      </Reveal>
    </div>
  )
}
