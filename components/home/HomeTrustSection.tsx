import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"

export default async function HomeTrustSection({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "HomeTrust" })
    const homeTrustPillars = [
        { title: t("localTitle"), description: t("localDescription") },
        { title: t("tideTitle"), description: t("tideDescription") },
        { title: t("bookingTitle"), description: t("bookingDescription") },
    ]

    return (
        <section className="relative isolate overflow-hidden bg-slate-950 py-14 text-white md:py-20">
            <Image
                src="/images-optimized/hero/bg_inicio5.webp"
                alt=""
                fill
                sizes="100vw"
                quality={70}
                className="absolute inset-0 -z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-slates-100/50" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/70" />

            <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
                        {t("eyebrow")}
                    </span>
                    <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                        {t("title")}
                    </h2>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-100 md:text-base">
                        {t("descriptionOne")}
                    </p>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100 md:text-base">
                        {t("descriptionTwo")}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                        <Link href="/packages" className="rounded-md bg-green-500 px-5 py-3 text-white transition hover:bg-green-600">
                            {t("viewTours")}
                        </Link>
                        <Link href="/contact" className="rounded-md border border-white/35 px-5 py-3 text-white transition hover:border-green-300 hover:text-green-200">
                            {t("meetOperator")}
                        </Link>
                        <Link href="/blog" className="rounded-md border border-white/35 px-5 py-3 text-white transition hover:border-green-300 hover:text-green-200">
                            {t("readGuide")}
                        </Link>
                    </div>
                </div>

                <div className="grid gap-4">
                    {homeTrustPillars.map((pillar) => (
                        <article key={pillar.title} className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur">
                            <h3 className="text-lg font-semibold text-white">
                                {pillar.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-100">
                                {pillar.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
