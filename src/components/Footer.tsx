import { Link } from "react-router-dom"
import { artistInfo } from "../lib/data"

export function Footer() {
  return (
    <footer className="border-t border-ink bg-ink text-bone">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2 font-mono text-[0.72rem] uppercase tracking-widest text-bone-shade-2">
          <span className="text-bone">Estudio</span>
          <span>{artistInfo.studio}</span>
          <a href={`mailto:${artistInfo.email}`} className="hover:text-bone">
            {artistInfo.email}
          </a>
          <a
            href="https://instagram.com/mashanta.art"
            target="_blank"
            rel="noreferrer"
            className="hover:text-bone"
          >
            {artistInfo.instagram}
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.72rem] uppercase tracking-widest text-bone-shade-2">
          <Link to="/obras" className="hover:text-bone">
            Obras
          </Link>
          <Link to="/cursos" className="hover:text-bone">
            Cursos
          </Link>
          <Link to="/la-artista" className="hover:text-bone">
            La artista
          </Link>
          <Link to="/contacto" className="hover:text-bone">
            Contacto
          </Link>
          <Link to="/adquirir" className="hover:text-bone">
            Adquirir obra
          </Link>
        </nav>
      </div>

      <Link
        to="/"
        data-cursor="INICIO"
        className="block w-full overflow-hidden border-t border-graphite py-2 leading-[0.8]"
      >
        <span className="block whitespace-nowrap font-display text-center uppercase text-[clamp(3.5rem,17vw,13rem)] text-bone">
          Mashanta
        </span>
      </Link>
      <div className="border-t border-graphite px-5 py-3 text-center font-mono text-[0.62rem] uppercase tracking-widest text-bone-shade-2 sm:px-8">
        © {new Date().getFullYear()} Mashanta — obra, comisiones y talleres
      </div>
    </footer>
  )
}
