import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Suspense } from "react"
import { ArrowRight, BookOpen, CalendarDays, MapPin, Search, ShipWheel } from "lucide-react"
import TourCard from "@/components/home/TourCard"
import SiteSearch from "@/components/search/SiteSearch"
import FaqSection from "@/components/seo/FaqSection"
import JsonLd from "@/components/seo/JsonLd"
import { blogPosts } from "@/data/blogs"
import { tours } from "@/data/promotions"
import { brandName, getBlogSearchTerms, getTourSearchTerms, packagesFaqs, packagesKeywords, primaryKeywords, siteWideKeywords } from "@/data/seo"
import { absoluteUrl, siteConfig } from "@/data/site"
import { applyTourRating, getTourRatingSummaries } from "@/services/testimonials"

type PackagesPageProps = {
    searchParams: Promise<{ q?: string | string[] }>
}

export const metadata: Metadata = {
    title: "Tours en Puerto Pizarro: precios, rutas y reservas",
    description: `Compara tours en Puerto Pizarro con ${brandName}: precios, rutas por manglares, islas, aves, cocodrilos y reserva directa por WhatsApp.`,
    keywords: [...siteWideKeywords, primaryKeywords.packages, ...packagesKeywords],
    alternates: {
        canonical: "/packages",
    },
    openGraph: {
        title: `Tours en Puerto Pizarro y manglares de Tumbes | ${brandName}`,
        description: "Paquetes por islas, manglares, Isla de los Pájaros, cocodrilos y boca del mar en Puerto Pizarro.",
        url: "/packages",
        images: [
            {
                url: absoluteUrl("/images-optimized/promotions/manglares_cocodrilos.webp"),
                width: 1200,
                height: 630,
                alt: "Paquetes turísticos por Puerto Pizarro y manglares de Tumbes",
            },
        ],
    },
}

function normalize(value: string) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
}

function includesTerm(values: string[], query: string) {
    if (!query) {
        return true
    }

    const term = normalize(query)
    return normalize(values.join(" ")).includes(term)
}

export default async function PackagesPage({ searchParams }: PackagesPageProps) {
    const { q } = await searchParams
    const query = (Array.isArray(q) ? q[0] : q ?? "").trim()
    const filteredTours = tours.filter((tour) =>
        includesTerm(getTourSearchTerms(tour), query),
    )

    const filteredPosts = blogPosts.filter((post) =>
        includesTerm(getBlogSearchTerms(post), query),
    )

    const hasQuery = query.length > 0
    const totalResults = filteredTours.length + filteredPosts.length

    return (
        <div className="bg-white">
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "Tours en Puerto Pizarro",
                        itemListElement: tours.map((tour, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            url: absoluteUrl(`/promociones/${tour.slug}`),
                            name: tour.title,
                        })),
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: packagesFaqs.map((item) => ({
                            "@type": "Question",
                            name: item.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: item.answer,
                            },
                        })),
                    },
                ]}
            />
            <section className="relative overflow-hidden bg-slate-950/70 pt-32 text-white md:pt-40">
                <Image
                    src="/images-optimized/hero/bg_inicio2.webp"
                    alt="Manglares de Puerto Pizarro"
                    fill
                    priority
                    sizes="100vw"
                    quality={70}
                    className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />

                <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-20">
                    <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300 backdrop-blur">
                        <ShipWheel size={14} />
                        Tours Avis Tours
                    </span>
                    <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                        Tours en Puerto Pizarro con precios, rutas y guía local
                    </h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                        Encuentra paseos en bote por manglares, islas, aves, cocodrilos y boca del mar. Compara paquetes, revisa detalles y elige la salida que mejor se adapta a tu tiempo y presupuesto.
                    </p>

                    <SiteSearch
                        initialQuery={query}
                        className="mt-8 max-w-4xl text-slate-900"
                        placeholder="Busca por manglares, cocodrilos, marea o Isla de los Pájaros"
                        showSuggestions={hasQuery}
                    />
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                                {hasQuery ? "Resultados de búsqueda" : "Paquetes disponibles"}
                            </span>
                            <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                                {hasQuery ? `Resultados para "${query}"` : "Elige tu paseo por Puerto Pizarro"}
                            </h2>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
                                {hasQuery
                                    ? `${totalResults} resultado(s) entre paquetes y entradas del blog.`
                                    : "Opciones pensadas para distintos tiempos de viaje, desde traslados cortos hasta el recorrido completo."}
                            </p>
                        </div>

                        {hasQuery && (
                            <Link
                                href="/packages"
                                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-green-600"
                            >
                                Limpiar búsqueda
                                <Search size={16} />
                            </Link>
                        )}
                    </div>

                    <Suspense fallback={<TourCardsSkeleton />}>
                        <TourResultsSection packageTours={filteredTours} />
                    </Suspense>

                    <div className="mt-16">
                        <div className="mb-7 flex items-end justify-between gap-4">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                                    Guía local
                                </span>
                                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                                    Entradas de blog relacionadas
                                </h2>
                            </div>
                            <Link
                                href="/blog"
                                className="hidden items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-green-600 sm:inline-flex"
                            >
                                Ver blog
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        {filteredPosts.length > 0 ? (
                            <div className="grid gap-5 md:grid-cols-3">
                                {filteredPosts.map((post) => (
                                    <article
                                        key={post.slug}
                                        className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                                    >
                                        <Link href={`/blog/${post.slug}`} className="relative block h-56 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(min-width: 768px) 33vw, 100vw"
                                                quality={70}
                                                className="object-cover transition duration-700 group-hover:scale-105"
                                            />
                                            <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded bg-white/90 px-3 py-1 text-xs font-semibold text-green-600">
                                                <BookOpen size={13} />
                                                {post.category}
                                            </span>
                                        </Link>
                                        <div className="p-5">
                                            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                                                <span className="inline-flex items-center gap-1">
                                                    <CalendarDays size={14} className="text-green-500" />
                                                    {post.date}
                                                </span>
                                                <span className="inline-flex items-center gap-1">
                                                    <MapPin size={14} className="text-green-500" />
                                                    {post.location}
                                                </span>
                                            </div>
                                            <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                                                <Link href={`/blog/${post.slug}`} className="transition hover:text-green-600">
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
                                No hay entradas del blog relacionadas con esta búsqueda.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <FaqSection
                eyebrow="Reserva y precios"
                title="Preguntas frecuentes sobre tours en Puerto Pizarro"
                description={`Una base rápida para resolver dudas de precio, rutas, grupos y reserva antes de escribirle a ${siteConfig.name}.`}
                items={packagesFaqs}
            />
        </div>
    )
}

function TourCardsSkeleton() {
    return (
        <div className="grid gap-5 lg:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:flex sm:gap-4 sm:p-4"
                >
                    <div className="h-56 w-full rounded-lg bg-slate-200 sm:h-60 sm:w-44 md:w-48" />
                    <div className="mt-4 space-y-3 sm:mt-0 sm:flex-1">
                        <div className="h-4 w-24 rounded bg-slate-200" />
                        <div className="h-6 w-3/4 rounded bg-slate-200" />
                        <div className="h-4 w-full rounded bg-slate-200" />
                        <div className="h-4 w-5/6 rounded bg-slate-200" />
                        <div className="flex gap-2 pt-2">
                            <div className="h-6 w-20 rounded bg-slate-200" />
                            <div className="h-6 w-20 rounded bg-slate-200" />
                            <div className="h-6 w-20 rounded bg-slate-200" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

async function TourResultsSection({
    packageTours,
}: {
    packageTours: typeof tours
}) {
    const ratingSummaries = await getTourRatingSummaries()
    const toursWithRatings = packageTours.map((tour) => applyTourRating(tour, ratingSummaries))

    if (toursWithRatings.length === 0) {
        return (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
                <h3 className="text-lg font-semibold text-slate-900">
                    No encontramos paquetes con esa búsqueda
                </h3>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    Prueba con: islas, manglares, pájaros, cocodrilos o marea.
                </p>
            </div>
        )
    }

    return (
        <div className="grid gap-5 lg:grid-cols-2">
            {toursWithRatings.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
            ))}
        </div>
    )
}
