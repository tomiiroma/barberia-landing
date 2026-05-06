import { Award, Heart, Star, MapPin } from "lucide-react"

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "M.N.", sublabel: "62.996", label: "Matrícula nacional" },
  { value: "2", label: "Consultorios en CABA" },
  { value: "100%", label: "Atención personalizada" },
]

const trustPoints = [
  {
    icon: Award,
    title: "Matrícula profesional vigente",
    description:
      "Patricia González es Cosmiatra certificada con Matrícula Nacional M.N. 62.996. Tu salud está en manos de una profesional habilitada.",
  },
  {
    icon: Heart,
    title: "Atención que te ve como persona",
    description:
      "Nada genérico. Cada paciente recibe un plan adaptado a su piel, su cuerpo y sus objetivos. Vos importás.",
  },
  {
    icon: Star,
    title: "Resultados reales, pacientes felices",
    description:
      "Años de trayectoria lo respaldan. Las pacientes vuelven porque los resultados se ven, se sienten y duran.",
  },
  {
    icon: MapPin,
    title: "Cerca tuyo en CABA",
    description:
      "Dos consultorios estratégicamente ubicados: Microcentro y Caballito. Elegís el que más te quede cómodo.",
  },
]

export function Trust() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-secondary/30 via-background to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Respaldo profesional</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tu bienestar en manos
            <br className="hidden md:block" /> que conocen su oficio
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Profesionalismo, calidez humana y tecnología de vanguardia al servicio de tu mejor versión.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center border border-border shadow-sm">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary leading-none">
                {stat.value}
                {stat.sublabel && <span className="text-xl md:text-2xl"> {stat.sublabel}</span>}
              </div>
              <p className="text-xs text-muted-foreground mt-1.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/8 via-accent/20 to-secondary/30 rounded-3xl p-7 md:p-10 border border-primary/15 mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 border-2 border-primary/20 flex items-center justify-center shadow-lg">
                <span className="font-serif text-3xl font-bold text-primary">PG</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">Patricia González</h3>
              <p className="text-primary font-semibold mb-3">Cosmiatra · M.N. 62.996</p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-2xl">
                Con más de una década de experiencia en estética integral, combina tecnología avanzada con un profundo
                conocimiento del cuerpo femenino. Su enfoque es simple: resultados reales, atención personalizada y que
                cada paciente salga sintiéndose mejor que cuando entró.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-6 md:p-7 border border-border hover:border-primary/25 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5">{point.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
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
