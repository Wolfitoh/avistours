"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { MessageCircle, Send } from "lucide-react"
import { companyProfile } from "@/data/company"
import { openWhatsApp } from "@/utils/whatsapp"

export default function ContactWhatsAppForm() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [people, setPeople] = useState("2 personas")
    const [tour, setTour] = useState("Puerto Pizarro completo")
    const [message, setMessage] = useState("")

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const text = [
            "Hola Avis Tours, quiero información para reservar.",
            `Nombre: ${name || "Por completar"}`,
            `Teléfono: ${phone || "Por completar"}`,
            `Personas: ${people}`,
            `Interes: ${tour}`,
            message ? `Mensaje: ${message}` : "",
        ]
            .filter(Boolean)
            .join("\n")

        openWhatsApp(companyProfile.whatsapp, text)
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-7">
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-green-50 text-green-600">
                    <MessageCircle size={22} />
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-slate-900">
                        Solicita información
                    </h2>
                    <p className="text-sm text-slate-500">
                        Te responderemos por WhatsApp.
                    </p>
                </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                    Nombre
                    <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        placeholder="Tu nombre"
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    />
                </label>

                <label className="text-sm font-medium text-slate-700">
                    Teléfono
                    <input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                        placeholder="Ej. 999 000 000"
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    />
                </label>

                <label className="text-sm font-medium text-slate-700">
                    Personas
                    <select
                        value={people}
                        onChange={(event) => setPeople(event.target.value)}
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    >
                        <option>1 persona</option>
                        <option>2 personas</option>
                        <option>3 a 5 personas</option>
                        <option>6 a más personas</option>
                    </select>
                </label>

                <label className="text-sm font-medium text-slate-700">
                    Interés
                    <select
                        value={tour}
                        onChange={(event) => setTour(event.target.value)}
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                    >
                        <option>Puerto Pizarro completo</option>
                        <option>Solo ida a la isla</option>
                        <option>Isla, pájaros y manglares</option>
                        <option>Islas, manglares y cocodrilos</option>
                        <option>Consulta general</option>
                    </select>
                </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-slate-700">
                Mensaje
                <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={4}
                    placeholder="Fecha tentativa, horario o consulta especial"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-green-400 focus:bg-white"
                />
            </label>

            <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
                Enviar por WhatsApp
                <Send size={16} />
            </button>
        </form>
    )
}
