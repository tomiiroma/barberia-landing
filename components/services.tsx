import { MessageCircle, Hand, Zap, Smile, Flower2 } from "lucide-react"

const services = [
  {
    icon: Hand,
    accent: "from-rose-100 to-pink-50",
    accentBorder: "border-rose-200/60",
    accentIcon: "bg-rose-100 text-rose-500",
    title: "Masajes",
    tagline: "Relajación y recuperación profunda",
    treatments: [
      "Terapéuticos",
      "Holísticos",
      "Kinesiológicos",
      "Drenaje linfático",
      "Pre y post quirúrgico",
    ],
    cta: "Consultar masajes",
    message: "Hola%2C%20quiero%20consultar%20sobre%20masajes",
  },
  {
    icon: Zap,
    accent: "from-fuchsia-50 to-rose-50",
    accentBorder: "border-fuchsia-200/50",
    accentIcon: "bg-fuchsia-50 text-fuchsia-500",
    title: "Corporales",
    tagline: "Modelado y tratamiento corporal integral",
    treatments: ["Lipo", "Celulitis", "Flacidez", "Glúteos", "Peptonas"],
    cta: "Consultar corporales",
    message: "Hola%2C%20quiero%20consultar%20sobre%20tratamientos%20corporales",
  },
  {
    icon: Smile,
    accent: "from-pink-50 to-rose-50",
    accentBorder: "border-pink-200/60",
    accentIcon: "bg-pink-50 text-pink-500",
    title: "Faciales",
    tagline: "Rejuvenecimiento y cuidado de la piel",
    treatments: ["Limpieza profunda", "Lifting", "Antiage", "HIFU", "Exosomas"],
    cta: "Consultar faciales",
    message: "Hola%2C%20quiero%20consultar%20sobre%20tratamientos%20faciales",
  },
  {
    icon: Flower2,
    accent: "from-rose-50 to-amber-50/40",
    accentBorder: "border-rose-200/40",
    accentIcon: "bg-amber-50 text-amber-600",
    title: "Circuito Spa",
    tagline: "Experiencia de bienestar completa",
    treatments: ["Masajes + Detox iónica", "Limpieza profunda integral"],
    cta: "Consultar spa",
    message: "Hola%2C%20quiero%20consultar%20sobre%20el%20circuito%20spa",
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-28 px-4 bg-secondary/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Nuestros servicios</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Todo lo que necesitás
            <br className="hidden md:block" /> en un solo lugar
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Tratamientos especializados para tu cuidado facial, corporal y bienestar integral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-3xl overflow-hidden border ${service.accentBorder} hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.accent} border-b ${service.accentBorder}`} />
                <div className="p-6">
                  <div className="mb-4">
                    <div className={`h-10 w-10 rounded-xl ${service.accentIcon} flex items-center justify-center mb-3`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{service.tagline}</p>
                  </div>
                  <div className="h-px bg-border mb-4" />
                  <ul className="space-y-2 mb-6">
                    {service.treatments.map((treatment) => (
                      <li key={treatment} className="flex items-center gap-2 text-sm text-foreground/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {treatment}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/5491161233500?text=${service.message}`}
                    className="flex items-center justify-center gap-2 w-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl py-2.5 text-sm font-medium transition-all duration-200"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {service.cta}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          ¿No encontrás lo que buscás?{" "}
          <a
            href="https://wa.me/5491161233500?text=Hola%2C%20quiero%20consultar%20sobre%20tratamientos"
            className="text-primary font-medium underline underline-offset-2 hover:text-primary/80"
          >
            Escribinos y lo vemos juntas.
          </a>
        </p>
      </div>
    </section>
  )
}
