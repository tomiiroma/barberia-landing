import Image from "next/image"
import { Instagram, MessageCircle, MapPin } from "lucide-react"

const WA = "https://wa.me/5491144223540"
const IG = "https://www.instagram.com/vallejosbarberia2.0/"

export function Footer() {
  return (
    <footer className="bg-[#030303] text-white/70 py-12 px-4 border-t border-white/8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/vallejos-logo.png"
              alt="Vallejos Barbería 2.0"
              width={88}
              height={88}
              className="h-16 w-16 object-contain rounded-lg"
            />
            <div>
              <h3 className="font-display text-2xl text-white tracking-wide">VALLEJOS</h3>
              <p className="text-white/45 text-sm">Barbería y peluquería 2.0</p>
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Barbería en Once. Corte, barba y diseño. Reservas por WhatsApp.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-primary transition-colors">
                  Trabajos
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-primary transition-colors">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center md:justify-start text-white/55 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  11 4422-3540
                </a>
              </li>
              <li>
                <a
                  href={IG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center md:justify-start text-white/55 hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  @vallejosbarberia2.0
                </a>
              </li>
              <li className="flex items-start gap-2 justify-center md:justify-start text-white/55">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Boulogne Sur Mer 445
                  <br />
                  Once, CABA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/8 mb-8" />

        <p className="text-center text-xs sm:text-sm text-white/40 mb-8">
          © {new Date().getFullYear()} Vallejos Barbería 2.0. Todos los derechos reservados.
        </p>

        <a
          href="https://www.rdtech.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent py-5 px-6 transition-colors hover:border-primary/30 hover:bg-white/[0.02]"
        >
          <span className="text-sm sm:text-base font-medium text-white/70">Desarrollado por</span>
          <Image
            src="/RD TECH.png"
            alt="RD TECH"
            width={400}
            height={120}
            className="h-12 sm:h-16 md:h-[4.5rem] w-auto max-w-[min(100%,280px)] object-contain object-left brightness-0 invert opacity-95"
          />
        </a>
      </div>
    </footer>
  )
}
