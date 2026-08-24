import { artistInfo } from "../lib/data"
import { Reveal } from "../components/Reveal"

export function ContactoBlock() {
  return (
    <section className="border-t border-bone-shade-2 bg-bone py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal variant="rise">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Visítanos</span>
          <a
            href={`mailto:${artistInfo.email}`}
            data-cursor="ESCRIBIR"
            className="mt-3 block break-all font-display uppercase leading-[0.9] text-ink transition-colors hover:text-terracota"
            style={{ fontSize: "clamp(2rem,8vw,6rem)" }}
          >
            {artistInfo.email}
          </a>
        </Reveal>

        <Reveal variant="rise" delay={0.08} className="mt-10 grid gap-6 border-t border-ink pt-8 sm:grid-cols-3">
          <div>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">WhatsApp</span>
            <p className="mt-1 font-display text-2xl uppercase">{artistInfo.whatsapp}</p>
          </div>
          <div>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Estudio</span>
            <p className="mt-1 font-display text-2xl uppercase">{artistInfo.studio}</p>
          </div>
          <div>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Instagram</span>
            <p className="mt-1 font-display text-2xl uppercase">{artistInfo.instagram}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
