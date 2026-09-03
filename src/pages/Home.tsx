import { Hero } from "../home/Hero"
import { ObrasPreview } from "../home/ObrasPreview"
import { PedidosTeaser } from "../home/PedidosTeaser"
import { ArtistaSection } from "../home/ArtistaSection"
import { OtrosTeaser } from "../home/OtrosTeaser"
import { EstudioSocial } from "../home/EstudioSocial"
import { ContactoBlock } from "../home/ContactoBlock"

export function Home() {
  return (
    <>
      <Hero />
      <ObrasPreview />
      <PedidosTeaser />
      <ArtistaSection />
      <OtrosTeaser />
      <EstudioSocial />
      <ContactoBlock />
    </>
  )
}
