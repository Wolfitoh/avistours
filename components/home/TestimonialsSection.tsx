import TestimonialsCarousel from "@/components/home/TestimonialsCarousel"
import { getTranslations } from "next-intl/server"
import { getApprovedTestimonials } from "@/services/testimonials"

export default async function TestimonialsSection({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "Testimonials" })
    const testimonials = await getApprovedTestimonials()

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                    {t("eyebrow")}
                </span>

                {/* TITLE */}
                <h2 className="text-3xl font-semibold text-gray-800">
                    {t("title")}
                </h2>

                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    {t("description")}
                </p>

                <TestimonialsCarousel testimonials={testimonials} />

            </div>
        </section>
    )
}
