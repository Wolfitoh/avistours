"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const HeroDesktopCarousel = dynamic(() => import("./HeroDesktopCarousel"), { ssr: false })

export default function HeroDesktopBackground() {
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

    if (!isDesktop) {
        return null
    }

    return (
        <div className="absolute inset-0 hidden md:block">
            <HeroDesktopCarousel />
        </div>
    )
}
