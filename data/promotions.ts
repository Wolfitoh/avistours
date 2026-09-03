import promotions from "./promotions.json"
import { englishTourTranslations } from "./tour-translations"
import { defaultLocale, getTranslationLocale, type AppLocale } from "@/i18n/locales"
import { formatCurrency, type CurrencyCode } from "./currency"

export type TourIcon =
    | "beach"
    | "bird"
    | "boat"
    | "camera"
    | "crocodile"
    | "island"
    | "kayak"
    | "mangrove"
    | "route"
    | "sea"
    | "view"
    | "zoo"

export type Tour = {
    id: number
    slug: string
    title: string
    location: string
    price: number
    groupPrice?: number
    discountPrice?: number
    minPeople?: number
    maxPeople?: number
    image: string
    gallery: string[]
    rating: number
    reviews: number
    duration: string
    description: string
    features: string[]
    featureIcons?: Partial<Record<string, TourIcon>>
    activities: string[]
    activityIcons?: Partial<Record<string, TourIcon>>
    includes: string[]
    recommendations: string[]
    itinerary: string[]
    discount?: string
}

export const tours = promotions as Tour[]

export type TourLocale = AppLocale

type TourTranslations = Partial<Record<Tour["slug"], Partial<Tour>>>

/**
 * Cada idioma puede aportar solo los tours que ya fueron revisados. Si falta
 * una entrada, se conserva el contenido de origen en español.
 */
const tourTranslations: Partial<Record<AppLocale, TourTranslations>> = {
    en: englishTourTranslations,
}

export function getLocalizedTour(tour: Tour, locale: TourLocale) {
    const translation = tourTranslations[getTranslationLocale(locale)]?.[tour.slug]
    return translation ? { ...tour, ...translation } : tour
}

export function getLocalizedTours(locale: TourLocale) {
    return tours.map((tour) => getLocalizedTour(tour, locale))
}

export function getTour(slug: string) {
    return tours.find((tour) => tour.slug === slug)
}

function roundPrice(value: number) {
    return Number(value.toFixed(2))
}

function getValidDiscountPrice(discountPrice: number | undefined, originalPrice: number) {
    if (
        typeof discountPrice !== "number" ||
        !Number.isFinite(discountPrice) ||
        discountPrice <= 0 ||
        discountPrice >= originalPrice
    ) {
        return null
    }

    return roundPrice(discountPrice)
}

function getDiscountPercent(originalPrice: number, currentPrice: number) {
    if (currentPrice >= originalPrice) {
        return undefined
    }

    return Math.max(1, Math.round(((originalPrice - currentPrice) / originalPrice) * 100))
}

export function formatPrice(value: number, currency?: CurrencyCode) {
    return formatCurrency(roundPrice(value), currency)
}

export function getTourStartingPrice(tour: Tour) {
    return getTourPricing(tour).startingPrice
}

export function hasGroupPricing(tour: Tour) {
    return Boolean(tour.groupPrice && tour.maxPeople && tour.maxPeople > 1)
}

export function getTourDiscount(tour: Tour, locale: AppLocale = defaultLocale) {
    const originalPrice = hasGroupPricing(tour) ? roundPrice(tour.groupPrice!) : roundPrice(tour.price)
    const discountPrice = getValidDiscountPrice(tour.discountPrice, originalPrice)

    if (!discountPrice) {
        return null
    }

    const percent = getDiscountPercent(originalPrice, discountPrice)

    if (!percent) {
        return null
    }

    return {
        originalPrice,
        discountPrice,
        amountOff: roundPrice(originalPrice - discountPrice),
        percent,
        label: locale === "en" ? `On sale -${percent}%` : `En Promoción -${percent}%`,
    }
}

export function getTourPricing(tour: Tour, people?: number) {
    if (hasGroupPricing(tour)) {
        const minPeople = tour.minPeople ?? 1
        const maxPeople = tour.maxPeople ?? 1
        const selectedPeople = Math.min(Math.max(people ?? maxPeople, minPeople), maxPeople)
        const originalTotalPrice = roundPrice(tour.groupPrice!)
        const discountTotalPrice = getValidDiscountPrice(tour.discountPrice, originalTotalPrice)
        const totalPrice = discountTotalPrice ?? originalTotalPrice
        const perPersonPrice = roundPrice(totalPrice / selectedPeople)
        const originalPerPersonPrice = roundPrice(originalTotalPrice / selectedPeople)
        const originalStartingPrice = roundPrice(originalTotalPrice / maxPeople)
        const discountPercent = getDiscountPercent(originalTotalPrice, totalPrice)

        return {
            isGroupPricing: true,
            minPeople,
            maxPeople,
            people: selectedPeople,
            totalPrice,
            perPersonPrice,
            startingPrice: roundPrice(totalPrice / maxPeople),
            originalTotalPrice,
            originalPerPersonPrice,
            originalStartingPrice,
            hasDiscount: Boolean(discountPercent),
            discountPercent,
        }
    }

    const selectedPeople = Math.max(people ?? 1, 1)
    const originalPerPersonPrice = roundPrice(tour.price)
    const discountPerPersonPrice = getValidDiscountPrice(tour.discountPrice, originalPerPersonPrice)
    const perPersonPrice = discountPerPersonPrice ?? originalPerPersonPrice
    const originalTotalPrice = roundPrice(originalPerPersonPrice * selectedPeople)
    const totalPrice = roundPrice(perPersonPrice * selectedPeople)
    const discountPercent = getDiscountPercent(originalPerPersonPrice, perPersonPrice)

    return {
        isGroupPricing: false,
        minPeople: 1,
        maxPeople: 1,
        people: selectedPeople,
        totalPrice,
        perPersonPrice,
        startingPrice: perPersonPrice,
        originalTotalPrice,
        originalPerPersonPrice,
        originalStartingPrice: originalPerPersonPrice,
        hasDiscount: Boolean(discountPercent),
        discountPercent,
    }
}
