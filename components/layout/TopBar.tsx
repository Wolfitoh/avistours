import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { companyProfile } from "@/data/company"

export default async function TopBar({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "TopBar" })

    return (
        <div className="hidden md:block w-full bg-[#0b132b] text-white/70 text-[13px]">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* LEFT */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-green-500" />
                        <span>{t("schedule")}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-green-500" />
                        <span>{companyProfile.locality}, {companyProfile.region}</span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-6">

                    {/* Email */}
                    <Link href={`mailto:${companyProfile.email}`} className="flex items-center gap-2 hover:text-white transition">
                        <Mail size={16} className="text-green-500" />
                        <span>{companyProfile.email}</span>
                    </Link>
                    <Link href={`tel:${companyProfile.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-white transition">
                        <Phone size={16} className="text-green-500" />
                        <span>{companyProfile.phone}</span>
                    </Link>

                </div>

            </div>
        </div>
    )
}
