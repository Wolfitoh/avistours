"use client"

import { useMemo, useState } from "react"
import type { FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, BookOpen, MapPin, Search, ShipWheel } from "lucide-react"
import { blogPosts } from "@/data/blogs"
import { tours } from "@/data/promotions"
import { getBlogSearchTerms, getTourSearchTerms } from "@/data/seo"

type SiteSearchProps = {
    initialQuery?: string
    className?: string
    placeholder?: string
    showSuggestions?: boolean
}

type SearchResult = {
    title: string
    description: string
    href: string
    image: string
    type: "Tour" | "Blog"
    keywords: string
}

const results: SearchResult[] = [
    ...tours.map((tour) => ({
        title: tour.title,
        description: tour.description,
        href: `/promociones/${tour.slug}`,
        image: tour.image,
        type: "Tour" as const,
        keywords: getTourSearchTerms(tour).join(" "),
    })),
    ...blogPosts.map((post) => ({
        title: post.title,
        description: post.excerpt,
        href: `/blog/${post.slug}`,
        image: post.image,
        type: "Blog" as const,
        keywords: getBlogSearchTerms(post).join(" "),
    })),
]

function normalize(value: string) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
}

export default function SiteSearch({
    initialQuery = "",
    className = "",
    placeholder = "Busca paquetes, mareas, islas o blogs",
    showSuggestions = true,
}: SiteSearchProps) {
    const router = useRouter()
    const [query, setQuery] = useState(initialQuery)
    const cleanQuery = query.trim()

    const suggestions = useMemo(() => {
        if (!cleanQuery) {
            return results.slice(0, 4)
        }

        const term = normalize(cleanQuery)

        return results
            .filter((item) => normalize(item.keywords).includes(term))
            .slice(0, 5)
    }, [cleanQuery])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!cleanQuery) {
            router.push("/packages")
            return
        }

        router.push(`/packages?q=${encodeURIComponent(cleanQuery)}`)
    }

    return (
        <div className={className}>
            <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
            >
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <label className="relative flex-1">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500"
                        />
                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={placeholder}
                            className="h-12 w-full rounded-md border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-green-400 focus:bg-white"
                        />
                    </label>

                    <button
                        type="submit"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-green-500 px-5 text-sm font-semibold text-white transition hover:bg-green-600"
                    >
                        Buscar
                        <ArrowRight size={16} />
                    </button>
                </div>
            </form>

            {showSuggestions && (
                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between gap-4 px-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                            {cleanQuery ? "Resultados sugeridos" : "Busquedas populares"}
                        </span>
                        {cleanQuery && (
                            <span className="text-xs text-slate-400">
                                {suggestions.length} encontrados
                            </span>
                        )}
                    </div>

                    <div className="mt-3 grid gap-2 md:grid-cols-2">
                        {suggestions.length > 0 ? (
                            suggestions.map((item) => {
                                const Icon = item.type === "Tour" ? ShipWheel : BookOpen

                                return (
                                    <Link
                                        key={`${item.type}-${item.href}`}
                                        href={item.href}
                                        className="group flex gap-3 rounded-md p-2 transition hover:bg-slate-50"
                                    >
                                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="80px"
                                                quality={60}
                                                className="object-cover transition duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600">
                                                <Icon size={13} />
                                                {item.type}
                                            </span>
                                            <h3 className="truncate text-sm font-semibold text-slate-900 transition group-hover:text-green-600">
                                                {item.title}
                                            </h3>
                                            <p className="line-clamp-2 text-xs leading-5 text-slate-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            })
                        ) : (
                            <div className="md:col-span-2 flex items-start gap-3 rounded-md bg-slate-50 p-4 text-sm text-slate-500">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-green-500" />
                                No encontramos resultados. Prueba con: manglares, cocodrilos, marea o isla.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
