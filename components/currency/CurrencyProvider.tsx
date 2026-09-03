"use client"

import { createContext, useContext, useMemo, useSyncExternalStore } from "react"
import {
    currencies,
    defaultCurrency,
    isCurrencyCode,
    type CurrencyCode,
} from "@/data/currency"

const storageKey = "avistours-currency"
const currencyChangeEvent = "avistours-currency-change"

type CurrencyContextValue = {
    currency: CurrencyCode
    setCurrency: (currency: CurrencyCode) => void
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null)

function getStoredCurrency() {
    const storedCurrency = window.localStorage.getItem(storageKey)
    return isCurrencyCode(storedCurrency) ? storedCurrency : defaultCurrency
}

function subscribeToCurrency(onStoreChange: () => void) {
    window.addEventListener("storage", onStoreChange)
    window.addEventListener(currencyChangeEvent, onStoreChange)

    return () => {
        window.removeEventListener("storage", onStoreChange)
        window.removeEventListener(currencyChangeEvent, onStoreChange)
    }
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const currency = useSyncExternalStore(
        subscribeToCurrency,
        getStoredCurrency,
        () => defaultCurrency,
    )

    const value = useMemo<CurrencyContextValue>(() => ({
        currency,
        setCurrency(nextCurrency) {
            window.localStorage.setItem(storageKey, nextCurrency)
            window.dispatchEvent(new Event(currencyChangeEvent))
        },
    }), [currency])

    return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
    const context = useContext(CurrencyContext)

    if (!context) {
        throw new Error("useCurrency must be used within CurrencyProvider")
    }

    return context
}

export { currencies }
