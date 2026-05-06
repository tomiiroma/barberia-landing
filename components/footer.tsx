import Image from "next/image"
import { Instagram, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative bg-white/8 rounded-2xl p-3 border border-white/10 shadow-lg">
              <Image
                src="/nuevo_logo.png"
                alt="Te Sentís Bien"
                width={120}
                height={120}
                className="h-16 w-16 object-contain"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Te Sentís Bien</h3>
              <p className="text-white/50 text-sm mt-0.5">Patricia González · Cosmiatra</p>
              <p className="text-primary text-sm font-medium">M.N. 62.996</p>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Estética integral personalizada en CABA. Resultados reales, atención profesional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {[
                "Masajes Terapéuticos",
                "Tratamientos Corporales",
                "Tratamientos Faciales",
                "HIFU — Lifting sin cirugía",
                "Detox Iónica",
                "Circuito Spa",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="https://wa.me/5491161233500?text=Hola%2C%20quiero%20consultar%20sobre%20tratamientos"
                    className="hover:text-primary transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5491161233500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/50 hover:text-primary transition-colors justify-center md:justify-start"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  11 6123 3500
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/tesentisbien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/50 hover:text-primary transition-colors justify-center md:justify-start"
                >
                  <Instagram className="h-4 w-4 flex-shrink-0" />
                  @tesentisbien
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/50 justify-center md:justify-start">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  Microcentro · Caballito
                  <br />
                  Ciudad de Buenos Aires
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/8 mb-7" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Te Sentís Bien. Todos los derechos reservados.</p>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span>Desarrollado por</span>
            <a
              href="https://www.rdtech.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity inline-block"
            >
              <Image
                src="/RD TECH.png"
                alt="RD TECH"
                width={320}
                height={96}
                className="h-40 w-auto object-contain brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
