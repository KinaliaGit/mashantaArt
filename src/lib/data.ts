/** Stock photography (Unsplash) standing in for real studio/artwork photos until Mashanta supplies her own. */
function unsplash(id: string, w = 1200) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`
}

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
  title: "Mis obras",
  description:
    "Una parte del trabajo de estos años, piezas de distintos momentos de mi carrera, en óleo, acrílico y acuarela. Las que están aquí son las que hay ahora mismo, y cada una es única. Míralas con calma y escríbeme por la que te interese.",
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
  title: "Se está preparando algo nuevo",
  teaser:
    "Siempre hay pinturas, proyectos y actividades en preparación. Todavía no hay detalles que compartir, así que mantente atento a esta página. Aquí se anuncian primero.",
  accent: "verde",
  image: unsplash("1517133741870-7b4e3de342d7"),
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
  year: number
  dimensions: string
  price?: string
  accent: ArtAccent
  series: string
  description: string
  image: string
  process?: ArtworkProcess
}

export const artworks: Artwork[] = [
  {
    slug: "memoria-de-agua",
    title: "Memoria de agua",
    technique: "Óleo sobre tela",
    year: 2026,
    dimensions: "80 × 100 cm",
    price: "$14,500 MXN",
    accent: "ultramar",
    series: "Momentos",
    description:
      "Capas de azul sobre azul, pintadas durante tres semanas de lluvia en el estudio. Parte de la serie Momentos.",
    image: unsplash("1568448705245-1250489bcd66"),
    process: {
      note: "Empezó por una foto del estanque del parque a primera hora, con la niebla todavía encima del agua. Quería que el azul no fuera un color sino una distancia. Las primeras capas fueron casi transparentes; la pintura tardó más en secar que en pintarse.",
      images: [
        { src: unsplash("1520856990214-7a9e59dd5ff7"), caption: "Boceto y notas de color" },
        { src: unsplash("1520420097861-e4959843b682"), caption: "Segunda capa, todavía húmeda" },
      ],
    },
  },
  {
    slug: "retrato-de-mi-abuela",
    title: "Retrato de mi abuela",
    technique: "Óleo sobre lino, restauración de base",
    year: 2025,
    dimensions: "50 × 60 cm",
    accent: "tierra-rosa",
    series: "Restauración",
    description:
      "Pieza familiar recuperada tras años de humedad, con la paleta original reconstruida hilo por hilo.",
    image: unsplash("1562785072-c65ab858fcbc"),
  },
  {
    slug: "jardin-interior-i",
    title: "Jardín interior I",
    technique: "Acrílico y pigmento seco sobre tela",
    year: 2026,
    dimensions: "100 × 120 cm",
    price: "$19,800 MXN",
    accent: "verde",
    series: "Procesos",
    description: "El primero de una serie sobre lo que crece adentro cuando afuera hay ruido.",
    image: unsplash("1530100914167-73e7602b004c"),
    process: {
      note: "No hay bocetos de esta. Nació de una frase que anoté en el cuaderno una noche: \"un jardín que nadie riega pero igual crece\". La pinté sin plan, corrigiendo sobre la marcha. El pigmento seco se fue agregando encima del acrílico todavía fresco.",
    },
  },
  {
    slug: "cuento-de-domingo",
    title: "Cuento de domingo",
    technique: "Ilustración digital, edición limitada",
    year: 2025,
    dimensions: "40 × 40 cm",
    price: "$3,200 MXN",
    accent: "ocre",
    series: "Ilustración infantil",
    description: "Parte del libro ilustrado inédito que Mashanta desarrolla junto a talleres infantiles.",
    image: unsplash("1630609083938-3acb39a06392"),
  },
  {
    slug: "comision-familia-rios",
    title: "Comisión para la familia Ríos",
    technique: "Óleo sobre tela por encargo",
    year: 2026,
    dimensions: "70 × 90 cm",
    accent: "terracota",
    series: "Comisiones",
    description: "Retrato familiar comisionado, entregado en marco hecho a mano por el estudio.",
    image: unsplash("1541512416146-3cf58d6b27cc"),
  },
  {
    slug: "estudio-de-manos",
    title: "Estudio de manos",
    technique: "Grafito y óleo sobre papel prensado",
    year: 2024,
    dimensions: "30 × 42 cm",
    price: "$5,600 MXN",
    accent: "ultramar",
    series: "Procesos",
    description: "Boceto preparatorio elevado a pieza terminada, expuesto tal cual salió del cuaderno.",
    image: unsplash("1683223585212-6e3cf4cf9473"),
  },
  {
    slug: "domingo-en-tamayo",
    title: "Domingo en Tamayo",
    technique: "Acuarela sobre papel de algodón",
    year: 2025,
    dimensions: "35 × 50 cm",
    price: "$4,100 MXN",
    accent: "ocre",
    series: "Momentos",
    description: "Pintada en vivo durante una visita guiada al Museo Tamayo con el grupo de talleres.",
    image: unsplash("1629654857513-1136aef1b10f"),
    process: {
      images: [
        { src: unsplash("1698340311456-77454d0abdc7"), caption: "El grupo pintando en la sala" },
        { src: unsplash("1658301720419-d1c963f7993b"), caption: "Paleta de ese día, al aire libre" },
        { src: unsplash("1520856990214-7a9e59dd5ff7"), caption: "Primeras manchas, sin dibujo previo" },
      ],
    },
  },
  {
    slug: "restauracion-oleo-1940",
    title: "Restauración de un óleo de alrededor de 1940",
    technique: "Restauración e inpainting sobre óleo original",
    year: 2026,
    dimensions: "60 × 80 cm",
    accent: "verde",
    series: "Restauración",
    description: "Ocho semanas de limpieza, consolidación y reintegración cromática para una colección privada.",
    image: unsplash("1579009721337-cec3c69778e4"),
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
    image: unsplash("1510832842230-87253f48d74f"),
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
    image: unsplash("1597274303632-880ef8660375"),
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
    image: unsplash("1609174112693-52fdcebffd89"),
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
  manifesto: [
    "Dibujar y pintar me gustaron desde siempre, mucho antes de que fueran un oficio. Estudié arquitectura y durante años trabajé con la escuadra y la medida exacta, pero todo se sentía demasiado cuadrado, quería romper ese molde y decir las cosas de otra forma. La pintura terminó siendo esa forma.",
    "Hoy mi estudio hace tres cosas a la vez: pinta, repara y enseña. No las separo porque no se sienten separadas. Restaurar me enseña a pintar, y enseñar me enseña a mirar.",
    "Trabajo con niñas, niños y adultos por igual, con la misma seriedad. El arte no es un premio de consolación para quien no sabe qué más hacer un domingo: es una técnica que se aprende, se practica y se hereda.",
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
  studioImage: unsplash("1752649935691-ac99478aaa56"),
  handsImage: unsplash("1644375391877-0ae77eeed8fc"),
  /** Materials flat-lay for the Mi Historia intro — paired with her own words instead of a face shot. */
  materialsImage: unsplash("1471666875520-c75081f42081"),
  /** Full-bleed shot for the homepage hero — same shoot as studioImage, wide crop. */
  heroImage: unsplash("1752649937405-ca9efa68e4d5", 2400),
}

export const testimonials = [
  {
    name: "Renata O.",
    role: "Coleccionista",
    quote:
      "Compré Memoria de agua sin conocer a Mashanta en persona. Cuando llegó la pieza entendí por qué cada trazo tarda lo que tarda.",
  },
  {
    name: "Diego M.",
    role: "Cliente de restauración",
    quote:
      "Llevé un cuadro de mi abuela que creí perdido. Salí del estudio sabiendo exactamente qué hacer con las manos.",
  },
  {
    name: "Familia Vargas",
    role: "Curso de verano",
    quote:
      "Nuestra hija entró sin saber mezclar dos colores. Salió pidiendo un caballete para su cuarto.",
  },
  {
    name: "Paola S.",
    role: "Alumna, clases regulares",
    quote: "Es la primera clase de arte donde no me sentí la peor del salón. Mashanta enseña sin apurar a nadie.",
  },
  {
    name: "Iván R.",
    role: "Coleccionista",
    quote: "La comisión del retrato familiar llegó con marco hecho a mano. Se nota que nada sale del estudio a medias.",
  },
]

export const studioPhotos = [
  { alt: "Paletas y pigmentos secos sobre la mesa de trabajo", accent: "ocre" as ArtAccent, image: unsplash("1658301720419-d1c963f7993b") },
  { alt: "Detalle de restauración en proceso, capa de barniz retirada", accent: "verde" as ArtAccent, image: unsplash("1520420097861-e4959843b682") },
  { alt: "Niñas y niños pintando durante el curso de verano", accent: "tierra-rosa" as ArtAccent, image: unsplash("1531796311868-83672cd144f3") },
  { alt: "Pinceles secando junto a la ventana del estudio", accent: "ultramar" as ArtAccent, image: unsplash("1499892477393-f675706cbe6e") },
  { alt: "Boceto preparatorio para comisión familiar", accent: "terracota" as ArtAccent, image: unsplash("1520856990214-7a9e59dd5ff7") },
  { alt: "Grupo del taller de acuarela en sesión de domingo", accent: "ocre" as ArtAccent, image: unsplash("1698340311456-77454d0abdc7") },
]
