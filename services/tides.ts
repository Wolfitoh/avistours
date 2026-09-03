export type TideApiResponse = {
    hourly?: {
        time?: string[]
        sea_level_height_msl?: number[]
    }
}

export type TideExtreme = {
    type: "high" | "low"
    time: string
    height: number
    index: number
}

export type TidePoint = {
    time: string
    height: number
}

export type TideChartData = {
    points: TidePoint[]
    extremes: TideExtreme[]
    currentTime: string
}

export type TideSummary = {
    status: "Marea alta" | "Marea baja" | "Llenando" | "Secando" | "Sin datos"
    currentHeight?: number
    processPeriod?: string
    nextStatus?: "Marea alta" | "Marea baja"
    nextChangeTime?: string
    updatedAt?: string
    chart?: TideChartData
}

const PUERTO_PIZARRO_COORDS = {
    latitude: -3.5,
    longitude: -80.43,
}

function toLimaDate(time: string) {
    return new Date(`${time}:00-05:00`)
}

function formatHour(time: string) {
    return toLimaDate(time).toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Lima",
    })
}

function findExtremes(times: string[], levels: number[]) {
    const extremes: TideExtreme[] = []

    for (let index = 1; index < levels.length - 1; index++) {
        const previous = levels[index - 1]
        const current = levels[index]
        const next = levels[index + 1]

        if (current > previous && current >= next) {
            extremes.push({ type: "high", time: times[index], height: current, index })
        }

        if (current < previous && current <= next) {
            extremes.push({ type: "low", time: times[index], height: current, index })
        }
    }

    return extremes
}

function buildTideSummary(data: TideApiResponse): TideSummary {
    const times = data.hourly?.time ?? []
    const levels = data.hourly?.sea_level_height_msl ?? []

    if (times.length < 3 || levels.length < 3) {
        return { status: "Sin datos" }
    }

    const now = new Date()
    const currentIndex = times.reduce((closestIndex, time, index) => {
        const closestDistance = Math.abs(toLimaDate(times[closestIndex]).getTime() - now.getTime())
        const distance = Math.abs(toLimaDate(time).getTime() - now.getTime())

        return distance < closestDistance ? index : closestIndex
    }, 0)

    const extremes = findExtremes(times, levels)
    const currentTime = toLimaDate(times[currentIndex])
    const chartDate = times[currentIndex].slice(0, 10)
    const chartPoints = times.reduce<TidePoint[]>((points, time, index) => {
        if (time.startsWith(chartDate)) {
            points.push({ time, height: levels[index] })
        }

        return points
    }, [])
    const currentHeight = levels[currentIndex]
    const previousExtreme = [...extremes].reverse().find((item) => toLimaDate(item.time) < currentTime)
    const nextExtreme = extremes.find((item) => toLimaDate(item.time) > currentTime)
    const nearbyExtreme = extremes.find((item) => Math.abs(toLimaDate(item.time).getTime() - currentTime.getTime()) <= 45 * 60 * 1000)

    let status: TideSummary["status"] = "Sin datos"
    let processStartTime: string | undefined
    let processEndTime: string | undefined

    if (nearbyExtreme?.type === "high") {
        status = "Marea alta"
        processStartTime = previousExtreme?.time
        processEndTime = nearbyExtreme.time
    } else if (nearbyExtreme?.type === "low") {
        status = "Marea baja"
        processStartTime = previousExtreme?.time
        processEndTime = nearbyExtreme.time
    } else if (nextExtreme?.type === "high") {
        status = "Llenando"
        processStartTime = previousExtreme?.time
        processEndTime = nextExtreme.time
    } else if (nextExtreme?.type === "low") {
        status = "Secando"
        processStartTime = previousExtreme?.time
        processEndTime = nextExtreme.time
    } else if (levels[currentIndex + 1] > currentHeight) {
        status = "Llenando"
    } else {
        status = "Secando"
    }

    const processPeriod = processStartTime && processEndTime
        ? `${formatHour(processStartTime)} - ${formatHour(processEndTime)}`
        : undefined

    const nextStatus = nextExtreme
        ? nextExtreme.type === "high" ? "Marea alta" : "Marea baja"
        : undefined

    const nextChangeTime = nextExtreme
        ? formatHour(nextExtreme.time)
        : undefined

    return {
        status,
        currentHeight,
        processPeriod,
        nextStatus,
        nextChangeTime,
        updatedAt: formatHour(times[currentIndex]),
        chart: chartPoints.length >= 3
            ? {
                points: chartPoints,
                extremes: extremes.filter((item) => item.time.startsWith(chartDate)),
                currentTime: now.toISOString(),
            }
            : undefined,
    }
}

export async function getTideSummary() {
    const params = new URLSearchParams({
        latitude: String(PUERTO_PIZARRO_COORDS.latitude),
        longitude: String(PUERTO_PIZARRO_COORDS.longitude),
        hourly: "sea_level_height_msl",
        past_days: "1",
        forecast_days: "2",
        timezone: "America/Lima",
        cell_selection: "sea",
    })

    try {
        const response = await fetch(`https://marine-api.open-meteo.com/v1/marine?${params.toString()}`, {
            next: { revalidate: 60 * 60 },
        })

        if (!response.ok) {
            return { status: "Sin datos" } satisfies TideSummary
        }

        const data = await response.json() as TideApiResponse

        return buildTideSummary(data)
    } catch {
        return { status: "Sin datos" } satisfies TideSummary
    }
}
