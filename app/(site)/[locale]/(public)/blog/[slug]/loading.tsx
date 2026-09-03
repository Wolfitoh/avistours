import SkeletonBox from "@/components/loading/SkeletonBox"

export default function BlogDetailLoading() {
    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />

                <div className="relative mx-auto max-w-5xl px-4 pb-20">
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
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
                        <div className="-mt-12 rounded-lg border border-slate-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.10)] md:p-9 lg:p-10">
                            <div className="mb-8 flex flex-wrap gap-3 border-b border-slate-200 pb-6">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <SkeletonBox key={index} className="h-10 w-32" />
                                ))}
                            </div>
                            <SkeletonBox className="h-24 w-full" />
                            <SkeletonBox className="mt-8 h-10 w-64" />
                            <SkeletonBox className="mt-4 h-24 w-full" />
                            <SkeletonBox className="mt-8 h-[320px] w-full" />
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                                <SkeletonBox className="h-7 w-48" />
                                <div className="mt-5 space-y-4">
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <SkeletonBox key={index} className="h-10 w-full" />
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white p-6">
                                <SkeletonBox className="h-7 w-44" />
                                <div className="mt-5 space-y-5">
                                    {Array.from({ length: 2 }).map((_, index) => (
                                        <div key={index} className="grid grid-cols-[82px_1fr] gap-4">
                                            <SkeletonBox className="h-20 w-full" />
                                            <div className="space-y-2">
                                                <SkeletonBox className="h-4 w-24" />
                                                <SkeletonBox className="h-10 w-full" />
                                            </div>
                                        </div>
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
