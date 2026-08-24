import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Nav } from "./Nav"
import { Footer } from "./Footer"
import { Cursor } from "./Cursor"

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Cursor />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
