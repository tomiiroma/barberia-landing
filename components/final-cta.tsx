import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"

export function FinalCTA() {
  const whatsappLink = "https://wa.me/5491161233500?text=Hola,%20quiero%20reservar%20mi%20turno"

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,114,182,0.15),transparent_70%)]" />

      <div className="container relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-card/80 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Sin costo de consulta</span>
        </div>

        <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
          Consultas sin cargo.
          <br />
          Reservá tu turno hoy.
        </h2>

        <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
          Te acompaño en todo el proceso hacia tu mejor versión
        </p>

        <a href={whatsappLink} className="inline-block w-full max-w-md">
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-3 h-7 w-7" />
            Escribime por WhatsApp
          </Button>
        </a>
      </div>
    </section>
  )
}
