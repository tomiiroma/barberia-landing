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
              Barbería en Once: corte, barba y diseño con mano segura. Tarjeta de fidelidad Vallejiano: 5 visitas, 6.º sin
              cargo en el local. Agenda online y consultas rápidas por WhatsApp.
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
                <a href="#volver-vallejos" className="hover:text-primary transition-colors">
                  Fidelidad Vallejiano
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
          aria-label="Desarrollado por RD TECH — abre en nueva pestaña"
          className="group/rd rdtech-credit-ring relative mx-auto block max-w-xl overflow-hidden rounded-2xl p-px outline-none transition-[transform,filter] duration-500 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
        >
          <div className="relative flex flex-col items-center justify-center gap-3 rounded-[15px] bg-[#060606] px-6 py-6 sm:flex-row sm:gap-5 sm:py-7 sm:px-8 transition-colors duration-500 group-hover/rd:bg-[#0a0a0a]">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/45 transition-[color,letter-spacing] duration-500 group-hover/rd:text-primary/90 group-hover/rd:tracking-[0.26em]">
              Desarrollado por
            </span>
            <div className="relative w-full max-w-[min(100%,480px)] sm:w-auto">
              <div
                className="pointer-events-none absolute -inset-6 rounded-xl opacity-0 blur-2xl transition-opacity duration-500 group-hover/rd:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 80% at 50% 50%, oklch(0.78 0.12 85 / 0.22), transparent 65%)",
                }}
                aria-hidden
              />
              <div
                className="rdtech-credit-shine pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-40"
                aria-hidden
              />
              <Image
                src="/RD TECH.png"
                alt=""
                width={520}
                height={156}
                className="relative z-[1] mx-auto h-[4.75rem] w-auto object-contain brightness-0 invert opacity-95 transition-[transform,opacity,filter] duration-500 ease-out group-hover/rd:scale-[1.06] group-hover/rd:opacity-100 group-hover/rd:brightness-110 group-hover/rd:drop-shadow-[0_0_20px_oklch(0.78_0.12_85_/_0.25)] sm:h-28 md:h-36 lg:h-40"
              />
            </div>
          </div>
        </a>
      </div>
    </footer>
  )
}
