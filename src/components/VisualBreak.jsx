import { Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { PHOTOGRAPHY_IMAGE_1 } from "../data/studioConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function VisualBreak() {
  const { t, lang } = useLanguage();

  const whatsappMsg = lang === "ta" 
    ? "வணக்கம், புகைப்பட சேவை பற்றி விசாரிக்க வேண்டும்." 
    : "Hello, I would like to enquire about your photography services.";

  return (
    <section className="bg-surface-alt">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[500px] lg:h-auto">
          <img 
            src={PHOTOGRAPHY_IMAGE_1} 
            alt="Photography" 
            className="absolute inset-0 h-full w-full object-cover grayscale-[15%]"
          />
          <div className="absolute inset-0 gradient-overlay lg:hidden"></div>
        </div>
        
        <div className="flex items-center px-4 py-20 sm:px-12 lg:px-20 lg:py-32">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-bold tracking-[0.2em] text-brand uppercase">
              {t.visualBreak.label}
            </div>
            
            <h2 className="mt-8 font-display text-4xl font-bold leading-tight text-content-main sm:text-5xl">
              {t.visualBreak.heading1} <br/>
              <span className="text-content-muted">{t.visualBreak.heading2}</span> <br/>
              <span className="italic text-brand">{t.visualBreak.heading3}</span>
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-content-muted">
              {t.visualBreak.body}
            </p>
            
            <ul className="mt-8 space-y-4">
              {t.visualBreak.list.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10">
                    <Check size={14} className="text-brand" strokeWidth={3} />
                  </div>
                  <span className="font-medium text-content-main">{item}</span>
                </li>
              ))}
            </ul>
            
            <a
              href={buildWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center justify-center rounded-full border-2 border-brand px-8 py-4 text-sm font-bold tracking-wide text-brand transition-all hover:bg-brand hover:text-surface-base"
            >
              {t.visualBreak.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
