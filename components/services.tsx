import { CalendarDays, Scissors, Sparkles, Crown } from "lucide-react"
import { BOOKING_PUBLIC_URL } from "@/lib/booking"

const services = [
  {
    icon: Scissors,
    title: "Corte premium",
    blurb: "Fade, textura, degradé. Lo que pinte, con criterio.",
    items: ["Degradé a piel o bajo", "Diseño y líneas", "Peinado y acabado"],
  },
  {
    icon: Crown,
    title: "Barba y detalle",
    blurb: "Perfilado, contornos, simetría. Nada descuidado.",
    items: ["Barba al ras o al largo", "Línea al cuello", "Combo con el corte"],
  },
  {
    icon: Sparkles,
    title: "Color / técnica",
    blurb: "Cambio de look con mano segura.",
    items: ["Mechas y claritos", "Color y retoques", "Ondas y alisados"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 px-4 scroll-mt-20 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Servicios</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-3 text-balance">
            El look que buscás, lo hacemos real.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-pretty">
            Cortes prolijos, barba, color y detalles finos. Reservá en la agenda, vení al local y salí listo.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#121212] to-[#0a0a0a] p-6 md:p-7 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)] hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">{s.title}</h3>
                    <p className="text-sm text-white/50 mt-1">{s.blurb}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 pl-0.5">
                  {s.items.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-lg py-2.5 px-4 text-sm transition-colors"
                >
                  <CalendarDays className="h-4 w-4" />
                  Pedir turno
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/12 via-primary/5 to-transparent p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <p className="font-display text-2xl md:text-3xl text-primary">Corte desde $15.000</p>
            <p className="text-white/60 text-sm mt-2 max-w-lg leading-relaxed">
              Incluye cejas, barba, líneas y diseño. Cada visita cuenta en tu tarjeta de fidelidad Vallejiano; el 6.º corte es
              sin cargo cuando completás los sellos. Confirmá vigencia por mensaje.
            </p>
          </div>
          <a
            href={BOOKING_PUBLIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center bg-primary text-primary-foreground font-bold rounded-xl px-8 py-4 text-base hover:brightness-110 transition-all min-h-[52px] ring-1 ring-white/10"
          >
            Reservar turno
          </a>
        </div>
        <p className="text-center text-xs text-white/30 mt-6">*Inclusión del pack al coordinar con el local.</p>
      </div>
    </section>
  )
}
