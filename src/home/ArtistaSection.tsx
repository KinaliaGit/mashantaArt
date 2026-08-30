import { Link } from "react-router-dom"
import { artistInfo } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

export function ArtistaSection() {
  return (
    <section className="border-y border-ink bg-ink py-24 text-bone sm:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
        <Reveal>
          <span className="label text-rosa">Mi historia</span>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,7vw,5rem)] leading-[0.98] text-balance">
            El taller como oficio
          </h2>
          <p className="mt-7 max-w-md text-bone-shade-2">{artistInfo.manifesto[0]}</p>
          <Link
            to="/mi-historia"
            className="label mt-9 inline-block border-b-2 border-bone pb-1 transition-colors hover:border-rosa"
          >
            Conoce mi historia
          </Link>
        </Reveal>

        <Reveal className="aspect-[4/5] w-full overflow-hidden border border-white/10 md:aspect-auto md:self-stretch">
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
