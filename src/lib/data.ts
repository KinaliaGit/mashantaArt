/** Stock photography (Unsplash) standing in for real studio/artwork photos not yet covered below. */
function unsplash(id: string, w = 1200) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`
}

// Real photography — obra fotografiada en el estudio, fondo recortado.
import obraHojasRosa from "../assets/obras/hojas-rosa.webp"
import obraCrisalida from "../assets/obras/crisalida.webp"
import obraBandada from "../assets/obras/bandada.webp"
import obraHojasDoradas from "../assets/obras/hojas-doradas.webp"
import obraTercerOjo from "../assets/obras/tercer-ojo.webp"
import obraNinaFresas from "../assets/obras/nina-fresas.webp"
import obraCardos from "../assets/obras/cardos.webp"
import obraFloresSilvestres from "../assets/obras/flores-silvestres.webp"
import obraAbeja from "../assets/obras/abeja.webp"
import obraMetamorfosis from "../assets/obras/metamorfosis.webp"
import obraRetratoSombrero from "../assets/obras/retrato-sombrero.webp"
import obraGuerrera from "../assets/obras/guerrera.webp"
import obraRosas from "../assets/obras/rosas.webp"
import obraSilencio from "../assets/obras/silencio.webp"
import obraManos from "../assets/obras/manos.webp"
import obraAbstractoDorado from "../assets/obras/abstracto-dorado.webp"

// Versiones sin comprimir de la misma foto — solo para la ficha de detalle de
// cada obra, donde sí importa ver la pieza en máxima calidad. Las miniaturas
// (grid, tarjetas relacionadas) siguen usando el .webp liviano de arriba.
import obraHojasRosaFull from "../assets/obras/full/hojas-rosa.jpg"
import obraCrisalidaFull from "../assets/obras/full/crisalida.jpg"
import obraBandadaFull from "../assets/obras/full/bandada.jpg"
import obraHojasDoradasFull from "../assets/obras/full/hojas-doradas.jpg"
import obraTercerOjoFull from "../assets/obras/full/tercer-ojo.jpg"
import obraNinaFresasFull from "../assets/obras/full/nina-fresas.jpg"
import obraCardosFull from "../assets/obras/full/cardos.jpg"
import obraFloresSilvestresFull from "../assets/obras/full/flores-silvestres.jpg"
import obraAbejaFull from "../assets/obras/full/abeja.jpg"
import obraMetamorfosisFull from "../assets/obras/full/metamorfosis.jpg"
import obraRetratoSombreroFull from "../assets/obras/full/retrato-sombrero.jpg"
import obraGuerreraFull from "../assets/obras/full/guerrera.jpg"
import obraRosasFull from "../assets/obras/full/rosas.jpg"
import obraSilencioFull from "../assets/obras/full/silencio.jpg"
import obraManosFull from "../assets/obras/full/manos.jpg"
import obraAbstractoDoradoFull from "../assets/obras/full/abstracto-dorado.jpg"

// Real photography — retratos y fotos del estudio.
import fotoHeroEspaldaPaleta from "../assets/fotos/hero-espalda-paleta.webp"
import fotoRetratoFrontal from "../assets/fotos/retrato-frontal.webp"
import fotoPintandoCaballete from "../assets/fotos/pintando-en-caballete.webp"
import fotoTallerNinos from "../assets/fotos/taller-ninos.webp"
import fotoPaletaAcuarelas from "../assets/fotos/paleta-acuarelas.webp"
import fotoPintandoLienzoAmarillo from "../assets/fotos/pintando-lienzo-amarillo.webp"
import fotoRinconEstudio from "../assets/fotos/rincon-estudio.webp"
import fotoBocetoDigital from "../assets/fotos/boceto-digital.webp"
import fotoBocetoAcuarela from "../assets/fotos/boceto-acuarela.webp"
import fotoTallerDosPersonas from "../assets/fotos/taller-dos-personas.webp"
import fotoEstudioVacio from "../assets/fotos/estudio-vacio.webp"

/**
 * WhatsApp — front-only for now. Replace with the real number in international
 * format, digits only (country code + number, no "+", spaces or dashes).
 * Example for MX: "5215512345678".
 */
export const WHATSAPP_NUMBER = "526141415624"

/** Builds a wa.me link with a pre-filled message. */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type ArtAccent = "terracota" | "ocre" | "verde" | "ultramar" | "tierra-rosa"

/* Monochrome now — the placeholder cards read as unphotographed work, not as a
   colour swatch. Magenta is the one tint, used sparingly. */
export const accentHex: Record<ArtAccent, string> = {
  terracota: "#F1B2DC",
  ocre: "#9A9A94",
  verde: "#6F6F6A",
  ultramar: "#4A4A46",
  "tierra-rosa": "#F1B2DC",
}

/**
 * Encabezado de la sección Obras. No es una "colección" con nombre ni una
 * serie continua — es simplemente la obra realizada hasta hoy, y lo que
 * está disponible ahora mismo.
 */
export const obrasIntro = {
  title: "Lenguaje propio",
  description:
    "Lenguaje propio es aquello que permanece cuando la técnica cambia: una forma de mirar que se convierte en una forma de crear. Más que pertenecer a una misma serie, estas piezas permiten reconocer la evolución de una voz visual que se ha construido a través de años de exploración, experimentación y creación.",
  /** Sustituye al antiguo campo "estado" (disponible / vendida) de cada obra. */
  availabilityNote:
    "Para saber si una pieza sigue disponible y su precio, pregúntame directamente por WhatsApp. Te lo confirmo al momento.",
  /** Cada obra es irrepetible: cuando se va, no se vuelve a hacer. */
  uniquenessNote:
    "Cada obra es única. Una vez que una pieza encuentra dueño, no se vuelve a pintar ni se repite: por eso no hay dos iguales.",
  /** Disclaimer de originalidad. */
  originalityNote:
    "No hago copias ni obras idénticas. Una pieza puede servir de inspiración para un encargo, pero nunca se replica igual.",
}

export type NextWork = {
  label: string
  title: string
  teaser: string
  accent: ArtAccent
  image: string
}

/**
 * Sección genérica "Próximamente": pinturas, proyectos y actividades futuras.
 * No adelanta información concreta, solo invita a estar atento a la página.
 */
export const nextWork: NextWork = {
  label: "Próximamente",
  title: "Manifiesto visual",
  teaser:
    "Siempre hay pinturas, proyectos y actividades en preparación. Todavía no hay detalles que compartir, así que mantente atento a esta página. Aquí se anuncian primero.",
  accent: "verde",
  image: fotoEstudioVacio,
}

/** Una imagen del proceso: boceto, foto del taller, capa intermedia. */
export type ProcessImage = { src: string; caption?: string }

/**
 * Material de proceso de una obra. Solo algunas piezas lo tienen — su
 * presencia activa el reverso ("volteo") de la tarjeta. Puede traer solo
 * texto (una nota escrita a mano, de qué se inspiró), solo imágenes
 * (bocetos, fotos del proceso), o ambos.
 */
export type ArtworkProcess = {
  note?: string
  images?: ProcessImage[]
}

export type Artwork = {
  slug: string
  title: string
  technique: string
  /** Ninguna de estas piezas trae fecha ni medidas confirmadas todavía —
   * se agregan obra por obra en cuanto Mashanta las comparta. */
  year?: number
  dimensions?: string
  price?: string
  accent: ArtAccent
  series: string
  description: string
  image: string
  /** Versión sin comprimir, solo para la ficha de detalle. Si no está, se usa `image`. */
  fullImage?: string
  /** Segundo panel — solo en piezas de dos partes (díptico), para mostrarlas juntas. */
  secondImage?: string
  secondFullImage?: string
  process?: ArtworkProcess
  /** Only set on the pieces actually painted on a round canvas — the thumbnail and detail view mask to a circle instead of a rectangle. */
  shape?: "circle"
}

/**
 * Obras actuales
 */
/**
 * Título, técnica, medidas y precio/estado vienen de la hoja que compartió
 * Mashanta.
 */
export const artworks: Artwork[] = [
  {
    slug: "hojas-rosa",
    title: "Hojas Rosa",
    technique: "Acrílico sobre tela",
    dimensions: "30 x 30 cm",
    price: "$1,500 MXN",
    accent: "tierra-rosa",
    series: "Naturaleza",
    description: "Un tallo de hojas en tonos rosa y salmón sobre fondo malva, con la firma del estudio en la esquina.",
    image: obraHojasRosa,
    fullImage: obraHojasRosaFull,
  },
  {
    slug: "cardos",
    title: "Cotton Candy Field",
    technique: "Acrílico sobre tela",
    dimensions: "60 x 76 cm",
    price: "$7,000 MXN",
    accent: "ocre",
    series: "Naturaleza",
    description: "Un grupo de cardos en flor sobre un fondo verde pálido, en tonos tierra y ocre.",
    image: obraCardos,
    fullImage: obraCardosFull,
  },
  {
    slug: "flores-silvestres",
    title: "Cotton Candy Detalle",
    technique: "Acrílico sobre tela",
    dimensions: "Tondo 50 cm diám.",
    price: "$7,000 MXN",
    accent: "tierra-rosa",
    series: "Naturaleza",
    description: "Pieza de formato circular con un ramo de flores silvestres en rosas y morados.",
    image: obraFloresSilvestres,
    fullImage: obraFloresSilvestresFull,
    shape: "circle",
  },
  {
    slug: "rosas",
    title: "Pulso",
    technique: "Acrílico sobre tela",
    dimensions: "60 x 76 cm",
    price: "$7,000 MXN",
    accent: "tierra-rosa",
    series: "Naturaleza",
    description: "Un par de rosas abiertas en tonos rosa y malva, con líneas de contorno marcadas.",
    image: obraRosas,
    fullImage: obraRosasFull,
  },
  {
    // "Espejo áureo" junta las dos piezas doradas en una sola ficha, tal como
    // se pidió — se muestran juntas como un díptico en vez de como dos obras.
    slug: "espejo-aureo",
    title: "Espejo áureo",
    technique: "Óleo sobre tela",
    dimensions: "Díptico 40 x 60 cm",
    price: "$15,000 MXN",
    accent: "ocre",
    series: "Naturaleza",
    description:
      "Díptico en tonos dorados: un follaje ilustrado a detalle junto a un remolino de formas vegetales entre lo figurativo y lo abstracto, pensados para colgarse en espejo.",
    image: obraHojasDoradas,
    fullImage: obraHojasDoradasFull,
    secondImage: obraAbstractoDorado,
    secondFullImage: obraAbstractoDoradoFull,
  },
  {
    slug: "tercer-ojo",
    title: "Conciencia Rosa",
    technique: "Acrílico sobre tela",
    dimensions: "60 x 76 cm",
    price: "$12,000 MXN",
    accent: "tierra-rosa",
    series: "Retratos",
    description: "Un rostro en oración, rodeado de una corona de ojos, en una paleta suave de rosas y verdes.",
    image: obraTercerOjo,
    fullImage: obraTercerOjoFull,
  },
  {
    slug: "nina-de-las-fresas",
    title: "De Niña",
    technique: "Mixta sobre tela",
    dimensions: "25 x 30 cm",
    price: "Vendida",
    accent: "tierra-rosa",
    series: "Retratos",
    description: "Una niña en vestido bordado, rodeada de fresas y flores, en un estilo cercano al arte popular.",
    image: obraNinaFresas,
    fullImage: obraNinaFresasFull,
  },
  {
    slug: "retrato-con-sombrero",
    title: "Juan Evaristo",
    technique: "Óleo sobre tela",
    dimensions: "50 x 70 cm",
    price: "No disponible",
    accent: "ocre",
    series: "Retratos",
    description: "Retrato de medio cuerpo bajo un sombrero de ala ancha, en tonos cálidos y terrosos.",
    image: obraRetratoSombrero,
    fullImage: obraRetratoSombreroFull,
  },
  {
    slug: "guerrera",
    title: "Invicta",
    technique: "Mixta sobre tela",
    dimensions: "120 x 150 cm",
    price: "$20,000 MXN",
    accent: "ultramar",
    series: "Retratos",
    description: "Perfil de una figura con casco y armadura ornamentados, en azules y dorados sobre fondo oscuro.",
    image: obraGuerrera,
    fullImage: obraGuerreraFull,
  },
  {
    slug: "silencio",
    title: "Retrato",
    technique: "Acrílico sobre tela",
    dimensions: "60 x 76 cm",
    price: "No disponible",
    accent: "verde",
    series: "Retratos",
    description: "Retrato de una niña con los ojos cerrados, resuelto en acuarela con salpicaduras de color alrededor.",
    image: obraSilencio,
    fullImage: obraSilencioFull,
  },
  {
    slug: "manos",
    title: "Gratitud",
    technique: "Mixta sobre tela",
    dimensions: "Tondo 90 cm diám.",
    price: "$15,000 MXN",
    accent: "ocre",
    series: "Retratos",
    description: "Un par de manos entrelazadas sobre un fondo circular en tonos oscuros y dorados.",
    image: obraManos,
    fullImage: obraManosFull,
    shape: "circle",
  },
  {
    slug: "crisalida",
    title: "La transición",
    technique: "Mixta sobre tela",
    dimensions: "80 x 160 cm",
    price: "$17,000 MXN",
    accent: "ultramar",
    series: "Criaturas",
    description: "Una crisálida colgada de una rama, en tonos azules y cálidos sobre fondo claro.",
    image: obraCrisalida,
    fullImage: obraCrisalidaFull,
  },
  {
    slug: "bandada",
    title: "Día de Pesca",
    technique: "Acrílico en aro de bordar",
    dimensions: "50 cm diám.",
    price: "$1,800 MXN",
    accent: "terracota",
    series: "Criaturas",
    description: "Formato circular con un grupo de aves en vuelo sobre un fondo rojo punteado.",
    image: obraBandada,
    fullImage: obraBandadaFull,
    shape: "circle",
  },
  {
    slug: "abeja",
    title: "Linaje de oro",
    technique: "Mixta sobre tela",
    dimensions: "120 x 120 cm",
    price: "$18,000 MXN",
    accent: "ocre",
    series: "Criaturas",
    description: "Una abeja en primer plano sobre un fondo geométrico en blanco y negro.",
    image: obraAbeja,
    fullImage: obraAbejaFull,
  },
  {
    slug: "metamorfosis",
    title: "Espera en secreto",
    technique: "Mixta en papel",
    dimensions: "45 x 60 cm",
    price: "$6,000 MXN",
    accent: "verde",
    series: "Criaturas",
    description: "Una criatura fantástica entre insecto y figura humana, con rayos de fondo, en marco blanco.",
    image: obraMetamorfosis,
    fullImage: obraMetamorfosisFull,
  },
]

/* ---------------------------------------------------------------------------
 * Pedidos o comisiones — portafolio de obra hecha por encargo y enviada.
 * Solo exhibición: da una idea de qué se ha hecho, a dónde ha llegado y cómo.
 * ------------------------------------------------------------------------- */

export type Commission = {
  title: string
  year: number
  technique: string
  dimensions: string
  /** Ciudad / país a donde se entregó o envió la pieza. */
  destination: string
  /** Nota sobre marco, embalaje o forma de envío. */
  shippingNote: string
  accent: ArtAccent
  image: string
}

export const commissions: Commission[] = [
  {
    title: "Retrato de la familia Ríos",
    year: 2026,
    technique: "Óleo sobre tela",
    dimensions: "70 × 90 cm",
    destination: "Guadalajara, MX",
    shippingNote: "Entregada en marco hecho a mano por el estudio. Embalaje rígido y entrega en mano.",
    accent: "terracota",
    image: unsplash("1541512416146-3cf58d6b27cc"),
  },
  {
    title: "Restauración de un óleo de alrededor de 1940",
    year: 2026,
    technique: "Limpieza, consolidación e inpainting reversible",
    dimensions: "60 × 80 cm",
    destination: "Colección privada, CDMX",
    shippingNote: "Ocho semanas de trabajo. Devuelta con informe de intervención y recomendaciones de conservación.",
    accent: "verde",
    image: unsplash("1579009721337-cec3c69778e4"),
  },
  {
    title: "Díptico para consultorio",
    year: 2025,
    technique: "Acrílico y pigmento seco sobre tela",
    dimensions: "2 piezas de 90 × 120 cm",
    destination: "Monterrey, MX",
    shippingNote: "Enviado por paquetería especializada en obra, en cajas de madera a medida.",
    accent: "ultramar",
    image: unsplash("1530100914167-73e7602b004c"),
  },
  {
    title: "Retrato de aniversario",
    year: 2025,
    technique: "Óleo sobre lino",
    dimensions: "50 × 60 cm",
    destination: "Austin, TX (EE. UU.)",
    shippingNote: "Envío internacional con seguro. Sin marco, enrollada en tubo rígido para bastidor local.",
    accent: "tierra-rosa",
    image: unsplash("1562785072-c65ab858fcbc"),
  },
]

export type ProcessStep = { title: string; detail?: string }

/** Paso a paso de una comisión — informativo, flexible según cada caso. */
export const commissionSteps: ProcessStep[] = [
  {
    title: "Conversación inicial",
    detail:
      "Me cuentas la idea, mandas referencias y me dices dónde va a vivir la obra: luz, muro, medidas del espacio. Sin costo y sin compromiso.",
  },
  {
    title: "Propuesta",
    detail:
      "Te devuelvo una propuesta con técnica, dimensiones, tiempo estimado y un rango de presupuesto. Todo es flexible y se ajusta a cada caso.",
  },
  {
    title: "Anticipo y calendario",
    detail:
      "Con un anticipo se aparta tu lugar en el calendario del estudio y se compran los materiales. La fecha de entrega queda por escrito.",
  },
  {
    title: "Proceso",
    detail:
      "Te comparto avances por foto en los puntos clave: boceto, bloqueo de color y capas finales. Hay margen para ajustes antes de cerrar.",
  },
  {
    title: "Entrega y envío",
    detail:
      "Marco hecho a mano opcional. El embalaje y el envío se definen según el destino: entrega en mano local, paquetería nacional en caja rígida o envío internacional con seguro.",
  },
]

/** Paso a paso de una restauración. Solo los títulos, sin detalle. */
export const restorationSteps: ProcessStep[] = [
  { title: "Diagnóstico" },
  { title: "Lectura de daño" },
  { title: "Tiempo del proceso" },
]

/**
 * Aviso sobre la restauración: es un oficio aprendido en la práctica, no un
 * servicio con credenciales oficiales ni certificación. Se puede ver el
 * trabajo hecho para hacerse una idea.
 */
export const restorationNote =
  "Esto no es un servicio de restauración oficial. No tengo credenciales ni certificación profesional, es un oficio que aprendí en la práctica. Aquí puedes ver trabajos ya hechos para hacerte una idea, y antes de empezar siempre te explico qué se va a hacer y por qué."

export type Course = {
  slug: string
  title: string
  /** Ritmo y horario, en texto libre. */
  schedule: string
  location: string
  /** Precio de referencia del año anterior. Puede haber ajustes menores. */
  price: string
  /** Qué incluye, inscripción, etc. Opcional. */
  priceNote?: string
  accent: ArtAccent
  summary: string
  materials?: string[]
  syllabus?: { title: string; detail: string }[]
  image: string
}

/**
 * Los talleres ofrecen solo estas tres modalidades. La restauración no es un
 * curso, es un servicio aparte. Los precios son de referencia, del año
 * anterior, y pueden tener ajustes menores. No se muestra cupo ni lugares
 * disponibles: hay que preguntar por disponibilidad.
 */
export const courses: Course[] = [
  {
    slug: "clases-regulares",
    title: "Clases regulares",
    schedule: "Sesiones semanales durante todo el año. No hay fecha de inicio fija, te sumas cuando quieras.",
    location: "Estudio Mashanta.",
    price: "$1,000 MXN por mes.",
    priceNote: "Incluye material. Sin inscripción.",
    accent: "ultramar",
    summary:
      "Clases semanales de acuarela para todas las edades, desde los fundamentos hasta tu propio proyecto. Otras técnicas se pueden coordinar, pero hay que preguntar con anticipación.",
    materials: ["Papel de algodón", "Acuarelas", "Pinceles", "Lo pone el estudio"],
    syllabus: [
      { title: "Control del agua", detail: "Húmedo sobre húmedo y húmedo sobre seco." },
      { title: "Mezcla de color", detail: "Paleta reducida, con una gama de tres pigmentos." },
      { title: "Composición", detail: "Encuadre y punto focal en formato pequeño." },
    ],
    image: fotoTallerNinos,
  },
  {
    slug: "curso-de-verano",
    title: "Curso de verano",
    schedule: "3 días por semana, lunes, miércoles y viernes, de 10:00 a 13:00.",
    location: "Estudio Mashanta.",
    price: "$2,600 MXN.",
    accent: "tierra-rosa",
    summary:
      "Un intensivo de verano centrado en pintura, color y proyecto propio, pensado para avanzar rápido en pocas semanas.",
    image: fotoTallerDosPersonas,
  },
  {
    slug: "curso-de-primavera",
    title: "Curso de primavera",
    schedule: "5 días por semana, de lunes a viernes, de 10:00 a 13:00.",
    location: "Estudio Mashanta.",
    price: "$2,600 MXN.",
    accent: "verde",
    summary:
      "La versión más intensiva del taller. Mismo horario que el curso de verano, pero de lunes a viernes, para ganar más horas de práctica y terminar con obra propia.",
    image: fotoPintandoLienzoAmarillo,
  },
]

/**
 * Visitas guiadas a museos. Rotan cada mes según el museo y la exposición
 * vigente. Es una actividad aparte de los cursos.
 */
export const museumVisits = {
  title: "Visitas guiadas a museos",
  image: unsplash("1606819717115-9159c900370b"),
  intro:
    "Rotan cada mes según el museo y la exposición vigente. Las actividades están pensadas para que quien asiste pueda aprender sobre las piezas expuestas.",
  points: [
    "Se programan en los viernes de Consejo Técnico Escolar, los días en que no hay clases en las escuelas.",
    "El contenido de cada visita se ajusta a la exposición vigente en ese momento.",
    "Hay que preguntar por disponibilidad para agendar, igual que en obras y cursos.",
  ],
}

export const artistInfo = {
  name: "Mashanta",
  role: "Pintora, restauradora e ilustradora",
  bio: [
    "Fernanda Tena (1980) artista plástica mexicana originaria del norte del país y residente desde su infancia en Chihuahua. Cuenta con más de veinte años de trayectoria dedicada a la creación, producción y difusión de las artes visuales.",
    "Su formación inicial en arquitectura estableció las bases de una mirada profundamente vinculada con la composición, el espacio, la estructura y el diseño. Posteriormente decidió abandonar la práctica arquitectónica para dedicarse de manera plena al desarrollo de su lenguaje artístico.",
    "Su producción comprende pintura de caballete, muralismo e ilustración, disciplinas desde las que explora la figura, la sensibilidad y la experiencia humana a través de un lenguaje visual de carácter vibrante, femenino y orgánico. Su obra se caracteriza por el uso expresivo del color, la fluidez de las formas y una constante búsqueda de equilibrio entre lo figurativo y lo simbólico.",
    "A lo largo de su trayectoria ha participado en exposiciones y proyectos artísticos en México y en el extranjero, desarrollando una obra que se encuentra en permanente evolución y que refleja tanto su experiencia como creadora como su interés por explorar nuevas posibilidades técnicas y conceptuales.",
    "De manera paralela a su producción artística, Fernanda Tena desarrolla una trayectoria como formadora y promotora de las artes visuales. A través de Mashanta Art Studio, espacio dedicado a la enseñanza y difusión del arte, comparte su experiencia con niños, jóvenes y adultos mediante clases, talleres y proyectos creativos.",
    "Ambas facetas —la creación y la enseñanza— forman parte de una misma visión: entender el arte como un espacio de investigación, expresión y transformación. Mientras su práctica artística le permite desarrollar y cuestionar su propio lenguaje, su labor docente extiende esa experiencia hacia nuevas generaciones de creadores.",
    "Actualmente, su trabajo continúa desarrollándose entre la producción de obra, proyectos de mural e ilustración, y la formación artística, consolidando una trayectoria en la que la creación y la transmisión del conocimiento dialogan de manera constante.",
  ],
  /** De dónde sale el nombre "Mashanta" — para Mi Historia. */
  nameOrigin: [
    "Mashanta no es el nombre con el que firmaba antes. De niña, mi papá me decía \"Madre Santa\" de cariño. Dicho rápido, sin pensarlo, se quedó en Mashanta.",
    "Estudié arquitectura, y durante años firmé mis planos y mi obra con mi firma oficial. Era una firma correcta, pero cargaba todo lo técnico del oficio, la escuadra y la medida exacta, y no se sentía como mi pintura.",
    "Cuando empecé a mostrar mi trabajo por separado, tomé el apodo de mi papá en su lugar. Era la forma de decir: esto de aquí no es el plano, es otra cosa.",
  ],
  studio: "Estudio Mashanta",
  email: "hola@mashanta.art",
  whatsapp: "+52 614 141 5624",
  instagram: "@mashanta.art",
  /** URL del perfil de Instagram — reemplázala por la real. */
  instagramUrl: "https://instagram.com/mashanta.art",
  /** Enlace a Google Maps del estudio — reemplázalo por el real. */
  mapsUrl: "https://maps.app.goo.gl/XHKrekgMZSRdkDNP6",
  /** Dirección visible del estudio — opcional. */
  address: "",
  /** Pintando frente al lienzo — usada en el teaser de Home y en la franja panorámica de Mi Historia. */
  studioImage: fotoPintandoCaballete,
  /** Retrato frontal — la foto de apertura de Mi Historia. */
  handsImage: fotoRetratoFrontal,
  /** De espaldas con la paleta — la foto de fondo del Hero de Home. */
  heroImage: fotoHeroEspaldaPaleta,
}

export const testimonials = [
  {
    name: "José A. Enríquez",
    role: "Alumno",
    quote:
      "Mi mensaje más honesto, tanto sobre el arte como sobre mi maestra, es que su forma de adaptarse y ser paciente es única. También la manera en que apoya a los alumnos a seguir adelante y ser perseverantes. Nunca olvidaré mi experiencia con la pintura y con mi maestra.",
  },
  {
    name: "Zayra Martínez",
    role: "Madre de familia",
    quote:
      "Gracias por tu paciencia con cada uno de mis hijos, siendo tan diferentes, lograste empatizar con cada uno. Tienes una gran habilidad: la sensibilidad en ti está a flor de piel y la transmites con mucho amor y paciencia. Esa vocación por el arte se refleja en el avance de tus estudiantes.",
  },
  {
    name: "Paty Acosta",
    role: "Cd. Obregón, Sonora",
    quote:
      "Le pedí a Mashanta cuatro cuadros de flores, todos distintos, y no solo los pintó hermosos y delicados: sientes su aroma en las formas y texturas de los pétalos, y lo dulce de sus colores y matices. Sus cuadros se disfrutan en cualquier espacio, iluminan y dan vida. Gracias, Mashanta, por tu arte y por la oportunidad de gozarlos.",
  },
  {
    name: "Mark y Mike",
    role: "Quintana Roo, México",
    quote:
      "El de los árboles de sakura en acuarela nos transmite una paz y una delicadeza infinitas, y el óleo es pura ternura: nos roba el corazón cada vez que lo vemos. Son obras llenas de tu sensibilidad. Tenerlas en casa nos hace muy felices.",
  },
  {
    name: "Nancy Corral",
    role: "Chihuahua, Chihuahua",
    quote:
      "Estoy encantada con el cuadro de elefantes que Fernanda pintó para mí, es una pintora muy talentosa. Es una pintura con un significado muy especial. Gracias por crear esta obra tan bonita. Te felicito por tu arte y por el amor que le pones a cada lienzo.",
  },
]

export const studioPhotos = [
  { alt: "Paleta de acuarelas y pinceles sobre la mesa de trabajo", accent: "ocre" as ArtAccent, image: fotoPaletaAcuarelas },
  { alt: "Boceto en proceso, acuarela sobre papel", accent: "verde" as ArtAccent, image: fotoBocetoAcuarela },
  { alt: "Niñas y niños en el taller de acuarela", accent: "tierra-rosa" as ArtAccent, image: fotoTallerNinos },
  { alt: "Rincón del estudio con material de trabajo", accent: "ultramar" as ArtAccent, image: fotoRinconEstudio },
  { alt: "Boceto digital de una ilustración floral", accent: "terracota" as ArtAccent, image: fotoBocetoDigital },
  { alt: "Mashanta pintando sobre un lienzo en el caballete", accent: "ocre" as ArtAccent, image: fotoPintandoLienzoAmarillo },
]
