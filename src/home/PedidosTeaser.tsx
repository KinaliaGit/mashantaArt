import { Link } from "react-router-dom"
import { commissions } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

const preview = commissions.slice(0, 3)

export function PedidosTeaser() {
  return (
    <section className="border-b border-bone-shade-2 bg-bone py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Pedidos o comisiones</span>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,6vw,4.2rem)] uppercase leading-[0.9]">
              Una obra hecha
              <br />
              para ti
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            Retratos, paisajes y piezas por encargo. Técnica, tamaño, tiempos y envío se definen contigo — caso por caso.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-3">
          {preview.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="aspect-[4/5] overflow-hidden border border-ink/15 shadow-soft">
                <ArtVisual image={c.image} seed={`teaser-comision-${i}`} accent={c.accent} alt={c.title} className="h-full w-full" />
              </div>
              <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-wide text-ink">{c.title}</div>
              <div className="font-mono text-[0.6rem] uppercase tracking-wide text-terracota">→ {c.destination}</div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 sm:mt-14">
          <Link
            to="/pedidos"
            data-cursor="VER"
            className="inline-flex items-center gap-3 border-b border-ink pb-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-terracota hover:border-terracota"
          >
            Cómo funciona una comisión →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
