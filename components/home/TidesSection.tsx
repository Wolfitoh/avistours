import { AlertCircle, Compass, Waves } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { getTideSummary } from "@/services/tides"
import TideChart from "./TideChart"

export default async function TidesSection({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "Tides" })
    const tide = await getTideSummary()
    const tideNotes = [
        { title: t("highTitle"), text: t("highDescription"), icon: Waves },
        { title: t("lowTitle"), text: t("lowDescription"), icon: Compass },
    ]
    return (
        <section className="py-14 md:py-18 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div>
                        <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                            {t("eyebrow")}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-3 leading-tight">
                            {t("title")}
                        </h2>
                        <p className="text-gray-500 leading-7 mt-4">
                            {t("description")}
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
                        {tide.chart && (
                            <TideChart
                                data={tide.chart}
                                locale={locale}
                                labels={{
                                    title: t("chartTitle"),
                                    height: t("chartHeight"),
                                    now: t("now"),
                                    high: t("high"),
                                    low: t("low"),
                                }}
                            />
                        )}

                        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 flex gap-3">
                            <AlertCircle size={20} className="text-amber-600 mt-1 shrink-0" />
                            <p className="text-sm leading-6 text-amber-800">
                                {t("notice")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
