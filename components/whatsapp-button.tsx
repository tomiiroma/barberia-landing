"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/5491161233500?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20tratamientos"

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-foreground/95 backdrop-blur-md border-t border-white/10 p-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3.5 rounded-xl text-base font-bold shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5 flex-shrink-0" />
            Consultar gratis por WhatsApp
          </a>
          <p className="text-center text-xs text-white/30 mt-2 pb-safe">Sin costo · Respondemos en el día</p>
        </div>
      </div>

      <div className="h-24 md:hidden" aria-hidden="true" />

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-7 right-7 z-50 items-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-2xl text-sm font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300"
        title="Consultá por WhatsApp"
      >
        <MessageCircle className="h-[18px] w-[18px] flex-shrink-0" />
        Consultar gratis
      </a>
    </>
  )
}
