import { useState } from "react"
import { Link } from "react-router-dom"
import { courses } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

const upcoming = courses.filter((c) => c.slug !== "verano-2026")

export function CursosPreview() {
  const [active, setActive] = useState(0)
  const course = upcoming[active]

  return (
    <section className="bg-ink py-16 text-bone sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal variant="rise" className="mb-10 sm:mb-14">
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.9]">Próximos talleres</h2>
          <p className="mt-3 max-w-md text-bone-shade-2">
            Clases permanentes para todas las edades, visitas guiadas a museos y cupo limitado por sesión.
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ul className="flex flex-col border-t border-graphite">
            {upcoming.map((c, i) => (
              <li key={c.slug} className="border-b border-graphite">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  data-cursor="RESERVAR"
                  className={`flex w-full items-center justify-between gap-4 py-4 text-left transition-colors ${
                    active === i ? "text-bone" : "text-bone-shade-2 hover:text-bone"
                  }`}
                >
                  <span className="font-mono text-[0.68rem] uppercase tracking-widest shrink-0">{c.date}</span>
                  <span className="font-display flex-1 truncate text-[clamp(1.1rem,2.6vw,1.6rem)] uppercase leading-none">
                    {c.title}
                  </span>
                  <span
                    className={`hidden shrink-0 font-mono text-[0.62rem] uppercase tracking-widest sm:inline ${
                      c.availability === "agotado" ? "text-graphite" : c.availability === "ultimos-lugares" ? "text-ocre" : "text-verde"
                    }`}
                  >
                    {c.availability === "agotado" ? "Agotado" : c.availability === "ultimos-lugares" ? "Últimos lugares" : "Disponible"}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <Link to={`/cursos/${course.slug}`} data-cursor="VER" className="relative block aspect-[4/3] overflow-hidden border border-graphite md:aspect-auto">
            <div className="absolute inset-0">
              <ArtVisual image={course.image} seed={course.slug} accent={course.accent} alt={course.title} className="h-full w-full" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-ink/80 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-widest text-bone">
              {course.title} · {course.price}
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
