import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"
import { getLocaleMessages } from "./messages"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale
  const resolvedLocale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale

  return {
    locale: resolvedLocale,
    messages: getLocaleMessages(resolvedLocale),
  }
})
