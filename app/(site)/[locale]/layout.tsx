import { Poppins } from "next/font/google"
import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import GoogleScripts, { GoogleTagManagerNoScript } from "@/components/analytics/GoogleScripts"
import { brandName, siteWideKeywords } from "@/data/seo"
import { absoluteUrl, siteConfig } from "@/data/site"
import { routing } from "@/i18n/routing"
import { getLocaleConfig, getTranslationLocale } from "@/i18n/locales"
import { CurrencyProvider } from "@/components/currency/CurrencyProvider"
import "@/app/globals.css"

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
})

const spanishMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${brandName} | Tours en Puerto Pizarro y manglares de Tumbes`,
    template: `%s | ${brandName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteWideKeywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: siteConfig.name,
    title: `${brandName} | Tours en Puerto Pizarro y manglares de Tumbes`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: absoluteUrl("/images-optimized/hero/bg_inicio2.webp"),
        width: 1200,
        height: 630,
        alt: "Paseo turístico por manglares de Puerto Pizarro en Tumbes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandName} | Tours en Puerto Pizarro y manglares de Tumbes`,
    description: siteConfig.description,
    images: [absoluteUrl("/images-optimized/hero/bg_inicio2.webp")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
} satisfies Metadata

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (getTranslationLocale(locale) !== "en") {
    return spanishMetadata
  }

  return {
    ...spanishMetadata,
    title: {
      default: `${brandName} | Puerto Pizarro tours and Tumbes mangroves`,
      template: `%s | ${brandName}`,
    },
    description: "Puerto Pizarro tours through Tumbes mangroves, islands, birds and crocodiles, with local guidance and WhatsApp booking.",
    keywords: [brandName, "Puerto Pizarro tours", "Tumbes mangroves", "Bird Island tour", "Puerto Pizarro crocodiles"],
    alternates: {
      canonical: "/en",
    },
    openGraph: {
      ...spanishMetadata.openGraph,
      locale: "en_US",
      url: absoluteUrl("/en"),
      title: `${brandName} | Puerto Pizarro tours and Tumbes mangroves`,
      description: "Puerto Pizarro boat tours through mangroves, islands, birds, crocodiles and the mouth of the sea.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages({ locale })

  return (
    <html lang={getLocaleConfig(locale).htmlLang} data-theme="light">
      <body className={poppins.className}>
        <GoogleScripts />
        <GoogleTagManagerNoScript />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CurrencyProvider>{children}</CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
