/** Stock photography (Unsplash) standing in for real studio/artwork photos until Mashanta supplies her own. */
function unsplash(id: string, w = 1200) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`
}

/**
 * WhatsApp — front-only for now. Replace with the real number in international
 * format, digits only (country code + number, no "+", spaces or dashes).
 * Example for MX: "5215512345678".
 */
export const WHATSAPP_NUMBER = "5255XXXXXXXX"

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

export type Collection = {
  slug: string
  name: string
  year: number
  status: "en-liquidacion" | "activa"
  description: string
  descriptionLong: string
  closingNote: string
  discount: string
}

export const currentCollection: Collection = {
  slug: "aguas-quietas",
  name: "Aguas Quietas",
  year: 2026,
  status: "en-liquidacion",
  description:
    "Un año de trabajo alrededor del agua, la memoria y lo que se queda quieto cuando todo lo demás se mueve. Óleo, acuarela y restauración conviven en esta colección — la primera en reunir tres años de práctica bajo un solo nombre.",
  descriptionLong:
    "Aguas Quietas reúne piezas pintadas entre estaciones de lluvia, retratos recuperados y bocetos elevados a obra terminada. No hay un tema único: hay una manera de mirar. El agua aparece como color, como memoria y como el tiempo que tarda cada capa en secar antes de la siguiente. Es la primera colección del estudio que se presenta bajo un solo nombre, y también la última de este ciclo — al agotarse da paso a Tierra Nueva.",
  closingNote:
    "Colección en cierre. Cuando se agoten estas piezas no vuelven — dan paso a la siguiente colección del estudio.",
  discount: "",
}

export type NextCollection = {
  slug: string
  name: string
  expected: string
  teaser: string
  accent: ArtAccent
  image: string
}

export const nextCollection: NextCollection = {
  slug: "tierra-nueva",
  name: "Tierra Nueva",
  expected: "Primavera 2027",
  teaser: "Después del agua, la tierra. Una colección sobre lo que se planta y lo que tarda en crecer — en proceso en el estudio ahora mismo.",
  accent: "verde",
  image: unsplash("1517133741870-7b4e3de342d7"),
}

export type Artwork = {
  slug: string
  title: string
  technique: string
  year: number
  dimensions: string
  price?: string
  status: "disponible" | "reservada" | "vendida" | "coleccion"
  accent: ArtAccent
  series: string
  description: string
  image: string
}

export const artworks: Artwork[] = [
  {
    slug: "memoria-de-agua",
    title: "Memoria de agua",
    technique: "Óleo sobre tela",
    year: 2026,
    dimensions: "80 × 100 cm",
    price: "$14,500 MXN",
    status: "disponible",
    accent: "ultramar",
    series: "Momentos",
    description:
      "Capas de azul sobre azul, pintadas durante tres semanas de lluvia en el estudio. Parte de la serie Momentos.",
    image: unsplash("1568448705245-1250489bcd66"),
  },
  {
    slug: "retrato-de-mi-abuela",
    title: "Retrato de mi abuela",
    technique: "Óleo sobre lino, restauración de base",
    year: 2025,
    dimensions: "50 × 60 cm",
    status: "coleccion",
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
    status: "disponible",
    accent: "verde",
    series: "Procesos",
    description: "El primero de una serie sobre lo que crece adentro cuando afuera hay ruido.",
    image: unsplash("1530100914167-73e7602b004c"),
  },
  {
    slug: "cuento-de-domingo",
    title: "Cuento de domingo",
    technique: "Ilustración digital, edición limitada",
    year: 2025,
    dimensions: "40 × 40 cm",
    price: "$3,200 MXN",
    status: "disponible",
    accent: "ocre",
    series: "Ilustración infantil",
    description: "Parte del libro ilustrado inédito que Mashanta desarrolla junto a talleres infantiles.",
    image: unsplash("1630609083938-3acb39a06392"),
  },
  {
    slug: "comision-familia-rios",
    title: "Comisión — Familia Ríos",
    technique: "Óleo sobre tela por encargo",
    year: 2026,
    dimensions: "70 × 90 cm",
    status: "vendida",
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
    status: "reservada",
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
    status: "disponible",
    accent: "ocre",
    series: "Momentos",
    description: "Pintada en vivo durante una visita guiada al Museo Tamayo con el grupo de talleres.",
    image: unsplash("1629654857513-1136aef1b10f"),
  },
  {
    slug: "restauracion-oleo-1940",
    title: "Restauración — óleo c. 1940",
    technique: "Restauración e inpainting sobre óleo original",
    year: 2026,
    dimensions: "60 × 80 cm",
    status: "coleccion",
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
    title: "Retrato — Familia Ríos",
    year: 2026,
    technique: "Óleo sobre tela",
    dimensions: "70 × 90 cm",
    destination: "Guadalajara, MX",
    shippingNote: "Entregada en marco hecho a mano por el estudio. Embalaje rígido y entrega en mano.",
    accent: "terracota",
    image: unsplash("1541512416146-3cf58d6b27cc"),
  },
  {
    title: "Restauración — óleo c. 1940",
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

export type ProcessStep = { title: string; detail: string }

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

/** Paso a paso de una restauración. */
export const restorationSteps: ProcessStep[] = [
  {
    title: "Diagnóstico",
    detail:
      "Lectura del daño: humedad, craquelado, pérdida de capa pictórica, barnices oxidados. Se documenta con fotografía antes de tocar nada.",
  },
  {
    title: "Limpieza",
    detail: "Pruebas de sensibilidad y solventes seguros para retirar suciedad y barniz sin afectar la obra original.",
  },
  {
    title: "Consolidación",
    detail: "Se fija la capa pictórica y se estabiliza el soporte — tela, tabla o papel — donde haya riesgo de pérdida.",
  },
  {
    title: "Reintegración cromática",
    detail:
      "Inpainting reversible solo en las zonas perdidas, respetando el trazo original. Se cierra con barniz de protección e informe de intervención.",
  },
]

export type CourseLevel = "todas las edades" | "principiante" | "intermedio" | "niñas y niños"
export type CourseAvailability = "disponible" | "ultimos-lugares" | "agotado"

export type Course = {
  slug: string
  title: string
  date: string
  dateISO: string
  time: string
  level: CourseLevel
  location: string
  price: string
  availability: CourseAvailability
  spotsLeft?: number
  accent: ArtAccent
  summary: string
  materials: string[]
  syllabus: { title: string; detail: string }[]
  image: string
}

export const courses: Course[] = [
  {
    slug: "acuarela-basica",
    title: "Acuarela básica",
    date: "14 sep 2026",
    dateISO: "2026-09-14",
    time: "10:00 – 13:00",
    level: "todas las edades",
    location: "Estudio Mashanta",
    price: "$850 MXN",
    availability: "disponible",
    accent: "ultramar",
    summary:
      "Fundamentos de agua, pigmento y papel. Clase permanente pensada para quien nunca ha tomado un pincel — y para quien quiere volver a empezar.",
    materials: ["Papel de algodón 300g", "Set de acuarelas", "Pinceles", "Delantal"],
    syllabus: [
      { title: "Control del agua", detail: "Húmedo sobre húmedo, húmedo sobre seco." },
      { title: "Mezcla de color", detail: "Paleta reducida, gama de tres pigmentos." },
      { title: "Composición", detail: "Encuadre y punto focal en formato pequeño." },
    ],
    image: unsplash("1510832842230-87253f48d74f"),
  },
  {
    slug: "restauracion-i",
    title: "Restauración I",
    date: "21 sep 2026",
    dateISO: "2026-09-21",
    time: "16:00 – 19:00",
    level: "intermedio",
    location: "Estudio Mashanta",
    price: "$1,450 MXN",
    availability: "ultimos-lugares",
    spotsLeft: 2,
    accent: "verde",
    summary:
      "Introducción práctica a limpieza, consolidación y reintegración cromática sobre piezas propias u obra de práctica del estudio.",
    materials: ["Obra propia (opcional)", "Kit de limpieza básico incluido", "Guantes de nitrilo"],
    syllabus: [
      { title: "Diagnóstico", detail: "Lectura del daño: humedad, craquelado, pérdida de capa." },
      { title: "Limpieza", detail: "Solventes seguros y pruebas de sensibilidad." },
      { title: "Reintegración", detail: "Inpainting reversible a nivel de introducción." },
    ],
    image: unsplash("1613463251864-2a2bc3952817"),
  },
  {
    slug: "ilustracion-infantil",
    title: "Ilustración infantil",
    date: "05 oct 2026",
    dateISO: "2026-10-05",
    time: "11:00 – 12:30",
    level: "niñas y niños",
    location: "Estudio Mashanta",
    price: "$650 MXN",
    availability: "disponible",
    accent: "ocre",
    summary:
      "Taller para niñas y niños centrado en personajes propios, color plano y narrativa visual. Clase permanente, entrada libre por sesión.",
    materials: ["Papel", "Plumones y crayones", "Cuaderno de personajes (se queda en casa)"],
    syllabus: [
      { title: "Mi personaje", detail: "Formas simples, expresión y color." },
      { title: "Escenario", detail: "Fondo y contexto de la historia." },
      { title: "Mini cómic", detail: "Tres viñetas, una idea." },
    ],
    image: unsplash("1609174112693-52fdcebffd89"),
  },
  {
    slug: "visita-museo-tamayo",
    title: "Visita guiada — Museo Tamayo",
    date: "19 oct 2026",
    dateISO: "2026-10-19",
    time: "09:30 – 13:00",
    level: "todas las edades",
    location: "Museo Tamayo, CDMX",
    price: "$500 MXN + entrada",
    availability: "disponible",
    accent: "terracota",
    summary:
      "Recorrido guiado con ejercicio de dibujo en vivo frente a la colección permanente. Punto de encuentro en la explanada principal.",
    materials: ["Cuaderno de bocetos", "Lápiz o pluma", "Banco plegable (opcional)"],
    syllabus: [
      { title: "Recorrido", detail: "Lectura de obra guiada por Mashanta." },
      { title: "Dibujo en vivo", detail: "Ejercicio de observación de 20 minutos por pieza." },
      { title: "Puesta en común", detail: "Cierre grupal con los bocetos del día." },
    ],
    image: unsplash("1606819717115-9159c900370b"),
  },
  {
    slug: "verano-2026",
    title: "Campamento de verano 2026",
    date: "13 – 24 jul 2026",
    dateISO: "2026-07-13",
    time: "09:00 – 13:00, lunes a viernes",
    level: "niñas y niños",
    location: "Estudio Mashanta",
    price: "$3,900 MXN — dos semanas",
    availability: "agotado",
    accent: "tierra-rosa",
    summary:
      "Dos semanas de pintura, ilustración, cerámica y visita a museo. El campamento insignia del estudio — se agota cada año en junio.",
    materials: ["Kit de materiales incluido", "Bata o ropa cómoda", "Lonchera"],
    syllabus: [
      { title: "Semana 1", detail: "Color, textura y técnica mixta." },
      { title: "Semana 2", detail: "Proyecto final e ilustración narrativa." },
      { title: "Cierre", detail: "Exposición de obra para familias." },
    ],
    image: unsplash("1597274303632-880ef8660375"),
  },
]

export const artistInfo = {
  name: "Mashanta",
  role: "Pintora, restauradora e ilustradora",
  manifesto: [
    "Empecé restaurando lo que otros habían dejado por perdido — retratos de familia, óleos con humedad, piezas sin firma. Ahí aprendí que toda obra tiene una segunda oportunidad si alguien está dispuesta a mirarla de cerca.",
    "Hoy mi estudio hace tres cosas a la vez: pinta, repara y enseña. No las separo porque no se sienten separadas — restaurar me enseña a pintar, enseñar me enseña a mirar.",
    "Trabajo con niñas, niños y adultos por igual, con la misma seriedad. El arte no es un premio de consolación para quien no sabe qué más hacer un domingo: es una técnica que se aprende, se practica y se hereda.",
  ],
  studio: "Estudio Mashanta",
  email: "hola@mashanta.art",
  whatsapp: "+52 55 0000 0000",
  instagram: "@mashanta.art",
  /** URL del perfil de Instagram — reemplázala por la real. */
  instagramUrl: "https://instagram.com/mashanta.art",
  /** Enlace a Google Maps del estudio — reemplázalo por el real. */
  mapsUrl: "https://maps.google.com/?q=Estudio+Mashanta",
  /** Dirección visible del estudio — opcional. */
  address: "",
  studioImage: unsplash("1752649935691-ac99478aaa56"),
  handsImage: unsplash("1644375391877-0ae77eeed8fc"),
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
    role: "Alumno, Restauración I",
    quote:
      "Llevé un cuadro de mi abuela que creí perdido. Salí del taller sabiendo exactamente qué hacer con las manos.",
  },
  {
    name: "Familia Vargas",
    role: "Campamento de verano",
    quote:
      "Nuestra hija entró sin saber mezclar dos colores. Salió pidiendo un caballete para su cuarto.",
  },
  {
    name: "Paola S.",
    role: "Alumna, Acuarela básica",
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
  { alt: "Niñas y niños pintando durante el campamento de verano", accent: "tierra-rosa" as ArtAccent, image: unsplash("1531796311868-83672cd144f3") },
  { alt: "Pinceles secando junto a la ventana del estudio", accent: "ultramar" as ArtAccent, image: unsplash("1499892477393-f675706cbe6e") },
  { alt: "Boceto preparatorio para comisión familiar", accent: "terracota" as ArtAccent, image: unsplash("1520856990214-7a9e59dd5ff7") },
  { alt: "Grupo del taller de acuarela en sesión de domingo", accent: "ocre" as ArtAccent, image: unsplash("1698340311456-77454d0abdc7") },
]
