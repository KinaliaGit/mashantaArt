import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <span className="font-mono text-[0.68rem] uppercase tracking-widest text-graphite">404</span>
      <h1 className="mt-2 font-display text-[clamp(2.4rem,8vw,5rem)] uppercase leading-[0.9]">
        No está en la pared
      </h1>
      <p className="mt-3 max-w-sm text-ink-soft">Esta pieza no existe o se movió de lugar.</p>
      <Link to="/" className="mt-6 border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-bone">
        Volver al inicio
      </Link>
    </div>
  )
}
