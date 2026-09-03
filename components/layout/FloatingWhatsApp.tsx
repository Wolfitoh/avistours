import { MessageCircle } from "lucide-react"
import { getTranslations } from "next-intl/server"
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink"
import { companyProfile } from "@/data/company"

export default async function FloatingWhatsApp({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "FloatingWhatsApp" })

    return (
        <WhatsAppLink
            number={companyProfile.whatsapp}
            message={t("message")}
            ariaLabel={t("ariaLabel")}
            className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-green-500 text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] flex items-center justify-center hover:bg-green-600 transition md:h-14 md:w-14"
        >
            <MessageCircle size={24} aria-hidden="true" />
        </WhatsAppLink>
    )
}
