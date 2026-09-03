import SkeletonBox from "@/components/loading/SkeletonBox"

export default function PublicHomeLoading() {
    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />

                <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-20">
                    <SkeletonBox className="h-7 w-44 bg-white/10" />
                    <SkeletonBox className="mt-5 h-12 max-w-3xl bg-white/10 md:h-16" />
                    <SkeletonBox className="mt-4 h-12 max-w-2xl bg-white/10" />
                    <SkeletonBox className="mt-8 h-14 max-w-4xl bg-white/10" />
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="space-y-4">
                        <SkeletonBox className="h-5 w-32" />
                        <SkeletonBox className="h-10 w-3/4" />
                        <SkeletonBox className="h-24 w-full" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonBox key={index} className="h-32 w-full" />
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-20">
                <SkeletonBox className="h-6 w-36" />
                <SkeletonBox className="mt-3 h-10 w-72" />
                <div className="mt-8 grid gap-5 lg:grid-cols-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <SkeletonBox className="h-56 w-full sm:h-60 sm:w-44 md:w-48" />
                                <div className="flex-1 space-y-3">
                                    <SkeletonBox className="h-4 w-28" />
                                    <SkeletonBox className="h-7 w-3/4" />
                                    <SkeletonBox className="h-16 w-full" />
                                    <SkeletonBox className="h-px w-full" />
                                    <div className="flex gap-2">
                                        <SkeletonBox className="h-7 w-20" />
                                        <SkeletonBox className="h-7 w-24" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <SkeletonBox className="h-6 w-40" />
                    <SkeletonBox className="mt-3 h-10 w-80" />
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                                <SkeletonBox className="h-5 w-24" />
                                <SkeletonBox className="mt-4 h-20 w-full" />
                                <SkeletonBox className="mt-5 h-10 w-32" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
