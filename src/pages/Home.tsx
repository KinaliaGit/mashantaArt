import { Hero } from "../home/Hero"
import { ObrasPreview } from "../home/ObrasPreview"
import { PedidosTeaser } from "../home/PedidosTeaser"
import { ArtistaSection } from "../home/ArtistaSection"
import { OtrosTeaser } from "../home/OtrosTeaser"
import { EstudioSocial } from "../home/EstudioSocial"
import { ContactoBlock } from "../home/ContactoBlock"
import { usePageMeta } from "../lib/useMeta"

export function Home() {
  usePageMeta(
    "Estudio de pintura, restauración y obra por encargo",
    "Estudio de Mashanta, pintora y restauradora: obra original única, retratos y obra por encargo (comisiones), restauración de óleos y cuadros antiguos, y talleres de pintura y acuarela en Ciudad de México.",
    "/",
  )
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
