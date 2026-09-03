import SkeletonBox from "@/components/loading/SkeletonBox"

export default function FeedbackLoading() {
    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />

                <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-20">
                    <SkeletonBox className="h-7 w-44 bg-white/10" />
                    <SkeletonBox className="mt-5 h-12 max-w-3xl bg-white/10 md:h-16" />
                    <SkeletonBox className="mt-5 h-12 max-w-2xl bg-white/10" />
                    <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
                        <SkeletonBox className="h-24 w-full bg-white/10" />
                        <SkeletonBox className="h-24 w-full bg-white/10" />
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
                    <div className="rounded-lg border border-green-100 bg-green-50 p-6">
                        <SkeletonBox className="h-5 w-36" />
                        <SkeletonBox className="mt-4 h-10 w-3/4" />
                        <SkeletonBox className="mt-4 h-20 w-full" />
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                        <SkeletonBox className="h-8 w-56" />
                        <div className="mt-6 space-y-4">
                            <SkeletonBox className="h-12 w-full" />
                            <SkeletonBox className="h-12 w-full" />
                            <SkeletonBox className="h-12 w-full" />
                            <SkeletonBox className="h-32 w-full" />
                            <SkeletonBox className="h-12 w-full" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
