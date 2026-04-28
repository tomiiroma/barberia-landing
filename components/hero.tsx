import Image from "next/image"
import { MessageCircle, MapPin } from "lucide-react"
import { googleMapsSearchUrl } from "@/lib/address"
import { waLink, WA_PRESETS } from "@/lib/whatsapp"
import { SiteHeader } from "@/components/site-header"

export function Hero() {
  const wa = waLink(WA_PRESETS.default)
  const mapsQuery = googleMapsSearchUrl()

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-hero-lux" aria-hidden />
      <div className="absolute inset-0 bg-hero-mesh opacity-80 pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -top-1/3 left-1/2 h-[60vh] w-[min(100%,900px)] -translate-x-1/2 bg-[radial-gradient(ellipse,oklch(0.5_0.1_85/0.1)_0%,transparent_65%)] pointer-events-none blur-3xl"
        aria-hidden
      />
      <div className="absolute inset-0 bg-hero-vignette pointer-events-none" aria-hidden />

      <div
        className="absolute inset-6 sm:inset-8 md:inset-10 rounded-2xl border border-white/[0.05] pointer-events-none"
        aria-hidden
      />

      <SiteHeader />

      <div className="relative z-10 flex flex-1 flex-col justify-center py-28 pb-32 md:py-16 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 w-full">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <p className="text-primary text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase mb-3">
                Vallejos Barbería 2.0 · Once, CABA
              </p>
              <h1 className="font-display text-4xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl text-white text-balance mb-5">
                Corte, barba y diseño.
                <span className="text-primary"> Nivel Once.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto lg:mx-0 leading-relaxed text-pretty mb-3">
                Barbería y peluquería urbana. Fades, barba, diseño y color — mano firme, local de verdad.
              </p>
              <p className="text-sm sm:text-base text-white/45 max-w-lg mx-auto lg:mx-0 leading-relaxed text-pretty mb-8">
                En el mostrador tenés la tarjeta de fidelidad Vallejiano: cada visita suma y el 6.º corte lo invitamos
                nosotros, como premio a quien vuelve.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start sm:max-w-xl">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-bold text-base sm:text-lg px-7 py-4 rounded-xl shadow-lg shadow-amber-900/25 hover:brightness-110 active:scale-[0.99] transition-all min-h-[52px] ring-1 ring-white/10"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  Reservar turno por WhatsApp
                </a>
                <a
                  href={mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white/85 border border-white/12 hover:border-primary/40 hover:text-primary px-6 py-4 rounded-xl font-medium transition-colors min-h-[52px]"
                >
                  <MapPin className="h-5 w-5 shrink-0" />
                  Cómo llegar
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[260px] sm:max-w-[300px]">
                <div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent blur-2xl opacity-70"
                  aria-hidden
                />
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-9 shadow-2xl ring-1 ring-white/5">
                  <Image
                    src="/vallejos-logo.png"
                    alt="Vallejos Barbería 2.0"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
