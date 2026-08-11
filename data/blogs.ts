import { getTour, type Tour } from "./promotions"

export type BlogContentBlock =
    | {
        type: "heading"
        text: string
    }
    | {
        type: "paragraph"
        text: string
    }
    | {
        type: "image"
        src: string
        alt: string
        caption?: string
    }
    | {
        type: "quote"
        text: string
        author?: string
    }
    | {
        type: "list"
        items: string[]
    }

export type BlogPost = {
    slug: string
    title: string
    excerpt: string
    category: string
    location: string
    readTime: string
    date: string
    author: string
    image: string
    featured?: boolean
    highlights: string[]
    body: BlogContentBlock[]
}

type BlogConnection = {
    primaryTourSlug?: string
    relatedTourSlugs: string[]
    relatedPostSlugs: string[]
    whatsappMessage: string
}

export const blogPosts: BlogPost[] = [
    {
        slug: "mareas-en-puerto-pizarro",
        title: "Mareas en Puerto Pizarro: mejor hora para un tour en los manglares",
        excerpt: "Descubre cómo influyen las mareas en Puerto Pizarro y cuál es el mejor horario para disfrutar un tour por los manglares de Tumbes.",
        category: "Mareas",
        location: "Puerto Pizarro, Tumbes",
        readTime: "7 min",
        date: "07 Abr 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/galeria28.webp",
        featured: true,
        highlights: [
            "Las mareas determinan la navegación en los manglares",
            "El mejor horario depende del tipo de experiencia que buscas",
            "Un operador local ajusta la salida según marea y clima"
        ],
        body: [
            {
                type: "paragraph",
                text: "Las mareas en Puerto Pizarro son un factor clave al momento de realizar un tour por los manglares de Tumbes. No se trata solo de subir a una lancha, sino de elegir el momento adecuado para disfrutar mejor el paisaje, la navegación y la observación de fauna. En AvisTours, cada salida se coordina considerando la marea, el clima y las condiciones del estero para ofrecer una experiencia más completa."
            },
            {
                type: "heading",
                text: "¿Por qué las mareas son importantes en Puerto Pizarro?"
            },
            {
                type: "paragraph",
                text: "El nivel del agua influye directamente en el acceso a los canales del manglar, la facilidad de navegación y lo que puedes observar durante el recorrido. En un tour en Puerto Pizarro, entender la marea puede marcar la diferencia entre un paseo promedio y una experiencia realmente memorable."
            },
            {
                type: "image",
                src: "/images-optimized/galeria/galeria31.webp",
                alt: "Tour en lancha por los manglares de Puerto Pizarro durante marea alta",
                caption: "Los horarios de marea cambian diariamente, por eso siempre se recomienda confirmar antes de reservar tu tour."
            },
            {
                type: "heading",
                text: "Diferencia entre marea alta y marea baja"
            },
            {
                type: "paragraph",
                text: "Durante la marea alta, los canales del manglar tienen mayor profundidad, lo que permite una navegación más fluida y cómoda. Es ideal para quienes buscan un paseo tranquilo en lancha. En cambio, con marea baja, el paisaje cambia completamente: se exponen raíces de manglar, zonas de alimentación de aves y detalles del ecosistema que normalmente permanecen ocultos."
            },
            {
                type: "list",
                items: [
                    "Marea alta: navegación más suave y acceso amplio a canales.",
                    "Marea baja: mejor observación de aves y raíces del manglar.",
                    "Ambas opciones ofrecen experiencias distintas y valiosas."
                ]
            },
            {
                type: "heading",
                text: "¿Cuál es la mejor hora para hacer un tour en Puerto Pizarro?"
            },
            {
                type: "paragraph",
                text: "No existe una única mejor hora universal. El mejor horario para un tour en los manglares de Puerto Pizarro depende del tipo de experiencia que prefieras. Por eso, lo más recomendable es consultar con un operador local que pueda indicarte el momento ideal según la marea del día."
            },
            {
                type: "quote",
                text: "La mejor hora para un tour en Puerto Pizarro no siempre es la más temprana, sino la que coincide con la mejor marea.",
                author: "Equipo Avis Tours"
            },
            {
                type: "heading",
                text: "Recomendaciones antes de reservar tu tour"
            },
            {
                type: "list",
                items: [
                    "Consulta siempre el horario de marea antes de elegir tu tour.",
                    "Evita reservar sin validar condiciones climáticas.",
                    "Confirma disponibilidad de embarcaciones.",
                    "Pregunta por la mejor experiencia según tu tipo de viaje."
                ]
            },
            {
                type: "heading",
                text: "Reserva tu tour en el mejor horario"
            },
            {
                type: "paragraph",
                text: "En AvisTours coordinamos cada salida en función de la marea, el clima y las condiciones del día para que disfrutes al máximo tu experiencia en los manglares de Tumbes. Si es tu primera vez en Puerto Pizarro, te ayudamos a elegir el mejor horario para tu tour."
            },
            {
                type: "paragraph",
                text: "¿Listo para vivir la experiencia? Contáctanos por WhatsApp y te recomendamos el mejor momento para tu paseo en lancha por Puerto Pizarro."
            }
        ]
    },
    {
        slug: "ruta-completa-islas-manglares-cocodrilos",
        title: "Tour completo en Puerto Pizarro: islas, manglares y cocodrilos",
        excerpt: "Descubre el tour más completo en Puerto Pizarro: visita la Isla de los Pájaros, manglares, cocodrilos y la boca del mar en una sola experiencia.",
        category: "Tours",
        location: "Puerto Pizarro, Tumbes",
        readTime: "8 min",
        date: "07 Abr 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/completo_galeria1.webp",
        highlights: [
            "El tour más completo en Puerto Pizarro para conocer manglares e islas",
            "Incluye aves, cocodrilos y navegación por esteros",
            "Ideal para quienes visitan Tumbes por primera vez"
        ],
        body: [
            {
                type: "paragraph",
                text: "Si estás buscando el mejor tour en Puerto Pizarro, la ruta completa por islas, manglares y cocodrilos es la opción más recomendada. Este recorrido reúne los principales atractivos turísticos de Tumbes en una sola experiencia, combinando naturaleza, fauna y navegación por los manglares."
            },
            {
                type: "heading",
                text: "¿Qué incluye el tour completo en Puerto Pizarro?"
            },
            {
                type: "paragraph",
                text: "Este tour por los manglares de Tumbes está diseñado para ofrecer una experiencia variada y dinámica. A lo largo del recorrido podrás explorar diferentes puntos emblemáticos de Puerto Pizarro, cada uno con características únicas."
            },
            {
                type: "list",
                items: [
                    "Recorrido en lancha por los manglares de Puerto Pizarro.",
                    "Visita a la Isla de los Pájaros para observación de aves.",
                    "Ingreso al zoocriadero de cocodrilos.",
                    "Vista panorámica de la boca del mar.",
                    "Paradas estratégicas para fotografías y descanso."
                ]
            },
            {
                type: "image",
                src: "/images-optimized/galeria/completo_galeria8.webp",
                alt: "Tour completo por manglares e islas en Puerto Pizarro",
                caption: "La ruta puede ajustarse según marea, clima y condiciones del día para una mejor experiencia."
            },
            {
                type: "heading",
                text: "¿Por qué elegir este tour en Puerto Pizarro?"
            },
            {
                type: "paragraph",
                text: "A diferencia de otros recorridos más cortos, el tour completo permite conocer Puerto Pizarro de forma integral. Es ideal si visitas Tumbes por primera vez y quieres aprovechar al máximo tu tiempo, ya que combina varios atractivos en una sola salida."
            },
            {
                type: "paragraph",
                text: "Además, la navegación por los manglares ofrece una perspectiva única del ecosistema, mientras que la Isla de los Pájaros permite observar distintas especies en su hábitat natural."
            },
            {
                type: "heading",
                text: "¿Para quién es ideal este tour?"
            },
            {
                type: "list",
                items: [
                    "Viajeros que visitan Tumbes por primera vez.",
                    "Familias que buscan una experiencia completa y variada.",
                    "Parejas que desean un recorrido tranquilo y natural.",
                    "Turistas que quieren conocer lo mejor de Puerto Pizarro en un solo día."
                ]
            },
            {
                type: "heading",
                text: "Duración y recomendaciones"
            },
            {
                type: "paragraph",
                text: "La duración del tour puede variar según la marea y las condiciones del clima. Por eso, siempre se recomienda coordinar previamente el horario de salida para asegurar la mejor experiencia posible en los manglares de Tumbes."
            },
            {
                type: "list",
                items: [
                    "Consulta el mejor horario según la marea.",
                    "Llega con anticipación al muelle turístico.",
                    "Lleva protector solar y agua.",
                    "Ten tu celular listo para fotos del recorrido."
                ]
            },
            {
                type: "heading",
                text: "Reserva tu tour en Puerto Pizarro"
            },
            {
                type: "paragraph",
                text: "En AvisTours organizamos el tour completo en Puerto Pizarro ajustando cada detalle según la marea, el clima y la disponibilidad del día. Nuestro objetivo es que vivas una experiencia segura, organizada y memorable en los manglares de Tumbes."
            },
            {
                type: "paragraph",
                text: "Contáctanos por WhatsApp para consultar disponibilidad y reservar tu paseo en lancha. Te ayudamos a elegir el mejor horario para disfrutar al máximo tu visita."
            }
        ]
    },
    {
        slug: "isla-de-los-pajaros-y-manglares",
        title: "Isla de los Pájaros en Tumbes: tour por manglares en Puerto Pizarro",
        excerpt: "Descubre la Isla de los Pájaros en Puerto Pizarro y disfruta un tour por los manglares de Tumbes con observación de aves y paisajes naturales.",
        category: "Naturaleza",
        location: "Manglares de Tumbes",
        readTime: "7 min",
        date: "07 Abr 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/pajaros_manglares_galeria1.webp",
        highlights: [
            "Uno de los principales atractivos turísticos de Puerto Pizarro",
            "Ideal para observar aves en su hábitat natural",
            "Perfecto para tours cortos en los manglares de Tumbes"
        ],
        body: [
            {
                type: "paragraph",
                text: "La Isla de los Pájaros en Puerto Pizarro es uno de los destinos más visitados dentro de los manglares de Tumbes. Este recorrido es ideal para quienes buscan una experiencia natural, tranquila y enfocada en la observación de aves y paisajes únicos del ecosistema costero."
            },
            {
                type: "heading",
                text: "¿Qué es la Isla de los Pájaros?"
            },
            {
                type: "paragraph",
                text: "La Isla de los Pájaros es una zona dentro de los manglares de Puerto Pizarro donde se pueden observar diversas especies de aves en su entorno natural. Es una parada común en los tours en lancha y uno de los puntos más representativos del turismo en Tumbes."
            },
            {
                type: "image",
                src: "/images-optimized/galeria/pajaros_galeria3.webp",
                alt: "Aves en la Isla de los Pájaros en Puerto Pizarro Tumbes",
                caption: "La presencia de aves puede variar según la hora del día, la temporada y la marea."
            },
            {
                type: "heading",
                text: "¿Qué ver durante el recorrido?"
            },
            {
                type: "paragraph",
                text: "Durante el tour por los manglares de Puerto Pizarro podrás observar aves marinas, recorrer canales naturales y disfrutar de un paisaje dominado por vegetación de manglar. Es una experiencia ideal para fotografía, relajación y contacto con la naturaleza."
            },
            {
                type: "list",
                items: [
                    "Observación de aves en la Isla de los Pájaros.",
                    "Navegación por canales de manglar.",
                    "Paisajes naturales únicos de Tumbes.",
                    "Ambiente tranquilo ideal para desconectar."
                ]
            },
            {
                type: "heading",
                text: "¿Cuánto dura el tour a la Isla de los Pájaros?"
            },
            {
                type: "paragraph",
                text: "Este tipo de tour en Puerto Pizarro suele ser más corto en comparación con la ruta completa, lo que lo convierte en una excelente opción si cuentas con poco tiempo o prefieres una experiencia más ligera dentro de los manglares de Tumbes."
            },
            {
                type: "heading",
                text: "¿Para quién es ideal este recorrido?"
            },
            {
                type: "list",
                items: [
                    "Viajeros con poco tiempo en Tumbes.",
                    "Personas interesadas en fotografía de naturaleza.",
                    "Familias que buscan un paseo tranquilo.",
                    "Turistas que desean una primera experiencia en manglares."
                ]
            },
            {
                type: "heading",
                text: "Recomendaciones para tu visita"
            },
            {
                type: "list",
                items: [
                    "Consulta el horario según la marea para una mejor experiencia.",
                    "Lleva protector solar y lentes de sol.",
                    "Ten tu celular o cámara lista para capturar aves.",
                    "Evita llevar equipaje innecesario."
                ]
            },
            {
                type: "quote",
                text: "La Isla de los Pájaros es uno de esos lugares donde el silencio y la naturaleza hacen todo el trabajo.",
                author: "Equipo Avis Tours"
            },
            {
                type: "heading",
                text: "Reserva tu tour a la Isla de los Pájaros"
            },
            {
                type: "paragraph",
                text: "En AvisTours organizamos tours en Puerto Pizarro adaptados a la marea y condiciones del día para que disfrutes al máximo tu visita a la Isla de los Pájaros y los manglares de Tumbes."
            },
            {
                type: "paragraph",
                text: "Contáctanos por WhatsApp y te ayudamos a elegir el mejor horario para tu paseo en lancha. Vive una experiencia auténtica en uno de los destinos naturales más importantes de Tumbes."
            }
        ]
    },
    {
        slug: "como-llegar-a-puerto-pizarro-desde-tumbes",
        title: "Cómo llegar a Puerto Pizarro desde Tumbes o aeropuerto (guía 2026)",
        excerpt: "Aprende cómo llegar a Puerto Pizarro desde el centro de Tumbes o el aeropuerto y planifica tu tour por los manglares sin contratiempos.",
        category: "Planificación",
        location: "Tumbes y Puerto Pizarro",
        readTime: "7 min",
        date: "10 Abr 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/galeria29.webp",
        highlights: [
            "Guía clara para llegar al muelle turístico de Puerto Pizarro",
            "Opciones desde el centro de Tumbes y el aeropuerto",
            "Consejos para llegar a tiempo a tu tour"
        ],
        body: [
            {
                type: "paragraph",
                text: "Si estás planeando un tour en Puerto Pizarro, uno de los primeros pasos es saber cómo llegar correctamente. Este destino turístico, ubicado a pocos minutos de la ciudad de Tumbes, es el punto de partida para recorrer los manglares, islas y realizar paseos en lancha."
            },
            {
                type: "heading",
                text: "¿Dónde queda Puerto Pizarro?"
            },
            {
                type: "paragraph",
                text: "Puerto Pizarro es una zona turística ubicada cerca de la ciudad de Tumbes, en el norte del Perú. Aquí se encuentra el muelle turístico desde donde parten los tours hacia los manglares de Tumbes, la Isla de los Pájaros, el zoocriadero de cocodrilos y la boca del mar."
            },
            {
                type: "image",
                src: "/images-optimized/galeria/galeria30.webp",
                alt: "Acceso al muelle turístico de Puerto Pizarro en Tumbes",
                caption: "El muelle turístico es el principal punto de salida para los tours en Puerto Pizarro."
            },
            {
                type: "heading",
                text: "Cómo llegar desde el centro de Tumbes"
            },
            {
                type: "paragraph",
                text: "Desde el centro de Tumbes, llegar a Puerto Pizarro es relativamente sencillo. El trayecto suele ser corto, aunque puede variar según el tráfico y la hora del día. Es recomendable salir con anticipación para evitar contratiempos antes de tu tour."
            },
            {
                type: "list",
                items: [
                    "El trayecto es corto desde el centro de Tumbes.",
                    "Puedes usar taxi o transporte local.",
                    "Se recomienda salir con tiempo para evitar retrasos.",
                    "Ubica previamente el muelle turístico."
                ]
            },
            {
                type: "heading",
                text: "Cómo llegar desde el aeropuerto de Tumbes"
            },
            {
                type: "paragraph",
                text: "Si llegas a Tumbes en avión, también puedes trasladarte directamente a Puerto Pizarro. En este caso, es importante coordinar bien los tiempos, especialmente si planeas tomar un tour el mismo día de tu llegada."
            },
            {
                type: "list",
                items: [
                    "Considera tiempo para recoger equipaje.",
                    "Coordina transporte desde el aeropuerto.",
                    "Evita horarios ajustados para tu tour.",
                    "Consulta disponibilidad antes de salir."
                ]
            },
            {
                type: "heading",
                text: "Consejos para llegar sin problemas"
            },
            {
                type: "paragraph",
                text: "Planificar tu traslado con anticipación es clave para disfrutar tu experiencia en Puerto Pizarro sin estrés. Un buen margen de tiempo te permitirá ubicar el muelle, confirmar tu reserva y prepararte para el recorrido."
            },
            {
                type: "list",
                items: [
                    "Llega con al menos 20 a 30 minutos de anticipación.",
                    "Guarda la ubicación del muelle en tu celular.",
                    "Consulta el horario según la marea.",
                    "Evita viajar con el tiempo justo."
                ]
            },
            {
                type: "quote",
                text: "Llegar con tiempo a Puerto Pizarro no solo evita estrés, también mejora tu experiencia desde el inicio del tour.",
                author: "Equipo Avis Tours"
            },
            {
                type: "heading",
                text: "Planifica tu llegada y reserva tu tour"
            },
            {
                type: "paragraph",
                text: "En AvisTours te ayudamos a coordinar tu visita a Puerto Pizarro desde el momento en que llegas a Tumbes. Podemos orientarte sobre el mejor horario según la marea y ayudarte a organizar tu tour de manera eficiente."
            },
            {
                type: "paragraph",
                text: "Contáctanos por WhatsApp para consultar disponibilidad y recibir recomendaciones personalizadas para tu llegada y recorrido por los manglares de Tumbes."
            }
        ]
    },
    {
        slug: "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro",
        title: "Qué llevar a un tour en los manglares de Puerto Pizarro (guía completa)",
        excerpt: "Descubre qué llevar a un tour en Puerto Pizarro: ropa, protección solar y recomendaciones para disfrutar al máximo los manglares de Tumbes.",
        category: "Consejos",
        location: "Puerto Pizarro, Tumbes",
        readTime: "6 min",
        date: "10 Abr 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/galeria27.webp",
        highlights: [
            "Lista práctica para tours en Puerto Pizarro",
            "Recomendaciones para el clima de Tumbes",
            "Consejos para disfrutar mejor el paseo en lancha"
        ],
        body: [
            {
                type: "paragraph",
                text: "Si estás planeando un tour en Puerto Pizarro, es importante saber qué llevar para disfrutar al máximo tu experiencia en los manglares de Tumbes. El clima, la exposición al sol y el recorrido en lancha hacen que algunos elementos sean indispensables para un paseo cómodo y seguro."
            },
            {
                type: "heading",
                text: "¿Por qué es importante prepararte bien?"
            },
            {
                type: "paragraph",
                text: "Un tour por los manglares de Puerto Pizarro implica tiempo al aire libre, exposición al sol y desplazamiento en bote. Llevar lo adecuado te permitirá disfrutar mejor el recorrido, tomar fotografías cómodamente y evitar incomodidades durante la experiencia."
            },
            {
                type: "image",
                src: "/images-optimized/galeria/galeria26.webp",
                alt: "Turistas preparados para un tour en los manglares de Puerto Pizarro",
                caption: "Viajar ligero pero preparado es clave para disfrutar un tour en los manglares de Tumbes."
            },
            {
                type: "heading",
                text: "Lista básica para tu tour en Puerto Pizarro"
            },
            {
                type: "list",
                items: [
                    "Protector solar para protegerte del sol intenso.",
                    "Gorra o sombrero para mayor comodidad.",
                    "Lentes de sol.",
                    "Agua para mantenerte hidratado.",
                    "Celular o cámara con batería suficiente.",
                    "Ropa ligera y cómoda.",
                    "Bolso pequeño o mochila práctica."
                ]
            },
            {
                type: "heading",
                text: "Recomendaciones adicionales"
            },
            {
                type: "paragraph",
                text: "Además de lo básico, hay algunos detalles que pueden mejorar tu experiencia durante el tour por los manglares de Tumbes. Prepararte con anticipación te permitirá enfocarte solo en disfrutar el paisaje y la navegación."
            },
            {
                type: "list",
                items: [
                    "Evita llevar objetos innecesarios o pesados.",
                    "Protege tus dispositivos si llevas cámara o celular.",
                    "Usa ropa fresca adecuada para clima cálido.",
                    "Consulta el clima antes de salir."
                ]
            },
            {
                type: "heading",
                text: "¿Qué no deberías llevar?"
            },
            {
                type: "list",
                items: [
                    "Equipaje grande o incómodo.",
                    "Objetos de valor innecesarios.",
                    "Ropa pesada o poco transpirable.",
                    "Accesorios que puedan caerse durante el recorrido."
                ]
            },
            {
                type: "heading",
                text: "Consejo clave para tu experiencia"
            },
            {
                type: "paragraph",
                text: "Mientras más ligero viajes, más cómodo será tu recorrido en lancha por Puerto Pizarro. La clave está en llevar solo lo necesario para disfrutar del entorno natural sin complicaciones."
            },
            {
                type: "quote",
                text: "Para disfrutar un tour en los manglares de Puerto Pizarro no necesitas llevar mucho, solo lo correcto.",
                author: "Equipo Avis Tours"
            },
            {
                type: "heading",
                text: "Prepárate y reserva tu tour"
            },
            {
                type: "paragraph",
                text: "En AvisTours te ayudamos a organizar tu tour en Puerto Pizarro considerando la marea, el clima y las condiciones del día. Nuestro objetivo es que tengas una experiencia cómoda y bien planificada en los manglares de Tumbes."
            },
            {
                type: "paragraph",
                text: "Contáctanos por WhatsApp para consultar disponibilidad y recibir recomendaciones personalizadas antes de tu paseo."
            }
        ]
    },
    {
        slug: "que-hacer-en-tumbes-en-1-dia",
        title: "Qué hacer en Tumbes en 1 día: guía completa con Puerto Pizarro",
        excerpt: "Descubre qué hacer en Tumbes en un día, incluyendo playas, manglares y tours en Puerto Pizarro para aprovechar al máximo tu visita.",
        category: "Guía",
        location: "Tumbes, Perú",
        readTime: "8 min",
        date: "15 Abr 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/promotions/solo_ida_isla.webp",
        highlights: [
            "Guía ideal para viajes cortos a Tumbes",
            "Incluye Puerto Pizarro y manglares",
            "Perfecto para organizar tu itinerario en un día"
        ],
        body: [
            {
                type: "paragraph",
                text: "Si tienes poco tiempo y te preguntas qué hacer en Tumbes en 1 día, la clave está en organizar bien tu recorrido. Este destino del norte del Perú combina playas, naturaleza y tours en Puerto Pizarro que puedes disfrutar en una sola jornada."
            },
            {
                type: "heading",
                text: "Mañana: visita a Puerto Pizarro"
            },
            {
                type: "paragraph",
                text: "Empieza el día temprano visitando Puerto Pizarro, uno de los principales atractivos turísticos de Tumbes. Desde aquí podrás realizar un tour por los manglares, recorrer islas y disfrutar de un paseo en lancha."
            },
            {
                type: "list",
                items: [
                    "Tour por manglares de Tumbes.",
                    "Visita a la Isla de los Pájaros.",
                    "Recorrido en lancha por canales naturales.",
                    "Observación de fauna."
                ]
            },
            {
                type: "heading",
                text: "Tarde: playas y gastronomía"
            },
            {
                type: "paragraph",
                text: "Después del tour en Puerto Pizarro, puedes continuar tu recorrido visitando playas cercanas o disfrutar de la gastronomía local. Tumbes es conocido por sus mariscos frescos y platos típicos del norte."
            },
            {
                type: "heading",
                text: "Consejos para aprovechar tu día"
            },
            {
                type: "list",
                items: [
                    "Empieza temprano para aprovechar mejor el tiempo.",
                    "Coordina tu tour en Puerto Pizarro con anticipación.",
                    "Consulta horarios según la marea.",
                    "Lleva ropa ligera y protector solar."
                ]
            },
            {
                type: "image",
                src: "/images-optimized/galeria/solo_isla_galeria4.webp",
                alt: "Aves en la Isla de los Pájaros en Puerto Pizarro Tumbes",
                caption: "La presencia de aves puede variar según la hora del día, la temporada y la marea."
            },
            {
                type: "heading",
                text: "Reserva tu tour en Puerto Pizarro"
            },
            {
                type: "paragraph",
                text: "En AvisTours te ayudamos a organizar tu visita a Tumbes para que aproveches al máximo tu día. Nuestros tours en Puerto Pizarro se adaptan a tu tiempo y condiciones del día."
            },
            {
                type: "paragraph",
                text: "Contáctanos por WhatsApp y planifica tu experiencia en los manglares de Tumbes."
            }
        ]
    },
    {
        slug: "puerto-pizarro-o-mancora",
        title: "Puerto Pizarro o Máncora: cuál visitar en Tumbes",
        excerpt: "Descubre si es mejor visitar Puerto Pizarro o Máncora según tu tipo de viaje, presupuesto y experiencia que buscas.",
        category: "Comparativa",
        location: "Tumbes, Perú",
        readTime: "7 min",
        date: "15 Abr 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/completo_galeria3.webp",
        highlights: [
            "Comparativa clara entre dos destinos turísticos",
            "Ideal para planificar tu viaje a Tumbes",
            "Te ayuda a elegir según tu estilo de viaje"
        ],
        body: [
            {
                type: "paragraph",
                text: "Si estás planeando un viaje al norte del Perú, probablemente te preguntes si visitar Puerto Pizarro o Máncora. Ambos destinos ofrecen experiencias distintas, por lo que elegir depende del tipo de viaje que estés buscando."
            },
            {
                type: "heading",
                text: "Puerto Pizarro: naturaleza y manglares"
            },
            {
                type: "paragraph",
                text: "Puerto Pizarro es ideal para quienes buscan naturaleza, tranquilidad y tours organizados. Aquí puedes recorrer los manglares de Tumbes, visitar islas y disfrutar de paseos en lancha."
            },
            {
                type: "list",
                items: [
                    "Tours en manglares.",
                    "Observación de aves.",
                    "Visita a islas.",
                    "Ambiente tranquilo."
                ]
            },
            {
                type: "heading",
                text: "Máncora: playa y vida nocturna"
            },
            {
                type: "paragraph",
                text: "Máncora es más conocido por sus playas, ambiente turístico y vida nocturna. Es ideal para quienes buscan diversión, surf y actividades en la playa."
            },
            {
                type: "heading",
                text: "¿Cuál elegir?"
            },
            {
                type: "list",
                items: [
                    "Elige Puerto Pizarro si buscas naturaleza y tours.",
                    "Elige Máncora si prefieres playa y entretenimiento.",
                    "Puedes combinar ambos si tienes más tiempo."
                ]
            },
            {
                type: "heading",
                text: "Recomendación final"
            },
            {
                type: "paragraph",
                text: "Si es tu primera vez en Tumbes, visitar Puerto Pizarro es una excelente opción para conocer los manglares y vivir una experiencia única en contacto con la naturaleza."
            },
            {
                type: "image",
                src: "/images-optimized/galeria/galeria17.webp",
                alt: "Aves en la Isla de los Pájaros en Puerto Pizarro Tumbes",
                caption: "La presencia de aves puede variar según la hora del día, la temporada y la marea."
            },
            {
                type: "heading",
                text: "Reserva tu experiencia en Puerto Pizarro"
            },
            {
                type: "paragraph",
                text: "En AvisTours organizamos tours en Puerto Pizarro adaptados a tu tipo de viaje. Te ayudamos a elegir la mejor opción según tu tiempo y preferencias."
            },
            {
                type: "paragraph",
                text: "Escríbenos por WhatsApp y planifica tu visita a los manglares de Tumbes."
            }
        ]
    },
    {
        slug: "zoocriadero-cocodrilos-puerto-pizarro",
        title: "Zoocriadero de cocodrilos de Puerto Pizarro: qué ver y cómo visitarlo",
        excerpt: "Conoce el zoocriadero de cocodrilos de Puerto Pizarro, qué puedes encontrar durante la visita y cómo incluirlo en tu recorrido por los manglares de Tumbes.",
        category: "Naturaleza",
        location: "Puerto Pizarro, Tumbes",
        readTime: "7 min",
        date: "11 Ago 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/manglares_cocodrilos_galeria1.webp",
        highlights: [
            "Conoce uno de los atractivos más visitados de Puerto Pizarro",
            "Descubre cómo combinar la visita con los manglares e islas",
            "Consejos para organizar tu recorrido en Puerto Pizarro",
        ],
        body: [
            {
                type: "paragraph",
                text: "El zoocriadero de cocodrilos de Puerto Pizarro es uno de los atractivos que puedes conocer durante una visita a esta zona turística de Tumbes. Para muchos viajeros, observar estos animales complementa perfectamente el recorrido por los manglares, las islas y los canales naturales que caracterizan a Puerto Pizarro.",
            },
            {
                type: "heading",
                text: "¿Qué es el zoocriadero de cocodrilos de Puerto Pizarro?",
            },
            {
                type: "paragraph",
                text: "Es un espacio dedicado a los cocodrilos que forma parte de los puntos de interés que pueden visitarse durante determinados recorridos turísticos por Puerto Pizarro. Su visita permite conocer de cerca a estos animales y añadir una experiencia diferente al tradicional paseo en bote por los manglares de Tumbes.",
            },
            {
                type: "heading",
                text: "¿Qué puedes ver durante la visita?",
            },
            {
                type: "paragraph",
                text: "El principal atractivo son los cocodrilos. La experiencia resulta especialmente interesante para familias, viajeros que visitan Puerto Pizarro por primera vez y personas interesadas en conocer algunos de los animales representativos de esta parte del norte peruano.",
            },
            {
                type: "list",
                items: [
                    "Observación de cocodrilos.",
                    "Recorrido por las instalaciones destinadas a su visita.",
                    "Una parada diferente dentro de la experiencia en Puerto Pizarro.",
                    "Oportunidad de tomar fotografías durante el recorrido.",
                ],
            },
            {
                type: "heading",
                text: "¿Cómo visitar los cocodrilos de Puerto Pizarro?",
            },
            {
                type: "paragraph",
                text: "Una forma práctica de conocer este atractivo es incluirlo dentro de un tour en Puerto Pizarro. Existen recorridos que combinan diferentes puntos de interés, permitiendo conocer los manglares, navegar entre las islas y visitar los cocodrilos durante una misma experiencia.",
            },
            {
                type: "image",
                src: "/images-optimized/galeria/manglares_cocodrilos_galeria2.webp",
                alt: "Tour para visitar cocodrilos y manglares en Puerto Pizarro Tumbes",
                caption: "La visita a los cocodrilos puede combinarse con un recorrido por los manglares de Puerto Pizarro.",
            },
            {
                type: "heading",
                text: "Tour por manglares y cocodrilos en Puerto Pizarro",
            },
            {
                type: "paragraph",
                text: "Si quieres aprovechar mejor tu visita, puedes elegir un recorrido que combine islas, manglares y cocodrilos. De esta manera no necesitas organizar cada atractivo por separado y puedes conocer diferentes zonas de Puerto Pizarro durante una misma salida.",
            },
            {
                type: "list",
                items: [
                    "Paseo en bote desde Puerto Pizarro.",
                    "Recorrido por zonas de manglar.",
                    "Visita a islas según la ruta seleccionada.",
                    "Parada para conocer los cocodrilos.",
                    "Experiencia acompañada por el entorno natural de Tumbes.",
                ],
            },
            {
                type: "heading",
                text: "¿Cuándo es mejor realizar el recorrido?",
            },
            {
                type: "paragraph",
                text: "Las condiciones de la marea y el clima pueden influir en los recorridos por Puerto Pizarro. Por esta razón, antes de elegir una hora de salida conviene consultar las condiciones del día y confirmar qué ruta se encuentra disponible.",
            },
            {
                type: "heading",
                text: "¿Qué llevar para la visita?",
            },
            {
                type: "paragraph",
                text: "Puerto Pizarro tiene un clima cálido durante buena parte del año. Para realizar el recorrido con mayor comodidad es recomendable llevar elementos básicos para protegerte del sol y disfrutar del paseo en bote.",
            },
            {
                type: "list",
                items: [
                    "Protector solar.",
                    "Gorra o sombrero.",
                    "Agua.",
                    "Ropa fresca y cómoda.",
                    "Celular o cámara para fotografías.",
                    "Una bolsa o protección para objetos sensibles al agua.",
                ],
            },
            {
                type: "heading",
                text: "¿Vale la pena visitar los cocodrilos de Puerto Pizarro?",
            },
            {
                type: "paragraph",
                text: "Puede ser una parada interesante si quieres realizar algo más que un paseo en bote. Al combinarla con los manglares y las islas, obtienes una experiencia más variada y puedes conocer diferentes atractivos de Puerto Pizarro en una sola visita.",
            },
            {
                type: "quote",
                text: "Combinar manglares, islas y cocodrilos permite conocer diferentes facetas de Puerto Pizarro durante una misma salida.",
                author: "Equipo Avis Tours",
            },
            {
                type: "heading",
                text: "Reserva un tour por manglares y cocodrilos",
            },
            {
                type: "paragraph",
                text: "En Avis Tours contamos con opciones para recorrer Puerto Pizarro y conocer sus principales atractivos. Podemos orientarte sobre las rutas disponibles y el horario más conveniente según las condiciones de marea, clima y disponibilidad de embarcaciones.",
            },
            {
                type: "paragraph",
                text: "Si quieres visitar los manglares y cocodrilos de Puerto Pizarro, consulta disponibilidad antes de tu llegada para elegir el recorrido que mejor se adapte a tu tiempo.",
            },
        ],
    },
    {
        slug: "manglares-de-puerto-pizarro",
        title: "Manglares de Puerto Pizarro: qué ver, cómo visitarlos y tours",
        excerpt: "Descubre qué puedes ver en los manglares de Puerto Pizarro, cómo visitarlos y qué debes considerar antes de realizar un tour por esta zona de Tumbes.",
        category: "Guía",
        location: "Puerto Pizarro, Tumbes",
        readTime: "9 min",
        date: "11 Ago 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/pajaros_galeria3.webp",
        highlights: [
            "Guía para conocer los manglares desde Puerto Pizarro",
            "Islas, aves, cocodrilos y recorridos en bote",
            "Recomendaciones para elegir tu tour y horario",
        ],
        body: [
            {
                type: "paragraph",
                text: "Los manglares de Puerto Pizarro son uno de los principales motivos para visitar esta zona de Tumbes. Desde el muelle turístico parten recorridos en bote que permiten navegar por canales, conocer diferentes islas y descubrir un entorno natural muy diferente al de las playas tradicionales del norte del Perú.",
            },
            {
                type: "heading",
                text: "¿Dónde están los manglares de Puerto Pizarro?",
            },
            {
                type: "paragraph",
                text: "Puerto Pizarro se encuentra cerca de la ciudad de Tumbes y funciona como uno de los principales puntos de salida para los paseos turísticos por esta zona de manglares. Desde su muelle se coordinan diferentes rutas en bote según los lugares que el visitante quiera conocer.",
            },
            {
                type: "paragraph",
                text: "Si todavía no sabes cómo llegar, puedes consultar nuestra guía específica para llegar a Puerto Pizarro desde Tumbes o desde el aeropuerto.",
            },
            {
                type: "heading",
                text: "¿Qué puedes ver durante un tour por los manglares?",
            },
            {
                type: "paragraph",
                text: "Los recorridos pueden variar según el tour elegido, las condiciones del día y los puntos incluidos. Por eso no todos los paseos por Puerto Pizarro ofrecen exactamente la misma experiencia.",
            },
            {
                type: "list",
                items: [
                    "Canales y zonas de manglar.",
                    "Islas ubicadas dentro del recorrido.",
                    "Aves y otros animales del entorno.",
                    "Isla de los Pájaros en las rutas que la incluyen.",
                    "Cocodrilos en los recorridos que contemplan esta visita.",
                    "Boca del mar en las rutas de mayor recorrido.",
                ],
            },
            {
                type: "image",
                src: "/images-optimized/galeria/completo_galeria2.webp",
                alt: "Manglares de Puerto Pizarro durante un tour en bote en Tumbes",
                caption: "Los recorridos en bote permiten conocer diferentes sectores de Puerto Pizarro.",
            },
            {
                type: "heading",
                text: "La Isla de los Pájaros",
            },
            {
                type: "paragraph",
                text: "La Isla de los Pájaros es uno de los atractivos naturales más conocidos de los recorridos por Puerto Pizarro. Para quienes disfrutan de la naturaleza y la observación de aves, existen rutas que permiten acercarse a esta zona durante el paseo.",
            },
            {
                type: "heading",
                text: "Cocodrilos en Puerto Pizarro",
            },
            {
                type: "paragraph",
                text: "Otra alternativa es elegir un tour que incluya la visita a los cocodrilos. Esta opción suele interesar especialmente a quienes viajan en familia o quieren combinar naturaleza, navegación y diferentes atractivos durante una misma salida.",
            },
            {
                type: "heading",
                text: "¿Cómo visitar los manglares de Puerto Pizarro?",
            },
            {
                type: "paragraph",
                text: "La forma habitual de recorrer esta zona es mediante un paseo en bote desde Puerto Pizarro. Antes de reservar conviene revisar qué lugares incluye cada opción, ya que existen recorridos cortos y alternativas más completas.",
            },
            {
                type: "list",
                items: [
                    "Define cuánto tiempo tienes disponible.",
                    "Revisa qué islas incluye el recorrido.",
                    "Consulta si deseas visitar la Isla de los Pájaros.",
                    "Comprueba si la ruta incluye cocodrilos.",
                    "Pregunta por las condiciones de marea antes de elegir el horario.",
                ],
            },
            {
                type: "heading",
                text: "¿Cuánto dura un tour por los manglares?",
            },
            {
                type: "paragraph",
                text: "La duración depende del recorrido seleccionado. Una ruta enfocada en pocos atractivos requiere menos tiempo que un tour que combina varias islas, manglares, cocodrilos y otros puntos de Puerto Pizarro. Por eso es recomendable elegir el paseo según el tiempo disponible y los lugares que realmente quieres conocer.",
            },
            {
                type: "heading",
                text: "¿Cuál es la mejor hora para visitar los manglares?",
            },
            {
                type: "paragraph",
                text: "No existe una única hora perfecta para todos los días. La marea puede modificar las condiciones de navegación y la experiencia en determinados sectores. Antes de reservar, lo más recomendable es consultar las condiciones previstas para la fecha de tu visita.",
            },
            {
                type: "heading",
                text: "¿Qué llevar a un tour por los manglares?",
            },
            {
                type: "paragraph",
                text: "Para disfrutar del paseo conviene llevar ropa cómoda y prepararse para el sol y el entorno acuático. No necesitas llevar demasiadas cosas, pero algunos elementos pueden hacer que el recorrido resulte mucho más cómodo.",
            },
            {
                type: "list",
                items: [
                    "Protector solar.",
                    "Gorra o sombrero.",
                    "Agua.",
                    "Ropa fresca.",
                    "Calzado cómodo.",
                    "Protección para celular, cámara y objetos personales.",
                ],
            },
            {
                type: "heading",
                text: "¿Qué tour por los manglares elegir?",
            },
            {
                type: "paragraph",
                text: "La mejor opción depende de lo que quieras conocer. Si tienes poco tiempo puedes elegir un recorrido más corto. Si es tu primera visita y quieres conocer varios atractivos, un tour completo por Puerto Pizarro permite aprovechar mejor la salida y combinar diferentes puntos en una misma experiencia.",
            },
            {
                type: "quote",
                text: "Antes de elegir un tour, revisa los lugares incluidos y las condiciones de marea para aprovechar mejor tu visita.",
                author: "Equipo Avis Tours",
            },
            {
                type: "heading",
                text: "Tours por los manglares de Puerto Pizarro con Avis Tours",
            },
            {
                type: "paragraph",
                text: "En Avis Tours organizamos diferentes recorridos desde Puerto Pizarro. Puedes elegir entre alternativas enfocadas en determinados atractivos o recorridos más completos para conocer islas, manglares, cocodrilos y otros puntos de interés.",
            },
            {
                type: "paragraph",
                text: "Antes de separar tu paseo podemos orientarte sobre la ruta y el horario disponible según la marea, el clima y las condiciones de navegación del día.",
            },
        ],
    },
]

const blogConnections: Record<string, BlogConnection> = {
    "mareas-en-puerto-pizarro": {
        primaryTourSlug: "isla-pajaros-manglares",
        relatedTourSlugs: ["puerto-pizarro-completo", "isla-pajaros-manglares"],
        relatedPostSlugs: ["ruta-completa-islas-manglares-cocodrilos", "como-llegar-a-puerto-pizarro-desde-tumbes"],
        whatsappMessage: "Hola Avis Tours, leí su artículo sobre mareas en Puerto Pizarro y quiero que me recomienden el mejor horario para reservar un tour.",
    },
    "ruta-completa-islas-manglares-cocodrilos": {
        primaryTourSlug: "puerto-pizarro-completo",
        relatedTourSlugs: ["puerto-pizarro-completo", "islas-manglares-cocodrilos"],
        relatedPostSlugs: ["isla-de-los-pajaros-y-manglares", "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro"],
        whatsappMessage: "Hola Avis Tours, vi su artículo sobre el tour completo en Puerto Pizarro y quiero consultar disponibilidad.",
    },
    "isla-de-los-pajaros-y-manglares": {
        primaryTourSlug: "isla-pajaros-manglares",
        relatedTourSlugs: ["isla-pajaros-manglares", "pajaros-y-manglares"],
        relatedPostSlugs: ["ruta-completa-islas-manglares-cocodrilos", "mareas-en-puerto-pizarro"],
        whatsappMessage: "Hola Avis Tours, vi su artículo sobre Isla de los Pájaros y quiero cotizar ese tour en Puerto Pizarro.",
    },
    "como-llegar-a-puerto-pizarro-desde-tumbes": {
        primaryTourSlug: "solo-visita-a-la-isla",
        relatedTourSlugs: ["puerto-pizarro-completo", "solo-visita-a-la-isla"],
        relatedPostSlugs: ["mareas-en-puerto-pizarro", "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro"],
        whatsappMessage: "Hola Avis Tours, voy a llegar a Tumbes y quiero ayuda para coordinar mi tour en Puerto Pizarro.",
    },
    "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro": {
        primaryTourSlug: "manglares-y-cocodrilos",
        relatedTourSlugs: ["puerto-pizarro-completo", "manglares-y-cocodrilos"],
        relatedPostSlugs: ["mareas-en-puerto-pizarro", "como-llegar-a-puerto-pizarro-desde-tumbes"],
        whatsappMessage: "Hola Avis Tours, leí su guía sobre qué llevar a un tour y quiero consultar qué recorrido me recomiendan.",
    },
    "que-hacer-en-tumbes-en-1-dia": {
        primaryTourSlug: "puerto-pizarro-completo",
        relatedTourSlugs: [
            "puerto-pizarro-completo",
            "islas-manglares-cocodrilos",
        ],
        relatedPostSlugs: [
            "como-llegar-a-puerto-pizarro-desde-tumbes",
            "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro",
            "ruta-completa-islas-manglares-cocodrilos"
        ],
        whatsappMessage: "Hola Avis Tours, voy a visitar Tumbes por 1 día y quiero ayuda para organizar un tour en Puerto Pizarro."
    },
    "puerto-pizarro-o-mancora": {
        primaryTourSlug: "puerto-pizarro-completo",
        relatedTourSlugs: [
            "isla-pajaros-manglares",
            "manglares-y-cocodrilos"
        ],
        relatedPostSlugs: [
            "que-hacer-en-tumbes-en-1-dia",
            "isla-de-los-pajaros-y-manglares",
            "mareas-en-puerto-pizarro"
        ],
        whatsappMessage: "Hola Avis Tours, estoy decidiendo entre Puerto Pizarro y Máncora y quiero información sobre sus tours."
    },
    "zoocriadero-cocodrilos-puerto-pizarro": {
        primaryTourSlug: "islas-manglares-cocodrilos",
        relatedTourSlugs: [
            "islas-manglares-cocodrilos",
            "puerto-pizarro-completo",
        ],
        relatedPostSlugs: [
            "mareas-en-puerto-pizarro",
            "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro",
            "ruta-completa-islas-manglares-cocodrilos",
        ],
        whatsappMessage: "Hola Avis Tours, quiero visitar el zoocriadero de cocodrilos y los manglares de Puerto Pizarro. ¿Qué tour me recomiendan?",
    },
    "manglares-de-puerto-pizarro": {
        primaryTourSlug: "puerto-pizarro-completo",
        relatedTourSlugs: [
            "islas-manglares-cocodrilos",
            "isla-pajaros-manglares",
        ],
        relatedPostSlugs: [
            "isla-de-los-pajaros-y-manglares",
            "mareas-en-puerto-pizarro",
            "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro",
            "como-llegar-a-puerto-pizarro-desde-tumbes",
        ],
        whatsappMessage: "Hola Avis Tours, quiero conocer los manglares de Puerto Pizarro. ¿Qué tour me recomiendan según los lugares que quiero visitar?",
    },
}

export function getBlogPost(slug: string) {
    return blogPosts.find((post) => post.slug === slug)
}

export function getBlogRelatedTours(post: BlogPost): Tour[] {
    return (blogConnections[post.slug]?.relatedTourSlugs ?? [])
        .map((slug) => getTour(slug))
        .filter((tour): tour is Tour => Boolean(tour))
}

export function getBlogPrimaryTour(post: BlogPost) {
    const primarySlug = blogConnections[post.slug]?.primaryTourSlug

    if (primarySlug) {
        return getTour(primarySlug)
    }

    return getBlogRelatedTours(post)[0]
}

export function getBlogRelatedPosts(post: BlogPost): BlogPost[] {
    const explicitPosts = (blogConnections[post.slug]?.relatedPostSlugs ?? [])
        .map((slug) => getBlogPost(slug))
        .filter((item): item is BlogPost => Boolean(item))

    if (explicitPosts.length > 0) {
        return explicitPosts
    }

    return blogPosts
        .filter((item) => item.slug !== post.slug && (item.category === post.category || item.location === post.location))
        .slice(0, 2)
}

export function getBlogWhatsAppMessage(post: BlogPost) {
    return blogConnections[post.slug]?.whatsappMessage
        ?? `Hola Avis Tours, leí su artículo "${post.title}" y quiero consultar un tour en Puerto Pizarro.`
}
