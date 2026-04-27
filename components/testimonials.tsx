import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "J. · Once",
    initials: "J",
    text: "El corte me arregla el mes. Fade limpio, sin explicar mil veces. Saco turno y listo.",
  },
  {
    name: "L. · CABA",
    initials: "L",
    text: "Barba y líneas a punto. Salís con confianza. Vuelvo siempre al mismo clima.",
  },
  {
    name: "M. · Balvanera",
    initials: "M",
    text: "Me explicó el diseño, quedó clavado. Atención pro, cero humo. Recomendado total.",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="opiniones" className="py-16 md:py-24 px-4 scroll-mt-20 bg-[#0f0f0f]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
            Opiniones
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-3 text-balance">
            La palabra del barrio
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-pretty">
            Reseñas de clientes que vuelven. La prueba está en el sillón.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-white/10 bg-card/80 p-6 md:p-7 hover:border-primary/25 transition-colors"
            >
              <Quote className="absolute top-5 right-5 h-7 w-7 text-primary/15" />
              <div className="mb-4">
                <StarRating count={5} />
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="h-px bg-white/8 mb-4" />
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
