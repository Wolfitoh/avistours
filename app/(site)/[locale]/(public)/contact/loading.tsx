import SkeletonBox from "@/components/loading/SkeletonBox"

export default function ContactLoading() {
    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />

                <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 md:pb-20 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
                    <div>
                        <SkeletonBox className="h-7 w-40 bg-white/10" />
                        <SkeletonBox className="mt-5 h-12 max-w-3xl bg-white/10 md:h-16" />
                        <SkeletonBox className="mt-5 h-12 max-w-2xl bg-white/10" />
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/10 p-5">
                        <SkeletonBox className="h-5 w-24 bg-white/10" />
                        <SkeletonBox className="mt-3 h-8 w-3/4 bg-white/10" />
                        <div className="mt-4 space-y-3">
                            <SkeletonBox className="h-5 w-full bg-white/10" />
                            <SkeletonBox className="h-5 w-5/6 bg-white/10" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
                        <div>
                            <SkeletonBox className="h-5 w-40" />
                            <SkeletonBox className="mt-3 h-10 w-80" />
                            <SkeletonBox className="mt-4 h-16 max-w-2xl" />
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                                        <SkeletonBox className="h-11 w-11" />
                                        <SkeletonBox className="mt-4 h-4 w-28" />
                                        <SkeletonBox className="mt-3 h-12 w-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                            <SkeletonBox className="h-8 w-48" />
                            <div className="mt-6 space-y-4">
                                <SkeletonBox className="h-12 w-full" />
                                <SkeletonBox className="h-12 w-full" />
                                <SkeletonBox className="h-12 w-full" />
                                <SkeletonBox className="h-32 w-full" />
                                <SkeletonBox className="h-12 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
