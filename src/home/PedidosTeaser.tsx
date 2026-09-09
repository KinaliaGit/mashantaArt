import { Link } from "react-router-dom"
import { Reveal } from "../components/Reveal"

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

        <Reveal>
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
