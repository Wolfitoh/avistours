import HeroCarousel from "@/components/home/Hero"
import SearchBar from '../../components/home/SearchBar';
import PromotionsSection from "@/components/home/PromotionsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import TidesSection from "@/components/home/TidesSection";
import HomeTrustSection from "@/components/home/HomeTrustSection";
import type { Metadata } from "next";
import { Suspense } from "react";
import FaqSection from "@/components/seo/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { companyProfile, getCompanySameAs } from "@/data/company";
import { brandName, homeFaqs, homeKeywords, primaryKeywords, siteWideKeywords } from "@/data/seo";
import { absoluteUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
    title: `${primaryKeywords.home} y manglares de Tumbes`,
    description: `Reserva tours en Puerto Pizarro con ${brandName}: manglares de Tumbes, Isla de los Pájaros, cocodrilos, islas y boca del mar con guía local por WhatsApp.`,
    keywords: [...siteWideKeywords, ...homeKeywords],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: `Tours en Puerto Pizarro y manglares de Tumbes | ${brandName}`,
        description: "Paseos turísticos por manglares, islas, aves, cocodrilos y boca del mar en Puerto Pizarro, Tumbes.",
        url: "/",
        images: [
            {
                url: absoluteUrl("/images-optimized/hero/bg_inicio2.webp"),
                width: 1200,
                height: 630,
                alt: "Manglares de Tumbes en Puerto Pizarro",
            },
        ],
    },
}

export default function HomePage() {
    const sameAs = getCompanySameAs()

    return (
        <>
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "TravelAgency",
                        name: siteConfig.name,
                        legalName: siteConfig.legalName,
                        url: siteConfig.url,
                        image: absoluteUrl("/images-optimized/hero/bg_inicio2.webp"),
                        telephone: siteConfig.phone,
                        email: siteConfig.email,
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: companyProfile.streetAddress,
                            addressLocality: companyProfile.locality,
                            addressRegion: companyProfile.region,
                            addressCountry: companyProfile.country,
                        },
                        areaServed: companyProfile.serviceArea,
                        sameAs,
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: siteConfig.name,
                        url: siteConfig.url,
                        potentialAction: {
                            "@type": "SearchAction",
                            target: `${siteConfig.url}/packages?q={search_term_string}`,
                            "query-input": "required name=search_term_string",
                        },
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: homeFaqs.map((item) => ({
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
            <HeroCarousel />
            <SearchBar />
            <Suspense fallback={null}>
                <TidesSection />
            </Suspense>
            <Suspense fallback={null}>
                <PromotionsSection />
            </Suspense>
            <HomeTrustSection />
            <Suspense fallback={null}>
                <TestimonialsSection />
            </Suspense>
            <BlogSection />
            <FaqSection
                eyebrow="Preguntas frecuentes"
                title="Lo que más consultan antes de reservar"
                description="Resolvemos dudas comunes sobre marea, horarios, tipos de paseo y reserva para que tu visita a Puerto Pizarro llegue mejor encaminada."
                items={homeFaqs}
            />
        </>
    )
}
