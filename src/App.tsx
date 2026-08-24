import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Obras } from "./pages/Obras"
import { ObraDetalle } from "./pages/ObraDetalle"
import { Cursos } from "./pages/Cursos"
import { CursoDetalle } from "./pages/CursoDetalle"
import { Reservar } from "./pages/Reservar"
import { LaArtista } from "./pages/LaArtista"
import { Contacto } from "./pages/Contacto"
import { Adquirir } from "./pages/Adquirir"
import { NotFound } from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/obras/:slug" element={<ObraDetalle />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/:slug" element={<CursoDetalle />} />
        <Route path="/cursos/:slug/reservar" element={<Reservar />} />
        <Route path="/la-artista" element={<LaArtista />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/adquirir" element={<Adquirir />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
