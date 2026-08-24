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
    <>
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
            className="relative z-[101] flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/*
        Rendered as a sibling of <header>, not a descendant — a header with
        backdrop-blur establishes a new containing block for position:fixed
        children (same rule as `filter`), which silently breaks a nested
        fixed overlay's viewport anchoring. Full inset-0 + its own logo row
        also means it never depends on the real header's measured height.
      */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-bone lg:hidden">
          <div className="flex items-center justify-between border-b border-ink px-5 py-3">
            <NavLink to="/" className="font-display text-2xl uppercase tracking-tight" data-cursor="INICIO">
              Mashanta
            </NavLink>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center font-display text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-between overflow-y-auto px-5 py-8">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className="border-b border-bone-shade-2 py-4 font-display text-3xl uppercase">
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <NavLink to="/adquirir" className="border border-ink px-4 py-3 text-center font-mono text-xs uppercase tracking-widest">
                Adquirir obra
              </NavLink>
              <NavLink
                to="/cursos"
                className="border border-terracota bg-terracota px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-bone"
              >
                Reservar taller
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
