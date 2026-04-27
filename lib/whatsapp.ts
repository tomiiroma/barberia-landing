/** Número WhatsApp negocio (AR): sin + ni espacios — E.164 para wa.me */
export const WHATSAPP_E164 = "5491144223540"

const base = `https://wa.me/${WHATSAPP_E164}`

export function waLink(message: string) {
  return `${base}?text=${encodeURIComponent(message)}`
}

export const WA_PRESETS = {
  default:
    "Hola Vallejos, quiero reservar turno. Día/horario que me viene bien: ",
  /** Primer corte + activar acumulación (programa 6.º gratis) */
  startToday:
    "Hola, quiero reservar turno y empezar a sumar en la tarjeta Vallejiana (después del 5.º corte, el 6.º es gratis). El día/horario que me viene: ",
  /** Vuelta / seguir acumulando */
  loyaltyReturn:
    "Hola, saco turno para seguir sumando en la tarjeta (programa 6.º gratis). ",
  /** Ya tiene tarjeta y quiere turno */
  haveCard: "Hola, tengo la tarjeta y quiero sacar turno. ",
  corte: "Hola, quiero turno para corte + barba / diseño. ",
  color: "Hola, consulto por mechas / color / técnica. ",
  ubicacion: "Hola, ¿me pasan cómo llegar a Boulogne Sur Mer 445? ",
} as const
