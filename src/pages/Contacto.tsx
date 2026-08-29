import { artistInfo, waLink } from "../lib/data"
import { Reveal } from "../components/Reveal"

const mensaje = "Hola Mashanta, te escribo desde tu sitio. Me interesa: "
const waContacto = waLink(mensaje)

export function Contacto() {
  return (
    <div>
      <header className="border-b border-ink px-5 pb-10 pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Contacto</span>
          <h1 className="mt-3 font-display text-[clamp(2.6rem,9vw,6rem)] uppercase leading-[0.86] text-balance">
            Hablemos por
            <br />
            WhatsApp
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20">
        <Reveal variant="rise" className="max-w-2xl">
          <p className="font-display text-[clamp(1.4rem,3.4vw,2.2rem)] leading-snug text-ink text-balance">
            La forma más rápida de llegar al estudio. Cuéntame qué buscas — obra, comisión, restauración o taller — y te respondo por ahí.
          </p>

          <p className="mt-6 border-l-2 border-terracota bg-terracota/5 px-4 py-3 font-mono text-sm text-ink-soft">
            {mensaje}
          </p>

          <a
            href={waContacto}
            target="_blank"
            rel="noreferrer"
            data-cursor="ESCRIBIR"
            className="mt-7 inline-flex items-center gap-2 border border-terracota bg-terracota px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
          >
            Abrir WhatsApp →
          </a>

          <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-widest text-graphite">{artistInfo.whatsapp}</p>
        </Reveal>

        <Reveal variant="rise" delay={0.1} className="mt-20 border-t border-ink pt-10 sm:mt-28">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Visítanos</span>
          <div className="mt-4 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-display text-2xl uppercase">{artistInfo.studio}</p>
              {artistInfo.address && <p className="mt-1 text-sm text-ink-soft">{artistInfo.address}</p>}
              <a
                href={artistInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="VER"
                className="mt-3 inline-flex items-center gap-2 border-b border-ink pb-0.5 font-mono text-xs uppercase tracking-widest transition-colors hover:text-terracota hover:border-terracota"
              >
                Ver en Maps →
              </a>
            </div>
            <div>
              <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Instagram</span>
              <a
                href={artistInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="VER"
                className="mt-1 block font-display text-2xl uppercase transition-colors hover:text-terracota"
              >
                {artistInfo.instagram}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
