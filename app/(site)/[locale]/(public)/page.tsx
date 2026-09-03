import HeroCarousel from "@/components/home/Hero"
import SearchBar from "@/components/home/SearchBar";
import PromotionsSection from "@/components/home/PromotionsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import TidesSection from "@/components/home/TidesSection";
import HomeTrustSection from "@/components/home/HomeTrustSection";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import FaqSection from "@/components/seo/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { companyProfile, getCompanySameAs } from "@/data/company";
import { brandName, homeKeywords, primaryKeywords, siteWideKeywords } from "@/data/seo";
import { getLocalizedFaqs } from "@/data/faqs";
import { absoluteUrl, siteConfig } from "@/data/site";
import { getTranslationLocale, resolveLocale } from "@/i18n/locales";

const spanishMetadata: Metadata = {
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

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params

    if (getTranslationLocale(locale) !== "en") {
        return spanishMetadata
    }

    return {
        title: "Puerto Pizarro Tours and Tumbes Mangroves",
        description: "Book Puerto Pizarro tours through Tumbes mangroves, Bird Island, crocodiles and islands with local guidance and WhatsApp booking.",
        alternates: { canonical: "/en" },
        openGraph: {
            title: `Puerto Pizarro Tours and Tumbes Mangroves | ${brandName}`,
            description: "Boat trips through mangroves, islands, birds, crocodiles and the mouth of the sea in Puerto Pizarro, Tumbes.",
            url: "/en",
            images: [{ url: absoluteUrl("/images-optimized/hero/bg_inicio2.webp"), width: 1200, height: 630, alt: "Puerto Pizarro and Tumbes mangroves" }],
        },
    }
}

export default async function HomePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const faqT = await getTranslations({ locale, namespace: "HomeFaq" })
    const localizedFaqs = getLocalizedFaqs(resolveLocale(locale), "home")
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
                        mainEntity: localizedFaqs.map((item) => ({
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
            <HeroCarousel locale={locale} />
            <SearchBar locale={locale} />
            <Suspense fallback={null}>
                <TidesSection locale={locale} />
            </Suspense>
            <Suspense fallback={null}>
                <PromotionsSection locale={locale} />
            </Suspense>
            <HomeTrustSection locale={locale} />
            <Suspense fallback={null}>
                <TestimonialsSection locale={locale} />
            </Suspense>
            <BlogSection locale={locale as "es" | "en"} />
            <FaqSection
                eyebrow={faqT("eyebrow")}
                title={faqT("title")}
                description={faqT("description")}
                items={localizedFaqs}
            />
        </>
    )
}
