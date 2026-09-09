import { commissionSteps, waLink } from "../lib/data"
import { PageHeader } from "../components/PageHeader"
import { SectionTitle } from "../components/SectionTitle"
import { Reveal } from "../components/Reveal"

const waComision = waLink(
  "Hola Mashanta, me gustaría comisionar una obra. Te cuento la idea: ",
)

export function Pedidos() {
  return (
    <div className="paper-grain">
      <PageHeader
        title="Una obra hecha para ti"
        description="Una comisión es una pieza original pensada desde cero: un retrato, un paisaje, un díptico para un muro específico. La técnica, el tamaño, los tiempos y el envío se definen contigo, caso por caso."
      >
        <a
          href={waComision}
          target="_blank"
          rel="noreferrer"
          data-cursor="VER"
          className="label mt-7 inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-bone transition-colors hover:bg-bone hover:text-ink"
        >
          Solicitar una comisión · WhatsApp →
        </a>
      </PageHeader>

      {/* Cómo funciona */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20">
        <Reveal variant="rise" className="mb-10">
          <SectionTitle>¿Cómo funciona?</SectionTitle>
          <p className="mt-6 max-w-2xl text-sm text-ink-soft">
            El proceso es flexible. Estos son los pasos habituales, pero cada encargo se adapta según lo que necesites.
          </p>
        </Reveal>

        <ol className="grid gap-x-12 gap-y-0 border-t border-ink sm:grid-cols-2">
          {commissionSteps.map((s, i) => (
            <Reveal key={s.title} variant="rise" delay={i * 0.05}>
              <li
                className={`-mx-4 flex gap-5 px-4 py-8 transition-colors hover:bg-rosa/20 ${
                  i < commissionSteps.length - (commissionSteps.length % 2 === 0 ? 2 : 1) ? "border-b border-bone-shade-2" : ""
                } sm:odd:border-r sm:odd:border-bone-shade-2 sm:odd:pr-8 sm:even:pl-8`}
              >
                <span className="heading shrink-0 text-4xl leading-none text-bone-shade-2 sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="heading text-xl sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-soft">{s.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}

          {commissionSteps.length % 2 === 1 && (
            <Reveal variant="rise" delay={commissionSteps.length * 0.05}>
              <li className="-mx-4 flex h-full flex-col justify-center gap-4 px-4 py-8 sm:border-l sm:border-bone-shade-2 sm:pl-8">
                <p className="max-w-sm text-ink-soft">¿Ya tienes claro qué quieres? Empecemos con la primera conversación.</p>
                <a
                  href={waComision}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="VER"
                  className="label inline-flex w-fit items-center gap-2 border border-ink bg-ink px-5 py-3 text-bone transition-colors hover:bg-bone hover:text-ink"
                >
                  Solicitar una comisión · WhatsApp →
                </a>
              </li>
            </Reveal>
          )}
        </ol>
      </section>

      {/* CTA final */}
      <section className="border-t border-bone-shade-2 bg-bone py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <Reveal variant="rise" className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-2xl heading text-[clamp(1.6rem,4.5vw,2.8rem)] leading-tight text-balance">
              ¿Tienes una idea en mente? Cuéntamela y armamos una propuesta.
            </h2>
            <a
              href={waComision}
              target="_blank"
              rel="noreferrer"
              data-cursor="VER"
              className="inline-flex shrink-0 items-center gap-2 border border-terracota bg-terracota px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
            >
              Escribir por WhatsApp →
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
