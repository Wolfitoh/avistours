import { getLocalizedBlogPosts } from "@/data/blogs"
import { getLocalizedTours, getTourPricing } from "@/data/promotions"
import { getBlogSearchTerms, getTourSearchTerms } from "@/data/seo"
import { siteConfig } from "@/data/site"
import { getLocaleMessages } from "@/i18n/messages"
import { defaultLocale, getTranslationLocale, type AppLocale } from "@/i18n/locales"
import { getLocalizedPath } from "@/i18n/urls"
import { getTideSummary } from "@/services/tides"

export type AssistantTurn = {
    role: "user" | "assistant"
    content: string
}

export type AssistantSuggestion = {
    label: string
    href: string
}

export type AssistantReply = {
    message: string
    suggestions: AssistantSuggestion[]
    usedFallback: boolean
}

type AssistantLocale = AppLocale

function getCopy(locale: AssistantLocale) {
    return getLocaleMessages(locale).Assistant.server
}

function format(template: string, values: Record<string, string | number>) {
    return Object.entries(values).reduce(
        (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
        template,
    )
}

function getLocalizedTideStatus(status: string | null | undefined, locale: AssistantLocale) {
    if (!status) {
        return status ?? getCopy(locale).noData
    }

    const translations: Partial<Record<AppLocale, Record<string, string>>> = {
        en: {
        "Marea alta": "High tide",
        "Marea baja": "Low tide",
        Llenando: "Rising",
        Secando: "Falling",
        },
    }

    return translations[getTranslationLocale(locale)]?.[status] ?? status
}

function normalize(value: string) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
}

function tokenize(value: string) {
    return normalize(value)
        .split(/[^a-z0-9]+/)
        .filter(Boolean)
}

function scoreText(query: string, values: string[]) {
    const haystack = normalize(values.join(" "))
    const queryTokens = tokenize(query)

    let score = 0
    for (const token of queryTokens) {
        if (haystack.includes(token)) {
            score += token.length > 5 ? 3 : 2
        }
    }

    if (haystack.includes(normalize(query))) {
        score += 5
    }

    return score
}

function getRelevantTours(query: string, locale: AssistantLocale) {
    return getLocalizedTours(locale)
        .map((tour) => ({
            tour,
            score: scoreText(query, [
                ...getTourSearchTerms(tour),
                tour.title,
                tour.description,
                tour.location,
                ...tour.features,
                ...tour.activities,
                ...tour.includes,
            ]),
        }))
        .filter((item) => item.score > 0)
        .sort((left, right) => right.score - left.score)
        .slice(0, 3)
        .map((item) => item.tour)
}

function getRelevantBlogs(query: string, locale: AssistantLocale) {
    return getLocalizedBlogPosts(locale)
        .map((post) => ({
            post,
            score: scoreText(query, getBlogSearchTerms(post)),
        }))
        .filter((item) => item.score > 0)
        .sort((left, right) => right.score - left.score)
        .slice(0, 3)
        .map((item) => item.post)
}

function buildTourSnippet(slug: string, locale: AssistantLocale) {
    const copy = getCopy(locale)
    const tour = getLocalizedTours(locale).find((item) => item.slug === slug)

    if (!tour) {
        return null
    }

    const pricing = getTourPricing(tour)

    return [
        `- ${tour.title}`,
        `  ${copy.tourDuration}: ${tour.duration}`,
        `  ${copy.tourLocation}: ${tour.location}`,
        `  ${copy.tourDescription}: ${tour.description}`,
        `  ${copy.tourIncludes}: ${tour.includes.join(", ")}`,
        `  ${copy.tourActivities}: ${tour.activities.join(", ")}`,
        pricing.isGroupPricing
            ? `  ${copy.tourPrice}: ${format(copy.priceGroup, { starting: pricing.startingPrice, total: pricing.totalPrice })}`
            : `  ${copy.tourPrice}: ${format(copy.pricePerson, { price: pricing.perPersonPrice })}`,
        `  URL: ${getLocalizedPath(locale, "/promociones/[slug]", { slug: tour.slug })}`,
    ].join("\n")
}

function buildBlogSnippet(slug: string, locale: AssistantLocale) {
    const copy = getCopy(locale)
    const post = getLocalizedBlogPosts(locale).find((item) => item.slug === slug)

    if (!post) {
        return null
    }

    return [
        `- ${post.title}`,
        `  ${copy.blogCategory}: ${post.category}`,
        `  ${copy.blogExcerpt}: ${post.excerpt}`,
        `  ${copy.tourLocation}: ${post.location}`,
        `  URL: ${getLocalizedPath(locale, "/blog/[slug]", { slug: post.slug })}`,
    ].join("\n")
}

function buildSuggestions(query: string, tourSlugs: string[], blogSlugs: string[], locale: AssistantLocale) {
    const copy = getCopy(locale)
    const assistant = getLocaleMessages(locale).Assistant
    const suggestions: AssistantSuggestion[] = []

    for (const slug of tourSlugs) {
        const tour = getLocalizedTours(locale).find((item) => item.slug === slug)
        if (tour) {
            suggestions.push({
                label: tour.title,
                href: getLocalizedPath(locale, "/promociones/[slug]", { slug: tour.slug }),
            })
        }
    }

    for (const slug of blogSlugs) {
        const post = getLocalizedBlogPosts(locale).find((item) => item.slug === slug)
        if (post) {
            suggestions.push({
                label: post.title,
                href: `/blog/${post.slug}`,
            })
        }
    }

    if (normalize(query).includes("contact") || normalize(query).includes("reserv") || normalize(query).includes("book")) {
        suggestions.push({
            label: copy.contact,
            href: getLocalizedPath(locale, "/contact"),
        })
    }

    if (suggestions.length === 0) {
        suggestions.push(
            { label: assistant.viewTours, href: getLocalizedPath(locale, "/packages") },
            { label: assistant.readBlog, href: getLocalizedPath(locale, "/blog") },
            { label: copy.contactUs, href: getLocalizedPath(locale, "/contact") },
        )
    }

    return suggestions.slice(0, 4)
}

async function buildContext(query: string, locale: AssistantLocale) {
    const copy = getCopy(locale)
    const relevantTours = getRelevantTours(query, locale)
    const relevantBlogs = getRelevantBlogs(query, locale)
    const tide = await getTideSummary()

    return {
        relevantTours,
        relevantBlogs,
        tide,
        context: [
            `${copy.contextBrand}: ${siteConfig.name}`,
            `${copy.contextDescription}: ${siteConfig.description}`,
            `${copy.contextPhone}: ${siteConfig.phone}`,
            `${copy.contextEmail}: ${siteConfig.email}`,
            `${copy.contextAddress}: ${siteConfig.address}`,
            "",
            `${copy.contextTide}:`,
            `- ${copy.contextStatus}: ${getLocalizedTideStatus(tide.status, locale)}`,
            `- ${copy.contextProcess}: ${tide.processPeriod ?? copy.noData}`,
            `- ${copy.contextNext}: ${tide.nextChangeTime ?? copy.noData}`,
            `- ${copy.contextFollowing}: ${getLocalizedTideStatus(tide.nextStatus, locale)}`,
            "",
            `${copy.contextTours}:`,
            ...(relevantTours.map((tour) => buildTourSnippet(tour.slug, locale)).filter(Boolean) as string[]),
            "",
            `${copy.contextBlogs}:`,
            ...(relevantBlogs.map((post) => buildBlogSnippet(post.slug, locale)).filter(Boolean) as string[]),
        ].join("\n"),
    }
}

function buildFallbackResponse(
    query: string,
    context: Awaited<ReturnType<typeof buildContext>>,
    locale: AssistantLocale,
): AssistantReply {
    const copy = getCopy(locale)
    const lowerQuery = normalize(query)
    const suggestions = buildSuggestions(
        query,
        context.relevantTours.map((tour) => tour.slug),
        context.relevantBlogs.map((post) => post.slug),
        locale,
    )

    if (lowerQuery.includes("marea") || lowerQuery.includes("tide")) {
        const tideStatus = getLocalizedTideStatus(context.tide.status, locale)
        const tideProcess = context.tide.processPeriod ?? copy.noData
        const tideTime = context.tide.nextChangeTime ?? copy.noData
        const tideNextStatus = getLocalizedTideStatus(context.tide.nextStatus, locale)
        const direction = context.tide.nextStatus
            ? format(copy.towards, { status: tideNextStatus })
            : ""
        const message = [
            format(copy.tideNow, { status: tideStatus }),
            format(copy.tideProcess, { value: tideProcess }),
            format(copy.tideNext, { time: tideTime, direction }),
            copy.tideNote,
        ].join(" ")

        return { message, suggestions, usedFallback: true }
    }

    if (context.relevantTours.length > 0) {
        const lines = context.relevantTours.map((tour) => {
            const pricing = getTourPricing(tour)
            const priceText = pricing.isGroupPricing
                ? format(copy.priceGroup, { starting: pricing.startingPrice, total: pricing.totalPrice })
                : format(copy.pricePerson, { price: pricing.perPersonPrice })

            return `- ${tour.title}: ${tour.duration}, ${priceText}. ${tour.description}`
        })

        const intro = lowerQuery.includes("recom") || lowerQuery.includes("recommend")
            ? copy.tourRecommendation
            : copy.tourMatches

        return {
            message: [intro, ...lines, copy.tourFollowUp].join("\n"),
            suggestions,
            usedFallback: true,
        }
    }

    if (context.relevantBlogs.length > 0) {
        return {
            message: [
                copy.blogIntro,
                ...context.relevantBlogs.map((post) => `- ${post.title}: ${post.excerpt}`),
                copy.blogFollowUp,
            ].join("\n"),
            suggestions,
            usedFallback: true,
        }
    }

    return {
        message: copy.generic,
        suggestions,
        usedFallback: true,
    }
}

function extractResponseText(payload: unknown) {
    if (!payload || typeof payload !== "object") {
        return ""
    }

    const outputText = (payload as { output_text?: unknown }).output_text
    if (typeof outputText === "string" && outputText.trim()) {
        return outputText.trim()
    }

    const output = (payload as { output?: Array<{ content?: Array<{ type?: string; text?: string }> }> }).output
    if (!Array.isArray(output)) {
        return ""
    }

    const text = output
        .flatMap((item) => item.content ?? [])
        .map((item) => (typeof item.text === "string" ? item.text : ""))
        .join("\n")
        .trim()

    return text
}

async function getOpenAiReply(messages: AssistantTurn[], contextText: string, locale: AssistantLocale) {
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
        return null
    }

    const model = process.env.OPENAI_MODEL ?? "gpt-5.4-mini"
    const input = [
        {
            role: "system",
            content: [
                {
                    type: "input_text",
                    text: [
                        "You are the virtual assistant for Avis Tours, a Puerto Pizarro, Tumbes tour website.",
                        getCopy(locale).languageInstruction,
                        "Use only the provided context. If something is unclear, say so honestly and offer WhatsApp or the contact page.",
                        "Do not invent prices, fixed tide schedules, availability or policies not stated in the context.",
                        "When discussing tides, describe them as an informational reference, never as exact nautical data.",
                        "When the user asks for recommendations, suggest the most suitable tour or blog and explain why.",
                        "",
                        "Contexto del sitio:",
                        contextText,
                    ].join("\n"),
                },
            ],
        },
        ...messages.slice(-8).map((message) => ({
            role: message.role,
            content: [
                {
                    type: "input_text",
                    text: message.content,
                },
            ],
        })),
    ]

    const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model,
            reasoning: { effort: "low" },
            max_output_tokens: 500,
            input,
        }),
    })

    if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`OpenAI error: ${response.status} ${errorText}`)
    }

    const payload = await response.json()
    return extractResponseText(payload)
}

export async function generateAssistantReply(messages: AssistantTurn[], locale: AssistantLocale = defaultLocale) {
    const lastUserMessage = [...messages].reverse().find((message) => message.role === "user")
    const query = lastUserMessage?.content.trim() ?? ""
    const context = await buildContext(query, locale)
    const suggestions = buildSuggestions(
        query,
        context.relevantTours.map((tour) => tour.slug),
        context.relevantBlogs.map((post) => post.slug),
        locale,
    )

    try {
        const openAiReply = await getOpenAiReply(messages, context.context, locale)

        if (openAiReply) {
            return {
                message: openAiReply,
                suggestions,
                usedFallback: false,
            } satisfies AssistantReply
        }
    } catch (error) {
        console.error("Could not generate OpenAI assistant reply", error)
    }

    return buildFallbackResponse(query, context, locale)
}
