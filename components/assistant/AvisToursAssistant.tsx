"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Loader2, MessageCircleMore, Send, Sparkles, X } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { resolveLocale } from "@/i18n/locales"
import { getLocalizedPath } from "@/i18n/urls"

type AssistantSuggestion = {
    label: string
    href: string
}

type ChatMessage = {
    id: string
    role: "assistant" | "user"
    content: string
    suggestions?: AssistantSuggestion[]
}

export default function AvisToursAssistant() {
    const locale = resolveLocale(useLocale())
    const t = useTranslations("Assistant")
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const quickPrompts = [
        t("quickFamily"),
        t("quickCrocodiles"),
        t("quickTide"),
        t("quickGettingThere"),
    ]
    const initialMessage = useMemo<ChatMessage>(() => ({
        id: "welcome",
        role: "assistant",
        content: t("welcome"),
        suggestions: [
            { label: t("viewTours"), href: getLocalizedPath(locale, "/packages") },
            { label: t("readBlog"), href: getLocalizedPath(locale, "/blog") },
            { label: t("operator"), href: getLocalizedPath(locale, "/contact") },
        ],
    }), [locale, t])
    const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])

    useEffect(() => {
        setMessages([initialMessage])
    }, [initialMessage])

    const apiMessages = useMemo(
        () => messages.map(({ role, content }) => ({ role, content })),
        [messages],
    )

    async function sendMessage(text: string) {
        const cleanText = text.trim()
        if (!cleanText || loading) {
            return
        }

        const userMessage: ChatMessage = {
            id: `${Date.now()}-user`,
            role: "user",
            content: cleanText,
        }

        setMessages((current) => [...current, userMessage])
        setInput("")
        setLoading(true)

        try {
            const response = await fetch("/api/assistant", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    locale,
                    messages: [...apiMessages, { role: "user", content: cleanText }],
                }),
            })

            const payload = await response.json()
            const assistantMessage: ChatMessage = {
                id: `${Date.now()}-assistant`,
                role: "assistant",
                content: typeof payload.message === "string"
                    ? payload.message
                    : t("fallbackError"),
                suggestions: Array.isArray(payload.suggestions) ? payload.suggestions : undefined,
            }

            setMessages((current) => [...current, assistantMessage])
        } catch {
            setMessages((current) => [
                ...current,
                {
                    id: `${Date.now()}-assistant-error`,
                    role: "assistant",
                    content: t("fallbackError"),
                },
            ])
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="fixed bottom-5 left-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_12px_30px_rgba(15,23,42,0.28)] transition hover:bg-slate-800 md:h-14 md:w-14"
                aria-label={open ? t("close") : t("open")}
            >
                {open ? <X size={22} /> : <MessageCircleMore size={22} />}
            </button>

            {open && (
                <div className="fixed inset-x-4 bottom-20 z-50 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:bottom-6 md:left-6 md:right-auto md:w-[390px]">
                    <div className="border-b border-slate-200 bg-slate-900 px-4 py-4 text-white">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                                    <Sparkles size={14} />
                                    {t("brand")}
                                </p>
                                <h2 className="mt-2 text-lg font-semibold">
                                    {t("title")}
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-md border border-white/15 p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
                                aria-label={t("close")}
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="max-h-[55vh] space-y-4 overflow-y-auto bg-slate-50 px-4 py-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
                            >
                                <div
                                    className={`max-w-[88%] rounded-lg px-4 py-3 text-sm leading-6 shadow-sm ${
                                        message.role === "user"
                                            ? "bg-green-500 text-white"
                                            : "border border-slate-200 bg-white text-slate-700"
                                    }`}
                                >
                                    <p className="whitespace-pre-line">{message.content}</p>

                                    {message.suggestions && message.suggestions.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {message.suggestions.map((suggestion) => (
                                                <Link
                                                    key={`${message.id}-${suggestion.href}`}
                                                    href={suggestion.href}
                                                    className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-700"
                                                >
                                                    {suggestion.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex justify-start">
                                <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                                    <Loader2 size={16} className="animate-spin text-green-500" />
                                    {t("thinking")}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="border-t border-slate-200 bg-white px-4 py-4">
                        <div className="mb-3 flex flex-wrap gap-2">
                            {quickPrompts.map((prompt) => (
                                <button
                                    key={prompt}
                                    type="button"
                                    onClick={() => sendMessage(prompt)}
                                    className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>

                        <form
                            onSubmit={(event) => {
                                event.preventDefault()
                                void sendMessage(input)
                            }}
                            className="flex gap-2"
                        >
                            <input
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                placeholder={t("placeholder")}
                                className="h-11 flex-1 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-green-400 focus:bg-white"
                            />
                            <button
                                type="submit"
                                disabled={loading || input.trim().length === 0}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-green-500 text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-slate-300"
                                aria-label={t("send")}
                            >
                                <Send size={17} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
