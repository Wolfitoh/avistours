"use client"

import Image from "next/image"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"

const slides = [
    { id: 1, image: "/images-optimized/hero/bg_inicio.webp" },
    { id: 2, image: "/images-optimized/hero/bg_inicio2.webp" },
    { id: 3, image: "/images-optimized/hero/bg_inicio3.webp" },
    { id: 4, image: "/images-optimized/hero/bg_inicio4.webp" },
    { id: 5, image: "/images-optimized/hero/bg_inicio5.webp" },
]

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
                            loading={index === 0 ? "eager" : "lazy"}
                            className="object-cover"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
