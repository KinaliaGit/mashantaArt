import { Link } from "react-router-dom"
import { commissions } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

const preview = commissions.slice(0, 3)

export function PedidosTeaser() {
  return (
    <section className="border-b border-ink/10 bg-bone py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end lg:gap-16">
          <div>
            <span className="label text-graphite">Pedidos o comisiones</span>
            <h2 className="mt-4 heading text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.95]">
              Una obra hecha para ti
            </h2>
          </div>
          <p className="text-ink-soft">
            Retratos, paisajes y piezas por encargo. Técnica, tamaño, tiempos y envío se definen contigo, caso por caso.
          </p>
        </Reveal>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-3">
          {preview.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="aspect-[4/5] overflow-hidden border border-ink/10">
                <ArtVisual image={c.image} seed={`teaser-comision-${i}`} accent={c.accent} alt={c.title} className="h-full w-full" />
              </div>
              <div className="mt-4 flex items-start gap-2.5 border-t border-ink pt-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-rosa" />
                <div>
                  <p className="font-display text-lg leading-tight">{c.title}</p>
                  <p className="label mt-1.5 text-graphite">{c.destination}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <Link
            to="/pedidos"
            className="label border-b-2 border-ink pb-1 transition-colors hover:border-rosa"
          >
            Cómo funciona una comisión
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
