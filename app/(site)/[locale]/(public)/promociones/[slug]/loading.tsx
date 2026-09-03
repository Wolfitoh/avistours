import SkeletonBox from "@/components/loading/SkeletonBox"

export default function PromotionDetailLoading() {
    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />

                <div className="relative mx-auto max-w-6xl px-4 pb-20">
                    <div className="mb-6 flex gap-2">
                        <SkeletonBox className="h-8 w-32 bg-white/10" />
                        <SkeletonBox className="h-8 w-24 bg-white/10" />
                    </div>
                    <SkeletonBox className="h-14 max-w-4xl bg-white/10 md:h-16" />
                    <SkeletonBox className="mt-5 h-12 max-w-3xl bg-white/10" />
                </div>
            </section>

            <section className="pb-24">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
                        <div className="-mt-12 rounded-lg border border-slate-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.10)] md:p-9 lg:p-10">
                            <div className="mb-8 grid gap-3 border-b border-slate-200 pb-6 sm:grid-cols-2 lg:grid-cols-4">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <SkeletonBox key={index} className="h-24 w-full" />
                                ))}
                            </div>

                            <SkeletonBox className="h-5 w-28" />
                            <SkeletonBox className="mt-3 h-10 w-80" />
                            <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <SkeletonBox key={index} className="h-36 w-full" />
                                ))}
                            </div>

                            <SkeletonBox className="mt-12 h-5 w-24" />
                            <SkeletonBox className="mt-3 h-10 w-72" />
                            <SkeletonBox className="mt-7 h-[430px] w-full" />
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                                <SkeletonBox className="h-5 w-32" />
                                <SkeletonBox className="mt-3 h-12 w-28" />
                                <SkeletonBox className="mt-2 h-4 w-40" />
                                <div className="mt-6 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                                    <SkeletonBox className="h-11 w-full" />
                                    <div className="grid grid-cols-2 gap-3">
                                        <SkeletonBox className="h-20 w-full" />
                                        <SkeletonBox className="h-20 w-full" />
                                    </div>
                                    <SkeletonBox className="h-12 w-full" />
                                </div>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                                <SkeletonBox className="h-7 w-44" />
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <SkeletonBox key={index} className="h-9 w-24" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
