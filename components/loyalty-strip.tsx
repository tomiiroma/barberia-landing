import { HeartHandshake, CalendarDays } from "lucide-react"
import { BOOKING_PUBLIC_URL } from "@/lib/booking"

export function LoyaltyStrip() {
  return (
    <section
      id="volver-vallejos"
      className="scroll-mt-20 border-y border-primary/15 bg-[#070707] py-14 md:py-20 px-4 relative"
    >
      <div
        className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(135deg,transparent_35%,oklch(0.65_0.12_85)_48%,transparent_62%)] pointer-events-none"
        aria-hidden
      />
      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-14">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              Tarjeta de fidelidad Vallejiano
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4 text-balance leading-tight">
              Te cortamos bien. Si volvés, <span className="text-primary">se nota en serio.</span>
            </h2>
            <p className="text-white/55 text-sm sm:text-base leading-relaxed text-pretty">
              La confianza no es un slogan: es que te reconozcan el perfil, que el turno sea fácil y que el resultado te
              cierre todos los meses. La tarjeta de fidelidad Vallejiano es eso en práctica: cinco visitas selladas y el
              sexto corte sin cargo — un gesto de cercanía para quien ya eligió quedarse, no una promo suelta de cartel.
            </p>
            <ul className="mt-6 space-y-2.5 text-left text-sm text-white/60 max-w-md mx-auto lg:mx-0">
              <li className="flex gap-2.5 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>Pedila en el mostrador cuando pases: sin apps ni letra pequeña.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>Mismo estándar cada vez; el premio es para quien vuelve con ganas.</span>
              </li>
            </ul>
          </div>

          <div className="w-full max-w-md mx-auto lg:mx-0 lg:shrink-0 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-8 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.85)]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-xl bg-primary/12 border border-primary/35 flex items-center justify-center text-primary">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg text-white tracking-wide">5 visitas · 6.º de regalo</p>
                <p className="text-xs text-white/45 mt-0.5">Números que tenés en la mano, no en un mail.</p>
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-6">
              Primera vez o de vuelta: elegí horario en la agenda cuando quieras; en el sillón también podés aclarar
              cualquier consulta antes de ponerte en marcha.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={BOOKING_PUBLIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-3.5 px-4 rounded-xl hover:brightness-110 transition-all min-h-[48px] ring-1 ring-white/10"
              >
                <CalendarDays className="h-4 w-4 shrink-0" />
                Primer turno + tarjeta
              </a>
              <a
                href={BOOKING_PUBLIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 border border-primary/45 text-primary hover:bg-primary/10 font-semibold text-sm py-3.5 px-4 rounded-xl transition-colors min-h-[48px]"
              >
                <CalendarDays className="h-4 w-4 shrink-0" />
                Vuelvo a cortarme
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
