import Image from "next/image"
import { MessageCircle, Sparkles, MapPin, ArrowRight, ShieldCheck } from "lucide-react"

export function Hero() {
  const whatsappLink =
    "https://wa.me/5491161233500?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20tratamientos"

  return (
    <section className="relative min-h-screen overflow-hidden bg-background flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,oklch(0.91_0.05_348/0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_80%,oklch(0.96_0.014_348/0.4),transparent)]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/60 to-transparent" />

      <div className="container relative mx-auto max-w-6xl px-4 py-24 md:py-32 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-center w-full">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-border px-4 py-2 rounded-full mb-8 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-primary animate-shimmer" />
              <span className="text-sm font-medium text-foreground/80">Patricia González · Cosmiatra</span>
              <span className="hidden sm:inline text-xs text-muted-foreground border-l border-border pl-2.5">
                M.N. 62.996
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-5 leading-[1.05] tracking-tight text-balance">
              Sentite bella.
              <br />
              <span className="text-primary">Sentite bien.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Tratamientos estéticos personalizados en CABA. Resultados visibles, sin cirugía y con atención de
              profesional certificada.
            </p>

            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-10">
              {[
                { icon: Sparkles, text: "Consulta sin cargo" },
                { icon: ShieldCheck, text: "Matrícula M.N. 62.996" },
                { icon: MapPin, text: "Microcentro · Caballito" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-white border border-border px-3.5 py-1.5 rounded-full text-sm text-foreground/70 shadow-sm"
                >
                  <badge.icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href={whatsappLink} className="group">
                <div className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-primary/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  <MessageCircle className="h-5 w-5 flex-shrink-0" />
                  Quiero mi consulta gratis
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-3 text-center lg:text-left">
              Sin compromiso · Respondemos en el día
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-6 rounded-full border-2 border-primary/10" />
              <div className="absolute -inset-12 rounded-full border border-primary/5" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 via-accent/20 to-secondary/30 blur-3xl scale-125" />
              <div className="relative bg-white/70 backdrop-blur-md rounded-full p-6 md:p-8 shadow-2xl border border-white/80">
                <Image
                  src="/nuevo_logo.png"
                  alt="Te Sentís Bien — Estética Integral"
                  width={300}
                  height={300}
                  className="h-52 w-52 md:h-64 md:w-64 lg:h-56 lg:w-56 xl:h-64 xl:w-64 object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 bg-white rounded-2xl px-3.5 py-2.5 shadow-xl border border-border">
                <p className="text-[10px] text-muted-foreground font-medium leading-none mb-1">Matrícula Nacional</p>
                <p className="text-sm font-bold text-foreground">M.N. 62.996</p>
              </div>
              <div className="absolute -top-2 -left-4 md:-top-4 md:-left-6 bg-white rounded-2xl px-3 py-2 shadow-xl border border-border">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <p className="text-xs font-semibold text-foreground">CABA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
