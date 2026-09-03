import SkeletonBox from "@/components/loading/SkeletonBox"

export default function BlogLoading() {
    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/70" />

                <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-20">
                    <SkeletonBox className="h-7 w-36 bg-white/10" />
                    <SkeletonBox className="mt-5 h-12 max-w-3xl bg-white/10 md:h-16" />
                    <SkeletonBox className="mt-5 h-12 max-w-2xl bg-white/10" />
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <SkeletonBox className="h-[420px] w-full" />
                        <div className="space-y-4">
                            <SkeletonBox className="h-5 w-32" />
                            <SkeletonBox className="h-12 w-full" />
                            <SkeletonBox className="h-24 w-full" />
                            <div className="flex gap-3">
                                <SkeletonBox className="h-5 w-24" />
                                <SkeletonBox className="h-5 w-20" />
                                <SkeletonBox className="h-5 w-28" />
                            </div>
                            <SkeletonBox className="h-11 w-36" />
                        </div>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <div key={index} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                                <SkeletonBox className="h-64 w-full rounded-none" />
                                <div className="p-6">
                                    <SkeletonBox className="h-4 w-24" />
                                    <SkeletonBox className="mt-4 h-8 w-3/4" />
                                    <SkeletonBox className="mt-4 h-16 w-full" />
                                    <SkeletonBox className="mt-5 h-5 w-24" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
