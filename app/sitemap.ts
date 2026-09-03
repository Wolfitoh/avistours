import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blogs"
import { tours } from "@/data/promotions"
import { absoluteUrl } from "@/data/site"
import { appLocales, type AppLocale } from "@/i18n/locales"
import { getLocalizedPath } from "@/i18n/urls"

const contentLastModified = "2026-08-03"
type SitemapRoute = "/" | "/packages" | "/blog" | "/blog/[slug]" | "/contact" | "/promociones/[slug]"
const blogMonthMap: Record<string, string> = {
    Ene: "01",
    Feb: "02",
    Mar: "03",
    Abr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Ago: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dic: "12",
}

function getBlogLastModified(date: string) {
    const [day, month, year] = date.split(" ")
    const monthNumber = blogMonthMap[month]

    if (!day || !monthNumber || !year) {
        return contentLastModified
    }

    return `${year}-${monthNumber}-${day.padStart(2, "0")}`
}

export default function sitemap(): MetadataRoute.Sitemap {
    const localizedRoute = (
        pathname: SitemapRoute,
        options: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">,
        params?: { slug: string },
    ): MetadataRoute.Sitemap => {
        const languages = Object.fromEntries(
            appLocales.map((locale) => [
                locale,
                absoluteUrl(getLocalizedPath(locale, pathname, params)),
            ]),
        )

        return appLocales.map((locale: AppLocale) => ({
            url: languages[locale],
            alternates: { languages },
            ...options,
        }))
    }

    const staticRoutes = [
        ...localizedRoute("/", { lastModified: contentLastModified, changeFrequency: "weekly", priority: 1 }),
        ...localizedRoute("/packages", { lastModified: contentLastModified, changeFrequency: "weekly", priority: 0.9 }),
        ...localizedRoute("/blog", { lastModified: contentLastModified, changeFrequency: "weekly", priority: 0.8 }),
        ...localizedRoute("/contact", { lastModified: contentLastModified, changeFrequency: "monthly", priority: 0.7 }),
    ]

    const tourRoutes = tours.flatMap((tour) =>
        localizedRoute("/promociones/[slug]", {
            lastModified: contentLastModified,
            changeFrequency: "weekly",
            priority: 0.85,
            images: [absoluteUrl(tour.image), ...tour.gallery.map(absoluteUrl)],
        }, { slug: tour.slug }),
    )

    const blogRoutes = blogPosts.flatMap((post) =>
        localizedRoute("/blog/[slug]", {
            lastModified: getBlogLastModified(post.date),
            changeFrequency: "monthly",
            priority: post.featured ? 0.85 : 0.75,
            images: [absoluteUrl(post.image)],
        }, { slug: post.slug }),
    )

    return [...staticRoutes, ...tourRoutes, ...blogRoutes]
}
