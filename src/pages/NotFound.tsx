import { Link } from "react-router-dom"
import { useEffect } from "react"

export function NotFound() {
  useEffect(() => {
    document.title = "Página no encontrada · Mashanta"
  }, [])
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="label text-graphite">Error 404</p>
      <h1 className="mt-3 heading text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1]">
        No está en la pared
      </h1>
      <p className="mt-3 max-w-sm text-ink-soft">Esta pieza no existe o se movió de lugar.</p>
      <Link to="/" className="mt-6 border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-bone">
        Volver al inicio
      </Link>
    </div>
  )
}
