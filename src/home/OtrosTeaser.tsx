import { Link } from "react-router-dom"
import { courses } from "../lib/data"
import { Reveal } from "../components/Reveal"

const upcoming = courses.filter((c) => c.slug !== "verano-2026").slice(0, 3)

export function OtrosTeaser() {
  return (
    <section className="border-b border-bone-shade-2 bg-bone-shade py-14 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">También en el estudio</span>
            <h2 className="mt-2 font-display text-2xl uppercase sm:text-3xl">Otros</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Cursos permanentes de pintura, restauración e ilustración para todas las edades, y restauración de piezas familiares o de colección.
            </p>
            <Link
              to="/otros"
              data-cursor="VER"
              className="mt-4 inline-flex items-center gap-2 border-b border-ink pb-0.5 font-mono text-xs uppercase tracking-widest transition-colors hover:text-terracota hover:border-terracota"
            >
              Ver cursos y restauración →
            </Link>
          </div>

          <ul className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[280px]">
            {upcoming.map((c) => (
              <li key={c.slug} className="flex items-baseline justify-between gap-4 border-t border-bone-shade-2 pt-2 first:border-t-0 first:pt-0 sm:border-t sm:first:border-t">
                <span className="font-mono text-[0.66rem] uppercase tracking-wide text-graphite">{c.date}</span>
                <span className="text-right font-display text-base uppercase leading-none">{c.title}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
