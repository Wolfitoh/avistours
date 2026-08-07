import Image from "next/image"
import type { Metadata } from "next"
import { Anchor, Clock, FileText, Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import ContactWhatsAppForm from "@/components/contact/ContactWhatsAppForm"
import PackageGallery from "@/components/gallery/PackageGallery"
import FaqSection from "@/components/seo/FaqSection"
import JsonLd from "@/components/seo/JsonLd"
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink"
import { companyProfile, getCompanySameAs } from "@/data/company"
import { tours } from "@/data/promotions"
import { brandName, contactFaqs, contactKeywords, siteWideKeywords } from "@/data/seo"
import { absoluteUrl, siteConfig } from "@/data/site"

const company = {
    name: "Operador Turístico Avis Tours S.A.C.",
    tradeName: brandName,
    ruc: companyProfile.ruc,
    address: companyProfile.address,
    phone: companyProfile.phone,
    whatsapp: companyProfile.whatsapp,
    email: companyProfile.email,
    schedule: companyProfile.schedule,
}

const companyDisplayName = companyProfile.legalName

const generalGalleryImages = [
    "/images/galeria/galeria.jpg",
    "/images/galeria/galeria1.jpg",
    "/images/galeria/galeria2.jpg",
    "/images/galeria/galeria3.jpg",
    "/images/galeria/galeria4.jpg",
    "/images/galeria/galeria5.jpg",
    "/images/galeria/galeria6.jpg",
    "/images/galeria/galeria7.jpg",
    "/images/galeria/galeria8.jpg",
    "/images/galeria/galeria9.jpg",
    "/images/galeria/galeria10.jpg",
    "/images/galeria/galeria11.jpg",
    "/images/galeria/galeria12.jpg",
    "/images/galeria/galeria13.jpg",
    "/images/galeria/galeria14.jpg",
    "/images/galeria/galeria15.jpg",
    "/images/galeria/galeria16.jpg",
    "/images/galeria/galeria17.jpg",
    "/images/galeria/galeria25.jpeg",
    "/images/galeria/galeria26.jpeg",
    "/images/galeria/galeria27.jpeg",
    "/images/galeria/galeria28.jpg",
    "/images/galeria/galeria29.jpg",
    "/images/galeria/galeria30.jpg",
    "/images/galeria/galeria31.jpg",
]

const contactGallery = Array.from(
    new Set(
        [...generalGalleryImages, ...tours.flatMap((tour) => [tour.image, ...tour.gallery])],
    ),
)

const contactCards = [
    {
        label: "Punto de encuentro",
        value: company.address,
        icon: MapPin,
    },
    {
        label: "WhatsApp",
        value: company.phone,
        icon: Phone,
    },
    {
        label: "Correo",
        value: company.email,
        icon: Mail,
    },
    {
        label: "Horario",
        value: company.schedule,
        icon: Clock,
    },
]

export const metadata: Metadata = {
    title: "Contacto",
    description: `Escribe a ${brandName} por WhatsApp para reservar tours en Puerto Pizarro, Tumbes: manglares, islas, aves, cocodrilos y salidas según marea.`,
    keywords: [...siteWideKeywords, ...contactKeywords],
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: `Contacto ${brandName} | Tours en Puerto Pizarro`,
        description: "Consulta disponibilidad para paseos por manglares, islas, aves y cocodrilos en Puerto Pizarro, Tumbes.",
        url: "/contact",
        images: [
            {
                url: absoluteUrl("/images-optimized/hero/bg_inicio2.webp"),
                width: 1200,
                height: 630,
                alt: "Contacto para paseos en Puerto Pizarro",
            },
        ],
    },
}

export default function ContactPage() {
    const sameAs = getCompanySameAs()

    return (
        <div className="bg-white">
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: companyProfile.tradeName,
                        legalName: companyProfile.legalName,
                        url: siteConfig.url,
                        image: absoluteUrl("/images-optimized/hero/bg_inicio2.webp"),
                        telephone: companyProfile.phone,
                        email: companyProfile.email,
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: companyProfile.streetAddress,
                            addressLocality: companyProfile.locality,
                            addressRegion: companyProfile.region,
                            addressCountry: companyProfile.country,
                        },
                        openingHours: "Mo-Su 08:00-17:00",
                        areaServed: companyProfile.serviceArea,
                        sameAs,
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: contactFaqs.map((item) => ({
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
            <section className="relative overflow-hidden bg-slate-900 pt-32 text-white md:pt-40">
                <Image
                    src="/images-optimized/hero/bg_inicio2.webp"
                    alt={`Paseo en Puerto Pizarro con ${brandName}`}
                    fill
                    preload
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-800/55 to-slate-950/70" />

                <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 md:pb-20 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300 backdrop-blur">
                            <Anchor size={14} />
                            {`Contacto ${brandName}`}
                        </span>
                        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                            Reserva tu tour en Puerto Pizarro con guía local
                        </h1>
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                            Coordinamos tours por islas, manglares, Isla de los Pájaros, zoocriadero de cocodrilos y boca del mar, ajustando la experiencia según marea y clima.
                        </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur">
                        <p className="text-sm font-semibold text-green-300">
                            Empresa
                        </p>
                        <h2 className="mt-2 text-xl font-semibold">
                            {companyDisplayName}
                        </h2>
                        <div className="mt-4 grid gap-3 text-sm text-white/75">
                            <span className="inline-flex items-start gap-2">
                                <FileText size={17} className="mt-0.5 shrink-0 text-green-300" />
                                RUC referencial: {company.ruc}
                            </span>
                            <span className="inline-flex items-start gap-2">
                                <ShieldCheck size={17} className="mt-0.5 shrink-0 text-green-300" />
                                Operación turística local en Puerto Pizarro
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                                Información de contacto
                            </span>
                            <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                                Estamos cerca del muelle turístico
                            </h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                                Puedes escribirnos para consultar horarios, disponibilidad, recomendaciones por marea o armar una salida para grupos familiares, parejas y visitantes que llegan por primera vez a Tumbes.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {contactCards.map((card) => {
                                    const Icon = card.icon

                                    return (
                                        <div key={card.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-green-500 text-white">
                                                <Icon size={21} />
                                            </div>
                                            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                                                {card.label}
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-700">
                                                {card.value}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-8 rounded-lg border border-green-100 bg-green-50 p-5">
                                <h3 className="text-lg font-semibold text-slate-900">
                                    Antes de reservar
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Los horarios pueden ajustarse por marea, clima y disponibilidad de embarcaciones. Confirmaremos la mejor ventana de salida antes de separar el paseo.
                                </p>
                                <WhatsAppLink
                                    number={company.whatsapp}
                                    message={`Hola ${brandName}, quiero consultar disponibilidad para un paseo en Puerto Pizarro.`}
                                    className="mt-4 inline-flex rounded-md bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                                >
                                    Consultar disponibilidad
                                </WhatsAppLink>
                            </div>
                        </div>

                        <ContactWhatsAppForm />
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                            Galería
                        </span>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                            Puerto Pizarro en imágenes
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
                            Una galería general con imágenes reales de nuestros paquetes: islas, manglares, aves, cocodrilos y recorridos completos por Puerto Pizarro.
                        </p>
                    </div>

                    <PackageGallery images={contactGallery} title={`Puerto Pizarro con ${brandName}`} />
                </div>
            </section>

            <FaqSection
                eyebrow="Ayuda rápida"
                title="Preguntas frecuentes antes de escribirnos"
                description={`Te dejamos respuestas útiles sobre horarios, punto de encuentro y reserva para que contactes a ${siteConfig.name} con más contexto.`}
                items={contactFaqs}
            />
        </div>
    )
}
