import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import {
  STUDIO_NAME,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  ADDRESS,
  OPENING_HOURS,
  MAPS_URL,
} from "../data/studioConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function Contact() {
  const { t, lang } = useLanguage();

  const address = lang === "ta" ? ADDRESS.ta : ADDRESS.en;
  const hours = lang === "ta" ? OPENING_HOURS.ta : OPENING_HOURS.en;
  const studioName = lang === "ta" ? STUDIO_NAME.ta : STUDIO_NAME.en;

  const whatsappMsg = lang === "ta" ? "வணக்கம்!" : "Hello!";

  return (
    <section id="contact" className="border-t border-border-subtle bg-surface-base py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-content-main sm:text-5xl">
              {t.contact.heading}
            </h2>
            <div className="mt-8 h-1 w-12 bg-brand"></div>

            <div className="mt-12 space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-alt text-brand">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-content-main">{t.contact.address}</h3>
                  <p className="mt-2 text-content-muted">{studioName}</p>
                  <p className="text-content-muted">{address}</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
                  >
                    {t.contact.mapsBtn}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-alt text-brand">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-content-main">{t.contact.phone}</h3>
                  <a href={`tel:${PHONE_NUMBER}`} className="mt-2 block text-content-muted hover:text-brand">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-alt text-[#25D366]">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-content-main">{t.contact.whatsapp}</h3>
                  <a
                    href={buildWhatsAppUrl(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-content-muted hover:text-[#25D366]"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-alt text-brand">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-content-main">{t.contact.hours}</h3>
                  <p className="mt-2 text-content-muted">{hours}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand px-4 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-surface-base"
              >
                <Phone size={18} />
                {t.contact.callBtn}
              </a>
              <a
                href={buildWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-surface-base transition-colors hover:brightness-110"
              >
                <MessageCircle size={18} />
                {t.contact.whatsappBtn}
              </a>
            </div>
          </div>

          <div className="h-[400px] w-full overflow-hidden rounded-2xl bg-surface-alt lg:h-full lg:min-h-[500px]">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469!2d77.6741179!3d9.8082461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDgnMjkuNyJOIDc3wrA0MCcyNi44IkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(80%)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
