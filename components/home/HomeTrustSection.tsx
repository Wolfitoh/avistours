import Image from "next/image"
import Link from "next/link"
import { brandName } from "@/data/seo"

const homeTrustPillars = [
    {
        title: "Guías y coordinación local",
        description: "Salidas organizadas en Puerto Pizarro, con información clara y recomendaciones según tu tipo de viaje.",
    },
    {
        title: "Horarios según marea",
        description: "Coordinamos la mejor hora para disfrutar manglares, islas y cocodrilos con una navegación más cómoda.",
    },
    {
        title: "Reserva rápida por WhatsApp",
        description: "Cotiza, consulta disponibilidad y separa tu tour de forma rápida y directa.",
    },
]

export default function HomeTrustSection() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-950 py-14 text-white md:py-20">
            <Image
                src="/images-optimized/hero/bg_inicio5.webp"
                alt=""
                fill
                sizes="100vw"
                quality={70}
                className="absolute inset-0 -z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-slates-100/50" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/70" />

            <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
                        Tours en Puerto Pizarro
                    </span>
                    <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                        Manglares de Tumbes, islas, aves y cocodrilos
                    </h2>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-100 md:text-base">
                        Vive Puerto Pizarro con {brandName}. Recorre los manglares de Tumbes, visita la Isla de los Pájaros, el zoocriadero de cocodrilos y disfruta paseos guiados por locales, con salidas recomendadas según la marea.
                    </p>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100 md:text-base">
                        Compara rutas, precios base e inclusiones para elegir el tour ideal en Tumbes y reservar con más seguridad.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                        <Link href="/packages" className="rounded-md bg-green-500 px-5 py-3 text-white transition hover:bg-green-600">
                            Ver tours disponibles
                        </Link>
                        <Link href="/contact" className="rounded-md border border-white/35 px-5 py-3 text-white transition hover:border-green-300 hover:text-green-200">
                            Conoce al operador
                        </Link>
                        <Link href="/blog" className="rounded-md border border-white/35 px-5 py-3 text-white transition hover:border-green-300 hover:text-green-200">
                            Leer guía local
                        </Link>
                    </div>
                </div>

                <div className="grid gap-4">
                    {homeTrustPillars.map((pillar) => (
                        <article key={pillar.title} className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur">
                            <h3 className="text-lg font-semibold text-white">
                                {pillar.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-100">
                                {pillar.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
