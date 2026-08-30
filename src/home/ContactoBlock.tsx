import { artistInfo, waLink } from "../lib/data"
import { Reveal } from "../components/Reveal"

const waContacto = waLink("Hola Mashanta, te escribo desde tu sitio. Me interesa: ")

export function ContactoBlock() {
  return (
    <section className="border-t border-ink/10 bg-bone py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal>
          <span className="label text-graphite">Contacto</span>
          <a
            href={waContacto}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block font-display leading-[0.95] text-ink transition-colors hover:text-graphite"
            style={{ fontSize: "clamp(2rem,7.5vw,5.5rem)" }}
          >
            Hablemos por WhatsApp
          </a>
        </Reveal>

        <Reveal className="mt-14 grid gap-8 border-t border-ink pt-8 sm:grid-cols-3">
          {[
            { k: "WhatsApp", v: artistInfo.whatsapp, href: waContacto },
            { k: "Instagram", v: artistInfo.instagram, href: artistInfo.instagramUrl },
            { k: "Estudio", v: artistInfo.studio, href: artistInfo.mapsUrl },
          ].map((row) => (
            <div key={row.k}>
              <span className="label text-graphite">{row.k}</span>
              <a
                href={row.href}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block font-display text-2xl leading-tight transition-colors hover:text-graphite"
              >
                {row.v}
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
