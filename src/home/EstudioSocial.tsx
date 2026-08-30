import { artistInfo, studioPhotos } from "../lib/data"
import { ArtVisual } from "../components/ArtVisual"
import { Reveal } from "../components/Reveal"

const ratios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]"]

export function EstudioSocial() {
  return (
    <section className="border-t border-ink/10 bg-bone py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="rule-magenta font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.95]">Del estudio</h2>
          <a
            href={artistInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="label border-b-2 border-ink pb-1 transition-colors hover:border-rosa"
          >
            {artistInfo.instagram}
          </a>
        </Reveal>

        <div className="columns-2 gap-4 sm:columns-3 [column-fill:balance]">
          {studioPhotos.map((p, i) => (
            <div key={p.alt} className="mb-4 break-inside-avoid">
              <div className={`overflow-hidden border border-ink/10 ${ratios[i % ratios.length]}`}>
                <ArtVisual image={p.image} seed={`social-${i}`} accent={p.accent} alt={p.alt} className="h-full w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
