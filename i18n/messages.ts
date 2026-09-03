import esCommon from "@/messages/es/common.json"
import esHome from "@/messages/es/home.json"
import esTours from "@/messages/es/tours.json"
import esContact from "@/messages/es/contact.json"
import esFeedback from "@/messages/es/feedback.json"
import esBlog from "@/messages/es/blog.json"
import esFaq from "@/messages/es/faq.json"
import enCommon from "@/messages/en/common.json"
import enHome from "@/messages/en/home.json"
import enTours from "@/messages/en/tours.json"
import enContact from "@/messages/en/contact.json"
import enFeedback from "@/messages/en/feedback.json"
import enBlog from "@/messages/en/blog.json"
import enFaq from "@/messages/en/faq.json"
import { getTranslationLocale, type AppLocale } from "./locales"

const spanishMessages = {
  ...esCommon,
  ...esHome,
  ...esTours,
  ...esContact,
  ...esFeedback,
  ...esBlog,
  ...esFaq,
}

const englishMessages = {
  ...enCommon,
  ...enHome,
  ...enTours,
  ...enContact,
  ...enFeedback,
  ...enBlog,
  ...enFaq,
}

/**
 * Agrega aquí el paquete de JSON de cada idioma una vez que esté traducido.
 * Los idiomas nuevos usan el paquete de su `translationLocale` mientras se
 * completa su localización.
 */
export const messages = {
  es: {
    ...spanishMessages,
  },
  en: {
    ...englishMessages,
  },
} as const

type MessageLocale = keyof typeof messages
const fallbackMessageLocale: MessageLocale = "es"

function hasMessageLocale(locale: AppLocale): locale is MessageLocale {
  return locale in messages
}

export function getLocaleMessages(locale: AppLocale) {
  const translationLocale = getTranslationLocale(locale)
  const messageLocale: MessageLocale = hasMessageLocale(translationLocale)
    ? translationLocale
    : fallbackMessageLocale

  return messages[messageLocale]
}
