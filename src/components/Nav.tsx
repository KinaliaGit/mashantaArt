import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { waLink } from "../lib/data"
import { Wordmark } from "./Wordmark"

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
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/90 text-ink backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <NavLink to="/" aria-label="Inicio — Mashanta" className="block shrink-0">
            <Wordmark tone="ink" className="w-[112px] sm:w-[138px]" />
          </NavLink>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `label border-b-2 pb-1 transition-colors ${
                    isActive
                      ? "border-rosa text-ink"
                      : "border-transparent text-graphite hover:text-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <a
              href={waNav}
              target="_blank"
              rel="noreferrer"
              className="label border border-ink px-4 py-2 transition-colors hover:bg-ink hover:text-bone"
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
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-bone text-ink lg:hidden">
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
            <NavLink to="/" aria-label="Inicio — Mashanta" className="block">
              <Wordmark tone="ink" className="w-[112px]" />
            </NavLink>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-between overflow-y-auto px-5 py-10">
            <nav className="flex flex-col">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `border-b border-ink/10 py-5 font-display text-3xl ${isActive ? "text-ink" : "text-graphite"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <a
              href={waNav}
              target="_blank"
              rel="noreferrer"
              className="label mt-10 border border-ink px-4 py-4 text-center transition-colors hover:bg-ink hover:text-bone"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  )
}
