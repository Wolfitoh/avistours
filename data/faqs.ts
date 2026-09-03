import esFaqs from "@/messages/es/faq.json"
import enFaqs from "@/messages/en/faq.json"
import { getTranslationLocale, type AppLocale } from "@/i18n/locales"

export type Faq = {
    question: string
    answer: string
}

type FaqSection = "home" | "packages" | "contact"

const faqs = {
    es: esFaqs.Faqs,
    en: enFaqs.Faqs,
} as const

export function getLocalizedFaqs(locale: AppLocale, section: FaqSection): Faq[] {
    const translationLocale = getTranslationLocale(locale)
    const faqLocale = translationLocale in faqs ? translationLocale as keyof typeof faqs : "es"

    return faqs[faqLocale][section]
}
