"use client"

import { useMemo, useState } from "react"
import { MessageCircle } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink"
import { formatPrice, getTourDiscount, getTourPricing, type Tour } from "@/data/promotions"
import { resolveLocale } from "@/i18n/locales"
import { useCurrency } from "@/components/currency/CurrencyProvider"

type TourPricingCardProps = {
    tour: Tour
    number: string
}

export default function TourPricingCard({ tour, number }: TourPricingCardProps) {
    const t = useTranslations("TourPricing")
    const locale = useLocale()
    const { currency } = useCurrency()
    const defaultPeople = tour.maxPeople ?? 1
    const [people, setPeople] = useState(defaultPeople)

    const pricing = useMemo(() => getTourPricing(tour, people), [tour, people])
    const promotion = getTourDiscount(tour, resolveLocale(locale))

    const message = pricing.isGroupPricing
        ? pricing.hasDiscount
                            ? t("messageGroupDiscount", { tour: tour.title, people: pricing.people, originalPrice: formatPrice(pricing.originalTotalPrice), price: formatPrice(pricing.totalPrice) })
            : t("messageGroup", { tour: tour.title, people: pricing.people, price: formatPrice(pricing.totalPrice) })
        : pricing.hasDiscount
            ? t("messageDiscount", { tour: tour.title, people: pricing.people, originalPrice: formatPrice(pricing.originalPerPersonPrice), price: formatPrice(pricing.perPersonPrice) })
            : t("message", { tour: tour.title, people: pricing.people })

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-semibold text-green-500">
                    {pricing.isGroupPricing ? t("startingRate") : t("pricePerPerson")}
                </span>
                {promotion && (
                    <span className="rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white shadow-sm">
                        {promotion.label}
                    </span>
                )}
            </div>

            <div className="mt-2">
                <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                    {pricing.hasDiscount && (
                        <span className="pb-1 text-lg font-semibold text-slate-400 line-through">
                            {formatPrice(pricing.originalStartingPrice, currency)}
                        </span>
                    )}
                    <div className="text-4xl font-semibold text-gray-900">
                        {formatPrice(pricing.startingPrice, currency)}
                    </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                    {pricing.isGroupPricing
                        ? t("perPersonInGroup", { count: pricing.maxPeople ?? 1 })
                        : t("perPerson")}
                </p>
            </div>

            {pricing.isGroupPricing && (
                <div className="mt-6 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <label className="block">
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                            {t("people")}
                        </span>
                        <select
                            value={people}
                            onChange={(event) => setPeople(Number(event.target.value))}
                            className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-green-400"
                        >
                            {Array.from({ length: pricing.maxPeople }, (_, index) => index + 1).map((value) => (
                                <option key={value} value={value}>
                                    {value} {value === 1 ? t("person") : t("peopleOption")}
                                </option>
                            ))}
                        </select>
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-md border border-slate-200 bg-white px-3 py-3">
                            <span className="block text-xs text-slate-500">{t("groupTotal")}</span>
                            <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                {pricing.hasDiscount && (
                                    <span className="text-sm font-semibold text-slate-400 line-through">
                                        {formatPrice(pricing.originalTotalPrice, currency)}
                                    </span>
                                )}
                                <strong className="block text-base text-slate-900">
                                    {formatPrice(pricing.totalPrice, currency)}
                                </strong>
                            </div>
                        </div>
                        <div className="rounded-md border border-slate-200 bg-white px-3 py-3">
                            <span className="block text-xs text-slate-500">{t("equals")}</span>
                            <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                {pricing.hasDiscount && (
                                    <span className="text-sm font-semibold text-slate-400 line-through">
                                        {formatPrice(pricing.originalPerPersonPrice, currency)}
                                    </span>
                                )}
                                <strong className="block text-base text-slate-900">
                                    {formatPrice(pricing.perPersonPrice, currency)}
                                </strong>
                            </div>
                            <span className="block text-xs text-slate-500">{t("perPersonShort")}</span>
                        </div>
                    </div>

                    <p className="text-xs leading-5 text-slate-500">
                        {t("baseRate", { price: formatPrice(pricing.totalPrice, currency) })}
                    </p>
                </div>
            )}

            {/* Aviso de conversión referencial temporalmente oculto. */}

            <WhatsAppLink
                number={number}
                message={message}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
                <MessageCircle size={18} aria-hidden="true" />
                {t("whatsapp")}
            </WhatsAppLink>
        </div>
    )
}
