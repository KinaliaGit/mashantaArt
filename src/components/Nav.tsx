import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { waLink } from "../lib/data"

const links = [
  { to: "/colecciones", label: "Colecciones" },
  { to: "/pedidos", label: "Pedidos o comisiones" },
  { to: "/mi-historia", label: "Mi historia" },
  { to: "/otros", label: "Otros" },
  { to: "/contacto", label: "Contacto" },
]

const waNav = waLink("Hola Mashanta, te escribo desde tu sitio.")

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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-bone backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <NavLink to="/" className="font-display text-2xl uppercase tracking-wide sm:text-3xl" data-cursor="INICIO">
            Mashanta
          </NavLink>

          <nav className="hidden items-center gap-7 font-mono text-[0.72rem] uppercase tracking-widest text-bone-shade-2 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `border-b border-transparent pb-0.5 transition-colors hover:text-bone ${isActive ? "border-terracota text-bone" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={waNav}
              target="_blank"
              rel="noreferrer"
              data-cursor="VER"
              className="border border-terracota bg-terracota px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-bone transition-colors hover:bg-bone hover:text-ink hover:border-bone"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[101] flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`block h-px w-6 bg-bone transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-bone transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
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
        <div className="fixed inset-0 z-[100] flex flex-col bg-ink text-bone lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <NavLink to="/" className="font-display text-2xl uppercase tracking-wide" data-cursor="INICIO">
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
                <NavLink key={l.to} to={l.to} className="border-b border-white/10 py-4 font-display text-3xl uppercase">
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={waNav}
                target="_blank"
                rel="noreferrer"
                className="border border-terracota bg-terracota px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-bone"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
