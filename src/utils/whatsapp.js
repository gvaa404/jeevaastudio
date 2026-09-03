import { WHATSAPP_NUMBER } from "../data/studioConfig";

// Builds a correctly encoded wa.me link and opens it in a new tab.
export function buildWhatsAppUrl(message, number = WHATSAPP_NUMBER) {
  const cleanNumber = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message, number = WHATSAPP_NUMBER) {
  const url = buildWhatsAppUrl(message, number);
  window.open(url, "_blank", "noopener,noreferrer");
}
