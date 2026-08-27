import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: ["Googlebot", "bingbot", "DuckDuckBot", "archive.org_bot", "archive_org_bot"],
                allow: "/",
            },
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://avistours.com"}/sitemap.xml`,
    }
}
