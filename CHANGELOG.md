# Bitácora del proyecto

Registro de cambios y pendientes del sitio de Mashanta Art
(`https://mashanta-art.kinalia.com.mx`). Lo más reciente va arriba.

## 2026-09-26 · Contenido y SEO

### Cambios hechos

- **Descripción en Google:** ahora dice "Estudio de pintura de Mashanta en Ciudad de México: obra por encargo, clases y restauración."
  Cambiada en `index.html` (`description`, `og:description`, `twitter:description` y JSON-LD).
- **Título del sitio:** de "Mashanta" a "Mashanta Art".
  En `index.html` (`<title>`, `og:title`, `twitter:title`, `<h1>` oculto), `src/lib/useMeta.ts` (`SITE_TITLE`) y `src/components/Footer.tsx`.
- **Precio del curso de primavera:** $2,000 MXN (antes $2,600). En `src/lib/data.ts`.
- **Foto del curso de verano:** ahora `boceto-acuarela.webp` (antes `taller-dos-personas.webp`). En `src/lib/data.ts`.
- **Restauración:** se quitó la nota sobre credenciales y certificación.
  Eliminados el bloque "Nota sobre este servicio" en `src/pages/Otros.tsx` y la constante `restorationNote` en `src/lib/data.ts`.
- **Google Search Console:** etiqueta de verificación `google-site-verification` en `index.html`.

### Acciones en Google (hechas por Edgar)

- Propiedad `https://mashanta-art.kinalia.com.mx/` verificada en Search Console (prefijo de URL, etiqueta HTML).
- `sitemap.xml` enviado.
- Indexación solicitada para la página principal y las páginas internas.

### Qué esperar

| Cuándo | Qué debería pasar |
|---|---|
| 1 a 3 días | La página principal puede quedar indexada. Se comprueba con `site:mashanta-art.kinalia.com.mx` en Google. |
| 1 a 2 semanas | Se indexan las demás páginas. Search Console → Páginas muestra cuántas están indexadas. |
| 2 a 4 semanas | Buscar "Mashanta Art" empieza a mostrar el sitio. Search Console → Rendimiento muestra impresiones y clics. |
| 2 a 3 meses | La posición se estabiliza. |

Si a las 2 semanas la página principal no está indexada, revisar el motivo en Search Console → Inspección de URL.

### Pendientes

- Poner el link del sitio en la bio de Instagram (`@mashanta.art`).
- Agregar el sitio web al perfil de Google Maps / Perfil del negocio (lo hace Mashanta como dueña).
- Agregar a Mashanta como Propietaria en Search Console (Configuración → Usuarios y permisos).
- Opcional: incluir las obras (`/obras/:slug`) y los cursos (`/otros/cursos/:slug`) en `sitemap.xml`.
- Revisar en unas semanas el avance de la indexación.
