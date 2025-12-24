import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"

const featured = [
  {
    title: "HIFU",
    description: "Tratamiento de lifting sin cirugía con ultrasonido focalizado de alta intensidad",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Glúteos",
    description: "Tonificación y modelado corporal con técnicas avanzadas",
    gradient: "from-accent/20 to-secondary/40",
  },
  {
    title: "Limpieza Facial Profunda",
    description: "Higiene facial completa con extracción y renovación celular",
    gradient: "from-secondary/40 to-primary/20",
  },
  {
    title: "Detox Iónica",
    description: "Depuración y eliminación de toxinas a través de los pies",
    gradient: "from-primary/20 to-accent/30",
  },
]

export function FeaturedTreatments() {
  const whatsappLink = "https://wa.me/5491161233500?text=Hola,%20quiero%20consultar%20sobre%20tratamientos%20destacados"

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/30 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Destacados</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tratamientos más solicitados
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 md:p-10 border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
              <a href={whatsappLink}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Quiero consultar
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
