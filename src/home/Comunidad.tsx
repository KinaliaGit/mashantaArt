import { useState } from "react"
import { testimonials } from "../lib/data"
import { Reveal } from "../components/Reveal"

const positions = [
  { top: "10%", left: "8%" },
  { top: "58%", left: "4%" },
  { top: "20%", left: "40%" },
  { top: "62%", left: "42%" },
  { top: "12%", left: "76%" },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")

const accents = ["bg-terracota", "bg-ultramar", "bg-ocre", "bg-verde", "bg-tierra-rosa"]

export function Comunidad() {
  const [active, setActive] = useState(0)
  const person = testimonials[active]

  return (
    <section className="bg-bone py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal variant="rise" className="mb-10 sm:mb-14">
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.9]">Comunidad</h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="relative hidden h-[320px] md:block">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-label={`Ver testimonio de ${t.name}`}
                className={`absolute flex h-16 w-16 items-center justify-center rounded-full border-2 font-mono text-xs uppercase text-bone transition-all duration-300 ${accents[i % accents.length]} ${
                  active === i ? "scale-125 border-ink z-10" : "border-transparent opacity-70 hover:opacity-100"
                }`}
                style={positions[i]}
              >
                {initials(t.name)}
              </button>
            ))}
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 md:hidden">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver testimonio de ${t.name}`}
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-mono text-xs uppercase text-bone transition-transform ${accents[i % accents.length]} ${
                  active === i ? "scale-110 ring-2 ring-ink ring-offset-2 ring-offset-bone" : "opacity-70"
                }`}
              >
                {initials(t.name)}
              </button>
            ))}
          </div>

          <div className="border-l-2 border-ink pl-6">
            <p className="font-display text-[clamp(1.3rem,3vw,1.9rem)] leading-tight text-ink text-balance">
              "{person.quote}"
            </p>
            <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-widest text-graphite">
              {person.name} — {person.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
