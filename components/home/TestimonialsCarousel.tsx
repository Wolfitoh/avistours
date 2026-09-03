"use client"

import { useEffect, useRef, useState, type ComponentType } from "react"
import { useTranslations } from "next-intl"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import type { PublicTestimonial } from "@/data/testimonials"

type TestimonialsCarouselProps = {
    testimonials: PublicTestimonial[]
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
    const t = useTranslations("Testimonials")
    const containerRef = useRef<HTMLDivElement>(null)
    const [shouldLoadCarousel, setShouldLoadCarousel] = useState(false)
    const [SwiperCarousel, setSwiperCarousel] = useState<ComponentType<TestimonialsCarouselProps> | null>(null)

    useEffect(() => {
        const container = containerRef.current

        if (!container || shouldLoadCarousel) {
            return
        }

        if (!("IntersectionObserver" in window)) {
            setShouldLoadCarousel(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadCarousel(true)
                    observer.disconnect()
                }
            },
            { rootMargin: "700px 0px" },
        )

        observer.observe(container)

        return () => observer.disconnect()
    }, [shouldLoadCarousel])

    useEffect(() => {
        if (!shouldLoadCarousel || SwiperCarousel) {
            return
        }

        let cancelled = false

        void import("./TestimonialsSwiperCarousel").then((module) => {
            if (!cancelled) {
                setSwiperCarousel(() => module.default)
            }
        })

        return () => {
            cancelled = true
        }
    }, [shouldLoadCarousel, SwiperCarousel])

    return (
        <div ref={containerRef}>
            {SwiperCarousel ? (
                <SwiperCarousel testimonials={testimonials} />
            ) : (
                <TestimonialsStaticPreview testimonials={testimonials} emptyMessage={t("empty")} />
            )}
        </div>
    )
}

function TestimonialsStaticPreview({
    testimonials,
    emptyMessage,
}: TestimonialsCarouselProps & { emptyMessage: string }) {
    return (
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
                <article key={testimonial.id} className="flex h-full flex-col items-center">
                    <div className="relative flex h-full flex-col rounded-lg bg-white p-8 text-center shadow-sm">
                        <div className="mb-4 flex justify-center text-green-500">
                            <Quote size={28} />
                        </div>

                        <p className="flex-1 text-sm leading-relaxed text-gray-500">
                            {testimonial.text}
                        </p>

                        <div className="mt-4 flex justify-center gap-1 text-yellow-400">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <Star
                                    key={item}
                                    size={14}
                                    fill={item <= testimonial.rating ? "currentColor" : "none"}
                                    className={item <= testimonial.rating ? "text-yellow-400" : "text-slate-300"}
                                />
                            ))}
                        </div>

                        {testimonial.tourTitle && (
                            <span className="mt-4 inline-flex self-center rounded bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                                {testimonial.tourTitle}
                            </span>
                        )}

                        <div className="absolute left-1/2 -bottom-3 h-4 w-4 -translate-x-1/2 rotate-45 bg-white shadow-sm" />
                    </div>

                    <div className="mt-6 flex flex-col items-center">
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="h-14 w-14 rounded-full object-cover shadow"
                        />

                        <h4 className="mt-3 text-sm font-semibold text-gray-800">
                            {testimonial.name}
                        </h4>

                        <span className="text-xs text-gray-500">
                            {testimonial.role}
                        </span>
                    </div>
                </article>
            ))}

            {testimonials.length === 0 && (
                <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-sm text-gray-500 md:col-span-2 lg:col-span-3">
                    {emptyMessage}
                </div>
            )}
        </div>
    )
}
