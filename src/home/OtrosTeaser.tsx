import { Link } from "react-router-dom"
import { courses } from "../lib/data"
import { Reveal } from "../components/Reveal"

export function OtrosTeaser() {
  return (
    <section className="border-b border-ink/10 bg-bone-shade py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <span className="label text-graphite">También en el estudio</span>
            <h2 className="mt-4 heading text-[clamp(2rem,5vw,3.2rem)] leading-[0.98]">Otros</h2>
            <p className="mt-4 text-sm text-ink-soft">
              Clases regulares de acuarela, curso de verano y curso de primavera. También visitas guiadas a museos y
              restauración de piezas familiares.
            </p>
            <Link
              to="/otros"
              className="label mt-6 inline-block border-b-2 border-ink pb-1 transition-colors hover:border-rosa"
            >
              Ver cursos, visitas y restauración
            </Link>
          </div>

          <ul className="flex w-full flex-col sm:w-auto sm:min-w-[320px]">
            {courses.map((c) => (
              <li
                key={c.slug}
                className="flex items-baseline justify-between gap-4 border-t border-ink/15 py-3 first:border-t-0"
              >
                <span className="text-right font-display text-base leading-tight">{c.title}</span>
                <span className="label shrink-0 text-graphite">{c.price}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
