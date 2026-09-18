import { useEffect } from "react"

const SITE_TITLE = "Mashanta"
const SITE_URL = "https://mashanta-art.kinalia.com.mx"

function setMeta(selector: string, attr: string, content: string) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, content)
}

/**
 * Actualiza <title>, meta description, canonical y Open Graph/Twitter al
 * cambiar de página. Esto sirve para la pestaña del navegador y para el SEO
 * de Google (que sí ejecuta JS) — pero NO cambia la vista previa que arma
 * WhatsApp/Facebook/Twitter al compartir un link, porque esos rastreadores
 * leen el HTML tal cual, sin correr React. Esa vista previa por página
 * requeriría renderizar el HTML en el servidor (SSR/prerender), fuera del
 * alcance de este ajuste.
 */
export function usePageMeta(title: string, description: string, path = "") {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_TITLE}` : SITE_TITLE
    const url = `${SITE_URL}${path}`
    document.title = fullTitle
    setMeta('meta[name="description"]', "content", description)
    setMeta('link[rel="canonical"]', "href", url)
    setMeta('meta[property="og:title"]', "content", fullTitle)
    setMeta('meta[property="og:description"]', "content", description)
    setMeta('meta[property="og:url"]', "content", url)
    setMeta('meta[name="twitter:title"]', "content", fullTitle)
    setMeta('meta[name="twitter:description"]', "content", description)
  }, [title, description, path])
}
