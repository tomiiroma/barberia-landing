import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _cormorant = Cormorant({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "Te Sentis Bien | Estética y Bienestar Integral",
  description:
    "Tratamientos de cosmiatría y estética personalizados. Patricia González, Cosmiatra M.N. 62.996. Atención en Microcentro y Caballito, CABA.",
  generator: "v0.app",
  keywords: ["cosmiatría", "estética", "CABA", "tratamientos faciales", "masajes", "HIFU", "limpieza facial"],
  icons: {
    icon: [
      {
        url: "/nuevo_logo.png",
        type: "image/png",
      },
    ],
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
