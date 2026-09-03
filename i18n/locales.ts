/**
 * Registro único de idiomas visibles en el sitio.
 *
 * Para incorporar un idioma, agrega aquí su código y nombre nativo. Mientras
 * sus textos editoriales se preparan, `translationLocale` puede apuntar a
 * "es" para que no se publique contenido mezclado o sin revisar.
 */
export const localeConfig = {
  es: {
    label: "Español",
    shortLabel: "ES",
    htmlLang: "es-PE",
    openGraphLocale: "es_PE",
    translationLocale: "es",
  },
  en: {
    label: "English",
    shortLabel: "EN",
    htmlLang: "en-US",
    openGraphLocale: "en_US",
    translationLocale: "en",
  },
} as const

export type AppLocale = keyof typeof localeConfig

export const defaultLocale: AppLocale = "es"
export const appLocales = Object.keys(localeConfig) as AppLocale[]

export function isAppLocale(value: string | null | undefined): value is AppLocale {
  return Boolean(value && value in localeConfig)
}

export function resolveLocale(value: string | null | undefined): AppLocale {
  return isAppLocale(value) ? value : defaultLocale
}

export function getLocaleConfig(locale: string | null | undefined) {
  return localeConfig[resolveLocale(locale)]
}

/**
 * Permite usar contenido revisado de otro idioma durante una incorporación
 * gradual. Cuando una traducción esté lista, cambia su valor por el propio
 * código del idioma y regístrala en cada fuente de contenido.
 */
export function getTranslationLocale(locale: string | null | undefined): AppLocale {
  const resolvedLocale = resolveLocale(locale)
  return resolveLocale(localeConfig[resolvedLocale].translationLocale)
}
