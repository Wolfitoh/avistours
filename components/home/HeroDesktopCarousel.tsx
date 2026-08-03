"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

import Image from "next/image"
import Link from "next/link"

const slides = [
    { id: 1, image: "/images-optimized/hero/bg_inicio.webp" },
    { id: 2, image: "/images-optimized/hero/bg_inicio2.webp" },
    { id: 3, image: "/images-optimized/hero/bg_inicio3.webp" },
    { id: 4, image: "/images-optimized/hero/bg_inicio4.webp" },
    { id: 5, image: "/images-optimized/hero/bg_inicio5.webp" },
]

function HeroContent() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-20 text-center text-white md:pt-12">
            <Image
                className="mx-auto h-auto w-40 sm:w-56 md:w-72"
                alt=""
                src="/images-optimized/hero/line_cocodrile1.webp"
                width={400}
                height={150}
                sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
                quality={60}
            />

            <h1 className="mt-5 mb-4 max-w-5xl text-3xl leading-tight font-semibold text-white sm:text-4xl md:mb-6 lg:text-6xl">
                Tours en Puerto Pizarro y manglares de Tumbes
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:mt-4">
                Recorre manglares, islas, aves y cocodrilos con atención local, horarios coordinados según marea y reserva directa con Avis Tours.
            </p>

            <Link href="/packages" className="btn mt-6 mb-10 border-green-500 bg-green-500 text-white md:mb-20">
                Ver tours
            </Link>
        </div>
    )
}

export default function HeroDesktopCarousel() {
    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={2000}
            loop
            className="h-full bg-slate-950"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={slide.id} className="!h-full">
                    <div className="relative h-full w-full">
                        <Image
                            src={slide.image}
                            alt="Paseo en bote por los manglares de Puerto Pizarro en Tumbes"
                            fill
                            sizes="100vw"
                            quality={62}
                            priority={index === 0}
                            loading={index === 0 ? undefined : "lazy"}
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-slate-900/70" />
                        <HeroContent />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
