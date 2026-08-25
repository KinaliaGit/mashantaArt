import { useState } from "react"
import { nextCollection } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

export function NextCollectionTeaser() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

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

          {sent ? (
            <p className="mt-7 max-w-sm border border-verde px-4 py-3 text-sm text-verde">
              Te avisamos por correo en cuanto abra {nextCollection.name}.
            </p>
          ) : (
            <form
              className="mt-7 flex max-w-sm flex-col gap-2 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <label className="sr-only" htmlFor="teaser-email">
                Correo
              </label>
              <input
                id="teaser-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 border border-graphite bg-transparent px-3 py-2.5 text-bone outline-none placeholder:text-bone-shade-2 focus:border-bone"
              />
              <button
                type="submit"
                data-cursor="VER"
                className="border border-terracota bg-terracota px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-bone hover:text-ink hover:border-bone"
              >
                Avísame
              </button>
            </form>
          )}
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
