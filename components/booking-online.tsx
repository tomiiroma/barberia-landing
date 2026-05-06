import { Layers } from "lucide-react"

const AGENDA_OVERVIEW_EMBED =
  "https://agendapro.com/iframe/overview/c8d2d33d-7e49-4dba-8141-428983099710"

/** Shell alineado al hero premium (~1400px) */
const SHELL = "mx-auto w-full max-w-[1400px] px-4 sm:px-10 lg:px-12 xl:px-14"

export function BookingOnline() {
  return (
    <section
      id="reservas-online"
      aria-labelledby="booking-online-heading"
      className="scroll-mt-20 border-t border-white/[0.05] bg-[#070707] bg-[radial-gradient(ellipse_90%_50%_at_50%_-5%,oklch(0.72_0.1_85/0.07),transparent)] py-14 md:py-20 lg:py-20"
    >
      <div className={SHELL}>
        <header className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="text-primary text-[11px] font-semibold tracking-[0.22em] uppercase sm:text-xs">
            Reservas online
          </p>
          <h2
            id="booking-online-heading"
            className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-[2.125rem] md:text-4xl md:leading-[1.08]"
          >
            Reservá en segundos
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[0.98rem] leading-relaxed text-white/52 sm:text-base">
            Elegí día y horario online.
          </p>
        </header>

        <div className="rounded-[26px] border border-primary/18 bg-[#050508] p-4 shadow-[0_28px_80px_-28px_rgba(0,0,0,0.8)] ring-1 ring-inset ring-white/[0.035] md:p-7 lg:p-9">
          <p className="sr-only">
            Elegí turno desde la agenda embebida. Podés navegar después a la lista de cortes desde «Ver servicios».
          </p>

          <div className="mb-4 flex justify-center md:mb-5">
            <a
              href="#servicios"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/95 transition-colors hover:border-primary/40 hover:bg-white/[0.07] hover:text-primary md:w-auto md:py-3.5 md:text-[0.9375rem]"
            >
              <Layers className="h-4 w-4 shrink-0 text-primary/85" aria-hidden />
              Ver servicios
            </a>
          </div>

          <div className="overflow-hidden rounded-[18px] bg-[#111] shadow-inner shadow-black/40">
            <iframe
              title="Reservá tu turno en Vallejos Barbería — AgendaPro"
              src={AGENDA_OVERVIEW_EMBED}
              className="block w-full border-0 bg-[#111] [min-height:min(52vh,420px)] sm:[min-height:min(54vh,480px)] md:min-h-[520px] lg:min-h-[600px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
