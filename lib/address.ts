/** Línea 1 y 2 como en la fachada / correspondencia */
export const SHOP_ADDRESS_LINE1 = "Boulogne Sur Mer 445"
export const SHOP_ADDRESS_LINE2 = "Once, CABA"

/** Una sola cadena para geocoding (Google Search + embed) */
export const SHOP_ADDRESS_MAPS_QUERY = "Boulogne Sur Mer 445, Once, CABA"

export function googleMapsSearchUrl(): string {
  return (
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SHOP_ADDRESS_MAPS_QUERY)
  )
}

/** Iframe sin API key: mismo criterio de búsqueda que “Abrir en Google Maps” */
export function googleMapsEmbedUrl(): string {
  return (
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(SHOP_ADDRESS_MAPS_QUERY) +
    "&z=17&hl=es-AR&output=embed"
  )
}
