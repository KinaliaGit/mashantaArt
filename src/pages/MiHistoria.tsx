import { Link } from "react-router-dom"
import { artistInfo, artworks, studioPhotos } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"
import { Comunidad } from "../home/Comunidad"
import firmaMashanta from "../assets/firma-mashanta.jpeg"

const practicas = [
  {
    title: "Pintura",
    detail: "Óleo, acrílico y acuarela — obra propia y por comisión, para colección privada.",
    image: artworks.find((a) => a.slug === "memoria-de-agua")?.image,
    accent: "ultramar" as const,
  },
  {
    title: "Restauración",
    detail: "Limpieza, consolidación y reintegración cromática sobre piezas familiares y de colección.",
    image: artworks.find((a) => a.slug === "restauracion-oleo-1940")?.image,
    accent: "verde" as const,
  },
  {
    title: "Ilustración infantil",
    detail: "Personajes y narrativa visual, publicados en talleres y en un libro ilustrado en curso.",
    image: artworks.find((a) => a.slug === "cuento-de-domingo")?.image,
    accent: "ocre" as const,
  },
  {
    title: "Enseñanza",
    detail: "Clases permanentes para todas las edades y visitas guiadas a museos de la ciudad.",
    image: studioPhotos.find((p) => p.alt.includes("taller de acuarela"))?.image,
    accent: "tierra-rosa" as const,
  },
]

export function MiHistoria() {
  return (
    <div>
      <div className="relative flex h-[80dvh] max-h-[760px] min-h-[480px] w-full items-end overflow-hidden">
        <ArtVisual
          image={artistInfo.handsImage}
          seed="artista-manos"
          accent="terracota"
          alt="Manos de Mashanta trabajando en el caballete del estudio"
          className="absolute inset-0 h-full w-full"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />

        <Reveal variant="rise" className="relative w-full px-5 pb-12 sm:px-8 sm:pb-16">
          <div className="mx-auto max-w-[1440px]">
            <h1 className="heading text-[clamp(2.4rem,6.5vw,4.5rem)] leading-[1.02] text-balance text-bone">
              {artistInfo.name}
            </h1>
            <p className="label mt-3 text-bone-shade-2">{artistInfo.role}</p>
            <p className="mt-7 max-w-xl font-display text-[clamp(1.25rem,3vw,1.75rem)] leading-snug text-bone text-balance [text-shadow:0_1px_16px_rgba(0,0,0,0.5)]">
              {artistInfo.manifesto[0]}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="border-b border-ink/10 py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal variant="wipe" className="order-2 flex justify-center md:order-2">
            <div className="w-full max-w-sm -rotate-1 overflow-hidden border border-ink/10 bg-bone shadow-[0_25px_50px_-20px_rgba(0,0,0,0.25)]">
              <img
                src={firmaMashanta}
                alt="Mano firmando &quot;Mashanta&quot; sobre una hoja, rodeada de pinceles, acuarelas y bocetos del estudio"
                className="aspect-[5/4] w-full object-cover"
                style={{ objectPosition: "44% 48%" }}
              />
            </div>
          </Reveal>

          <Reveal variant="rise" delay={0.06} className="order-1 md:order-1">
            <span className="label text-graphite">De dónde viene el nombre</span>
            <div className="mt-4 flex flex-col gap-5">
              {artistInfo.nameOrigin.map((p, i) => (
                <p key={i} className="text-ink-soft text-balance">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-ink bg-bone-shade py-14 sm:py-20">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">Manifiesto</span>
          <div className="mt-4 flex flex-col gap-6">
            {artistInfo.manifesto.slice(1).map((p, i) => (
              <Reveal key={i} variant="rise" delay={i * 0.08}>
                <p className="font-display text-[clamp(1.2rem,3vw,1.7rem)] leading-snug text-ink text-balance">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20">
        <Reveal variant="rise" className="mb-10">
          <h2 className="heading text-[clamp(2rem,5.5vw,3.4rem)] leading-[0.9]">Cuatro oficios, una mesa</h2>
        </Reveal>
        <div className="grid gap-x-8 gap-y-10 border-t border-ink pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:border-t-0 lg:pt-0">
          {practicas.map((p, i) => (
            <Reveal key={p.title} variant="rise" delay={i * 0.06}>
              <div className="aspect-[4/5] w-full overflow-hidden border border-ink/10">
                <ArtVisual image={p.image} seed={p.title} accent={p.accent} alt={p.title} className="h-full w-full" />
              </div>
              <h3 className="heading mt-3 text-lg">{p.title}</h3>
              <p className="mt-1.5 text-sm text-ink-soft">{p.detail}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="rise" delay={0.1} className="mt-14 flex flex-wrap gap-3">
          <Link to="/colecciones" data-cursor="VER" className="border border-terracota bg-terracota px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink">
            Ver colección
          </Link>
          <Link to="/otros" data-cursor="VER" className="border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-ink hover:text-bone">
            Otros
          </Link>
        </Reveal>
      </div>

      <div className="aspect-[21/9] w-full overflow-hidden border-y border-ink/10">
        <ArtVisual
          image={artistInfo.studioImage}
          seed="mi-historia-estudio"
          accent="tierra-rosa"
          alt="El estudio de Mashanta"
          className="h-full w-full"
        />
      </div>

      <Comunidad />
    </div>
  )
}
