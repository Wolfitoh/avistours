import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { getLocalizedBlogPosts } from "@/data/blogs"
import { blogKeywords, brandName, primaryKeywords, siteWideKeywords } from "@/data/seo"
import { absoluteUrl } from "@/data/site"
import { getTranslationLocale, resolveLocale } from "@/i18n/locales"
import { getLocalizedPath } from "@/i18n/urls"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const activeLocale = resolveLocale(locale)
    const t = await getTranslations({ locale, namespace: "Blog" })
    const isEnglish = getTranslationLocale(activeLocale) === "en"
    const canonical = getLocalizedPath(activeLocale, "/blog")

    return {
        title: isEnglish ? t("metadataTitle") : "Guía de Puerto Pizarro: mareas, manglares y paseos",
        description: isEnglish ? t("metadataDescription") : `Guías de ${brandName} para planificar Puerto Pizarro: mareas, manglares de Tumbes, rutas en bote, Isla de los Pájaros y consejos antes de reservar.`,
        keywords: isEnglish ? undefined : [...siteWideKeywords, primaryKeywords.blog, ...blogKeywords],
        alternates: {
            canonical,
        },
        openGraph: {
            title: isEnglish ? `${t("metadataTitle")} | ${brandName}` : `Guía de Puerto Pizarro, mareas y manglares | ${brandName}`,
            description: isEnglish ? t("metadataDescription") : "Aprende sobre mareas, manglares y rutas turísticas por Puerto Pizarro, Tumbes.",
            url: canonical,
            images: [
                {
                    url: absoluteUrl("/images-optimized/galeria/galeria17.webp"),
                    width: 1200,
                    height: 630,
                    alt: isEnglish ? "Puerto Pizarro and Tumbes mangroves travel guide" : "Guía turística de Puerto Pizarro y manglares de Tumbes",
                },
            ],
        },
    }
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "Blog" })
    const posts = getLocalizedBlogPosts(resolveLocale(locale))
    const featuredPost = posts.find((post) => post.featured) ?? posts[0]
    const regularPosts = posts.filter((post) => post.slug !== featuredPost?.slug)

    if (!featuredPost) {
        return (
            <section className="bg-white px-4 py-32">
                <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
                    <h1 className="text-3xl font-semibold text-slate-900">{t("notAvailableTitle")}</h1>
                    <p className="mt-4 leading-7 text-slate-600">{t("notAvailableDescription")}</p>
                    <Link
                        href="/packages"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-3 font-medium text-white transition hover:bg-green-600"
                    >
                        {t("viewTours")}
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    preload
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />
                <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-20">
                    <span className="inline-flex rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300 backdrop-blur">
                        {t("heroEyebrow")}
                    </span>
                    <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight lg:text-5xl">
                        {t("heroTitle")}
                    </h1>
                    <p className="mt-5 max-w-2xl leading-relaxed text-white/75">
                        {t("heroDescription")}
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <article className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center mb-14">
                        <Link href={{ pathname: "/blog/[slug]", params: { slug: featuredPost.slug } }} className="relative h-[420px] rounded-lg overflow-hidden group">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </Link>

                        <div>
                            <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                                {t("featured")}
                            </span>
                            <h2 className="text-3xl font-semibold text-gray-800 mt-4 leading-tight">
                                <Link href={{ pathname: "/blog/[slug]", params: { slug: featuredPost.slug } }} className="hover:text-green-500 transition">
                                    {featuredPost.title}
                                </Link>
                            </h2>
                            <p className="text-gray-500 leading-relaxed mt-4">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-5">
                                <span className="flex items-center gap-2">
                                    <CalendarDays size={16} className="text-green-500" />
                                    {featuredPost.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={16} className="text-green-500" />
                                    {featuredPost.readTime}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin size={16} className="text-green-500" />
                                    {featuredPost.location}
                                </span>
                            </div>
                            <Link
                                href={{ pathname: "/blog/[slug]", params: { slug: featuredPost.slug } }}
                                className="inline-flex items-center gap-2 mt-8 bg-green-500 text-white px-5 py-3 rounded-md font-medium hover:bg-green-600 transition"
                            >
                                {t("readArticle")}
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </article>

                    <div className="grid gap-6 md:grid-cols-2">
                        {regularPosts.map((post) => (
                            <article key={post.slug} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
                                <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }} className="relative block h-64 overflow-hidden group">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </Link>
                                <div className="p-6">
                                    <span className="text-green-500 text-xs font-semibold uppercase tracking-[0.16em]">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-semibold text-gray-800 mt-3">
                                        <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }} className="hover:text-green-500 transition">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mt-3">
                                        {post.excerpt}
                                    </p>
                                    <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }} className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-gray-700 hover:text-green-500 transition">
                                        {t("readMore")}
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
