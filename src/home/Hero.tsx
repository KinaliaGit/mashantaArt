import { Link } from "react-router-dom"
import { artistInfo } from "../lib/data"
import { Wordmark } from "../components/Wordmark"

/**
 * Everything the visitor needs to leave with — who this is, what the studio
 * does, where to go next — sits together on the photo, the way a gallery
 * hangs one wall label under a piece rather than scattering the text
 * around the room. A soft ink tint keeps it all legible against the bright
 * window in the shot.
 */
export function Hero() {
  return (
    <div
      id="hero-photo"
      className="relative flex h-[84dvh] max-h-[780px] min-h-[520px] w-full flex-col items-center justify-center gap-7 overflow-hidden bg-ink px-5 text-center"
    >
      <img
        src={artistInfo.heroImage}
        alt="Mashanta pintando en su estudio, frente al caballete"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/35" />

      <Wordmark
        tone="paper"
        className="relative w-[min(62vw,420px)] drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
      />

      <p className="relative max-w-md text-[clamp(0.95rem,2vw,1.1rem)] leading-snug text-bone-shade-2 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
        Pintura, restauración y obra por encargo, desde un solo estudio.
      </p>

      <div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <Link
          to="/obras"
          className="label border-b-2 border-bone pb-1 text-bone transition-colors hover:border-rosa hover:text-rosa"
        >
          Ver obra disponible
        </Link>
        <Link
          to="/pedidos"
          className="label border-b-2 border-transparent pb-1 text-bone-shade-2 transition-colors hover:border-rosa hover:text-rosa"
        >
          Pedidos o comisiones
        </Link>
      </div>
    </div>
  )
}
