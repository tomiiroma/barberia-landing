/** Número WhatsApp negocio (AR): sin + ni espacios — E.164 para wa.me */
export const WHATSAPP_E164 = "5491144223540"

const base = `https://wa.me/${WHATSAPP_E164}`

export function waLink(message: string) {
  return `${base}?text=${encodeURIComponent(message)}`
}

export const WA_PRESETS = {
  default:
    "Hola Vallejos, quiero reservar turno. Día y horario que me viene: ",
  /** Primera visita: calidad + activar tarjeta (6.º sin cargo en el local) */
  startToday:
    "Hola, quiero coordinar turno para conocer su trabajo. Me gustaría activar la tarjeta de fidelidad Vallejiano en el local (voy sumando visitas y el 6.º corte es sin cargo). Me viene: ",
  /** Cliente que ya vuelve y sigue sumando */
  loyaltyReturn:
    "Hola, vuelvo con ustedes — sigo sumando con la tarjeta de fidelidad Vallejiano. El turno: ",
  /** Ya tiene tarjeta y reserva directo */
  haveCard: "Hola, tengo la tarjeta de fidelidad Vallejiano y quiero sacar turno. ",
  corte: "Hola, quiero turno para corte + barba / diseño. ",
  color: "Hola, consulto por mechas / color / técnica. ",
  ubicacion: "Hola, ¿me pasan cómo llegar a Boulogne Sur Mer 445? ",
} as const
