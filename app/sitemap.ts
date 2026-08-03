import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blogs"
import { tours } from "@/data/promotions"
import { absoluteUrl } from "@/data/site"

const contentLastModified = "2026-08-03"
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
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: absoluteUrl("/"),
            lastModified: contentLastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: absoluteUrl("/packages"),
            lastModified: contentLastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: absoluteUrl("/blog"),
            lastModified: contentLastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: absoluteUrl("/contact"),
            lastModified: contentLastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ]

    const tourRoutes: MetadataRoute.Sitemap = tours.map((tour) => ({
        url: absoluteUrl(`/promociones/${tour.slug}`),
        lastModified: contentLastModified,
        changeFrequency: "weekly",
        priority: 0.85,
        images: [absoluteUrl(tour.image), ...tour.gallery.map(absoluteUrl)],
    }))

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: absoluteUrl(`/blog/${post.slug}`),
        lastModified: getBlogLastModified(post.date),
        changeFrequency: "monthly",
        priority: post.featured ? 0.85 : 0.75,
        images: [absoluteUrl(post.image)],
    }))

    return [...staticRoutes, ...tourRoutes, ...blogRoutes]
}
