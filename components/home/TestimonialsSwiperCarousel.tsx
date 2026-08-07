"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import type { PublicTestimonial } from "@/data/testimonials"

import "swiper/css"
import "swiper/css/pagination"

type TestimonialsSwiperCarouselProps = {
    testimonials: PublicTestimonial[]
}

export default function TestimonialsSwiperCarousel({ testimonials }: TestimonialsSwiperCarouselProps) {
    if (testimonials.length === 0) {
        return (
            <div className="mt-14 rounded-lg border border-slate-200 bg-white p-8 text-center text-sm text-gray-500">
                Pronto compartiremos nuevas experiencias de viajeros.
            </div>
        )
    }

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={testimonials.length > 3}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="mt-14 relative"
        >
            {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                    <div className="flex flex-col items-center">
                        <div className="relative rounded-lg bg-white p-8 text-center shadow-sm">
                            <div className="mb-4 flex justify-center text-green-500">
                                <Quote size={28} />
                            </div>

                            <p className="text-sm leading-relaxed text-gray-500">
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
                                <span className="mt-4 inline-flex rounded bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
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
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
