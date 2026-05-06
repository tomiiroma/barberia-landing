import { CalendarDays, ArrowRight } from "lucide-react"
import { BOOKING_PUBLIC_URL } from "@/lib/booking"

export function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-[#050505] border-t border-white/8">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,oklch(0.5_0.1_85/0.1),transparent)]"
        aria-hidden
      />

      <div className="container relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-[1.05] text-balance">
          Reservá hoy,
          <span className="text-primary"> sumá desde la primera</span>
        </h2>
        <p className="text-lg text-white/50 mb-10 max-w-md mx-auto text-pretty">
          Elegí día y horario en la agenda. En el local pedí la tarjeta Vallejiano: cada visita cuenta y el 6.º corte es
          sin cargo cuando completás los sellos — Boulogne Sur Mer 445, Once.
        </p>

        <a
          href={BOOKING_PUBLIC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full max-w-md mx-auto"
        >
          <span className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground font-bold text-lg md:text-xl px-8 py-5 rounded-2xl shadow-2xl shadow-amber-900/30 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 min-h-[56px]">
            <CalendarDays className="h-6 w-6 shrink-0" />
            Reservar turno
            <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
        <p className="text-xs text-white/35 mt-5">11 4422-3540 · Lun a Sáb 10–20 h</p>
      </div>
    </section>
  )
}
