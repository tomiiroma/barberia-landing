import Image from "next/image"
import { MessageCircle, Camera, ShieldCheck, Sparkles } from "lucide-react"
import { waLink, WA_PRESETS } from "@/lib/whatsapp"

/** Evidencia de taller: imágenes chicas, overlay fuerte; el diseño carga el “lujo” */
const EVIDENCE = [
  {
    src: "/vallejos-antes-despues.png",
    title: "Antes / después",
    micro: "Mismo turno, salto real.",
    label: "Transformación",
  },
  {
    src: "/vallejos-corte-pro.png",
    title: "Fade prolijo",
    micro: "Técnica al detalle.",
    label: "Taller",
  },
  {
    src: "/vallejos-hero.png",
    title: "Diseño a navaja",
    micro: "Líneas, regla, criterio.",
    label: "Diseño",
  },
] as const

export function Gallery() {
  const wa = waLink(WA_PRESETS.default)

  return (
    <section id="galeria" className="py-16 md:py-24 px-4 scroll-mt-20 bg-[#050505] relative">
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
            Trabajos reales
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-3 text-balance">
            Prueba de taller, no de photoshop
          </h2>
          <p className="text-white/45 text-sm sm:text-base leading-relaxed text-pretty">
            Fotos sacadas con el teléfono, sin campaña. Sirven para mostrar autenticidad: lo que importa es el corte, no
            el archivo.
          </p>
        </div>

        {/* Cards compactas: la composición manda, no el píxel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-8">
          {EVIDENCE.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col rounded-xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a] ring-1 ring-inset ring-white/[0.03] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] hover:border-primary/30 hover:ring-primary/10 transition-all duration-300"
            >
              <div className="relative h-40 sm:h-44 w-full">
                <Image
                  src={item.src}
                  alt={`Evidencia Vallejos: ${item.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover object-center opacity-85 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.03]"
                />
                {/* Overlay oscuro: la jerarquía la marca el layout, no la foto HD */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/75 to-[#020202]/25" />
                <div className="absolute inset-0 bg-primary/[0.05] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2 py-0.5 border border-white/10">
                  <Camera className="h-3 w-3 text-primary" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-white/80">
                    {item.label}
                  </span>
                </div>
              </div>
              <div className="relative p-4 pt-3 border-t border-white/[0.06] bg-gradient-to-b from-[#0c0c0c] to-[#080808]">
                <h3 className="font-display text-lg text-primary tracking-wide">{item.title}</h3>
                <p className="text-xs text-white/50 mt-1 leading-snug">{item.micro}</p>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/30">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary/60" />
                  <span>Registro de cliente real</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/[0.07] via-[#0a0a0a] to-[#0a0a0a] p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-left">
            <div className="mt-0.5 rounded-lg border border-primary/30 bg-primary/5 p-2">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Más obras, mismo estándar</p>
              <p className="text-xs text-white/45 max-w-md mt-0.5">
                Cada vuelta al sillón suma en tu tarjeta de fidelidad Vallejiano: buen resultado hoy, conveniencia mañana.
                Las fotos son
                solo un adelanto humilde.
              </p>
            </div>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-amber-900/20"
          >
            <MessageCircle className="h-4 w-4" />
            Reservar ahora
          </a>
        </div>
      </div>
    </section>
  )
}
