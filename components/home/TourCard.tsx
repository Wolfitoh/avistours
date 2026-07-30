"use client"

import { MapPin, Heart, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { formatPrice, getTourDiscount, getTourPricing, type Tour } from "@/data/promotions"

export default function TourCard({ tour }: { tour: Tour }) {
    const roundedRating = Math.round(tour.rating)
    const formattedRating = Number.isInteger(tour.rating) ? tour.rating.toFixed(0) : tour.rating.toFixed(1)
    const pricing = getTourPricing(tour)
    const promotion = getTourDiscount(tour)

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-3 sm:p-4 flex flex-col sm:flex-row gap-4 sm:items-center">

            {/* IMAGE */}
            <div className="relative w-full sm:w-44 md:w-48 h-56 sm:h-60 shrink-0 overflow-hidden rounded-lg group">

                {/* IMAGE */}
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(min-width: 640px) 192px, 100vw"
                    quality={70}
                    className="object-cover scale-110 sm:scale-125 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

                {/* CENTER BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link href={`/promociones/${tour.slug}`} className="bg-white cursor-pointer text-gray-800 px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-green-500 hover:text-white transition">
                        Ver detalle
                    </Link>
                </div>

                {/* DISCOUNT */}
                {(promotion || tour.discount) && (
                    <span className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded z-10 shadow-sm ${promotion ? "bg-red-500" : "bg-green-500"}`}>
                        {promotion?.label ?? tour.discount}
                    </span>
                )}

                {/* FAVORITE */}
                <div className="absolute cursor-pointer top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow z-10 hover:scale-110 transition">
                    <Heart size={14} className="text-gray-500 hover:text-green-500" />
                </div>

            </div>

            {/* CONTENT */}
            <div className="flex-1 w-full min-w-0">

                {/* LOCATION */}
                <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin size={14} className="text-green-500" />
                    {tour.location}
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-base md:text-lg text-gray-800 mt-1 leading-snug">
                    <Link href={`/promociones/${tour.slug}`} className="hover:text-green-500 transition">
                        {tour.title}
                    </Link>
                </h3>

                <p className="text-sm text-gray-500 leading-6 mt-2">
                    {tour.description}
                </p>

                {/* RATING */}
                <div className="flex flex-wrap items-center gap-1 mt-2 text-sm text-gray-500">
                    <span>Rating:</span>

                    <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => (
                            <Star
                                key={i}
                                size={14}
                                fill={i <= roundedRating ? "currentColor" : "none"}
                                className={i <= roundedRating ? "text-yellow-400" : "text-slate-300"}
                            />
                        ))}
                    </div>

                    <span className="text-gray-700 font-medium ml-1">
                        {formattedRating} ({tour.reviews})
                    </span>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-slate-200 my-3"></div>

                <div className="flex flex-wrap gap-2 mb-3">
                    <span className="rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                        {tour.duration}
                    </span>
                    {tour.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="rounded bg-slate-50 px-2 py-1 text-xs text-gray-500">
                            {feature}
                        </span>
                    ))}
                </div>

                {/* FOOTER */}
                <div className="flex flex-wrap gap-3 justify-between items-center">

                    <div className="hidden">
                        S/. {tour.price}{" "}
                        <span className="text-gray-500 font-normal">/ Día</span>
                    </div>

                    <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            {pricing.hasDiscount && (
                                <span className="text-sm font-medium text-gray-400 line-through">
                                    {formatPrice(pricing.originalStartingPrice)}
                                </span>
                            )}
                            <div className="text-green-500 font-semibold">
                                {pricing.isGroupPricing ? "Desde " : ""}
                                {formatPrice(pricing.startingPrice)}{" "}
                                <span className="text-gray-500 font-normal">/ persona</span>
                            </div>
                        </div>
                        {pricing.isGroupPricing && (
                            <p className="mt-1 flex flex-wrap gap-x-1 text-xs text-gray-500">
                                <span>Tarifa base del grupo:</span>
                                {pricing.hasDiscount && (
                                    <span className="text-gray-400 line-through">
                                        {formatPrice(pricing.originalTotalPrice)}
                                    </span>
                                )}
                                <span className={pricing.hasDiscount ? "font-semibold text-red-500" : undefined}>
                                    {formatPrice(pricing.totalPrice)}
                                </span>
                                <span>hasta {pricing.maxPeople} personas</span>
                            </p>
                        )}
                    </div>

                    <Link href={`/promociones/${tour.slug}`} className="text-gray-500 text-sm hover:text-green-500 transition flex items-center gap-1">
                        <span>Consultar</span>
                        <span className="hidden" aria-hidden="true">
                            Ver más
                        </span>
                        <ArrowRight size={16} />
                    </Link>

                </div>
            </div>
        </div>
    )
}
