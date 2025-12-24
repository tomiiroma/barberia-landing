"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappLink = "https://wa.me/5491161233500?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20tratamientos"

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 p-0"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </a>
  )
}
