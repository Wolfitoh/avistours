/**
 * Los precios del catálogo siempre se guardan en soles peruanos (PEN).
 * Actualiza `penPerUnit` cuando quieras cambiar una tasa fija; no hace falta
 * modificar ningún componente.
 */
export const currencyConfig = {
    PEN: {
        label: "Soles peruanos",
        shortLabel: "PEN",
        formatLocale: "es-PE",
        penPerUnit: 1,
    },
    USD: {
        label: "US dollars",
        shortLabel: "USD",
        formatLocale: "es-PE",
        // Tasa fija: 1 USD = S/ 3.80.
        penPerUnit: 3.8,
    },
} as const

export type CurrencyCode = keyof typeof currencyConfig

export const defaultCurrency: CurrencyCode = "PEN"
export const currencies = Object.keys(currencyConfig) as CurrencyCode[]

export function isCurrencyCode(value: string | null | undefined): value is CurrencyCode {
    return Boolean(value && value in currencyConfig)
}

export function convertFromPen(value: number, currency: CurrencyCode) {
    return value / currencyConfig[currency].penPerUnit
}

export function formatCurrency(value: number, currency: CurrencyCode = defaultCurrency) {
    return new Intl.NumberFormat(currencyConfig[currency].formatLocale, {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(convertFromPen(value, currency))
}

export function getFixedRateDescription(currency: CurrencyCode) {
    if (currency === defaultCurrency) {
        return null
    }

    const penPerUnit = currencyConfig[currency].penPerUnit
    const formattedRate = new Intl.NumberFormat("es-PE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(penPerUnit)

    return `1 ${currency} = S/ ${formattedRate}`
}
