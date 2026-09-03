import { useLanguage } from "../context/LanguageContext";
import { SERVICES } from "../data/studioConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function Services() {
  const { t, lang } = useLanguage();
  
  return (
    <section id="services" className="bg-surface-base py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl font-bold tracking-tight text-content-main sm:text-5xl">
            {t.services.heading}
          </h2>
          <p className="mt-6 text-lg text-content-muted leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const name = lang === "ta" ? service.nameTa : service.nameEn;
            const desc = lang === "ta" ? service.descTa : service.descEn;
            const msg = lang === "ta"
              ? `வணக்கம், எனக்கு ${service.nameTa} (${service.nameEn}) வேண்டும். மேலும் விவரங்கள் தெரிவிக்கவும்.`
              : `Hello, I would like to enquire about ${service.nameEn}. Please share more details.`;
            
            const numberString = String(index + 1).padStart(2, "0");

            return (
              <a
                key={service.id}
                href={buildWhatsAppUrl(msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-alt p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5 border border-transparent hover:border-brand/20"
              >
                {/* Number Watermark */}
                <span className="absolute -bottom-6 -right-4 font-display text-[8rem] font-bold text-content-muted/5 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand/5 pointer-events-none select-none">
                  {numberString}
                </span>

                <div className="relative z-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-surface-base text-brand shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold text-content-main group-hover:text-brand transition-colors">
                    {name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">
                    {desc}
                  </p>
                </div>
                
                <div className="relative z-10 mt-8 flex items-center text-sm font-semibold tracking-wide text-brand opacity-0 transition-all duration-300 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                  {t.services.enquire}
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

