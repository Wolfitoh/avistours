import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock, MapPin, MessageCircle, Quote, ShipWheel, UserRound } from "lucide-react"
import { getTranslations } from "next-intl/server"
import JsonLd from "@/components/seo/JsonLd"
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink"
import { companyProfile } from "@/data/company"
import { formatPrice, getLocalizedTour, getTourPricing } from "@/data/promotions"
import { Link } from "@/i18n/navigation"
import { blogPosts, getBlogPost, getBlogPrimaryTour, getBlogRelatedPosts, getBlogRelatedTours, getBlogWhatsAppMessage, getLocalizedBlogPost, type BlogContentBlock } from "@/data/blogs"
import { brandName, getBlogMetaDescription, getBlogSearchTerms, getBlogSeoTarget } from "@/data/seo"
import { absoluteUrl, siteConfig } from "@/data/site"
import { getTranslationLocale, resolveLocale } from "@/i18n/locales"
import { getLocalizedPath } from "@/i18n/urls"

type BlogDetailPageProps = {
    params: Promise<{ locale: string; slug: string }>
}

function TourShowcaseCard({
    slug,
    title,
    image,
    duration,
    priceLabel,
    viewTourLabel,
    compact = false,
}: {
    slug: string
    title: string
    image: string
    duration: string
    priceLabel: string
    viewTourLabel: string
    compact?: boolean
}) {
    return (
        <Link
            href={{ pathname: "/promociones/[slug]", params: { slug } }}
            className={`group relative block overflow-hidden rounded-2xl ${compact ? "min-h-[320px]" : "min-h-[360px]"} shadow-[0_22px_60px_rgba(15,23,42,0.16)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.22)]`}
        >
            <Image
                src={image}
                alt={title}
                fill
                sizes={compact ? "(min-width: 1024px) 330px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/30 to-slate-950/85" />

            <div className="absolute left-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white/95 shadow-sm">
                {priceLabel}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                    {duration}
                </span>
                <h3 className={`${compact ? "mt-3 text-xl" : "mt-3 text-2xl"} max-w-[18rem] font-semibold leading-tight`}>
                    {title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition group-hover:text-white">
                    {viewTourLabel}
                    <ArrowRight size={16} />
                </span>
            </div>
        </Link>
    )
}

function renderContentBlock(block: BlogContentBlock, index: number) {
    if (block.type === "heading") {
        return (
            <h2 key={`${block.type}-${index}`} className="text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4 leading-tight">
                {block.text}
            </h2>
        )
    }

    if (block.type === "paragraph") {
        return (
            <p key={`${block.type}-${index}`} className="text-[15px] md:text-base leading-7 md:leading-8 text-gray-600 mb-5">
                {block.text}
            </p>
        )
    }

    if (block.type === "image") {
        return (
            <figure key={`${block.type}-${index}`} className="my-8">
                <div className="relative h-[260px] md:h-[360px] overflow-hidden rounded-lg">
                    <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        sizes="(min-width: 1024px) 760px, 100vw"
                        className="object-cover"
                    />
                </div>
                {block.caption && (
                    <figcaption className="mt-3 text-sm text-gray-500 border-l-2 border-green-500 pl-3">
                        {block.caption}
                    </figcaption>
                )}
            </figure>
        )
    }

    if (block.type === "quote") {
        return (
            <blockquote key={`${block.type}-${index}`} className="my-8 rounded-lg bg-slate-50 border border-slate-200 p-5 md:p-6">
                <Quote size={24} className="text-green-500 mb-3" />
                <p className="text-lg md:text-xl leading-8 text-gray-800 font-medium">
                    {block.text}
                </p>
                {block.author && (
                    <cite className="block not-italic text-sm text-gray-500 mt-4">
                        {block.author}
                    </cite>
                )}
            </blockquote>
        )
    }

    return (
        <ul key={`${block.type}-${index}`} className="my-7 space-y-3">
            {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] md:text-base leading-7 text-gray-600">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const { locale, slug } = await params
    const activeLocale = resolveLocale(locale)
    const sourcePost = getBlogPost(slug)
    const post = sourcePost ? getLocalizedBlogPost(sourcePost, activeLocale) : undefined
    const isEnglish = getTranslationLocale(activeLocale) === "en"

    if (!post) {
        return {
            title: locale === "en" ? "Article unavailable" : "Artículo no encontrado",
            robots: {
                index: false,
                follow: false,
            },
        }
    }

    const seoTarget = getBlogSeoTarget(post)
    const metaTitle = isEnglish ? post.title : seoTarget.primaryKeyword
    const metaDescription = isEnglish ? post.excerpt : getBlogMetaDescription(post)
    const socialTitle = `${metaTitle} | ${brandName}`
    const canonical = getLocalizedPath(activeLocale, "/blog/[slug]", { slug: post.slug })

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: isEnglish ? undefined : getBlogSearchTerms(post),
        alternates: {
            canonical,
        },
        openGraph: {
            type: "article",
            title: socialTitle,
            description: metaDescription,
            url: canonical,
            images: [
                {
                    url: absoluteUrl(post.image),
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: socialTitle,
            description: metaDescription,
            images: [absoluteUrl(post.image)],
        },
    }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { locale, slug } = await params
    const activeLocale = resolveLocale(locale)
    const sourcePost = getBlogPost(slug)
    const post = sourcePost ? getLocalizedBlogPost(sourcePost, activeLocale) : undefined

    if (!post) {
        notFound()
    }

    const t = await getTranslations({ locale, namespace: "BlogDetail" })
    const relatedPosts = getBlogRelatedPosts(sourcePost ?? post)
        .map((item) => getLocalizedBlogPost(item, activeLocale))
        .filter((item): item is typeof post => Boolean(item))
    const relatedTours = getBlogRelatedTours(sourcePost ?? post).map((tour) => getLocalizedTour(tour, activeLocale))
    const isEnglish = getTranslationLocale(activeLocale) === "en"
    const whatsappMessage = isEnglish
        ? `Hello Avis Tours, I read "${post.title}" and would like a recommendation for a Puerto Pizarro tour.`
        : getBlogWhatsAppMessage(sourcePost ?? post)
    const sourcePrimaryTour = getBlogPrimaryTour(sourcePost ?? post)
    const primaryTour = sourcePrimaryTour ? getLocalizedTour(sourcePrimaryTour, activeLocale) : undefined
    const seoTarget = getBlogSeoTarget(post)
    const localizedPath = getLocalizedPath(activeLocale, "/blog/[slug]", { slug: post.slug })
    const localizedHomePath = getLocalizedPath(activeLocale, "/")
    const localizedBlogPath = getLocalizedPath(activeLocale, "/blog")
    const heroKeyword = isEnglish ? post.category : seoTarget.primaryKeyword
    const heroIntro = isEnglish ? post.excerpt : seoTarget.intro
    const metaItems = [
        { label: post.author, icon: UserRound },
        { label: post.date, icon: CalendarDays },
        { label: post.readTime, icon: Clock },
        { label: post.location, icon: MapPin },
    ]

    return (
        <article className="bg-white">
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: post.title,
                        description: post.excerpt,
                        image: absoluteUrl(post.image),
                        author: {
                            "@type": "Organization",
                            name: siteConfig.name,
                        },
                        publisher: {
                            "@type": "Organization",
                            name: siteConfig.name,
                            url: siteConfig.url,
                        },
                        mainEntityOfPage: absoluteUrl(localizedPath),
                        about: ["Puerto Pizarro", "Manglares de Tumbes", post.category],
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: t("home"),
                                item: absoluteUrl(localizedHomePath),
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Blog",
                                item: absoluteUrl(localizedBlogPath),
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: post.title,
                                item: absoluteUrl(localizedPath),
                            },
                        ],
                    },
                ]}
            />
            <section className="relative min-h-[520px] flex items-end pt-28 overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    preload
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

                <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 text-white">
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                        <Link href="/blog" className="inline-flex h-8 items-center gap-2 text-sm text-white/75 hover:text-white transition">
                            <ArrowLeft size={16} />
                            {t("back")}
                        </Link>
                        <span className="inline-flex h-8 items-center bg-green-500 text-white text-xs font-semibold px-3 rounded">
                            {post.category}
                        </span>
                    </div>
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur">
                        {heroKeyword}
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 leading-tight max-w-4xl drop-shadow-[0_2px_14px_rgba(15,23,42,0.65)]">
                        {post.title}
                    </h1>
                    <p className="text-base text-white/95 mt-5 max-w-3xl leading-7 drop-shadow-[0_2px_12px_rgba(15,23,42,0.65)]">
                        {heroIntro}
                    </p>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-[minmax(0,1fr)_330px] gap-10 items-start">
                        <div className="bg-white rounded-lg shadow-[0_24px_70px_rgba(15,23,42,0.10)] border border-slate-100 p-6 md:p-9 lg:p-10 -mt-12 relative z-10">
                            <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-6 mb-8">
                                {metaItems.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <span
                                            key={item.label}
                                            className="inline-flex items-center gap-2 rounded-md bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-gray-600"
                                        >
                                            <Icon size={15} className="text-green-500" />
                                            {item.label}
                                        </span>
                                    )
                                })}
                            </div>

                            <div className="max-w-[720px]">
                                <p className="mb-8 text-base leading-7 text-gray-600">
                                    {post.excerpt}
                                </p>

                                {(primaryTour || relatedPosts[0]) && (
                                    <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] leading-7 text-gray-700">
                                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-green-600">
                                            {t("continueExploring")}
                                        </span>
                                        <p className="mt-2">
                                            {primaryTour && (
                                                <>
                                                    {t("primaryTourLead")} {" "}
                                                    <Link href={{ pathname: "/promociones/[slug]", params: { slug: primaryTour.slug } }} className="font-semibold text-green-600 transition hover:text-green-700">
                                                        tour {primaryTour.title.toLowerCase()}
                                                    </Link>
                                                    {" "}{t("primaryTourEnd")}
                                                </>
                                            )}
                                            {primaryTour && relatedPosts[0] ? " " : ""}
                                            {relatedPosts[0] && (
                                                <>
                                                    {t("relatedPostLead")} {" "}
                                                    <Link href={{ pathname: "/blog/[slug]", params: { slug: relatedPosts[0].slug } }} className="font-semibold text-green-600 transition hover:text-green-700">
                                                        {relatedPosts[0].title}
                                                    </Link>
                                                    {" "}{t("relatedPostEnd")}
                                                </>
                                            )}
                                        </p>
                                    </div>
                                )}

                                {post.body.map(renderContentBlock)}

                                <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm hidden lg:block">
                                    <div className="flex items-center gap-2 text-green-600">
                                        <ShipWheel size={18} />
                                        <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                                            {t("continuePlanning")}
                                        </span>
                                    </div>
                                    <h2 className="mt-3 text-2xl font-semibold text-gray-900">
                                        {t("nextStepTitle")}
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {t("nextStepDescription")}
                                    </p>

                                    {relatedTours.length > 0 && (
                                        <div className="mt-6 hidden lg:grid lg:grid-cols-2 lg:gap-4">
                                            {relatedTours.map((tour) => {
                                                const pricing = getTourPricing(tour)
                                                const priceLabel = `${pricing.isGroupPricing ? `${t("from")} ` : ""}${formatPrice(pricing.startingPrice)}`

                                                return (
                                                    <TourShowcaseCard
                                                        key={tour.slug}
                                                        slug={tour.slug}
                                                        title={tour.title}
                                                        image={tour.image}
                                                duration={tour.duration}
                                                priceLabel={`${priceLabel} ${t("perPerson")}`}
                                                viewTourLabel={t("tour")}
                                                    />
                                                )
                                            })}
                                        </div>
                                    )}

                                    <div className="mt-6 rounded-lg bg-green-50 p-5">
                                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-green-600">
                                            {t("solveTrip")}
                                        </span>
                                        <p className="mt-2 text-sm leading-6 text-gray-700">
                                            {t("solveTripDescription")}
                                        </p>
                                        <WhatsAppLink
                                            number={companyProfile.whatsapp}
                                            message={whatsappMessage}
                                            className="mt-4 inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                                        >
                                            <MessageCircle size={18} aria-hidden="true" />
                                            {t("askWhatsApp")}
                                        </WhatsAppLink>
                                    </div>
                                </section>

                                <section className="mt-10 rounded-xl border border-green-100 bg-green-50 p-5 shadow-sm lg:hidden">
                                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-green-600">
                                        {t("directContact")}
                                    </span>
                                    <h2 className="mt-2 text-xl font-semibold text-gray-900">
                                        {t("mobileContactTitle")}
                                    </h2>
                                    <p className="mt-2 text-sm leading-6 text-gray-700">
                                        {t("mobileContactDescription")}
                                    </p>
                                    <WhatsAppLink
                                        number={companyProfile.whatsapp}
                                        message={whatsappMessage}
                                        className="mt-4 inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                                    >
                                        <MessageCircle size={18} aria-hidden="true" />
                                        {t("talkWhatsApp")}
                                    </WhatsAppLink>
                                </section>
                            </div>
                        </div>

                        <aside className="space-y-6 lg:sticky lg:top-24">
                            {primaryTour && (
                                <div className="hidden rounded-lg border border-slate-200 bg-white p-6 lg:block">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {t("recommendedTour")}
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {t("recommendedTourDescription")}
                                    </p>
                                    <div className="mt-4">
                                        <TourShowcaseCard
                                            slug={primaryTour.slug}
                                            title={primaryTour.title}
                                            image={primaryTour.image}
                                            duration={primaryTour.duration}
                                            priceLabel={`${getTourPricing(primaryTour).isGroupPricing ? `${t("from")} ` : ""}${formatPrice(getTourPricing(primaryTour).startingPrice)} ${t("perPerson")}`}
                                            viewTourLabel={t("tour")}
                                            compact
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {t("highlights")}
                                </h2>
                                <div className="mt-5 space-y-4">
                                    {post.highlights.map((highlight) => (
                                        <div key={highlight} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-green-500 shrink-0" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-white p-6">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {t("related")}
                                </h2>
                                <div className="mt-5 space-y-5">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={{ pathname: "/blog/[slug]", params: { slug: relatedPost.slug } }}
                                            className="group grid grid-cols-[82px_1fr] gap-4"
                                        >
                                            <span className="relative h-20 overflow-hidden rounded-lg">
                                                <Image
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    fill
                                                    sizes="82px"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </span>
                                            <span>
                                                <span className="text-xs text-green-500 font-semibold">
                                                    {relatedPost.category}
                                                </span>
                                                <span className="block text-sm font-semibold text-gray-800 leading-snug mt-1 group-hover:text-green-500 transition">
                                                    {relatedPost.title}
                                                </span>
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </article>
    )
}
