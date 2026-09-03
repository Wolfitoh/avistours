import Image from "next/image"
import NextLink from "next/link"
import { getTranslations } from "next-intl/server"
import {
    ChevronRight,
    ChevronUp,
    Facebook,
    Heart,
    Instagram,
    Mail,
    MapPin,
    Phone,
} from "lucide-react"
import NewsletterForm from "@/components/newsletter/NewsletterForm"
import { companyProfile, getCompanySameAs } from "@/data/company"
import { Link } from "@/i18n/navigation"

const sameAsLinks = getCompanySameAs()
const socialLinks = [
    ...(companyProfile.social.facebook ? [{ label: "Facebook", href: companyProfile.social.facebook, icon: Facebook }] : []),
    ...(companyProfile.social.instagram ? [{ label: "Instagram", href: companyProfile.social.instagram, icon: Instagram }] : []),
    { label: "Email", href: `mailto:${companyProfile.email}`, icon: Mail },
]

export default async function Footer({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "Footer" })
    const companyLinks = [
        { label: t("home"), href: "/" },
        { label: t("tours"), href: "/packages" },
        { label: t("blog"), href: "/blog" },
        { label: t("operator"), href: "/contact" },
    ] as const

    return (
        <footer className="relative bg-[#10182b] text-white">
            <div className="max-w-6xl mx-auto px-4 py-10 lg:py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_0.8fr_1.05fr]">
                    <div>
                        <Link
                            href="/"
                            aria-label="AviTours"
                            className="relative inline-flex h-24 w-[168px] items-center"
                        >
                            <Image
                                src="/logo_avistours.webp"
                                alt="Logo AviTours"
                                fill
                                sizes="168px"
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-sm text-white/75 leading-6 mt-5 max-w-xs">
                            {t("description")}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                            {socialLinks.map((item) => {
                                const Icon = item.icon

                                return (
                                    <NextLink
                                        key={item.label}
                                        href={item.href}
                                        aria-label={item.label}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                        className="h-8 w-8 rounded-md border border-white/10 text-white/65 flex items-center justify-center hover:text-white hover:border-green-500 hover:bg-green-500 transition"
                                    >
                                        <Icon size={14} />
                                    </NextLink>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold tracking-wide">
                            {t("office")}
                        </h2>
                        <div className="mt-5 space-y-4 text-sm text-white/75">
                            <p className="font-medium text-white">
                                {companyProfile.legalName}
                            </p>
                            <div className="flex gap-3 leading-6">
                                <MapPin size={16} className="text-green-500 mt-1 shrink-0" />
                                <span>{companyProfile.streetAddress}<br />{companyProfile.region}, Perú</span>
                            </div>
                            <NextLink href={`mailto:${companyProfile.email}`} className="flex items-center gap-3 hover:text-white transition">
                                <Mail size={16} className="text-green-500" />
                                {companyProfile.email}
                            </NextLink>
                            <NextLink href={`tel:${companyProfile.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 hover:text-white transition">
                                <Phone size={16} className="text-green-500" />
                                {companyProfile.phone}
                            </NextLink>
                            {sameAsLinks.length === 0 && (
                                <p className="text-xs leading-5 text-white/55">
                                    {t("contactNote")}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold tracking-wide">
                            {t("information")}
                        </h2>
                        <ul className="mt-5 space-y-3 text-sm text-white/75">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="inline-flex items-center gap-2 hover:text-white transition">
                                        <ChevronRight size={14} />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold tracking-wide">
                            {t("news")}
                        </h2>
                        <p className="text-sm text-white/75 leading-6 mt-5">
                            {t("newsDescription")}
                        </p>
                        <NewsletterForm />
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-4 py-5 text-center text-sm text-white/80">
                    {t("copyrightPrefix")} {" "}
                    <Heart size={13} fill="currentColor" className="inline text-green-500 mx-1" />
                    {" "}{t("copyrightSuffix")}
                </div>
            </div>

            <NextLink
                href="#top"
                aria-label={t("backToTop")}
                className="absolute right-5 bottom-5 h-8 w-8 rounded-md bg-green-500/20 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
            >
                <ChevronUp size={16} />
            </NextLink>
        </footer>
    )
}
