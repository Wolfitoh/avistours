import { redirect } from "@/i18n/navigation"

export default async function ListingPage({
    params,
}: {
    params: Promise<{ locale: "es" | "en" }>
}) {
    const { locale } = await params
    redirect({ href: "/packages", locale })
}
