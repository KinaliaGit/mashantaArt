import { artistInfo, waLink } from "../lib/data"
import { Reveal } from "../components/Reveal"

const waContacto = waLink("Hola Mashanta, te escribo desde tu sitio. Me interesa: ")

export function ContactoBlock() {
  return (
    <section className="border-t border-bone-shade-2 bg-bone py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal variant="rise">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Contacto</span>
          <a
            href={waContacto}
            target="_blank"
            rel="noreferrer"
            data-cursor="ESCRIBIR"
            className="mt-3 block font-display uppercase leading-[0.9] text-ink transition-colors hover:text-terracota"
            style={{ fontSize: "clamp(2rem,8vw,6rem)" }}
          >
            Hablemos por WhatsApp
          </a>
        </Reveal>

        <Reveal variant="rise" delay={0.08} className="mt-10 grid gap-6 border-t border-ink pt-8 sm:grid-cols-3">
          <div>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">WhatsApp</span>
            <a
              href={waContacto}
              target="_blank"
              rel="noreferrer"
              data-cursor="ESCRIBIR"
              className="mt-1 block font-display text-2xl uppercase transition-colors hover:text-terracota"
            >
              {artistInfo.whatsapp}
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
          <div>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-graphite">Estudio</span>
            <a
              href={artistInfo.mapsUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="VER"
              className="mt-1 block font-display text-2xl uppercase transition-colors hover:text-terracota"
            >
              {artistInfo.studio}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
