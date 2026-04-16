import { Heart, Sparkles, CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react"

const values = [
  {
    icon: Heart,
    number: "01",
    title: "Te acompaño en cada paso",
    description:
      "Seguimiento continuo antes, durante y después de cada tratamiento. No sos un número, sos una persona.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Tratamientos hechos para vos",
    description:
      "Cada plan es 100% personalizado según tu piel, tu cuerpo y tus objetivos. Sin protocolos genéricos.",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Resultados que se ven y se sienten",
    description:
      "Combinamos tecnología de vanguardia con técnica profesional para que notes la diferencia desde la primera sesión.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Atención certificada con matrícula",
    description:
      "Patricia González, Cosmiatra con matrícula nacional vigente M.N. 62.996. Seguridad y profesionalismo garantizados.",
  },
]

export function ValueProposition() {
  const whatsappLink =
    "https://wa.me/5491161233500?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20tratamientos"

  return (
    <section className="py-20 md:py-28 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">

        {/* Encabezado de sección */}
        <div className="text-center mb-14 md:mb-18">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Por qué elegirnos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            La diferencia la hace
            <br className="hidden md:block" /> quien te atiende
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Más de una década de experiencia en estética integral con enfoque en tu bienestar real.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.number}
                className="group relative bg-background rounded-2xl p-7 md:p-8 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Número decorativo de fondo */}
                <span className="absolute top-5 right-6 text-5xl font-bold text-primary/5 font-serif select-none">
                  {value.number}
                </span>

                <div className="relative flex gap-4 items-start">
                  {/* Ícono */}
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1.5">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA central */}
        <div className="text-center">
          <a href={whatsappLink}>
            <div className="group inline-flex items-center gap-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300">
              <MessageCircle className="h-5 w-5" />
              Hacer una consulta gratuita
            </div>
          </a>
          <p className="text-sm text-muted-foreground mt-2.5">Sin cargo · Sin compromiso</p>
        </div>

      </div>
    </section>
  )
}
