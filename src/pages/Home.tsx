import { Hero } from "../home/Hero"
import { MarqueeBand } from "../home/MarqueeBand"
import { Coleccion } from "../home/Coleccion"
import { PedidosTeaser } from "../home/PedidosTeaser"
import { ArtistaSection } from "../home/ArtistaSection"
import { OtrosTeaser } from "../home/OtrosTeaser"
import { EstudioSocial } from "../home/EstudioSocial"
import { ContactoBlock } from "../home/ContactoBlock"

export function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Coleccion />
      <PedidosTeaser />
      <ArtistaSection />
      <OtrosTeaser />
      <EstudioSocial />
      <ContactoBlock />
    </>
  )
}
