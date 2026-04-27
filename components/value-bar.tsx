import { Clock, MapPin } from "lucide-react"
import { waLink, WA_PRESETS } from "@/lib/whatsapp"

export function ValueBar() {
  const wa = waLink(WA_PRESETS.default)

  return (
    <div className="border-y border-primary/20 bg-[#0c0c0c]">
      <div className="container mx-auto max-w-6xl px-4 py-3.5">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-center sm:text-left">
          <div className="flex items-center gap-2 text-white/90">
            <Clock className="h-4 w-4 text-primary shrink-0" />
            <span>
              <strong className="text-primary font-semibold">Lun a Sáb</strong> 10:00 – 20:00
            </span>
          </div>
          <span className="hidden sm:inline text-white/20" aria-hidden>
            |
          </span>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>Boulogne Sur Mer 445, Once, CABA</span>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline underline-offset-2 sm:ml-2"
          >
            Reservá hoy
          </a>
        </div>
      </div>
    </div>
  )
}
