import { Link } from "react-router-dom"
import { artistInfo } from "../lib/data"
import { Wordmark } from "./Wordmark"

export function Footer() {
  return (
    <footer className="border-t border-ink bg-ink text-bone">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="label text-bone-shade-2">Estudio</span>
          <span className="font-display text-xl">{artistInfo.studio}</span>
          <div className="mt-2 flex flex-col gap-1.5">
            <a href={artistInfo.mapsUrl} target="_blank" rel="noreferrer" className="label text-graphite-soft transition-colors hover:text-rosa">
              Ver en Maps
            </a>
            <a href={artistInfo.instagramUrl} target="_blank" rel="noreferrer" className="label text-graphite-soft transition-colors hover:text-rosa">
              {artistInfo.instagram}
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-2.5">
          {[
            { to: "/obras", label: "Obras" },
            { to: "/pedidos", label: "Pedidos o comisiones" },
            { to: "/mi-historia", label: "Mi historia" },
            { to: "/otros", label: "Otros" },
            { to: "/contacto", label: "Contacto" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="label text-graphite-soft transition-colors hover:text-rosa">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <Link to="/" aria-label="Inicio · Mashanta" className="block w-full overflow-hidden border-t border-white/10 px-5 py-12 sm:py-16">
        <Wordmark tone="paper" className="mx-auto w-[min(88%,880px)]" />
      </Link>
      <div className="label border-t border-white/10 px-5 py-4 text-center text-graphite-soft sm:px-8">
        © {new Date().getFullYear()} Mashanta · Pintura, restauración y comisiones
      </div>
    </footer>
  )
}
