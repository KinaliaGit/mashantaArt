import { Hero } from "../home/Hero"
import { MarqueeBand } from "../home/MarqueeBand"
import { Coleccion } from "../home/Coleccion"
import { NextCollectionTeaser } from "../home/NextCollectionTeaser"
import { ArtistaSection } from "../home/ArtistaSection"
import { Comunidad } from "../home/Comunidad"
import { TalleresTeaser } from "../home/TalleresTeaser"
import { EstudioSocial } from "../home/EstudioSocial"
import { ContactoBlock } from "../home/ContactoBlock"

export function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Coleccion />
      <NextCollectionTeaser />
      <ArtistaSection />
      <Comunidad />
      <TalleresTeaser />
      <EstudioSocial />
      <ContactoBlock />
    </>
  )
}
