import { Poppins } from "next/font/google"
import type { Metadata } from "next"
import GoogleScripts, { GoogleTagManagerNoScript } from "@/components/analytics/GoogleScripts"
import { brandName, siteWideKeywords } from "@/data/seo"
import { absoluteUrl, siteConfig } from "@/data/site"
import "./globals.css";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
})

export const metadata: Metadata = {
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-theme="light">
      <body className={poppins.className}>
        <GoogleScripts />
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  )
}
