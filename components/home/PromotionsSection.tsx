import TourCard from "./TourCard";
import { tours } from "@/data/promotions";
import { applyTourRating, getTourRatingSummaries } from "@/services/testimonials";

export default async function ToursSection() {
    const ratingSummaries = await getTourRatingSummaries()
    const toursWithRatings = tours.map((tour) => applyTourRating(tour, ratingSummaries))

    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                {/* TITLE */}
                <div className="text-center mb-8 md:mb-10">
                    <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                        Tours en Puerto Pizarro
                    </span>
                    <h2 className="hidden">
                        Paquetes en promoción
                    </h2>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
                        Tours por islas, manglares y cocodrilos
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mt-3 max-w-xl mx-auto leading-7">
                        Elige un tour en Puerto Pizarro según tu tiempo y presupuesto: islas, aves, manglares, cocodrilos y la boca del mar con reserva directa.
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
