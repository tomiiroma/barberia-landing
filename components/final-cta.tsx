import { MessageCircle, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  "Consulta 100% sin cargo",
  "Sin lista de espera",
  "Atención personalizada",
  "Resultados garantizados",
]

export function FinalCTA() {
  const whatsappLink = "https://wa.me/5491161233500?text=Hola%2C%20quiero%20reservar%20mi%20consulta%20gratis"

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-foreground">
      {/* Fondos decorativos sobre fondo oscuro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,oklch(0.62_0.155_349/0.15),transparent)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative mx-auto max-w-3xl text-center">

        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 px-4 py-2 rounded-full mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Sin costo de consulta</span>
        </div>

        {/* Headline demoledor */}
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] text-balance">
          Tu mejor versión
          <br />
          <span className="text-primary">está a un mensaje</span>
          <br />
          de distancia.
        </h2>

        {/* Subtítulo emocional */}
        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto leading-relaxed text-pretty">
          Miles de mujeres ya dieron el primer paso.
          Te acompañamos en todo el proceso hacia la versión de vos que querés ser.
        </p>

        {/* Beneficios rápidos */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-sm text-white/70"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
              {b}
            </div>
          ))}
        </div>

        {/* CTA principal */}
        <a href={whatsappLink} className="group inline-flex w-full max-w-md">
          <div className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300">
            <MessageCircle className="h-6 w-6 flex-shrink-0" />
            Escribime por WhatsApp
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </a>

        {/* Microcopy */}
        <p className="text-sm text-white/40 mt-4">
          Respondemos en el día · Sin compromiso · Gratis
        </p>

      </div>
    </section>
  )
}
