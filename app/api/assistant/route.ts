import { NextResponse } from "next/server"
import { generateAssistantReply, type AssistantTurn } from "@/services/assistant"
import { getLocaleMessages } from "@/i18n/messages"
import { defaultLocale, resolveLocale, type AppLocale } from "@/i18n/locales"

export const runtime = "nodejs"

export async function POST(request: Request) {
    let locale: AppLocale = defaultLocale

    try {
        const body = await request.json()
        const messages = sanitizeMessages(body.messages)
        locale = resolveLocale(typeof body.locale === "string" ? body.locale : undefined)
        const assistantCopy = getLocaleMessages(locale).Assistant

        if (messages.length === 0) {
            return NextResponse.json(
                { message: assistantCopy.fallbackError },
                { status: 400 },
            )
        }

        const reply = await generateAssistantReply(messages, locale)

        return NextResponse.json(reply)
    } catch (error) {
        console.error("Could not process assistant request", error)

        return NextResponse.json(
            { message: getLocaleMessages(locale).Assistant.fallbackError },
            { status: 500 },
        )
    }
}

function sanitizeMessages(value: unknown): AssistantTurn[] {
    if (!Array.isArray(value)) {
        return []
    }

    return value
        .map((item) => {
            const role = item && typeof item === "object" && "role" in item ? item.role : ""
            const content = item && typeof item === "object" && "content" in item ? item.content : ""

            if ((role !== "user" && role !== "assistant") || typeof content !== "string") {
                return null
            }

            return {
                role,
                content: content.trim().replace(/\s+/g, " ").slice(0, 1800),
            } satisfies AssistantTurn
        })
        .filter((item): item is AssistantTurn => Boolean(item?.content))
        .slice(-10)
}
