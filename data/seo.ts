import type { BlogPost } from "./blogs"
import type { Tour } from "./promotions"

export const brandName = "Avis Tours"

export const siteWideKeywords = [
    brandName,
    "Avis Tours",
    "AvisTours",
    "Puerto Pizarro",
    "Tumbes",
    "Manglares de Tumbes",
    "Isla de los Pájaros",
]

export const homeKeywords = [
    "tours en Puerto Pizarro",
    "manglares de Tumbes",
    "tour Puerto Pizarro",
    "paseos en Puerto Pizarro",
    "tour manglares Tumbes",
    "tour Isla de los Pájaros Tumbes",
    "paseo en bote Puerto Pizarro",
    "tours en Tumbes Puerto Pizarro",
]

export const packagesKeywords = [
    "tours en Puerto Pizarro precios",
    "tour a los manglares de Puerto Pizarro",
    "tour manglares Tumbes",
    "manglares de Tumbes tour",
    "paquetes turísticos Puerto Pizarro",
    "tour isla de los pájaros Puerto Pizarro",
    "tour isla de los pájaros Tumbes",
    "isla de los pájaros Tumbes",
    "tour manglares y cocodrilos",
    "tour manglares y cocodrilos Tumbes",
    "tour completo Puerto Pizarro",
    "tour Puerto Pizarro precio",
    "paseo en lancha Puerto Pizarro",
    "visita a isla de los pájaros y manglares",
]

export const blogKeywords = [
    "guía Puerto Pizarro",
    "consejos para visitar Puerto Pizarro",
    "qué hacer en Puerto Pizarro",
    "qué hacer en Tumbes",
    "qué hacer en Tumbes en 1 día",
    "cómo llegar a Puerto Pizarro",
    "mareas en Puerto Pizarro",
    "mejor hora manglares Tumbes",
    "Isla de los Pájaros Tumbes",
    "Puerto Pizarro o Máncora",
    "itinerario Tumbes 1 día",
    "turismo en Tumbes",
]

export const contactKeywords = [
    brandName,
    "operador turístico Puerto Pizarro",
    "operador tours Puerto Pizarro",
    "contacto tours Puerto Pizarro",
    "reservar tour Puerto Pizarro",
    "whatsapp tours Puerto Pizarro",
    "consultar tour manglares Tumbes",
    "reservar tour manglares Tumbes",
    "reservar tour Isla de los Pájaros Tumbes",
]

export const primaryKeywords = {
    home: "Tours en Puerto Pizarro",
    packages: "Tours en Puerto Pizarro precios",
    blog: "Qué hacer en Puerto Pizarro",
}

export const primaryTourKeywords: Record<string, string> = {
    "puerto-pizarro-completo": "Tour completo en Puerto Pizarro",
    "solo-visita-a-la-isla": "Tour a la isla en Puerto Pizarro",
    "isla-pajaros-manglares": "Tour Isla del Amor, Isla de los Pájaros y manglares Tumbes",
    "islas-manglares-cocodrilos": "Tour Isla del Amor, manglares y cocodrilos Puerto Pizarro",
    "pajaros-y-manglares": "Tour manglares Tumbes",
    "manglares-y-cocodrilos": "Tour manglares y cocodrilos Tumbes",
}

export const primaryBlogKeywords: Record<string, string> = {
    "mareas-en-puerto-pizarro": "Mareas en Puerto Pizarro",
    "ruta-completa-islas-manglares-cocodrilos": "Tour completo en Puerto Pizarro",
    "isla-de-los-pajaros-y-manglares": "Isla de los Pájaros Tumbes",
    "zoocriadero-cocodrilos-puerto-pizarro": "Zoocriadero de cocodrilos de Puerto Pizarro",
    "manglares-de-puerto-pizarro": "Manglares de Puerto Pizarro",
    "como-llegar-a-puerto-pizarro-desde-tumbes": "¿Dónde queda Puerto Pizarro? Cómo llegar desde Tumbes",
    "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro": "Qué llevar a un tour por los manglares de Puerto Pizarro",
    "que-hacer-en-tumbes-en-1-dia": "Qué hacer en Tumbes en 1 día",
    "puerto-pizarro-o-mancora": "Puerto Pizarro o Máncora",
}

type SeoTarget = {
    intro: string
    secondaryKeyword: string
    intent: string
    metaDescription?: string
}

export const tourSeoTargets: Record<string, SeoTarget> = {
    "puerto-pizarro-completo": {
        intro: "Este tour completo en Puerto Pizarro es la mejor opción si quieres recorrer islas, manglares, cocodrilos y la boca del mar en una sola salida bien aprovechada.",
        secondaryKeyword: "precio tour Puerto Pizarro",
        intent: "comparar el recorrido más completo antes de reservar",
        metaDescription: "Tour completo en Puerto Pizarro: islas, manglares, aves, cocodrilos y boca del mar. Revisa duración, precio grupal y reserva por WhatsApp.",
    },

    "solo-visita-a-la-isla": {
        intro: "Este tour a la isla en Puerto Pizarro es ideal si buscas un paseo corto, fácil de coordinar y con tiempo libre para disfrutar el entorno a tu ritmo.",
        secondaryKeyword: "paseo corto Puerto Pizarro",
        intent: "elegir una salida breve y fácil de coordinar",
        metaDescription: "Paseo corto en bote desde Puerto Pizarro hasta la isla. Ideal para disfrutar el entorno con libertad. Consulta precio, horario y disponibilidad.",
    },

    "isla-pajaros-manglares": {
        intro: "Este tour a la isla del Amor y la Isla de los Pájaros en Puerto Pizarro combina navegación por manglares, observación de aves y una ruta natural muy buscada en Tumbes.",
        secondaryKeyword: "tour isla de los pájaros Puerto Pizarro",
        intent: "reservar una ruta natural con aves y manglar",
        metaDescription: "Tour a la isla del Amor y la Isla de los Pájaros en Tumbes desde Puerto Pizarro. Navega entre manglares, observa aves y consulta precios y horarios según la marea.",
    },

    "islas-manglares-cocodrilos": {
        intro: "Este tour a la isla del Amor, los manglares y los cocodrilos en Puerto Pizarro es ideal si quieres una ruta variada con naturaleza, fauna y paseo en lancha.",
        secondaryKeyword: "tour cocodrilos Puerto Pizarro",
        intent: "evaluar una ruta variada con fauna y esteros",
        metaDescription: "Tour a la isla del Amor, manglares y cocodrilos en Puerto Pizarro. Recorre los esteros, visita el zoocriadero y revisa duración y precio por grupo.",
    },

    "pajaros-y-manglares": {
        intro: "Este tour de pájaros y manglares en Puerto Pizarro es una opción corta y tranquila para observar aves y conocer el ecosistema del manglar sin dedicar muchas horas.",
        secondaryKeyword: "manglares de Tumbes tour",
        intent: "encontrar un paseo tranquilo centrado en naturaleza",
        metaDescription: "Tour por los manglares de Tumbes desde Puerto Pizarro para observar aves y navegar entre canales. Revisa duración, precio y horarios disponibles.",
    },

    "manglares-y-cocodrilos": {
        intro: "Este tour de manglares y cocodrilos en Puerto Pizarro es perfecto si quieres una primera experiencia con navegación por esteros y visita al zoocriadero.",
        secondaryKeyword: "tour manglares Tumbes con cocodrilos",
        intent: "escoger un tour con manglares y fauna local",
        metaDescription: "Tour manglares y cocodrilos Tumbes desde Puerto Pizarro con paseo en bote y visita al zoocriadero. Consulta precio y reserva por WhatsApp.",
    },
}

export const blogSeoTargets: Record<string, SeoTarget> = {
    "mareas-en-puerto-pizarro": {
        intro: "Si estás revisando las mareas en Puerto Pizarro, esta guía te ayuda a entender cuál es la mejor hora para visitar los manglares de Tumbes y aprovechar mejor tu tour.",
        secondaryKeyword: "mejor hora para visitar los manglares de Tumbes",
        intent: "entender cuándo conviene salir según la marea",
        metaDescription: "Mareas en Puerto Pizarro: descubre cómo cambia el nivel del agua, cuál es el mejor horario y cómo organizar tu tour por los manglares de Tumbes.",
    },

    "ruta-completa-islas-manglares-cocodrilos": {
        intro: "Si quieres saber qué hacer en Puerto Pizarro en una sola salida, aquí te mostramos por qué el tour completo suele ser la opción más recomendada para quienes visitan Tumbes.",
        secondaryKeyword: "qué hacer en Puerto Pizarro",
        intent: "comparar si el tour completo encaja con tu viaje",
        metaDescription: "Tour completo en Puerto Pizarro: conoce la ruta por islas, manglares, Isla de los Pájaros, cocodrilos y boca del mar antes de reservar.",
    },

    "isla-de-los-pajaros-y-manglares": {
        intro: "¿Dónde queda la Isla de los Pájaros en Tumbes? Se visita desde Puerto Pizarro, dentro de los manglares. Descubre qué ver y cómo es el recorrido en lancha.",
        secondaryKeyword: "dónde queda la Isla de los Pájaros",
        intent: "ubicar y descubrir qué ver en la Isla de los Pájaros",
        metaDescription: "Isla de los Pájaros en Tumbes: conoce dónde queda, qué ver y cómo es el paseo en lancha desde Puerto Pizarro por los manglares.",
    },

    "zoocriadero-cocodrilos-puerto-pizarro": {
        intro: "Si quieres visitar el zoocriadero de cocodrilos de Puerto Pizarro, esta guía explica qué ver y cómo incluirlo en un recorrido por los manglares de Tumbes.",
        secondaryKeyword: "tour cocodrilos Puerto Pizarro",
        intent: "organizar una visita al zoocriadero y los manglares",
        metaDescription: "Zoocriadero de cocodrilos de Puerto Pizarro: qué ver, cómo visitarlo y qué tour elegir para combinarlo con manglares e islas.",
    },

    "manglares-de-puerto-pizarro": {
        intro: "Esta guía reúne lo que necesitas saber para visitar los manglares de Puerto Pizarro: qué ver, cómo recorrerlos y cómo elegir un tour en Tumbes.",
        secondaryKeyword: "tour manglares Puerto Pizarro",
        intent: "organizar una visita a los manglares de Puerto Pizarro",
        metaDescription: "Manglares de Puerto Pizarro: qué ver, cómo visitarlos y qué considerar antes de elegir un tour por esta zona natural de Tumbes.",
    },

    "como-llegar-a-puerto-pizarro-desde-tumbes": {
        intro: "¿Dónde queda Puerto Pizarro? Está cerca de la ciudad de Tumbes, en el norte del Perú. Esta guía explica cómo llegar desde Tumbes o el aeropuerto y ubicar el muelle turístico.",
        secondaryKeyword: "dónde queda Puerto Pizarro",
        intent: "ubicar Puerto Pizarro y organizar cómo llegar",
        metaDescription: "¿Dónde queda Puerto Pizarro? Está cerca de Tumbes, en el norte del Perú. Conoce cómo llegar desde Tumbes o el aeropuerto y ubicar el muelle turístico.",
    },

    "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro": {
        intro: "Si te preguntas qué llevar a un tour por los manglares de Puerto Pizarro, esta guía te ayuda a preparar ropa, accesorios y detalles prácticos antes de salir.",
        secondaryKeyword: "recomendaciones para visitar Puerto Pizarro",
        intent: "prepararte mejor antes de tu paseo en manglares",
        metaDescription: "Qué llevar a los manglares de Puerto Pizarro: ropa adecuada, protector solar, agua, cámara y recomendaciones prácticas antes de subir al bote.",
    },

    "que-hacer-en-tumbes-en-1-dia": {
        intro: "Si tienes solo un día en Tumbes, esta guía te ayuda a ordenar Puerto Pizarro, manglares, playas y comida local sin correr de más.",
        secondaryKeyword: "visitar Puerto Pizarro en un día",
        intent: "organizar un itinerario corto en Tumbes",
        metaDescription: "Qué hacer en Tumbes en un día: organiza un itinerario con Puerto Pizarro, manglares, playas y comida local para aprovechar mejor tu visita.",
    },

    "puerto-pizarro-o-mancora": {
        intro: "Si estás comparando Puerto Pizarro o Máncora, esta guía te ayuda a elegir según naturaleza, playa, presupuesto y tipo de viaje.",
        secondaryKeyword: "qué visitar en Tumbes",
        intent: "comparar destinos antes de viajar",
        metaDescription: "Puerto Pizarro o Máncora: compara manglares, playas, actividades, presupuesto y ambiente para elegir el destino que mejor encaja con tu viaje.",
    },
}

export const homeFaqs = [
    {
        question: "¿Cuál es el mejor horario para visitar los manglares de Puerto Pizarro?",
        answer:
            "El mejor horario depende de la marea del día. En Avis Tours confirmamos la ventana recomendada antes de zarpar para que el recorrido por manglares, islas o cocodrilos se adapte mejor al estero.",
    },
    {
        question: "¿Qué incluye un tour por Puerto Pizarro?",
        answer:
            "Según el paquete, puedes visitar manglares, Isla de los Pájaros, el zoocriadero de cocodrilos, islas cercanas y la boca del mar. Cada tour detalla las actividades, el tiempo estimado y lo que incluye.",
    },
    {
        question: "¿Hay tours cortos y también un recorrido completo?",
        answer:
            "Sí. Tenemos opciones breves para visitar una isla o los manglares, y también el tour completo por Puerto Pizarro para quienes quieren aprovechar más paradas en una sola salida.",
    },
    {
        question: "¿Cómo reservar un paseo en Puerto Pizarro?",
        answer:
            "Puedes reservar por WhatsApp o desde la página del operador. Lo ideal es escribir con la fecha tentativa, el número de personas y el tour que te interesa para confirmar la disponibilidad y la marea.",
    },
]

export const packagesFaqs = [
    {
        question: "¿Cuánto cuesta un tour por los manglares de Puerto Pizarro?",
        answer:
            "El precio varía según la ruta y la cantidad de personas. En los paquetes mostramos el valor base y, cuando corresponde, el cálculo por persona para grupos de hasta 10 viajeros.",
    },
    {
        question: "¿Qué diferencia hay entre el tour completo y los paseos cortos?",
        answer:
            "El tour completo recorre más paradas, como islas, manglares, cocodrilos y la boca del mar. Los paseos cortos se enfocan en una combinación puntual, por ejemplo, la Isla de los Pájaros y los manglares.",
    },
    {
        question: "¿Los tours en Puerto Pizarro son aptos para familias?",
        answer:
            "Sí. Muchas rutas son ideales para familias, parejas o grupos pequeños. La mejor opción depende del tiempo disponible, la edad de los viajeros y el tipo de experiencia que buscan.",
    },
    {
        question: "¿Se puede reservar el tour por WhatsApp?",
        answer:
            "Sí. Todas las rutas de Avis Tours tienen acceso rápido por WhatsApp para consultar la disponibilidad, los horarios, la marea y la coordinación del punto de encuentro.",
    },
]

export const contactFaqs = [
    {
        question: "¿Dónde está el punto de encuentro para los tours?",
        answer:
            "Coordinamos cerca del muelle turístico de Puerto Pizarro. Antes de la salida confirmamos la ubicación exacta y la hora recomendada según la marea y el clima.",
    },
    {
        question: "¿Con cuánta anticipación debo reservar?",
        answer:
            "Para fines de semana o feriados conviene reservar con anticipación. Si viajas entre semana, aun así es recomendable escribir antes para confirmar la embarcación y el horario.",
    },
    {
        question: "¿Atienden todos los días?",
        answer:
            "Sí. Atendemos todos los días, pero los horarios de salida pueden variar de acuerdo con la marea, el clima y la disponibilidad del recorrido.",
    },
]

const tourAliasMap: Record<string, string[]> = {
    "puerto-pizarro-completo": [
        "tour completo Puerto Pizarro",
        "tour Puerto Pizarro completo",
        "tour Puerto Pizarro precio",
        "paquete completo Puerto Pizarro",
        "islas manglares cocodrilos boca del mar",
        "qué hacer en Puerto Pizarro",
        "tour manglares Tumbes",
        "paseo en bote Puerto Pizarro",
        "tour islas Puerto Pizarro",
    ],
    "solo-visita-a-la-isla": [
        "solo ida a la isla",
        "traslado a la isla Puerto Pizarro",
        "paseo corto Puerto Pizarro",
        "ida a la isla en bote",
        "paseo en bote Puerto Pizarro",
        "paseo en lancha Puerto Pizarro",
    ],
    "isla-pajaros-manglares": [
        "tour isla del Amor y pájaros",
        "tour isla del Amor pájaros y manglares",
        "tour isla de los pájaros Puerto Pizarro",
        "tour isla de los pájaros Tumbes",
        "isla de los pájaros Tumbes",
        "isla pájaros Tumbes",
        "visita a isla de los pájaros y manglares",
        "avistamiento de aves Puerto Pizarro",
        "tour aves Tumbes",
        "tour manglares Tumbes",
    ],
    "islas-manglares-cocodrilos": [
        "tour isla del Amor manglares y cocodrilos",
        "isla del Amor Puerto Pizarro",
        "tour manglares y cocodrilos",
        "tour cocodrilos Puerto Pizarro",
        "manglares cocodrilos Puerto Pizarro",
        "zoocriadero de cocodrilos Tumbes",
        "tour manglares Tumbes",
        "tour manglares de Tumbes",
        "paseo manglares Tumbes",
    ],
    "pajaros-y-manglares": [
        "pájaros y manglares",
        "tour aves y manglares",
        "manglares de Puerto Pizarro",
        "manglares de Tumbes tour",
        "tour manglares Tumbes",
        "tour Isla de los Pájaros Tumbes",
        "tour naturaleza Puerto Pizarro",
    ],
    "manglares-y-cocodrilos": [
        "manglares y cocodrilo",
        "manglares y cocodrilos",
        "tour manglares Tumbes",
        "tour manglares de Tumbes",
        "paseo en bote manglares Tumbes",
        "tour cocodrilos Tumbes",
        "tour zoocriadero cocodrilos Tumbes",
        "zoocriadero de cocodrilos",
    ],
}

const blogAliasMap: Record<string, string[]> = {
    "mareas-en-puerto-pizarro": [
        "mareas en Puerto Pizarro",
        "mejor hora para visitar los manglares de Tumbes",
        "cuándo visitar Puerto Pizarro",
        "horarios de marea Puerto Pizarro",
    ],
    "ruta-completa-islas-manglares-cocodrilos": [
        "tour completo Puerto Pizarro",
        "qué hacer en Puerto Pizarro",
        "islas manglares cocodrilos",
        "paseos turísticos en Tumbes",
        "tour manglares Tumbes",
        "tours en Puerto Pizarro precios",
    ],
    "isla-de-los-pajaros-y-manglares": [
        "isla de los pájaros Tumbes",
        "isla de los pájaros",
        "la isla de los pájaros",
        "dónde queda la isla de los pájaros",
        "tour isla de los pájaros Tumbes",
        "Isla de los Pájaros Puerto Pizarro",
        "visita a isla de los pájaros y manglares",
        "tour aves Puerto Pizarro",
        "tour aves Tumbes",
        "manglares de Tumbes",
    ],
    "zoocriadero-cocodrilos-puerto-pizarro": [
        "zoocriadero de cocodrilos Puerto Pizarro",
        "cocodrilos de Puerto Pizarro",
        "tour cocodrilos Puerto Pizarro",
        "zoocriadero cocodrilos Tumbes",
        "manglares y cocodrilos Tumbes",
    ],
    "manglares-de-puerto-pizarro": [
        "manglares de Puerto Pizarro",
        "tour manglares Puerto Pizarro",
        "paseo por manglares Tumbes",
        "qué ver en Puerto Pizarro",
        "tours en los manglares de Tumbes",
    ],
    "como-llegar-a-puerto-pizarro-desde-tumbes": [
        "dónde queda Puerto Pizarro",
        "dónde queda Puerto Pizarro en Perú",
        "cómo llegar a Puerto Pizarro",
        "cómo llegar a Puerto Pizarro desde Tumbes",
        "muelle turístico Puerto Pizarro",
        "cómo ir a los manglares de Puerto Pizarro",
    ],
    "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro": [
        "qué llevar a Puerto Pizarro",
        "qué llevar a un tour por los manglares",
        "recomendaciones para visitar Puerto Pizarro",
        "ropa para tour en manglares",
    ],
    "que-hacer-en-tumbes-en-1-dia": [
        "qué hacer en Tumbes",
        "qué hacer en Tumbes en un día",
        "qué hacer en Tumbes en 1 día",
        "visitar Puerto Pizarro en un día",
        "itinerario Tumbes 1 día",
        "tour Puerto Pizarro en un día",
        "turismo en Tumbes un día",
    ],
    "puerto-pizarro-o-mancora": [
        "Puerto Pizarro o Máncora",
        "Puerto Pizarro vs. Máncora",
        "Máncora o Puerto Pizarro",
        "Puerto Pizarro Máncora",
        "qué visitar en Tumbes",
        "manglares o playa en Tumbes",
        "destinos turísticos Tumbes",
    ],
}

function uniqueTerms(values: string[]) {
    return Array.from(new Set(values.filter(Boolean)))
}

export function getPrimaryTourKeyword(tour: Tour) {
    return primaryTourKeywords[tour.slug] ?? tour.title
}

export function getPrimaryBlogKeyword(post: BlogPost) {
    return primaryBlogKeywords[post.slug] ?? post.title
}

export function getTourSeoTarget(tour: Tour) {
    const target = tourSeoTargets[tour.slug]

    return {
        intro: target?.intro ?? tour.description,
        primaryKeyword: getPrimaryTourKeyword(tour),
        secondaryKeyword: target?.secondaryKeyword ?? tour.location,
        intent: target?.intent ?? "resolver si este tour encaja con tu visita",
        metaDescription: target?.metaDescription,
    }
}

export function getBlogSeoTarget(post: BlogPost) {
    const target = blogSeoTargets[post.slug]

    return {
        intro: target?.intro ?? post.excerpt,
        primaryKeyword: getPrimaryBlogKeyword(post),
        secondaryKeyword: target?.secondaryKeyword ?? post.category,
        intent: target?.intent ?? "resolver una duda útil antes de viajar",
        metaDescription: target?.metaDescription,
    }
}

export function getTourMetaDescription(tour: Tour) {
    const seoTarget = getTourSeoTarget(tour)

    return seoTarget.metaDescription
        ?? `${tour.description} Revisa ruta, duración, precio y reserva por WhatsApp en Puerto Pizarro.`
}

export function getBlogMetaDescription(post: BlogPost) {
    const seoTarget = getBlogSeoTarget(post)

    return seoTarget.metaDescription
        ?? `${post.excerpt} Planifica tu visita a Puerto Pizarro con recomendaciones prácticas y tours según marea.`
}

export function getTourSearchTerms(tour: Tour) {
    const seoTarget = getTourSeoTarget(tour)

    return uniqueTerms([
        seoTarget.primaryKeyword,
        seoTarget.secondaryKeyword,
        ...siteWideKeywords,
        ...packagesKeywords,
        ...(tourAliasMap[tour.slug] ?? []),
        tour.title,
        tour.location,
        tour.description,
        tour.duration,
        ...tour.features,
        ...tour.activities,
        ...tour.includes,
        ...tour.recommendations,
        ...tour.itinerary,
    ])
}

export function getBlogSearchTerms(post: BlogPost) {
    const paragraphTexts = post.body.flatMap((block) => {
        if (block.type === "paragraph" || block.type === "heading" || block.type === "quote") {
            return [block.text]
        }

        return []
    })

    const seoTarget = getBlogSeoTarget(post)

    return uniqueTerms([
        seoTarget.primaryKeyword,
        seoTarget.secondaryKeyword,
        ...siteWideKeywords,
        ...blogKeywords,
        ...(blogAliasMap[post.slug] ?? []),
        post.title,
        post.excerpt,
        post.category,
        post.location,
        post.author,
        ...post.highlights,
        ...paragraphTexts,
    ])
}
