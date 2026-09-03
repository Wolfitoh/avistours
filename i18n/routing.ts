import { defineRouting } from "next-intl/routing"
import { appLocales, defaultLocale } from "./locales"

export const routing = defineRouting({
  locales: appLocales,
  defaultLocale,
  // Las URLs existentes permanecen en español, mientras que el inglés usa /en.
  localePrefix: "as-needed",
  // Una visita a una URL española nunca se redirige por el idioma del navegador.
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/packages": {
      es: "/packages",
      en: "/tours",
    },
    "/promociones/[slug]": {
      es: "/promociones/[slug]",
      en: "/tours/[slug]",
    },
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/contact": "/contact",
    "/feedback": "/feedback",
    "/destinations": "/destinations",
    "/listing": "/listing",
  },
})
