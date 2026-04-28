"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { waLink, WA_PRESETS } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#volver-vallejos", label: "Fidelidad" },
  { href: "#por-que", label: "Por qué" },
  { href: "#galeria", label: "Trabajos" },
  { href: "#ubicacion", label: "Ubicación" },
]

/** Ancho alineado al hero premium (~1400px) — más aire horizontal */
const SHELL =
  "mx-auto w-full max-w-[1400px] px-7 sm:px-11 md:px-12 lg:px-14 xl:px-16 2xl:px-[4.75rem]"

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
        "fixed top-0 left-0 right-0 z-50 w-full transition-[background,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-white/[0.08] bg-background/94 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "border-b border-white/[0.05] bg-gradient-to-b from-black/50 via-black/15 to-transparent"
      )}
    >
      <div
        className={cn(
          SHELL,
          "relative flex min-h-[76px] items-center justify-between gap-6 py-2 lg:h-[88px] lg:min-h-0 lg:py-0"
        )}
      >
        <Link
          href="#"
          className="relative z-10 flex min-w-0 shrink-0 items-center gap-4 pr-2 sm:gap-4 md:gap-5 group"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/vallejos-logo.png"
            alt="Vallejos Barbería 2.0"
            width={240}
            height={64}
            className="h-[40px] w-auto max-h-[42px] shrink-0 object-contain rounded-lg md:h-[52px] md:max-h-[52px] lg:h-14 lg:max-h-[56px]"
            priority
          />
          <span className="hidden font-display text-xl tracking-wide text-white transition-colors group-hover:text-primary sm:block md:text-2xl lg:text-[1.85rem]">
            VALLEJOS
            <span className="mt-1 block font-sans text-xs font-normal tracking-normal text-white/45 md:text-sm">
              BARBERÍA 2.0
            </span>
          </span>
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2.5 text-[13px] text-white/68 transition-colors hover:text-white xl:px-3.5 xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2.5">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-[0_10px_28px_-8px_rgba(0,0,0,0.45)] ring-1 ring-white/12 transition-all hover:brightness-110 active:scale-[0.98] sm:hidden"
          >
            Reservar turno
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_10px_28px_-8px_rgba(0,0,0,0.45)] ring-1 ring-white/12 transition-all hover:brightness-110 active:scale-[0.98] sm:inline-flex md:px-8 md:text-base lg:py-4"
          >
            Reservar turno
          </a>
          <button
            type="button"
            className="p-2 text-white/90 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-background/96 backdrop-blur-xl">
          <div className={cn(SHELL, "flex flex-col gap-1 py-5")}>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-white/5 py-3.5 text-base text-white/85"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center rounded-xl bg-primary py-4 text-base font-bold text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              Reservar turno
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
