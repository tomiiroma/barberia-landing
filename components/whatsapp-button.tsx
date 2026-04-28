"use client"

import { CalendarDays } from "lucide-react"
import { BOOKING_PUBLIC_URL } from "@/lib/booking"

export function WhatsAppButton() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#0a0a0a]/95 backdrop-blur-md border-t border-primary/20 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <a
            href={BOOKING_PUBLIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-amber-900/30 transition-all duration-200 active:scale-[0.98] min-h-[52px]"
          >
            <CalendarDays className="h-5 w-5 shrink-0" />
            Reservar turno
          </a>
          <p className="text-center text-[11px] text-white/35 mt-2">Lun a Sáb 10–20 h · Once, CABA</p>
        </div>
      </div>

      <div className="h-[5.5rem] md:hidden" aria-hidden />

      <a
        href={BOOKING_PUBLIC_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-7 right-7 z-50 items-center gap-2.5 bg-primary text-primary-foreground px-5 py-3.5 rounded-2xl text-sm font-bold shadow-xl shadow-amber-900/40 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
        title="Reservar turno — agenda online"
      >
        <CalendarDays className="h-5 w-5 shrink-0" />
        Reservar turno
      </a>
    </>
  )
}
