import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Vallejos Barbería 2.0 | Corte, barba y diseño · Once, CABA",
  description:
    "Barbería y peluquería urbana en Once. Fades, barba, cejas, diseño, color y más. Lunes a sábado 10–20 h. Reservá por WhatsApp. Boulogne Sur Mer 445.",
  keywords: [
    "barbería Once",
    "corte fade CABA",
    "barba diseño Once",
    "Vallejos Barbería",
    "Boulogne Sur Mer 445",
    "peluquería masculina Buenos Aires",
  ],
  openGraph: {
    title: "Vallejos Barbería 2.0",
    description: "Corte, barba y diseño. Reservá tu turno por WhatsApp.",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/vallejos-logo.png",
        width: 1200,
        height: 1200,
        alt: "Vallejos Barbería 2.0 — logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vallejos Barbería 2.0",
    description: "Corte, barba y diseño · Once, CABA. Reservá por WhatsApp.",
    images: ["/vallejos-logo.png"],
  },
  // Favicon y Apple Touch: `app/icon.png` y `app/apple-icon.png` (misma identidad que /vallejos-logo.png)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className="dark">
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
