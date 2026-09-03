import { nextWork } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

export function NextWorkTeaser() {
  return (
    <section className="border-y border-white/10 bg-ink py-20 text-bone sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
        <Reveal variant="rise">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-bone-shade-2">
            {nextWork.label}
          </span>
          <h2 className="mt-4 heading text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.98] text-balance">
            {nextWork.title}
          </h2>
          <p className="mt-5 max-w-md text-bone-shade-2">{nextWork.teaser}</p>
        </Reveal>

        <Reveal
          variant="wipe"
          delay={0.1}
          className="aspect-[4/5] w-full overflow-hidden border border-white/10 opacity-95 md:aspect-auto"
        >
          <ArtVisual
            image={nextWork.image}
            seed="obra-en-proceso"
            accent={nextWork.accent}
            alt="Obra en proceso en el estudio"
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  )
}
