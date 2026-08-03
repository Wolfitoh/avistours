"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { CheckCircle2, Loader2, Star } from "lucide-react"
import { tours } from "@/data/promotions"

type SubmitState = "idle" | "submitting" | "success" | "error"

export default function TestimonialFeedbackForm() {
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

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message ?? "No pudimos guardar tu comentario.")
            }

            setStatus("success")
            setMessage(data.message)
            form.reset()
            setRating(5)
        } catch (error) {
            setStatus("error")
            setMessage(error instanceof Error ? error.message : "No pudimos guardar tu comentario.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="">
            <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                    Tu experiencia
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                    Califica el paseo que realizaste
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                    Tu comentario ayuda a otros viajeros y se publicara en la web luego de revisarlo.
                </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                    Nombre
                    <input
                        name="clientName"
                        required
                        maxLength={70}
                        placeholder="Tu nombre"
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    />
                </label>

                <label className="text-sm font-medium text-slate-700">
                    Ciudad o referencia
                    <input
                        name="clientOrigin"
                        required
                        maxLength={80}
                        placeholder="Ej. Visitante de Lima"
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    />
                </label>

                <label className="text-sm font-medium text-slate-700">
                    Tour realizado
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
                    Fecha del paseo
                    <input
                        name="visitDate"
                        type="date"
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    />
                </label>
            </div>

            <div className="mt-5">
                <span className="text-sm font-medium text-slate-700">
                    Calificacion
                </span>
                <div className="mt-2 flex gap-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => setRating(item)}
                            className="rounded-md p-1 text-yellow-400 transition hover:bg-yellow-50"
                            aria-label={`Calificar con ${item} estrellas`}
                        >
                            <Star size={28} fill={item <= rating ? "currentColor" : "none"} />
                        </button>
                    ))}
                </div>
            </div>

            <label className="mt-5 block text-sm font-medium text-slate-700">
                Comentario
                <textarea
                    name="comment"
                    required
                    maxLength={700}
                    rows={5}
                    placeholder="Cuéntanos qué te gustó del recorrido, la atención o las paradas del tour."
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
                Enviar comentario
            </button>
        </form>
    )
}
