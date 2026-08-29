import { nextCollection } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

export function NextCollectionTeaser() {
  return (
    <section className="border-y border-graphite bg-ink py-16 text-bone sm:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
        <Reveal variant="rise">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-bone-shade-2">Próxima colección</span>
          <h2 className="mt-3 font-display text-[clamp(2.6rem,8vw,5.6rem)] uppercase leading-[0.88] text-balance">
            {nextCollection.name}
          </h2>
          <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-widest text-terracota">{nextCollection.expected}</p>
          <p className="mt-5 max-w-md text-bone-shade-2">{nextCollection.teaser}</p>
          <p className="mt-7 font-mono text-[0.7rem] uppercase tracking-widest text-bone-shade-2">Próximamente</p>
        </Reveal>

        <Reveal variant="wipe" delay={0.1} className="aspect-[4/5] w-full overflow-hidden border border-graphite opacity-90 md:aspect-auto">
          <ArtVisual
            image={nextCollection.image}
            seed={nextCollection.slug}
            accent={nextCollection.accent}
            alt={`Adelanto de la colección ${nextCollection.name}`}
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  )
}
