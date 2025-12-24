import { Check, Heart, Sparkles, UserCheck } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Te acompaño en todo el proceso",
    description: "Seguimiento continuo y personalizado",
  },
  {
    icon: Sparkles,
    title: "Tratamientos personalizados",
    description: "Adaptados a tus necesidades",
  },
  {
    icon: Check,
    title: "Enfoque en salud y bienestar",
    description: "Resultados que se ven y se sienten",
  },
  {
    icon: UserCheck,
    title: "Atención profesional certificada",
    description: "Matrícula nacional vigente",
  },
]

export function ValueProposition() {
  const whatsappLink = "https://wa.me/5491161233500?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20tratamientos"

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-accent/50 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <a href={whatsappLink} className="inline-block">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              Hacer una consulta
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
