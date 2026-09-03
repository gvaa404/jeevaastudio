import { useLanguage } from "../context/LanguageContext";
import { SERVICES } from "../data/studioConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function Services() {
  const { t, lang } = useLanguage();
  
  // Exclude everyday services like Patta/Chitta, Xerox etc. from this primary grid if we want.
  // The prompt asks to keep 4 cards per row large. Let's just map all services or filter.
  // The prompt said: 01 Passport Photo, 02 6x4 Photo Print, 03 Photo Frame, 04 Photo Album, 05 Marriage Photography, 06 Function Photography, 07 Patta / Chitta, 08 Printout / Xerox / Scan
  return (
    <section id="services" className="bg-surface-base py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tight text-content-main sm:text-5xl">
              {t.services.heading}
            </h2>
            <p className="mt-4 text-lg text-content-muted">
              {t.services.subheading}
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const name = lang === "ta" ? service.nameTa : service.nameEn;
            const desc = lang === "ta" ? service.descTa : service.descEn;
            const msg = lang === "ta"
              ? `வணக்கம், எனக்கு ${service.nameTa} (${service.nameEn}) வேண்டும். மேலும் விவரங்கள் தெரிவிக்கவும்.`
              : `Hello, I would like to enquire about ${service.nameEn}. Please share more details.`;
            
            const numberString = String(index + 1).padStart(2, "0");

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border-subtle bg-surface-alt p-8 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_0_30px_-10px_rgba(198,161,91,0.2)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Icon size={32} strokeWidth={1.5} className="text-brand transition-transform group-hover:scale-110" aria-hidden="true" />
                    <span className="font-display text-2xl font-bold text-content-muted/60">{numberString}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold text-content-main">
                    {name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">
                    {desc}
                  </p>
                </div>
                
                <a
                  href={buildWhatsAppUrl(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center text-sm font-semibold tracking-wide text-brand transition-colors hover:text-brand"
                >
                  {t.services.enquire}
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
