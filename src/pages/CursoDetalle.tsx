import { Link, useParams } from "react-router-dom"
import { courses } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"
import { NotFound } from "./NotFound"

const availabilityLabel: Record<string, { text: string; tone: string }> = {
  disponible: { text: "Disponible", tone: "text-verde border-verde" },
  "ultimos-lugares": { text: "Últimos lugares", tone: "text-ocre border-ocre" },
  agotado: { text: "Agotado", tone: "text-graphite border-graphite" },
}

export function CursoDetalle() {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)
  if (!course) return <NotFound />

  const av = availabilityLabel[course.availability]
  const soldOut = course.availability === "agotado"

  return (
    <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1fr_1.15fr] md:gap-16">
      <Reveal variant="wipe" className="border border-ink/70 shadow-[6px_6px_0_rgba(23,20,14,0.14)] md:order-2">
        <ArtVisual image={course.image} seed={course.slug} accent={course.accent} alt={course.title} className="aspect-[4/3] w-full" />
      </Reveal>

      <Reveal variant="rise" delay={0.1} className="md:order-1">
        <Link to="/otros" className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite hover:text-ink">
          ← Otros
        </Link>

        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">{course.date} — {course.time}</span>
            <h1 className="mt-1 font-display text-[clamp(2rem,5.6vw,3.6rem)] uppercase leading-[0.9] text-balance">{course.title}</h1>
          </div>
          <span className={`shrink-0 whitespace-nowrap border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest ${av.tone}`}>
            {av.text}
          </span>
        </div>

        <p className="mt-5 max-w-md text-ink-soft">{course.summary}</p>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-bone-shade-2 py-5 font-mono text-[0.7rem] uppercase tracking-wide">
          <div>
            <dt className="text-graphite">Nivel</dt>
            <dd className="mt-0.5 text-ink">{course.level}</dd>
          </div>
          <div>
            <dt className="text-graphite">Sede</dt>
            <dd className="mt-0.5 text-ink">{course.location}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-graphite">Precio</dt>
            <dd className="mt-0.5 font-display text-2xl normal-case text-ink">{course.price}</dd>
          </div>
        </dl>

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

        <div className="mt-8 border-t border-bone-shade-2 pt-6">
          <p className="text-sm text-ink-soft">
            ¿Dudas sobre el nivel o el material? Escríbenos por{" "}
            <Link to="/contacto" className="underline hover:text-ink">
              WhatsApp o correo
            </Link>{" "}
            antes de apartar tu lugar.
          </p>
          {soldOut ? (
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-graphite">Sin cupo por ahora — pregunta por la lista de espera.</p>
          ) : (
            <Link
              to={`/otros/cursos/${course.slug}/reservar`}
              data-cursor="VER"
              className="mt-3 inline-flex items-center gap-2 border-b border-terracota pb-0.5 font-mono text-xs uppercase tracking-widest text-terracota transition-colors hover:text-ink hover:border-ink"
            >
              Apartar lugar →
            </Link>
          )}
        </div>
      </Reveal>
    </div>
  )
}
