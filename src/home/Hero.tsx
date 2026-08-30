import { Link } from "react-router-dom"
import { currentCollection } from "../lib/data"
import { Wordmark } from "../components/Wordmark"

/**
 * The hero is the artist's own hand: the signature, set plainly on the gallery
 * wall, with a single line naming the practice and two quiet routes in. No
 * imagery here — the work begins in the section immediately below.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[clamp(560px,82svh,820px)] flex-col justify-center border-b border-ink/10 bg-bone px-5 py-20 text-ink sm:px-8">
      <div className="mx-auto w-full max-w-[1000px] text-center">
        <p className="label flex items-center justify-center gap-2.5 text-graphite">
          <span aria-hidden className="inline-block h-2 w-2 bg-rosa" />
          Colección {currentCollection.name} · en cierre
        </p>

        <h1 className="mt-8" aria-label="Mashanta">
          <Wordmark tone="ink" className="mx-auto w-[min(78vw,540px)]" />
        </h1>

        <p className="mx-auto mt-8 max-w-xl font-display text-[clamp(1.05rem,2.6vw,1.5rem)] italic leading-snug text-ink-soft">
          Pintura, restauración y obra por encargo, desde un solo estudio.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <Link
            to="/colecciones"
            className="label border-b-2 border-ink pb-1 transition-colors hover:border-rosa"
          >
            Ver la colección
          </Link>
          <Link
            to="/pedidos"
            className="label border-b-2 border-transparent pb-1 text-graphite transition-colors hover:border-rosa hover:text-ink"
          >
            Pedidos o comisiones
          </Link>
        </div>
      </div>

      <p className="label absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-graphite-soft sm:block">
        Desliza para recorrer el estudio
      </p>
    </section>
  )
}
