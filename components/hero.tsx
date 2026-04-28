import Image from "next/image"
import { MessageCircle, MapPin } from "lucide-react"
import { googleMapsSearchUrl } from "@/lib/address"
import { waLink, WA_PRESETS } from "@/lib/whatsapp"
import { SiteHeader } from "@/components/site-header"

const HERO_SHELL = "mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 xl:px-14 2xl:px-16"

export function Hero() {
  const wa = waLink(WA_PRESETS.default)
  const mapsQuery = googleMapsSearchUrl()

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden lg:min-h-[85vh]">
      <div className="absolute inset-0 bg-hero-lux" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[55vh] w-[min(100%,900px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.55_0.09_85/0.06),transparent_60%)] blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-hero-vignette" aria-hidden />

      <SiteHeader />

      <div className="relative z-10 flex flex-1 flex-col justify-center pt-[5.75rem] pb-16 sm:pt-24 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 xl:pt-36 xl:pb-28">
        <div className={HERO_SHELL}>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20">
            {/* 50% — texto y conversión */}
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.26em] text-primary/95 sm:mb-12 sm:text-xs">
                Vallejos Barbería 2.0 · Once, CABA
              </p>

              <h1 className="font-display text-balance uppercase leading-[0.9] tracking-[0.02em] text-white text-[clamp(3.25rem,7.5vw,8.75rem)]">
                <span className="block">Corte, barba</span>
                <span className="mt-2 block sm:mt-3">y diseño.</span>
                <span className="mt-2 block text-primary sm:mt-3">Con nivel.</span>
              </h1>

              <div className="mx-auto mt-12 max-w-xl space-y-3 text-lg leading-relaxed text-white/60 sm:mt-14 sm:text-xl lg:mx-0 lg:max-w-[28rem] xl:text-[1.35rem] xl:leading-snug">
                <p>Fade, barba, color y atención rápida.</p>
                <p>Turnos simples por WhatsApp.</p>
              </div>

              <div className="mx-auto mt-14 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-stretch lg:mx-0">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[64px] sm:min-h-[68px] flex-1 items-center justify-center gap-3 rounded-2xl bg-primary px-10 py-4 text-base font-bold text-primary-foreground shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/15 transition-all hover:brightness-110 active:scale-[0.99] sm:text-lg xl:px-11"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                  Reservar turno por WhatsApp
                </a>
                <a
                  href={mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[64px] sm:min-h-[68px] flex-1 items-center justify-center gap-3 rounded-2xl border border-white/20 bg-transparent px-10 py-4 text-base font-semibold text-white/90 transition-colors hover:border-primary/40 hover:bg-white/[0.04] hover:text-primary sm:text-lg xl:px-11"
                >
                  <MapPin className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                  Ver ubicación
                </a>
              </div>

              <p className="mx-auto mt-10 max-w-md text-center text-sm text-white/38 sm:text-base lg:mx-0 lg:text-left">
                Atención rápida en Once y alrededores.
              </p>
            </div>

            {/* 50% — imagen protagonista */}
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              <div
                className="absolute left-1/2 top-0 z-20 -translate-x-1/2 lg:left-10 lg:translate-x-0"
                aria-hidden
              >
                <div className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-2xl border border-white/[0.12] bg-zinc-950/95 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.06] backdrop-blur-md sm:h-24 sm:w-24 sm:rounded-[1.125rem] lg:h-[7rem] lg:w-[7rem] lg:rounded-3xl">
                  <Image
                    src="/vallejos-logo.png"
                    alt=""
                    width={128}
                    height={128}
                    className="h-14 w-auto max-h-14 object-contain opacity-95 sm:h-16 sm:max-h-16 lg:h-[4.5rem] lg:max-h-[4.5rem]"
                  />
                </div>
              </div>

              <div className="relative pt-16 sm:pt-[5.5rem] lg:pt-24">
                <div
                  className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-[#060606] sm:rounded-[2rem] lg:h-[min(78vh,820px)] lg:min-h-[620px] shadow-[0_40px_100px_-24px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)_inset]"
                >
                  <div className="relative aspect-[3/4] w-full min-h-[420px] sm:min-h-[480px] lg:absolute lg:inset-0 lg:aspect-auto lg:min-h-0">
                    <Image
                      src="/vallejos-hero.png"
                      alt="Cliente con fade en Vallejos Barbería 2.0"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303]/78 via-[#030303]/12 to-[#030303]/28" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
