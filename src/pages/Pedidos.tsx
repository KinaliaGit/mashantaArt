import { commissions, commissionSteps, waLink } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

const waComision = waLink(
  "Hola Mashanta, me gustaría comisionar una obra. Te cuento la idea: ",
)

export function Pedidos() {
  return (
    <div className="paper-grain">
      <header className="bg-ink px-5 pb-14 pt-14 text-bone sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite-soft">Pedidos o comisiones</span>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,9vw,6rem)] uppercase leading-[0.95] text-balance">
            Una obra
            <br />
            hecha para ti
          </h1>
          <p className="mt-6 max-w-xl text-bone-shade-2">
            Una comisión es una pieza original pensada desde cero: un retrato, un paisaje, un díptico para un muro específico. No hay un formato único — la técnica, el tamaño, los tiempos y el envío se definen contigo, caso por caso.
          </p>
          <a
            href={waComision}
            target="_blank"
            rel="noreferrer"
            data-cursor="VER"
            className="mt-7 inline-flex items-center gap-2 border border-terracota bg-terracota px-5 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-bone hover:text-ink hover:border-bone"
          >
            Solicitar una comisión · WhatsApp →
          </a>
        </div>
      </header>

      {/* Cómo funciona */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20">
        <Reveal variant="rise" className="mb-8">
          <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] uppercase leading-none">¿Cómo funciona?</h2>
          <p className="mt-3 max-w-md text-sm text-ink-soft">
            El proceso es flexible. Estos son los pasos habituales, pero cada encargo se adapta según lo que necesites.
          </p>
        </Reveal>

        <ol className="flex flex-col gap-0 border-t border-ink">
          {commissionSteps.map((s, i) => (
            <Reveal key={s.title} variant="rise" delay={i * 0.05}>
              <li className="grid grid-cols-[auto_1fr] gap-4 border-b border-bone-shade-2 py-6 sm:gap-8">
                <span className="font-mono text-sm text-graphite">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl uppercase sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 max-w-lg text-sm text-ink-soft">{s.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Portafolio */}
      <section className="border-t border-bone-shade-2 bg-bone-shade py-14 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <Reveal variant="rise" className="mb-10">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Portafolio</span>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,5vw,3rem)] uppercase leading-none">Obras hechas y enviadas</h2>
            <p className="mt-3 max-w-md text-sm text-ink-soft">
              Algunos encargos recientes, a dónde llegaron y cómo se entregaron.
            </p>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {commissions.map((c, i) => (
              <Reveal key={c.title} variant="rise" delay={i * 0.05}>
                <div className="aspect-[4/5] overflow-hidden border border-ink/15 shadow-soft">
                  <ArtVisual image={c.image} seed={`comision-${i}`} accent={c.accent} alt={c.title} className="h-full w-full" />
                </div>
                <div className="mt-3 font-mono text-[0.68rem] uppercase tracking-wide text-ink">{c.title}</div>
                <div className="font-mono text-[0.62rem] uppercase tracking-wide text-graphite-soft">
                  {c.technique} — {c.year} — {c.dimensions}
                </div>
                <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-wide text-terracota">→ {c.destination}</div>
                <p className="mt-2 text-sm text-ink-soft">{c.shippingNote}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-bone-shade-2 bg-bone py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <Reveal variant="rise">
            <h2 className="max-w-2xl font-display text-[clamp(1.6rem,4.5vw,2.8rem)] uppercase leading-tight text-balance">
              ¿Tienes una idea en mente? Cuéntamela y armamos una propuesta.
            </h2>
            <a
              href={waComision}
              target="_blank"
              rel="noreferrer"
              data-cursor="VER"
              className="mt-6 inline-flex items-center gap-2 border border-terracota bg-terracota px-5 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
            >
              Escribir por WhatsApp →
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
