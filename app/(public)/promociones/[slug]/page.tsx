import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { ArrowLeft, Binoculars, Bird, Camera, CheckCircle2, Clock, Kayak, Map, MapPin, ShieldCheck, ShipWheel, Star, TreePine, Umbrella, Waves } from "lucide-react"
import PackageGallery from "@/components/gallery/PackageGallery"
import { CrocodileIcon, IslandIcon } from "@/components/icons/TourFeatureIcons"
import TourPricingCard from "@/components/promotions/TourPricingCard"
import JsonLd from "@/components/seo/JsonLd"
import { companyProfile } from "@/data/company"
import { getTour, getTourDiscount, getTourPricing, tours, type TourIcon } from "@/data/promotions"
import { brandName, getTourMetaDescription, getTourSearchTerms, getTourSeoTarget } from "@/data/seo"
import { absoluteUrl, siteConfig } from "@/data/site"
import { getTourRatingSummaries } from "@/services/testimonials"

type PromotionDetailPageProps = {
    params: Promise<{ slug: string }>
}

const fallbackActivityIcons: TourIcon[] = ["boat", "view", "route", "sea"]

type StandardTourIcon = Exclude<TourIcon, "crocodile">

const featureIconComponents: Record<StandardTourIcon, LucideIcon> = {
    beach: Umbrella,
    bird: Bird,
    boat: ShipWheel,
    camera: Camera,
    island: IslandIcon,
    kayak: Kayak,
    mangrove: TreePine,
    route: Map,
    sea: Waves,
    view: Binoculars,
    zoo: ShieldCheck,
}

export function generateStaticParams() {
    return tours.map((tour) => ({
        slug: tour.slug,
    }))
}

export async function generateMetadata({ params }: PromotionDetailPageProps): Promise<Metadata> {
    const { slug } = await params
    const tour = getTour(slug)

    if (!tour) {
        return {
            title: "Promoción no encontrada",
        }
    }

    const seoTarget = getTourSeoTarget(tour)
    const metaTitle = seoTarget.primaryKeyword
    const metaDescription = getTourMetaDescription(tour)
    const socialTitle = `${metaTitle} | ${brandName}`

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: getTourSearchTerms(tour),
        alternates: {
            canonical: `/promociones/${tour.slug}`,
        },
        openGraph: {
            title: socialTitle,
            description: metaDescription,
            url: `/promociones/${tour.slug}`,
            images: [
                {
                    url: absoluteUrl(tour.image),
                    width: 1200,
                    height: 630,
                    alt: tour.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: socialTitle,
            description: metaDescription,
            images: [absoluteUrl(tour.image)],
        },
    }
}

export default async function PromotionDetailPage({ params }: PromotionDetailPageProps) {
    const { slug } = await params
    const tour = getTour(slug)

    if (!tour) {
        notFound()
    }

    const ratingSummaries = await getTourRatingSummaries()
    const ratingSummary = ratingSummaries[tour.slug]
    const liveRating = ratingSummary?.rating ?? tour.rating
    const liveReviews = ratingSummary?.reviews ?? tour.reviews
    const pricing = getTourPricing(tour)
    const promotion = getTourDiscount(tour)
    const seoTarget = getTourSeoTarget(tour)

    return (
        <article className="bg-white">
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "TouristTrip",
                        name: tour.title,
                        description: tour.description,
                        image: absoluteUrl(tour.image),
                        url: absoluteUrl(`/promociones/${tour.slug}`),
                        touristType: ["Familias", "Parejas", "Viajeros en Tumbes"],
                        itinerary: tour.itinerary.map((item, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            name: item,
                        })),
                        provider: {
                            "@type": "TravelAgency",
                            name: siteConfig.name,
                            url: siteConfig.url,
                        },
                        offers: {
                            "@type": "Offer",
                            price: pricing.isGroupPricing ? pricing.totalPrice : pricing.perPersonPrice,
                            priceCurrency: "PEN",
                            availability: "https://schema.org/InStock",
                            url: absoluteUrl(`/promociones/${tour.slug}`),
                        },
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Inicio",
                                item: absoluteUrl("/"),
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Tours",
                                item: absoluteUrl("/packages"),
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: tour.title,
                                item: absoluteUrl(`/promociones/${tour.slug}`),
                            },
                        ],
                    },
                ]}
            />
            <section className="relative min-h-[520px] flex items-end pt-28 overflow-hidden">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    preload
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

                <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 text-white">
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                        <Link href="/packages" className="inline-flex h-8 items-center gap-2 text-sm text-white/75 hover:text-white transition">
                            <ArrowLeft size={16} />
                            Volver a tours
                        </Link>
                        {(promotion || tour.discount) && (
                            <span className={`inline-flex h-8 items-center text-white text-xs font-semibold px-3 rounded shadow-sm ${promotion ? "bg-red-500" : "bg-green-500"}`}>
                                {promotion?.label ?? tour.discount}
                            </span>
                        )}
                    </div>
                    <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-green-500/85 backdrop-blur">
                        {seoTarget.primaryKeyword}
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 leading-tight max-w-4xl drop-shadow-[0_2px_14px_rgba(15,23,42,0.65)]">
                        {tour.title}
                    </h1>
                    <p className="text-base text-white/95 mt-5 max-w-3xl leading-7 drop-shadow-[0_2px_12px_rgba(15,23,42,0.65)]">
                        {seoTarget.intro}
                    </p>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-10 items-start">
                        <div className="bg-white rounded-lg shadow-[0_24px_70px_rgba(15,23,42,0.10)] border border-slate-100 p-6 md:p-9 lg:p-10 -mt-12 relative z-10">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 border-b border-slate-200 pb-6 mb-8">
                                <div className="rounded-md bg-slate-50 border border-slate-200 px-3 py-3">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={17} className="text-green-500" />
                                        <span className="block text-xs text-gray-500">Lugar</span>
                                    </div>
                                    <strong className="text-sm text-gray-800">{tour.location}</strong>
                                </div>
                                <div className="rounded-md bg-slate-50 border border-slate-200 px-3 py-3">
                                    <div className="flex items-center gap-2">
                                        <Clock size={17} className="text-green-500" />
                                        <span className="block text-xs text-gray-500">Duración</span>
                                    </div>
                                    <strong className="text-sm text-gray-800">{tour.duration}</strong>
                                </div>
                                <div className="rounded-md bg-slate-50 border border-slate-200 px-3 py-3">
                                    <div className="flex items-center gap-2">
                                        <Star size={17} className="text-green-500" fill="currentColor" />
                                        <span className="block text-xs text-gray-500">Valoración</span>
                                    </div>
                                    <strong className="text-sm text-gray-800">{liveRating} ({liveReviews})</strong>
                                </div>
                            </div>

                            <p className="mb-8 max-w-2xl text-base leading-7 text-gray-600">
                                {tour.description}
                            </p>

                            <section>
                                <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                                    Paradas destacadas
                                </span>
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-3">
                                    Lo mejor de este recorrido
                                </h2>
                                <p className="text-gray-500 leading-7 mt-3 max-w-2xl">
                                    Estas son las paradas y experiencias principales que incluye el tour.
                                </p>

                                <div className="grid gap-4 mt-7 sm:grid-cols-2">
                                    {tour.features.map((feature) => {
                                        const iconName = tour.featureIcons?.[feature] ?? "route"
                                        const standardIconName = iconName === "crocodile" ? "route" : iconName as StandardTourIcon
                                        const Icon = featureIconComponents[standardIconName] ?? Map

                                        return (
                                            <div key={feature} className="group flex items-center gap-4 rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white shadow-[0_8px_20px_rgba(34,197,94,0.25)]">
                                                    {iconName === "crocodile" ? <CrocodileIcon size={23} /> : <Icon size={23} />}
                                                </div>
                                                <h3 className="font-semibold leading-snug text-gray-900">
                                                    {feature}
                                                </h3>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>

                            <section className="mt-10 border-t border-slate-200 pt-8">
                                <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                                    Actividades
                                </span>
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-3">
                                    Lo que haras durante el tour
                                </h2>
                                <p className="text-gray-500 leading-7 mt-3 max-w-2xl">
                                    Estas son las actividades que podrás realizar durante el tour.
                                </p>

                                <ul className="grid gap-x-6 gap-y-3 mt-5 sm:grid-cols-2">
                                    {tour.activities.map((activity, index) => {
                                        const iconName = tour.activityIcons?.[activity]
                                            ?? fallbackActivityIcons[index % fallbackActivityIcons.length]
                                        const standardIconName = iconName === "crocodile" ? "route" : iconName as StandardTourIcon
                                        const Icon = featureIconComponents[standardIconName] ?? Map

                                        return (
                                            <li key={activity} className="flex gap-4">
                                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                                                    {iconName === "crocodile" ? <CrocodileIcon size={17} /> : <Icon size={17} />}
                                                </span>
                                                <span className="text-sm md:text-base leading-7 text-gray-600">
                                                    {activity}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </section>

                            <section className="mt-12">
                                <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                                    Galeria
                                </span>
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-3">
                                    Momentos del recorrido
                                </h2>
                                <p className="text-gray-500 leading-7 mt-3 max-w-2xl">
                                    Imágenes referenciales de la experiencia: navegación, manglares, islas y paisajes del estero de Puerto Pizarro.
                                </p>

                                <PackageGallery images={[tour.image, ...tour.gallery]} title={tour.title} />
                            </section>

                            <div className="grid md:grid-cols-2 gap-8 mt-12">
                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Itinerario sugerido
                                    </h2>
                                    <div className="mt-5 space-y-4">
                                        {tour.itinerary.map((item, index) => (
                                            <div key={item} className="flex gap-4">
                                                <span className="h-8 w-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-sm font-semibold shrink-0">
                                                    {index + 1}
                                                </span>
                                                <p className="text-sm md:text-base text-gray-600 leading-7">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Incluye
                                    </h2>
                                    <div className="mt-5 space-y-3">
                                        {tour.includes.map((item) => (
                                            <div key={item} className="flex gap-3 text-sm md:text-base text-gray-600">
                                                <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            <section className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
                                <h2 className="text-xl font-semibold text-amber-900">
                                    Recomendaciones para disfrutar mejor
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-3 mt-5">
                                    {tour.recommendations.map((item) => (
                                        <div key={item} className="flex gap-3 text-sm text-amber-800 leading-6">
                                            <CheckCircle2 size={17} className="mt-1 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <aside className="lg:sticky lg:top-24">
                            <TourPricingCard tour={tour} number={companyProfile.whatsapp} />
                        </aside>
                    </div>
                </div>
            </section>
        </article>
    )
}
