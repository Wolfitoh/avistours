import { companyProfile } from "./company"

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://avistours.com").replace(/\/$/, "")

export const siteConfig = {
    name: companyProfile.brandName,
    legalName: companyProfile.legalName,
    description: "Tours en Puerto Pizarro y manglares de Tumbes con guía local: islas, aves, cocodrilos y reserva por WhatsApp.",
    url: siteUrl,
    phone: companyProfile.phone,
    email: companyProfile.email,
    address: companyProfile.address,
    social: companyProfile.social,
}

export function absoluteUrl(path: string) {
    if (path.startsWith("http")) {
        return path
    }

    return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}
