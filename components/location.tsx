import Image from "next/image"
import { MapPin, MessageCircle, Clock, ExternalLink, Building2, CalendarDays } from "lucide-react"
import {
  SHOP_ADDRESS_LINE1,
  SHOP_ADDRESS_LINE2,
  googleMapsEmbedUrl,
  googleMapsSearchUrl,
} from "@/lib/address"
import { BOOKING_PUBLIC_URL } from "@/lib/booking"

const MAPS_SEARCH = googleMapsSearchUrl()
const MAPS_EMBED = googleMapsEmbedUrl()

export function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 px-4 scroll-mt-20 bg-[#040404]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Ubicación</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-5 md:gap-6 mb-5 items-stretch">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0b0b0b] p-6 md:p-8 flex flex-col ring-1 ring-inset ring-white/[0.03] shadow-2xl shadow-black/40">
            <div className="flex items-start gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-white">Vallejos Barbería 2.0</h3>
                <p className="text-white/50 text-sm mt-1 leading-relaxed">
                  {SHOP_ADDRESS_LINE1}
                  <br />
                  {SHOP_ADDRESS_LINE2}
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1 text-sm text-white/65">
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                Lun a sáb · 10:00 – 20:00
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-primary shrink-0" />
                <span>
                  <a
                    href="https://wa.me/5491144223540"
                    className="text-primary font-semibold hover:underline"
                  >
                    11 4422-3540
                  </a>{" "}
                  · turnos
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <a
                href={BOOKING_PUBLIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-xl px-5 py-3.5 hover:brightness-110 transition-all"
              >
                <CalendarDays className="h-5 w-5" />
                Reservar turno
              </a>
              <a
                href={MAPS_SEARCH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white rounded-xl px-5 py-3.5 hover:border-primary/50 hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Abrir en Google Maps
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a] ring-1 ring-inset ring-white/[0.03] shadow-xl">
            <div className="relative h-40 sm:h-48 lg:h-44 w-full flex-shrink-0">
              <Image
                src="/vallejos-local.png"
                alt="Fachada del local Vallejos Barbería 2.0, Boulogne Sur Mer 445"
                fill
                className="object-cover object-center"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/55 to-transparent" />
              <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/55 backdrop-blur-sm px-2 py-0.5 border border-white/10">
                <Building2 className="h-3 w-3 text-primary" />
                <span className="text-[9px] font-semibold uppercase tracking-wider text-white/80">Local</span>
              </div>
            </div>
            <div className="p-4 border-t border-white/[0.06] bg-gradient-to-b from-[#0c0c0c] to-[#080808] flex-1 flex flex-col">
              <p className="font-display text-sm text-primary">{SHOP_ADDRESS_LINE1}</p>
              <p className="text-[11px] text-white/45 mt-1 leading-relaxed">{SHOP_ADDRESS_LINE2}</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] min-h-[280px] md:min-h-[320px]">
          <iframe
            title={`Mapa ${SHOP_ADDRESS_LINE1}, ${SHOP_ADDRESS_LINE2}`}
            src={MAPS_EMBED}
            className="h-[280px] w-full min-h-[280px] border-0 md:h-[320px] md:min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={MAPS_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs sm:text-sm text-primary/80 hover:text-primary py-2.5 border-t border-white/5 bg-black/20 font-medium"
          >
            Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
