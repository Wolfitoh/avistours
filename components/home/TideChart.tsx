import type { TideChartData } from "@/services/tides"

type TideChartProps = {
    data: TideChartData
    locale: string
    labels: {
        title: string
        height: string
        now: string
        high: string
        low: string
    }
}

const chartWidth = 720
const chartHeight = 316
const padding = { top: 28, right: 28, bottom: 42, left: 48 }

function toLimaDate(time: string) {
    const includesTimeZone = /(?:Z|[+-]\d{2}:?\d{2})$/.test(time)

    return new Date(includesTimeZone ? time : `${time}:00-05:00`)
}

function formatHour(time: string, locale: string) {
    return new Intl.DateTimeFormat(locale, {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "America/Lima",
    }).format(toLimaDate(time))
}

function formatHeight(height: number, locale: string) {
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(height)
}

function createSmoothPath(points: Array<{ x: number; y: number }>) {
    if (points.length < 2) {
        return ""
    }

    let path = `M ${points[0].x} ${points[0].y}`

    for (let index = 0; index < points.length - 1; index++) {
        const previous = points[index - 1] ?? points[index]
        const current = points[index]
        const next = points[index + 1]
        const afterNext = points[index + 2] ?? next
        const controlOne = {
            x: current.x + (next.x - previous.x) / 6,
            y: current.y + (next.y - previous.y) / 6,
        }
        const controlTwo = {
            x: next.x - (afterNext.x - current.x) / 6,
            y: next.y - (afterNext.y - current.y) / 6,
        }

        path += ` C ${controlOne.x} ${controlOne.y}, ${controlTwo.x} ${controlTwo.y}, ${next.x} ${next.y}`
    }

    return path
}

export default function TideChart({ data, locale, labels }: TideChartProps) {
    const plotWidth = chartWidth - padding.left - padding.right
    const plotHeight = chartHeight - padding.top - padding.bottom
    const heights = data.points.map((point) => point.height)
    const rawMinimum = Math.min(...heights)
    const rawMaximum = Math.max(...heights)
    const range = Math.max(rawMaximum - rawMinimum, 0.6)
    const minimum = rawMinimum - range * 0.14
    const maximum = rawMaximum + range * 0.14
    const scaleRange = maximum - minimum
    const firstTime = toLimaDate(data.points[0].time).getTime()
    const lastTime = toLimaDate(data.points[data.points.length - 1].time).getTime()
    const xForTime = (time: string | Date) => {
        const timestamp = typeof time === "string" ? toLimaDate(time).getTime() : time.getTime()
        const progress = Math.min(1, Math.max(0, (timestamp - firstTime) / (lastTime - firstTime)))

        return padding.left + progress * plotWidth
    }
    const yForHeight = (height: number) => padding.top + ((maximum - height) / scaleRange) * plotHeight
    const points = data.points.map((point) => ({
        x: xForTime(point.time),
        y: yForHeight(point.height),
        ...point,
    }))
    const linePath = createSmoothPath(points)
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding.top + plotHeight} L ${points[0].x} ${padding.top + plotHeight} Z`
    const currentX = xForTime(new Date(data.currentTime))
    const gridValues = Array.from({ length: 4 }, (_, index) => maximum - (scaleRange * index) / 3)
    const timeLabels = [0, 6, 12, 18].map((hour) => data.points.find((point) => toLimaDate(point.time).getHours() === hour)).filter(Boolean)

    return (
        <div className="overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 shadow-[0_20px_55px_rgba(14,116,144,0.12)]">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-green-100/80 px-5 py-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
                        {labels.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{labels.height}</p>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium">
                    <span className="inline-flex items-center gap-1.5 text-sky-700">
                        <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                        {labels.high}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-teal-700">
                        <span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
                        {labels.low}
                    </span>
                </div>
            </div>

            <div className="px-2 pb-2 pt-3 sm:px-4">
                <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="block h-auto w-full"
                    role="img"
                    aria-labelledby="tide-chart-title tide-chart-description"
                >
                    <title id="tide-chart-title">{labels.title}</title>
                    <desc id="tide-chart-description">
                        {`${labels.height}. ${labels.now}: ${formatHour(data.currentTime, locale)}.`}
                    </desc>
                    <defs>
                        <linearGradient id="tide-area" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.36" />
                            <stop offset="100%" stopColor="#d1fae5" stopOpacity="0.12" />
                        </linearGradient>
                        <filter id="tide-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {gridValues.map((value, index) => {
                        const y = padding.top + (plotHeight * index) / 3

                        return (
                            <g key={value}>
                                <line x1={padding.left} x2={chartWidth - padding.right} y1={y} y2={y} stroke="#bae6fd" strokeDasharray="3 7" />
                                <text x={padding.left - 10} y={y + 4} textAnchor="end" fill="#64748b" fontSize="11" fontWeight="600">
                                    {formatHeight(value, locale)}
                                </text>
                            </g>
                        )
                    })}

                    <path d={areaPath} fill="url(#tide-area)" />
                    <path d={linePath} fill="none" stroke="#38bdf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" filter="url(#tide-glow)" />

                    <line x1={currentX} x2={currentX} y1={padding.top} y2={padding.top + plotHeight} stroke="#16a34a" strokeDasharray="4 5" strokeWidth="1.5" />
                    <rect x={Math.min(chartWidth - 57, Math.max(4, currentX - 23))} y="4" width="46" height="20" rx="10" fill="#16a34a" />
                    <text x={Math.min(chartWidth - 34, Math.max(27, currentX))} y="18" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">
                        {labels.now}
                    </text>

                    {data.extremes.map((extreme) => {
                        const point = points.find((item) => item.time === extreme.time)

                        if (!point) {
                            return null
                        }

                        const isHigh = extreme.type === "high"
                        const color = isHigh ? "#0284c7" : "#0f766e"
                        const labelY = isHigh ? Math.max(42, point.y - 26) : Math.min(chartHeight - 32, point.y + 31)

                        return (
                            <g key={`${extreme.type}-${extreme.time}`}>
                                <circle cx={point.x} cy={point.y} r="8" fill="white" stroke={color} strokeWidth="4" />
                                <text x={point.x} y={labelY} textAnchor="middle" fill={color} fontSize="12" fontWeight="700">
                                    {formatHour(extreme.time, locale)}
                                </text>
                                <text x={point.x} y={labelY + 14} textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">
                                    {`${formatHeight(extreme.height, locale)} m`}
                                </text>
                            </g>
                        )
                    })}

                    {timeLabels.map((point) => point && (
                        <text key={point.time} x={xForTime(point.time)} y={chartHeight - 13} textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">
                            {formatHour(point.time, locale)}
                        </text>
                    ))}
                </svg>
            </div>
        </div>
    )
}
