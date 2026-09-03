import { testimonials } from "../lib/data"
import { Reveal } from "../components/Reveal"

/**
 * Plain quotes with an attribution line underneath, the way a book sets an
 * epigraph — no avatar, no color, nothing to hover. The words carry it.
 */
export function Comunidad() {
  return (
    <section className="bg-bone py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal variant="rise" className="mb-10 sm:mb-14">
          <h2 className="heading text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.9]">Comunidad</h2>
        </Reveal>

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} variant="rise" delay={i * 0.05} className="border-t border-ink/10 pt-6">
              <p className="text-left font-display text-[1.15rem] leading-snug text-ink text-balance">"{t.quote}"</p>
              <p className="label mt-3 text-left text-graphite">
                {t.name}, {t.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
