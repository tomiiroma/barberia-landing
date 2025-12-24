import { Button } from "@/components/ui/button"
import { MapPin, MessageCircle } from "lucide-react"

export function Location() {
  const whatsappLink =
    "https://wa.me/5491161233500?text=Hola,%20quiero%20consultar%20sobre%20la%20ubicación%20de%20los%20consultorios"

  return (
    <section className="py-16 md:py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-accent/30 to-secondary/50 rounded-3xl p-8 md:p-12 text-center border border-border">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Dos ubicaciones en CABA
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-4">Microcentro y Caballito</p>

          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Elegí la sucursal más cercana y coordinamos tu turno
          </p>

          <a href={whatsappLink}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar ubicación
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
