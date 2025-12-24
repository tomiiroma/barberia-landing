import { Award, Heart, Star, MapPin } from "lucide-react"

const trustPoints = [
  {
    icon: Award,
    title: "Matrícula profesional",
    description: "M.N. 62.996 vigente y certificada",
  },
  {
    icon: Heart,
    title: "Atención personalizada",
    description: "Cada tratamiento adaptado a vos",
  },
  {
    icon: Star,
    title: "Resultados reales",
    description: "Testimonios de pacientes satisfechos",
  },
  {
    icon: MapPin,
    title: "Ubicaciones convenientes",
    description: "Microcentro y Caballito, CABA",
  },
]

export function Trust() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-secondary/40 via-accent/20 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Profesionalismo y confianza
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tu bienestar en manos expertas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
