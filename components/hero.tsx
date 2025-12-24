import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles, Heart, MapPin } from "lucide-react"

export function Hero() {
  const whatsappLink = "https://wa.me/5491161233500?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20tratamientos"

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/30 via-background to-secondary/50 py-16 px-4 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,114,182,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,207,232,0.15),transparent_50%)]" />

      <div className="container relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <div className="relative">
              <Image
                src="/nuevo_logo.png"
                alt="tesentisbien"
                width={300}
                height={300}
                className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 text-balance leading-tight">
            Estética integral
            <br />
            para tu bienestar
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl text-pretty leading-relaxed">
            Cosmiatría y tratamientos personalizados
          </p>

          {/* Credentials */}
          <div className="mb-8 md:mb-10 space-y-2">
            <p className="text-lg md:text-xl font-medium text-foreground">Patricia González · Cosmiatra</p>
            <p className="text-base md:text-lg text-muted-foreground font-medium">M.N. 62.996</p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 md:mb-12">
            <div className="flex items-center gap-2 text-sm md:text-base text-foreground">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>Consultas gratis</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base text-foreground">
              <Heart className="h-5 w-5 text-primary" />
              <span>Atención personalizada</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base text-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>CABA</span>
            </div>
          </div>

          {/* CTA */}
          <a href={whatsappLink} className="w-full max-w-md">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-xl py-6 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Consultar por WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
