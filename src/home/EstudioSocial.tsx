import { artistInfo, studioPhotos } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

const ratios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]"]

export function EstudioSocial() {
  return (
    <section className="border-t border-bone-shade-2 bg-bone py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal variant="rise" className="mb-10 flex flex-col justify-between gap-3 sm:mb-14 sm:flex-row sm:items-end">
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.9]">Del estudio</h2>
          <a
            href={artistInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor="VER"
            className="border-b border-ink pb-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-terracota hover:border-terracota"
          >
            {artistInfo.instagram} →
          </a>
        </Reveal>

        <div className="columns-2 gap-4 sm:columns-3 [column-fill:balance]">
          {/* Plain (unrevealed) on purpose: entrance transitions on children of a
              CSS multi-column container never reliably settle in some browsers. */}
          {studioPhotos.map((p, i) => (
            <div key={p.alt} className="mb-4 break-inside-avoid">
              <div
                className={`overflow-hidden border border-ink/60 ${ratios[i % ratios.length]}`}
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                <ArtVisual image={p.image} seed={`social-${i}`} accent={p.accent} alt={p.alt} className="h-full w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
