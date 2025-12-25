import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Logo */}
          <div className="relative flex items-center justify-center">
            {/* Halo suave de fondo */}
            <div className="absolute inset-0 bg-background/60 rounded-full blur-2xl scale-110 -z-10" />
            {/* Contenedor con fondo blanco elegante */}
            <div className="relative bg-background rounded-full p-2 md:p-3 shadow-xl">
              <Image
                src="/nuevo_logo.png"
                alt="tesentisbien"
                width={200}
                height={200}
                className="h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-contain"
              />
            </div>
          </div>

          {/* Brand Name */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-1">Te Sentis Bien</h3>
            <p className="text-background/80 text-base">Patricia González</p>
            <p className="text-background/70 text-sm">M.N. 62.996</p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a
              href="https://instagram.com/tesentisbien"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/90 hover:text-background transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>@tesentisbien</span>
            </a>

            <a
              href="https://wa.me/5491161233500"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/90 hover:text-background transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>11 6123 3500</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-background/20 w-full text-center">
            <p className="text-background/60 text-sm mb-3">
              © {new Date().getFullYear()} Te Sentis Bien. Todos los derechos reservados.
            </p>
            
            {/* Desarrollado por RD TECH */}
            <div className="flex flex-col items-center gap-1 mt-3">
              <p className="text-background/50 text-sm">Desarrollado por</p>
              <a
                href="https://www.rdtech.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-block"
              >
                <Image
                  src="/RD TECH.png"
                  alt="RD TECH"
                  width={300}
                  height={120}
                  className="h-24 w-auto md:h-32 md:w-auto lg:h-36 lg:w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
