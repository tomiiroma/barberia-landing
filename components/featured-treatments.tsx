import { MessageCircle, Sparkles, Zap, Droplets, Star } from "lucide-react"

const featured = [
  {
    icon: Zap,
    badge: "Sin cirugía",
    title: "HIFU",
    subtitle: "Ultrasonido focalizado de alta intensidad",
    description:
      "El tratamiento de lifting más avanzado del mercado. Estimula el colágeno desde adentro para tensar y rejuvenecer el rostro con resultados que duran hasta 12 meses.",
    highlight: "Efecto lifting inmediato",
    gradient: "from-rose-50 via-pink-50 to-fuchsia-50/50",
    border: "border-rose-200/60",
    badgeStyle: "bg-rose-100 text-rose-600",
    message: "Hola%2C%20quiero%20consultar%20sobre%20el%20tratamiento%20HIFU",
  },
  {
    icon: Star,
    badge: "Más solicitado",
    title: "Glúteos",
    subtitle: "Tonificación y modelado corporal",
    description:
      "Técnicas avanzadas para tonificar, voluminizar y moldear la zona glútea. Sin rellenos, sin cirugía. Resultados naturales y progresivos.",
    highlight: "Volumen y firmeza natural",
    gradient: "from-fuchsia-50 via-rose-50 to-pink-50/40",
    border: "border-fuchsia-200/50",
    badgeStyle: "bg-fuchsia-100 text-fuchsia-600",
    message: "Hola%2C%20quiero%20consultar%20sobre%20el%20tratamiento%20de%20gl%C3%BAteos",
  },
  {
    icon: Sparkles,
    badge: "Alta demanda",
    title: "Limpieza Facial Profunda",
    subtitle: "Higiene facial completa y renovación celular",
    description:
      "Protocolo completo de limpieza que libera poros, elimina células muertas y deja tu piel radiante. Ideal para mantener una piel sana y luminosa.",
    highlight: "Piel radiante desde la 1ª sesión",
    gradient: "from-pink-50 via-rose-50 to-amber-50/30",
    border: "border-pink-200/50",
    badgeStyle: "bg-pink-100 text-pink-600",
    message: "Hola%2C%20quiero%20consultar%20sobre%20la%20limpieza%20facial%20profunda",
  },
  {
    icon: Droplets,
    badge: "Detoxificante",
    title: "Detox Iónica",
    subtitle: "Depuración y eliminación de toxinas",
    description:
      "Tratamiento bioenergético que elimina toxinas acumuladas a través de los pies mediante ionización. Mejora la energía, la circulación y el bienestar general.",
    highlight: "Bienestar y energía renovada",
    gradient: "from-sky-50/60 via-rose-50 to-secondary/30",
    border: "border-sky-200/40",
    badgeStyle: "bg-sky-100 text-sky-600",
    message: "Hola%2C%20quiero%20consultar%20sobre%20la%20detox%20i%C3%B3nica",
  },
]

export function FeaturedTreatments() {
  return (
    <section className="py-20 md:py-28 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/8 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Los más solicitados</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tratamientos que
            <br className="hidden md:block" /> transforman
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Tecnología de vanguardia y técnica profesional para resultados visibles y duraderos.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid md:grid-cols-2 gap-5">
          {featured.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`group relative bg-gradient-to-br ${item.gradient} rounded-3xl p-7 md:p-9 border ${item.border} hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden`}
              >
                {/* Decorativo de fondo */}
                <div className="absolute top-4 right-4 opacity-5">
                  <Icon className="h-24 w-24 text-foreground" />
                </div>

                {/* Badge de categoría */}
                <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${item.badgeStyle}`}>
                  {item.badge}
                </span>

                {/* Ícono + Título */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</p>
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-sm md:text-base text-foreground/70 mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlight */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-px flex-1 bg-current opacity-10" />
                  <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                    {item.highlight}
                  </span>
                  <div className="h-px flex-1 bg-current opacity-10" />
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/5491161233500?text=${item.message}`}
                  className="flex items-center gap-2 bg-white/80 hover:bg-primary hover:text-white text-primary backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 shadow-sm w-fit border border-white/60"
                >
                  <MessageCircle className="h-4 w-4" />
                  Quiero consultar
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
