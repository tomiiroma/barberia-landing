import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Te Sentís Bien | Estética y Bienestar Integral · Patricia González",
  description:
    "Tratamientos de cosmiatría y estética personalizados en CABA. Patricia González, Cosmiatra M.N. 62.996. Consultas sin cargo. Microcentro y Caballito.",
  keywords: [
    "cosmiatría CABA",
    "estética facial",
    "HIFU sin cirugía",
    "masajes terapéuticos",
    "limpieza facial profunda",
    "tratamientos corporales",
    "Patricia González cosmiatra",
    "estética Microcentro",
    "estética Caballito",
    "detox iónica",
    "glúteos",
    "bienestar femenino",
  ],
  icons: {
    icon: [{ url: "/nuevo_logo.png", type: "image/png" }],
    apple: "/nuevo_logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
