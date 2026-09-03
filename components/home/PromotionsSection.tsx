import TourCard from "./TourCard";
import { getLocalizedTours } from "@/data/promotions";
import { resolveLocale } from "@/i18n/locales";
import { applyTourRating, getTourRatingSummaries } from "@/services/testimonials";
import { getTranslations } from "next-intl/server";

export default async function ToursSection({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "HomeTours" })
    const tours = getLocalizedTours(resolveLocale(locale))
    const ratingSummaries = await getTourRatingSummaries()
    const toursWithRatings = tours.map((tour) => applyTourRating(tour, ratingSummaries))

    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                {/* TITLE */}
                <div className="text-center mb-8 md:mb-10">
                    <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                        {t("eyebrow")}
                    </span>
                    <h2 className="hidden">
                        Paquetes en promoción
                    </h2>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
                        {t("title")}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3 max-w-xl mx-auto leading-7">
                        {t("description")}
                    </p>
                </div>

                {/* GRID */}
                <div className="grid lg:grid-cols-2 gap-5 md:gap-6">
                    {toursWithRatings.map(tour => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>

            </div>
        </section>
    )
}
