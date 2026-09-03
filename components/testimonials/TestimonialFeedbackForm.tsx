"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { CheckCircle2, Loader2, Star } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { getLocalizedTours } from "@/data/promotions"
import { resolveLocale } from "@/i18n/locales"

type SubmitState = "idle" | "submitting" | "success" | "error"

export default function TestimonialFeedbackForm() {
    const locale = resolveLocale(useLocale())
    const t = useTranslations("FeedbackForm")
    const tours = getLocalizedTours(locale)
    const [rating, setRating] = useState(5)
    const [status, setStatus] = useState<SubmitState>("idle")
    const [message, setMessage] = useState("")

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus("submitting")
        setMessage("")

        const form = event.currentTarget
        const formData = new FormData(form)

        const payload = {
            clientName: String(formData.get("clientName") ?? ""),
            clientOrigin: String(formData.get("clientOrigin") ?? ""),
            tourSlug: String(formData.get("tourSlug") ?? ""),
            visitDate: String(formData.get("visitDate") ?? ""),
            comment: String(formData.get("comment") ?? ""),
            rating,
        }

        try {
            const response = await fetch("/api/testimonials", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                throw new Error(t("genericError"))
            }

            setStatus("success")
            setMessage(t("success"))
            form.reset()
            setRating(5)
        } catch {
            setStatus("error")
            setMessage(t("genericError"))
        }
    }

    return (
        <form onSubmit={handleSubmit} className="">
            <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                    {t("eyebrow")}
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                    {t("title")}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                    {t("description")}
                </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                    {t("name")}
                    <input
                        name="clientName"
                        required
                        maxLength={70}
                        placeholder={t("namePlaceholder")}
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    />
                </label>

                <label className="text-sm font-medium text-slate-700">
                    {t("origin")}
                    <input
                        name="clientOrigin"
                        required
                        maxLength={80}
                        placeholder={t("originPlaceholder")}
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    />
                </label>

                <label className="text-sm font-medium text-slate-700">
                    {t("tour")}
                    <select
                        name="tourSlug"
                        required
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    >
                        {tours.map((tour) => (
                            <option key={tour.slug} value={tour.slug}>
                                {tour.title}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="text-sm font-medium text-slate-700">
                    {t("date")}
                    <input
                        name="visitDate"
                        type="date"
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    />
                </label>
            </div>

            <div className="mt-5">
                <span className="text-sm font-medium text-slate-700">
                    {t("rating")}
                </span>
                <div className="mt-2 flex gap-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => setRating(item)}
                            className="rounded-md p-1 text-yellow-400 transition hover:bg-yellow-50"
                            aria-label={t("ratingAria", { count: item })}
                        >
                            <Star size={28} fill={item <= rating ? "currentColor" : "none"} />
                        </button>
                    ))}
                </div>
            </div>

            <label className="mt-5 block text-sm font-medium text-slate-700">
                {t("comment")}
                <textarea
                    name="comment"
                    required
                    maxLength={700}
                    rows={5}
                    placeholder={t("commentPlaceholder")}
                    className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                />
            </label>

            {message && (
                <div className={`mt-5 flex gap-3 rounded-md p-4 text-sm leading-6 ${status === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    {message}
                </div>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
                {status === "submitting" ? t("submitting") : t("submit")}
            </button>
        </form>
    )
}
