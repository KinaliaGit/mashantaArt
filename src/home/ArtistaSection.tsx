import { Link } from "react-router-dom"
import { artistInfo } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

export function ArtistaSection() {
  return (
    <section className="border-t border-graphite bg-ink py-16 text-bone sm:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <Reveal variant="rise">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-bone-shade-2">Mi historia</span>
          <h2 className="mt-3 font-display text-[clamp(2.4rem,7vw,5.2rem)] uppercase leading-[0.88] text-balance">
            {artistInfo.name},<br />el taller
            <br />
            como oficio
          </h2>
          <p className="mt-6 max-w-md text-bone-shade-2">{artistInfo.manifesto[0]}</p>
          <Link
            to="/mi-historia"
            data-cursor="VER"
            className="mt-7 inline-flex items-center gap-3 border-b border-bone pb-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-terracota hover:border-terracota"
          >
            Conoce mi historia →
          </Link>
        </Reveal>

        <Reveal variant="wipe" delay={0.1} className="aspect-[4/5] w-full overflow-hidden border border-graphite md:aspect-auto">
          <ArtVisual
            image={artistInfo.studioImage}
            seed="artista-estudio"
            accent="tierra-rosa"
            alt="El estudio de Mashanta"
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  )
}
