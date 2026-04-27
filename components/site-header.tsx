"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { waLink, WA_PRESETS } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por qué" },
  { href: "#galeria", label: "Trabajos" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const wa = waLink(WA_PRESETS.default)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/60 to-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 h-16 md:h-[4.5rem] flex items-center justify-between gap-4">
        <Link href="#" className="flex items-center gap-2.5 group shrink-0">
          <Image
            src="/vallejos-logo.png"
            alt="Vallejos Barbería 2.0"
            width={48}
            height={48}
            className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg"
            priority
          />
          <span className="hidden sm:block font-display text-lg md:text-xl tracking-wide text-white group-hover:text-primary transition-colors">
            VALLEJOS
            <span className="text-white/50 font-sans text-xs block leading-none -mt-0.5 font-normal">BARBERÍA 2.0</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-white/75 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold text-sm px-4 py-2.5 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-amber-900/20"
          >
            Reservar
          </a>
          <button
            type="button"
            className="lg:hidden p-2 text-white/90"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-md px-4 py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-base text-white/85 border-b border-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center bg-primary text-primary-foreground font-bold py-3.5 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Reservar por WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
