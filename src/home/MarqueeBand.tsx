import { Marquee } from "../components/Marquee"

export function MarqueeBand() {
  return (
    <div className="border-y border-ink bg-bone-shade py-5">
      <Marquee
        items={["PINTURA", "RESTAURACIÓN", "ILUSTRACIÓN", "TALLERES", "COMISIONES"]}
        className="font-display text-[clamp(1.6rem,5.5vw,3.4rem)] uppercase leading-none text-ink"
      />
    </div>
  )
}
