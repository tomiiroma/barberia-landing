import { MapPin, MessageCircle, Clock, Train } from "lucide-react"

const locations = [
  {
    name: "Microcentro",
    area: "Centro · Buenos Aires",
    description: "En el corazón de la ciudad, accesible desde cualquier punto.",
    details: ["Múltiples líneas de subte", "Amplia zona de estacionamiento", "Buena accesibilidad"],
    gradient: "from-rose-50 to-pink-50/60",
    border: "border-rose-200/50",
    message: "Hola%2C%20quiero%20consultar%20sobre%20la%20sede%20de%20Microcentro",
  },
  {
    name: "Caballito",
    area: "Barrio tranquilo · Buenos Aires",
    description: "En uno de los barrios más cómodos y accesibles de CABA.",
    details: ["Línea A y H de subte", "Ambiente tranquilo y familiar", "Fácil estacionamiento"],
    gradient: "from-fuchsia-50/50 to-rose-50",
    border: "border-fuchsia-200/40",
    message: "Hola%2C%20quiero%20consultar%20sobre%20la%20sede%20de%20Caballito",
  },
]

export function Location() {
  const whatsappBase = "https://wa.me/5491161233500?text="

  return (
    <section className="py-20 md:py-28 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Ubicaciones
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Estamos en CABA,
            <br className="hidden md:block" /> cerca tuyo
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Dos consultorios en puntos estratégicos de Buenos Aires.
            Elegís el que mejor te quede y coordinamos tu turno.
          </p>
        </div>

        {/* Cards de ubicación */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className={`group bg-gradient-to-br ${loc.gradient} rounded-3xl p-7 md:p-8 border ${loc.border} hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-0.5 transition-all duration-300`}
            >
              {/* Ícono + Nombre */}
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm flex-shrink-0 border border-white/60">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">{loc.name}</h3>
                  <p className="text-sm text-muted-foreground">{loc.area}</p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-sm md:text-base text-foreground/70 mb-5 leading-relaxed">
                {loc.description}
              </p>

              {/* Detalles */}
              <ul className="space-y-2 mb-6">
                {loc.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-foreground/65">
                    <Train className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* CTA de ubicación */}
              <a
                href={`${whatsappBase}${loc.message}`}
                className="flex items-center gap-2 bg-white/80 hover:bg-primary hover:text-white text-primary backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 shadow-sm w-fit border border-white/60"
              >
                <MessageCircle className="h-4 w-4" />
                Reservar en {loc.name}
              </a>
            </div>
          ))}
        </div>

        {/* Banner de horarios */}
        <div className="bg-gradient-to-r from-secondary/60 via-accent/20 to-secondary/60 rounded-2xl p-5 md:p-6 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Horarios flexibles</p>
              <p className="text-xs text-muted-foreground">Lunes a Sábados · Coordinamos según tu disponibilidad</p>
            </div>
          </div>
          <a
            href="https://wa.me/5491161233500?text=Hola%2C%20quiero%20consultar%20sobre%20horarios%20disponibles"
            className="flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm flex-shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar disponibilidad
          </a>
        </div>

      </div>
    </section>
  )
}
