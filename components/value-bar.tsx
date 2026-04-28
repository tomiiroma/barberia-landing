import { Clock, MapPin } from "lucide-react"
import { waLink, WA_PRESETS } from "@/lib/whatsapp"

export function ValueBar() {
  const wa = waLink(WA_PRESETS.default)

  return (
    <div className="border-y border-white/10 bg-[#080808]">
      <div className="container mx-auto max-w-6xl px-4 py-3 sm:py-3.5">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-center sm:text-left text-white/80">
          <span
            className="order-first sm:order-none inline-flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 rounded border border-primary/15 bg-primary/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary/80 text-center sm:text-left"
            title="Tarjeta de fidelidad Vallejiano: cinco visitas selladas, el sexto corte sin cargo."
          >
            <span>Vallejiano</span>
            <span className="hidden sm:inline text-white/25 font-normal" aria-hidden>
              ·
            </span>
            <span className="text-[9px] font-semibold text-primary/70 normal-case tracking-normal">
              5 visitas, 6.º sin cargo
            </span>
          </span>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary shrink-0" />
            <span>
              <span className="text-primary font-semibold">Lun a Sáb</span> 10:00 – 20:00
            </span>
          </div>
          <span className="hidden sm:inline text-white/15" aria-hidden>
            |
          </span>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary/90 shrink-0" />
            <span>Boulogne Sur Mer 445, Once</span>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold hover:underline underline-offset-2"
          >
            Reservar turno
          </a>
        </div>
      </div>
    </div>
  )
}
