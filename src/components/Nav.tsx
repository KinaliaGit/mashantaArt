import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

const links = [
  { to: "/obras", label: "Obras" },
  { to: "/cursos", label: "Cursos" },
  { to: "/la-artista", label: "La artista" },
  { to: "/contacto", label: "Contacto" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-bone/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <NavLink to="/" className="font-display text-2xl uppercase tracking-tight sm:text-3xl" data-cursor="INICIO">
          Mashanta
        </NavLink>

        <nav className="hidden items-center gap-7 font-mono text-[0.72rem] uppercase tracking-widest text-ink-soft lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `border-b border-transparent pb-0.5 transition-colors hover:text-ink ${isActive ? "border-terracota text-ink" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <NavLink
            to="/adquirir"
            data-cursor="VER"
            className="border border-ink px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            Adquirir obra
          </NavLink>
          <NavLink
            to="/cursos"
            data-cursor="RESERVAR"
            className="border border-terracota bg-terracota px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-bone transition-colors hover:bg-ink hover:border-ink"
          >
            Reservar taller
          </NavLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[57px] bottom-0 z-40 flex flex-col justify-between bg-bone px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="border-b border-bone-shade-2 py-4 font-display text-3xl uppercase"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <NavLink to="/adquirir" className="border border-ink px-4 py-3 text-center font-mono text-xs uppercase tracking-widest">
              Adquirir obra
            </NavLink>
            <NavLink to="/cursos" className="border border-terracota bg-terracota px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-bone">
              Reservar taller
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
