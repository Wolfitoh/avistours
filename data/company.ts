export const companyProfile = {
    brandName: "Avis Tours",
    legalName: "Avis Tours Operador Turístico E.I.R.L.",
    tradeName: "Avis Tours",
    ruc: "20605149082",
    phone: "+51 959 828 235",
    whatsapp: "51959828235",
    email: "avistourssac@gmail.com",
    address: "Muelle turístico de Puerto Pizarro, Tumbes, Perú",
    streetAddress: "Muelle turístico de Puerto Pizarro",
    locality: "Puerto Pizarro",
    region: "Tumbes",
    country: "PE",
    schedule: "Lunes a domingo, 8:00 a.m. - 5:00 p.m.",
    serviceArea: ["Puerto Pizarro", "Tumbes", "Manglares de Tumbes"],
    social: {
        facebook: "",
        instagram: "",
    },
    trustHighlights: [
        "Atención directa por WhatsApp antes de reservar.",
        "Coordinación de salidas según marea y clima.",
        "Punto de encuentro cerca del muelle turístico de Puerto Pizarro.",
    ],
} as const

export function getCompanySameAs() {
    return Object.values(companyProfile.social).filter(Boolean)
}
