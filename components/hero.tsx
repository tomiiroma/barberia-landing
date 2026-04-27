import Image from "next/image"
import { MessageCircle, MapPin } from "lucide-react"
import { waLink, WA_PRESETS } from "@/lib/whatsapp"
import { SiteHeader } from "@/components/site-header"

export function Hero() {
  const wa = waLink(WA_PRESETS.default)
  const mapsQuery =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Boulogne Sur Mer 445, Once, CABA")

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Capas de fondo premium — cero dependencia de fotos raster */}
      <div className="absolute inset-0 bg-hero-lux" aria-hidden />
      <div
        className="absolute inset-0 bg-hero-mesh opacity-90 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-noise opacity-[0.055] mix-blend-overlay pointer-events-none"
        aria-hidden
      />
      {/* “Luz de estudio” suave, oro frío + highlight cenital */}
      <div
        className="absolute -top-1/3 left-1/2 h-[70vh] w-[min(140%,1100px)] -translate-x-1/2 bg-[radial-gradient(ellipse,oklch(0.55_0.12_85/0.14)_0%,transparent_68%)] pointer-events-none blur-2xl"
        aria-hidden
      />
      <div
        className="absolute top-[15%] right-0 h-[50vh] w-[40vw] max-w-md bg-[radial-gradient(ellipse,oklch(0.7_0.08_85/0.06)_0%,transparent_70%)] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-hero-vignette pointer-events-none"
        aria-hidden
      />

      {/* Marco interior fino (composición editorial) */}
      <div
        className="absolute inset-5 sm:inset-7 md:inset-10 rounded-2xl border border-white/[0.06] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute left-5 top-5 h-10 w-10 sm:left-7 sm:top-7 border-l-2 border-t-2 border-primary/45 rounded-tl-md pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute right-5 bottom-5 h-10 w-10 sm:right-7 sm:bottom-7 border-r-2 border-b-2 border-primary/45 rounded-br-md pointer-events-none"
        aria-hidden
      />

      <SiteHeader />

      <div className="relative z-10 flex flex-1 flex-col justify-center py-32 pb-36 md:py-20 md:pb-28">
        <div className="container mx-auto max-w-6xl px-4 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-primary text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase mb-4">
                Once · Boulogne Sur Mer 445
              </p>
              <h1 className="font-display text-4xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl text-white text-balance mb-5">
                Corte, barba y diseño.
                <span className="text-primary"> Nivel Once.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed text-pretty mb-2">
                Salís afilado. Mano firme, cero humo — la experiencia se siente, no se promete con megapíxeles.
              </p>
              <p className="text-sm text-white/40 max-w-md mx-auto lg:mx-0 mb-8">
                Barbería con agenda real. Reservá y vení con tranquilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start sm:items-stretch sm:max-w-lg lg:max-w-none">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-bold text-base sm:text-lg px-7 py-4 rounded-xl shadow-[0_8px_40px_-6px_rgba(201,164,76,0.35)] hover:brightness-110 active:scale-[0.99] transition-all min-h-[54px] ring-1 ring-white/10"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  Reservar turno por WhatsApp
                </a>
                <a
                  href={mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white/90 border border-white/12 hover:border-primary/50 hover:bg-white/[0.04] hover:text-primary px-6 py-4 rounded-xl font-semibold transition-colors min-h-[54px] backdrop-blur-sm"
                >
                  <MapPin className="h-5 w-5 shrink-0" />
                  Ver ubicación
                </a>
              </div>
            </div>

            {/* Identidad: logo vector / marca (no confundir con fotos de clientes) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                <div
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-primary/5 blur-xl opacity-80"
                  aria-hidden
                />
                <div className="relative rounded-2xl border border-primary/25 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-10 shadow-2xl shadow-black/50 ring-1 ring-white/5">
                  <Image
                    src="/vallejos-logo.png"
                    alt="Vallejos Barbería 2.0"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.12)]"
                    priority
                    quality={90}
                  />
                </div>
                <p className="text-center lg:text-right text-[10px] uppercase tracking-[0.2em] text-white/30 mt-4">
                  Identidad de marca
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
