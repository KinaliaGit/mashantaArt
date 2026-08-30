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
  const [heroVisible, setHeroVisible] = useState(false)
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

  // On the homepage, the signature is already shown big on the hero photo —
  // the small wordmark in the bar would just repeat it while that photo is
  // on screen. Hide it for exactly as long as the photo is visible, then
  // bring it back once the page scrolls past it (or on any other route).
  useEffect(() => {
    const el = document.getElementById("hero-photo")
    if (!el) {
      setHeroVisible(false)
      return
    }
    // Set the initial state synchronously from actual layout instead of
    // waiting on the observer's first callback, which some browsers defer.
    const rect = el.getBoundingClientRect()
    setHeroVisible(rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5)

    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), {
      threshold: 0.5,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/90 text-ink backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          {/* Logo and WhatsApp button are pinned to the same fixed width so the
              centered nav below sits at the true center of the bar, not just
              the midpoint of whatever space is left over between them. */}
          <NavLink
            to="/"
            aria-label="Inicio — Mashanta"
            className={`flex w-[112px] shrink-0 transition-opacity duration-300 sm:w-[138px] ${heroVisible ? "pointer-events-none opacity-0" : "opacity-100"}`}
          >
            <Wordmark tone="ink" className="w-[112px] sm:w-[138px]" />
          </NavLink>

          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `label border-b-2 pb-1 transition-colors ${
                    isActive
                      ? "border-rosa text-ink"
                      : "border-transparent text-graphite hover:border-rosa hover:text-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center justify-end lg:flex lg:w-[138px]">
            <a
              href={waNav}
              target="_blank"
              rel="noreferrer"
              className="label border border-ink px-4 py-2 transition-colors hover:border-rosa hover:bg-rosa hover:text-ink"
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
