import { artistInfo, waLink } from "../lib/data"
import { PageHeader } from "../components/PageHeader"
import { Reveal } from "../components/Reveal"

const mensaje = "Hola Mashanta, te escribo desde tu sitio. Me interesa: "
const waContacto = waLink(mensaje)

export function Contacto() {
  return (
    <div>
      <PageHeader title="Hablemos por WhatsApp" />

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20">
        <Reveal variant="rise" className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-20">
          <div>
            <p className="font-display text-[clamp(1.4rem,3.4vw,2.2rem)] leading-snug text-ink text-balance">
              La forma más rápida de llegar al estudio. Cuéntame qué buscas, ya sea obra, comisión, restauración o taller, y te respondo por ese medio.
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
          </div>

          <div className="flex flex-col gap-8 border-t border-ink/10 pt-8 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
            <span className="label text-graphite">Visítanos</span>

            <div>
              <p className="font-display text-2xl">{artistInfo.studio}</p>
              {artistInfo.address && <p className="mt-1 text-sm text-ink-soft">{artistInfo.address}</p>}
              <a
                href={artistInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="VER"
                className="mt-3 inline-flex items-center gap-2 border-b border-ink pb-0.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-rosa hover:text-rosa"
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
                className="mt-1 block font-display text-2xl transition-colors hover:text-rosa"
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
