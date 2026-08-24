import { useState } from "react"
import { artistInfo } from "../lib/data"
import { Reveal } from "../components/Reveal"

const motivos = ["Obra o comisión", "Curso o taller", "Prensa / colaboración", "Otro"]

export function Contacto() {
  const [motivo, setMotivo] = useState(motivos[0])
  const [sent, setSent] = useState(false)

  return (
    <div>
      <header className="border-b border-ink px-5 pb-10 pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Contacto</span>
          <h1 className="mt-3 font-display text-[clamp(2.6rem,9vw,6rem)] uppercase leading-[0.86] text-balance">
            Visítanos
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20">
        <Reveal variant="rise">
          <a
            href={`mailto:${artistInfo.email}`}
            className="block break-all font-display uppercase leading-[0.9] text-ink transition-colors hover:text-terracota"
            style={{ fontSize: "clamp(1.8rem,7vw,5rem)" }}
          >
            {artistInfo.email}
          </a>
        </Reveal>

        <Reveal variant="rise" delay={0.08} className="mt-10 grid gap-6 border-t border-ink pt-8 sm:grid-cols-3">
          <div>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">WhatsApp</span>
            <p className="mt-1 font-display text-2xl uppercase">{artistInfo.whatsapp}</p>
          </div>
          <div>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Estudio</span>
            <p className="mt-1 font-display text-2xl uppercase">{artistInfo.studio}</p>
          </div>
          <div>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Instagram</span>
            <p className="mt-1 font-display text-2xl uppercase">{artistInfo.instagram}</p>
          </div>
        </Reveal>

        <Reveal variant="rise" delay={0.14} className="mt-16 max-w-xl border-t border-bone-shade-2 pt-10">
          <h2 className="font-display text-2xl uppercase">Escríbenos directamente</h2>

          {sent ? (
            <p className="mt-4 border border-verde px-4 py-3 text-verde">
              Mensaje recibido. Mashanta responde por correo o WhatsApp dentro de 1–2 días hábiles.
            </p>
          ) : (
            <form
              className="mt-5 flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div className="flex flex-wrap gap-2">
                {motivos.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMotivo(m)}
                    className={`border px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-widest transition-colors ${
                      motivo === m ? "border-ink bg-ink text-bone" : "border-bone-shade-2 text-graphite hover:border-ink hover:text-ink"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Nombre</span>
                <input required className="border border-bone-shade-2 bg-bone px-3 py-2 text-ink outline-none focus:border-ink" placeholder="Tu nombre" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Correo</span>
                <input required type="email" className="border border-bone-shade-2 bg-bone px-3 py-2 text-ink outline-none focus:border-ink" placeholder="tu@email.com" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Mensaje</span>
                <textarea required rows={4} className="border border-bone-shade-2 bg-bone px-3 py-2 text-ink outline-none focus:border-ink" placeholder="Cuéntanos qué buscas" />
              </label>

              <button
                type="submit"
                className="self-start border border-terracota bg-terracota px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  )
}
