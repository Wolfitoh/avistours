import { getPathname } from "./navigation"
import type { AppLocale } from "./locales"

type LocalizedRoute =
  | "/"
  | "/packages"
  | "/blog"
  | "/blog/[slug]"
  | "/contact"
  | "/feedback"
  | "/destinations"
  | "/listing"
  | "/promociones/[slug]"

type LocalizedRouteParams = {
  slug?: string
}

/**
 * Construye URLs para enlaces creados fuera de componentes React (API,
 * asistente y sitemap) usando las mismas reglas que los enlaces de next-intl.
 */
export function getLocalizedPath(
  locale: AppLocale,
  pathname: LocalizedRoute,
  params?: LocalizedRouteParams,
) {
  const href = params?.slug
    ? { pathname, params: { slug: params.slug } }
    : pathname

  return getPathname({
    locale,
    href: href as Parameters<typeof getPathname>[0]["href"],
  })
}
