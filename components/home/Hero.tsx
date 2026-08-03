"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

const HeroDesktopCarousel = dynamic(() => import("./HeroDesktopCarousel"), { ssr: false })

function HeroStaticContent() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-20 text-center text-white md:pt-12">
            <Image
                className="mx-auto h-auto w-32 sm:w-40"
                alt=""
                src="/images-optimized/hero/line_cocodrile1.webp"
                width={320}
                height={120}
                sizes="(max-width: 640px) 128px, 160px"
                quality={58}
            />

            <h1 className="mt-5 mb-4 max-w-4xl text-3xl leading-tight font-semibold text-white sm:text-4xl">
                Tours en Puerto Pizarro y manglares de Tumbes
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base">
                Vive paseos en bote por manglares, islas, cocodrilos y la Isla de los Pájaros con guía local, coordinación por marea y reserva directa por WhatsApp.
            </p>

            <Link href="/packages" className="btn mt-6 mb-10 border-green-500 bg-green-500 text-white">
                Ver tours
            </Link>
        </div>
    )
}

export default function Hero() {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)")
        const updateViewport = () => setIsDesktop(mediaQuery.matches)

        updateViewport()
        mediaQuery.addEventListener("change", updateViewport)

        return () => {
            mediaQuery.removeEventListener("change", updateViewport)
        }
    }, [])

    return (
        <section className="h-[100svh] min-h-[560px] md:h-[calc(100vh-43px)] w-full">
            {isDesktop ? (
                <HeroDesktopCarousel />
            ) : (
                <div className="relative h-full w-full bg-slate-950">
                    <Image
                        src="/images-optimized/hero/bg_inicio.webp"
                        alt="Paseo en bote por los manglares de Puerto Pizarro en Tumbes"
                        fill
                        sizes="100vw"
                        quality={60}
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/70" />
                    <HeroStaticContent />
                </div>
            )}
        </section>
    )
}
