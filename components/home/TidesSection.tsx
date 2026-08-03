import { AlertCircle, Compass, RefreshCw, Waves } from "lucide-react"
import { getTideSummary } from "@/services/tides"

const tideNotes = [
    {
        title: "Marea alta",
        text: "Mejor navegación por canales y manglares.",
        icon: Waves,
    },
    {
        title: "Marea baja",
        text: "Mejor vista de raíces, orillas y aves en su entorno natural.",
        icon: Compass,
    },
    // {
    //     title: "Horario de salida",
    //     text: "Los paseos se coordinan según clima, marea y disponibilidad de embarcaciones para cuidar la experiencia.",
    //     icon: Clock,
    // },
]

export default async function TidesSection() {
    const tide = await getTideSummary()

    return (
        <section className="py-14 md:py-18 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div>
                        <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                            Mareas en Tumbes
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-3 leading-tight">
                            La marea también decide el ritmo del paseo
                        </h2>
                        <p className="text-gray-500 leading-7 mt-4">
                            La marea define el mejor momento para vivir Puerto Pizarro. Coordinamos tu salida según el nivel del agua para que disfrutes mejor los manglares, las islas y el avistamiento de aves.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                            {tideNotes.map((note) => {
                                const Icon = note.icon

                                return (
                                    <div key={note.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                                        <div className="h-11 w-11 rounded-md bg-green-500 text-white flex items-center justify-center">
                                            <Icon size={22} />
                                        </div>
                                        <h3 className="font-semibold text-gray-800 mt-4">
                                            {note.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-6 mt-2">
                                            {note.text}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="mt-6 rounded-lg border border-green-100 bg-green-50 p-5">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-green-600">
                                        Marea actual estimada
                                    </span>
                                    <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                                        {tide.status}
                                    </h3>
                                </div>
                                <RefreshCw size={20} className="text-green-600 mt-1" />
                            </div>

                            <div className="grid sm:grid-cols-3 gap-3 mt-5 text-sm">
                                <div className="rounded-md bg-white/80 border border-green-100 p-3">
                                    <span className="block text-gray-500">Desde - Hasta</span>
                                    <strong className="text-gray-800">{tide.processPeriod ?? "Por confirmar"}</strong>
                                </div>
                                <div className="rounded-md bg-white/80 border border-green-100 p-3">
                                    <span className="block text-gray-500">Cambia aprox.</span>
                                    <strong className="text-gray-800">{tide.nextChangeTime ?? "Por confirmar"}</strong>
                                </div>
                                <div className="rounded-md bg-white/80 border border-green-100 p-3">
                                    <span className="block text-gray-500">Siguiente estado</span>
                                    <strong className="text-gray-800">{tide.nextStatus ?? "Por confirmar"}</strong>
                                </div>
                            </div>

                            {tide.updatedAt && (
                                <p className="text-xs text-gray-500 mt-3">
                                    Lectura cercana a las {tide.updatedAt} h para Avis Tours.
                                </p>
                            )}
                        </div>

                        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 flex gap-3">
                            <AlertCircle size={20} className="text-amber-600 mt-1 shrink-0" />
                            <p className="text-sm leading-6 text-amber-800">
                                Esta sección es una guía informativa. Los horarios exactos de marea cambian cada día y se validan al reservar el tour.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
