import { Hero } from "../home/Hero"
import { MarqueeBand } from "../home/MarqueeBand"
import { ObrasPreview } from "../home/ObrasPreview"
import { Threshold } from "../home/Threshold"
import { CursosPreview } from "../home/CursosPreview"
import { ArtistaSection } from "../home/ArtistaSection"
import { Comunidad } from "../home/Comunidad"
import { EstudioSocial } from "../home/EstudioSocial"
import { ContactoBlock } from "../home/ContactoBlock"

export function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <ObrasPreview />
      <Threshold />
      <CursosPreview />
      <ArtistaSection />
      <Comunidad />
      <EstudioSocial />
      <ContactoBlock />
    </>
  )
}
