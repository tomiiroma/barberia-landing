import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const services = [
  {
    title: "Masajes",
    treatments: ["Terapéuticos", "Holísticos", "Kinesiológicos", "Drenaje linfático", "Pre y post quirúrgico"],
  },
  {
    title: "Corporales",
    treatments: ["Lipo", "Celulitis", "Flacidez", "Glúteos", "Peptonas"],
  },
  {
    title: "Faciales",
    treatments: ["Limpieza profunda", "Lifting", "Antiage", "HIFU", "Exosomas"],
  },
  {
    title: "Circuito Spa",
    treatments: ["Masajes + Detox iónica", "Limpieza profunda integral"],
  },
]

export function Services() {
  const whatsappLink = "https://wa.me/5491161233500?text=Hola,%20quiero%20consultar%20sobre%20este%20tratamiento"

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Servicios</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tratamientos especializados para tu cuidado integral
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.treatments.map((treatment, idx) => (
                    <li key={idx} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
                <a href={whatsappLink} className="block">
                  <Button
                    variant="outline"
                    className="w-full mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Consultar
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
