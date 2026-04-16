import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María Laura",
    age: "45 años",
    initials: "ML",
    treatment: "HIFU",
    stars: 5,
    text: "Increíble el resultado del HIFU. Me hice el tratamiento hace 4 meses y la gente me pregunta qué me hice porque noto la diferencia. Patricia explica todo, te hace sentir cómoda y el resultado superó mis expectativas.",
    color: "from-rose-100 to-pink-50",
  },
  {
    name: "Claudia R.",
    age: "38 años",
    initials: "CR",
    treatment: "Masajes y Corporales",
    stars: 5,
    text: "Llevo más de 2 años yendo y cada tratamiento es mejor que el anterior. La atención es súper personalizada, nunca sentí que era una más. Los masajes drenantes cambiaron mi circulación por completo.",
    color: "from-fuchsia-50 to-rose-50",
  },
  {
    name: "Gabriela M.",
    age: "52 años",
    initials: "GM",
    treatment: "Circuito Spa",
    stars: 5,
    text: "Fui por primera vez y ya reservé para el mes que viene. El circuito spa es una experiencia completa: relajante, profesional y los resultados son inmediatos. Patricia es un amor de persona además de ser excelente profesional.",
    color: "from-pink-50 to-rose-50",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen
            <br className="hidden md:block" /> nuestras pacientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Resultados reales, experiencias reales.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`relative bg-gradient-to-br ${t.color} rounded-3xl p-7 border border-border/50 hover:shadow-lg hover:shadow-primary/6 hover:-translate-y-0.5 transition-all duration-300`}
            >
              {/* Comilla decorativa */}
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10 fill-primary/10" />

              {/* Rating */}
              <div className="mb-4">
                <StarRating count={t.stars} />
              </div>

              {/* Testimonio */}
              <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Separador */}
              <div className="h-px bg-border/40 mb-4" />

              {/* Identidad */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white border border-border/60 flex items-center justify-center shadow-sm flex-shrink-0">
                  <span className="text-xs font-bold text-primary">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.age} · {t.treatment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          ¿Ya fuiste? Contanos tu experiencia en{" "}
          <a
            href="https://instagram.com/tesentisbien"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium underline underline-offset-2 hover:text-primary/80"
          >
            @tesentisbien
          </a>
        </p>

      </div>
    </section>
  )
}
