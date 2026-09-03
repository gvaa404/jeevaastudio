import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const whatsappMsg = lang === "ta" ? "வணக்கம்!" : "Hello!";

  return (
    <a
      href={buildWhatsAppUrl(whatsappMsg)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20/30 transition-transform hover:scale-110 active:scale-95 sm:bottom-8 sm:right-8"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
