export default function PackagesLoading() {
    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />

                <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-20">
                    <div className="h-7 w-36 animate-pulse rounded-md bg-white/10" />
                    <div className="mt-5 h-12 max-w-3xl animate-pulse rounded-md bg-white/10" />
                    <div className="mt-5 h-6 max-w-2xl animate-pulse rounded-md bg-white/10" />
                    <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-2">
                        <div className="h-12 animate-pulse rounded-md bg-white/10" />
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-5 lg:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <div className="h-56 w-full animate-pulse rounded-lg bg-slate-100 sm:h-60 sm:w-44 md:w-48" />
                                    <div className="flex-1 space-y-3">
                                        <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />
                                        <div className="h-7 w-3/4 animate-pulse rounded bg-slate-100" />
                                        <div className="h-20 w-full animate-pulse rounded bg-slate-100" />
                                        <div className="h-px w-full bg-slate-100" />
                                        <div className="flex gap-2">
                                            <div className="h-7 w-24 animate-pulse rounded bg-slate-100" />
                                            <div className="h-7 w-20 animate-pulse rounded bg-slate-100" />
                                        </div>
                                        <div className="h-6 w-40 animate-pulse rounded bg-slate-100" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
