import SiteSearch from "@/components/search/SiteSearch"

export default function SearchSection() {
    return (
        <section className="bg-slate-50 py-10 md:py-14">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                        Encuentra tu ruta
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                        Busca paquetes y guías de Puerto Pizarro
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
                        Escribe lo que quieres vivir: manglares, mareas, cocodrilos, Isla de los Pájaros o boca del mar.
                    </p>
                </div>

                <SiteSearch className="mx-auto mt-7 max-w-4xl" />
            </div>
        </section>
    )
}
