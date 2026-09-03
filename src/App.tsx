import { Navigate, Route, Routes, useParams } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Obras } from "./pages/Obras"
import { ObraDetalle } from "./pages/ObraDetalle"
import { Pedidos } from "./pages/Pedidos"
import { Otros } from "./pages/Otros"
import { CursoDetalle } from "./pages/CursoDetalle"
import { MiHistoria } from "./pages/MiHistoria"
import { Contacto } from "./pages/Contacto"
import { NotFound } from "./pages/NotFound"

function RedirectWithSlug({ to }: { to: (slug?: string) => string }) {
  const { slug } = useParams()
  return <Navigate to={to(slug)} replace />
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/obras" element={<Obras />} />
        <Route path="/obras/:slug" element={<ObraDetalle />} />

        <Route path="/pedidos" element={<Pedidos />} />

        <Route path="/mi-historia" element={<MiHistoria />} />

        <Route path="/otros" element={<Otros />} />
        <Route path="/otros/cursos/:slug" element={<CursoDetalle />} />

        <Route path="/contacto" element={<Contacto />} />

        {/* Redirects desde las rutas anteriores */}
        <Route path="/colecciones" element={<Navigate to="/obras" replace />} />
        <Route path="/colecciones/:slug" element={<RedirectWithSlug to={(s) => `/obras/${s}`} />} />
        <Route path="/cursos" element={<Navigate to="/otros" replace />} />
        <Route path="/cursos/:slug" element={<RedirectWithSlug to={(s) => `/otros/cursos/${s}`} />} />
        <Route path="/otros/cursos/:slug/reservar" element={<RedirectWithSlug to={(s) => `/otros/cursos/${s}`} />} />
        <Route path="/cursos/:slug/reservar" element={<RedirectWithSlug to={(s) => `/otros/cursos/${s}`} />} />
        <Route path="/la-artista" element={<Navigate to="/mi-historia" replace />} />
        <Route path="/adquirir" element={<Navigate to="/pedidos" replace />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
