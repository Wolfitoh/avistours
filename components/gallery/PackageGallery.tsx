"use client"

import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react"
import { useTranslations } from "next-intl"

type PackageGalleryProps = {
    images: string[]
    title: string
}

export default function PackageGallery({ images, title }: PackageGalleryProps) {
    const t = useTranslations("Gallery")
    const uniqueImages = useMemo(() => Array.from(new Set(images)), [images])
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const hasExtraTile = uniqueImages.length > 4
    const visibleImages = hasExtraTile ? uniqueImages.slice(0, 5) : uniqueImages.slice(0, 4)
    const hiddenCount = Math.max(uniqueImages.length - 5, 0)
    const activeImage = uniqueImages[activeIndex] ?? uniqueImages[0]

    useEffect(() => {
        if (!open) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false)
            }

            if (event.key === "ArrowRight") {
                setActiveIndex((current) => (current + 1) % uniqueImages.length)
            }

            if (event.key === "ArrowLeft") {
                setActiveIndex((current) => (current - 1 + uniqueImages.length) % uniqueImages.length)
            }
        }

        document.body.style.overflow = "hidden"
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [open, uniqueImages.length])

    function openGallery(index: number) {
        setActiveIndex(index)
        setOpen(true)
    }

    function goNext() {
        setActiveIndex((current) => (current + 1) % uniqueImages.length)
    }

    function goPrevious() {
        setActiveIndex((current) => (current - 1 + uniqueImages.length) % uniqueImages.length)
    }

    if (uniqueImages.length === 0) {
        return null
    }

    return (
        <>
            <div className="mt-7 grid gap-3 md:grid-cols-4 md:grid-rows-2">
                {visibleImages.map((image, index) => {
                    const isMain = index === 0
                    const isExtraTile = hasExtraTile && index === 4

                    return (
                        <button
                            key={image}
                            type="button"
                            onClick={() => openGallery(index)}
                            className={`group relative overflow-hidden rounded-lg bg-slate-100 text-left outline-none ring-offset-2 transition focus-visible:ring-2 focus-visible:ring-green-500 ${isMain
                                ? "h-72 md:col-span-2 md:row-span-2 md:h-[430px]"
                                : "h-48 md:h-auto"
                                }`}
                        >
                            <Image
                                src={image}
                                alt={`${title} - ${t("image", { index: index + 1 })}`}
                                fill
                                sizes={isMain ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent opacity-80 transition group-hover:opacity-95" />

                            {isMain && (
                                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
                                    <Images size={14} />
                                    {t("route")}
                                </span>
                            )}

                            {isExtraTile && (
                                <span className="absolute cursor-pointer inset-0 flex flex-col items-center justify-center bg-slate-950/60 text-white backdrop-blur-[1px]">
                                    <span className="text-3xl font-semibold">
                                        {hiddenCount > 0 ? `+${hiddenCount}` : t("view")}
                                    </span>
                                    <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                                        {t("gallery")}
                                    </span>
                                </span>
                            )}
                        </button>
                    )
                })}
            </div>

            {open && typeof document !== "undefined" && createPortal((
                <div
                    className="fixed inset-0 z-[2147483647] overflow-hidden bg-slate-950 px-4 py-4 text-white md:px-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t("galleryOf", { title })}
                >
                    <Image
                        src={activeImage}
                        alt=""
                        fill
                        sizes="100vw"
                        className="scale-110 object-cover opacity-45 blur-2xl"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-slate-950/55" />

                    <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col">
                        <div className="flex items-center justify-between gap-4 py-2">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
                                    {t("route")}
                                </p>
                                <h2 className="mt-1 text-base font-semibold md:text-xl">
                                    {title}
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="fixed right-4 top-4 z-[2147483647] inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-slate-950/70 text-white shadow-lg backdrop-blur transition hover:bg-white/20 md:right-8"
                                aria-label={t("close")}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="relative mt-4 min-h-0 flex-1 overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                            <Image
                                src={activeImage}
                                alt=""
                                fill
                                sizes="100vw"
                                className="scale-110 object-cover opacity-55 blur-xl"
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-slate-950/35" />
                            <Image
                                src={activeImage}
                                alt={`${title} - ${t("largeImage", { index: activeIndex + 1 })}`}
                                fill
                                sizes="100vw"
                                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                                loading="eager"
                            />

                            {uniqueImages.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={goPrevious}
                                        className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:left-5 md:h-12 md:w-12"
                                        aria-label={t("previous")}
                                    >
                                        <ChevronLeft size={24} />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={goNext}
                                        className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:right-5 md:h-12 md:w-12"
                                        aria-label={t("next")}
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            <span className="absolute bottom-4 right-4 rounded bg-black/60 px-3 py-1 text-xs font-semibold text-white/90">
                                {activeIndex + 1} / {uniqueImages.length}
                            </span>
                        </div>

                        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                            {uniqueImages.map((image, index) => (
                                <button
                                    key={image}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-md border transition md:h-24 md:w-36 ${activeIndex === index
                                        ? "border-green-400 opacity-100"
                                        : "border-white/15 opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${title} - ${t("thumbnail", { index: index + 1 })}`}
                                        fill
                                        sizes="144px"
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ), document.body)}
        </>
    )
}
