import Image from "next/image"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { getLocalizedBlogPosts } from "@/data/blogs"
import { resolveLocale } from "@/i18n/locales"

export default async function BlogSection({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "Blog" })
    const posts = getLocalizedBlogPosts(resolveLocale(locale)).slice(0, 3)

    if (posts.length === 0) {
        return null
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                        {t("homeEyebrow")}
                    </span>
                    <h2 className="text-3xl font-semibold text-gray-800 mt-3">
                        {t("homeTitle")}
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        {t("homeDescription")}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="group bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden"
                        >
                            <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }} className="block relative h-60 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                />
                                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/30 transition" />
                                <span className="absolute top-4 left-4 bg-white/90 text-green-600 text-xs font-semibold px-3 py-1 rounded">
                                    {post.category}
                                </span>
                            </Link>

                            <div className="p-6">
                                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <CalendarDays size={14} className="text-green-500" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} className="text-green-500" />
                                        {post.location}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mt-4 leading-snug">
                                    <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }} className="hover:text-green-500 transition">
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed mt-3">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
                                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-gray-700 hover:text-green-500 transition"
                                >
                                    {t("readMore")}
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
