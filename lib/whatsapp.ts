/** Número WhatsApp negocio (AR): sin + ni espacios — E.164 para wa.me */
export const WHATSAPP_E164 = "5491144223540"

const base = `https://wa.me/${WHATSAPP_E164}`

export function waLink(message: string) {
  return `${base}?text=${encodeURIComponent(message)}`
}

export const WA_PRESETS = {
  default:
    "Hola Vallejos, quiero reservar turno. Día/horario que me viene bien: ",
  corte: "Hola, quiero turno para corte + barba / diseño. ",
  color: "Hola, consulto por mechas / color / técnica. ",
  ubicacion: "Hola, ¿me pasan cómo llegar a Boulogne Sur Mer 445? ",
} as const
