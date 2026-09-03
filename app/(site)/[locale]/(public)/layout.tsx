import TopBar from "@/components/layout/TopBar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import AvisToursAssistant from "@/components/assistant/AvisToursAssistant"

export default async function PublicLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    return (
        <div id="top">
            <TopBar locale={locale} />
            <Navbar />
            <main>{children}</main>
            <Footer locale={locale} />
            <AvisToursAssistant />
            <FloatingWhatsApp locale={locale} />
        </div>
    )
}
