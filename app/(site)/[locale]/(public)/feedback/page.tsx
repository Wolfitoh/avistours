import Image from "next/image"
import type { Metadata } from "next"
import { MessageSquareText, ShieldCheck, Star } from "lucide-react"
import { getTranslations } from "next-intl/server"
import TestimonialFeedbackForm from "@/components/testimonials/TestimonialFeedbackForm"

export const metadata: Metadata = {
    title: "Califica tu tour",
    description: "Formulario privado para clientes que realizaron un tour con Avis Tours.",
    robots: {
        index: false,
        follow: false,
    },
}

export default async function FeedbackPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "FeedbackPage" })

    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <Image
                    src="/images-optimized/promotions/pajaros.webp"
                    alt={t("title")}
                    fill
                    preload
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />

                <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-20">
                    <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300 backdrop-blur">
                        <MessageSquareText size={14} />
                        {t("eyebrow")}
                    </span>
                    <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                        {t("title")}
                    </h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                        {t("description")}
                    </p>

                    <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
                        <div className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur">
                            <Star size={20} className="text-green-300" />
                            <p className="mt-3 text-sm leading-6 text-white/75">
                                {t("improve")}
                            </p>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur">
                            <ShieldCheck size={20} className="text-green-300" />
                            <p className="mt-3 text-sm leading-6 text-white/75">
                                {t("review")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
                    <div className="rounded-lg border border-green-100 bg-green-50 p-6">
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">
                            {t("thanks")}
                        </span>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                            {t("sidebarTitle")}
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            {t("sidebarDescription")}
                        </p>
                    </div>

                    <TestimonialFeedbackForm />
                </div>
            </section>
        </div>
    )
}
