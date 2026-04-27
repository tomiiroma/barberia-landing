import { waLink } from "@/lib/whatsapp"

export function LoyaltyStrip() {
  const wa = waLink(
    "Hola, consulto por 5+1 (6.º corte) con tarjeta en el local. "
  )

  return (
    <div
      id="promo-fidelidad"
      className="scroll-mt-20 border-t border-b border-primary/10 bg-[#070707] py-2.5"
    >
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs sm:text-sm text-white/50">
          5+1 · 6.º sin cargo, tarjeta en el local.{" "}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/90 font-medium hover:underline underline-offset-2"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  )
}
