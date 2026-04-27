import { MapPin, Shield, Timer, Scissors } from "lucide-react"

const pillars = [
  {
    icon: Shield,
    title: "Confianza de verdad",
    text: "Trabajo a la vista: pedís el estilo, lo cerramos en el espejo. Sin sorpresas.",
  },
  {
    icon: Timer,
    title: "Entrada y salida",
    text: "Coordinamos turno por WhatsApp. Venís, te atienden, salís con el corte listo para el laburo o la joda.",
  },
  {
    icon: Scissors,
    title: "Técnica y ojo",
    text: "Fade, diseño en rayita, barba simétrica, color cuando toca. Mano que entiende el barrio y el espejo.",
  },
  {
    icon: MapPin,
    title: "Once, a mano",
    text: "Boulogne Sur Mer 445. Cerca de todo, fácil de llegar. Si no conocés, te guiamos al toque.",
  },
]

export function WhyUs() {
  return (
    <section id="por-que" className="py-16 md:py-24 px-4 scroll-mt-20 bg-[#070707] relative">
      <div
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(135deg,transparent_40%,oklch(0.7_0.1_85)_50%,transparent_60%)] pointer-events-none"
        aria-hidden
      />
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
            Por qué elegirnos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-3 text-balance">
            Barrio con nivel. Resultado de estudio.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-pretty text-base">
            No vendemos humo: vendemos corte prolijo, atención directa y un local que ya conocés o que vas a querer
            volver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="flex gap-4 p-6 md:p-7 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)] hover:border-primary/25 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/12 border border-primary/30 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-white mb-1.5 tracking-wide">{p.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
