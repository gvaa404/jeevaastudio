import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { PHONE_NUMBER, HERO_IMAGE } from "../data/studioConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function Hero() {
  const { t, lang } = useLanguage();
  
  const whatsappMsg = lang === "ta" 
    ? "வணக்கம், எனக்கு ஒரு புகைப்பட சேவை பற்றி விசாரிக்க வேண்டும்." 
    : "Hello, I would like to enquire about a photo service.";

  return (
    <section id="home" className="relative flex min-h-[85vh] w-full items-center justify-center pt-32 lg:pt-32 pb-16">
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img 
          src={HERO_IMAGE} 
          alt="Studio Photography" 
          className="h-full w-full object-cover object-center opacity-70 dark:opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 gradient-overlay-right"></div>
      </div>
      
      {/* Mobile background */}
      <div className="absolute inset-0 z-0 block lg:hidden">
        <img 
          src={HERO_IMAGE} 
          alt="Studio Photography" 
          className="h-full w-full object-cover object-top opacity-70 dark:opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-brand uppercase">
            {t.hero.eyebrow}
          </p>
          
          <h1 className="hero-heading font-display text-content-main">
            {t.hero.title1}<br />
            {t.hero.title2} <span className="text-brand italic">{t.hero.title3}</span>
          </h1>
          
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-content-muted sm:text-xl">
            {t.hero.subtitle}
          </p>
          
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold tracking-wide text-white dark:text-surface-base transition-all hover:brightness-110 shadow-md"
            >
              <Phone size={18} aria-hidden="true" />
              {t.hero.callBtn}
            </a>
            <a
              href={buildWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/40 bg-surface-base/50 px-8 py-4 text-sm font-bold tracking-wide text-content-main backdrop-blur-sm transition-all hover:border-brand hover:bg-surface-alt shadow-sm"
            >
              <MessageCircle size={18} aria-hidden="true" className="text-[#25D366]" />
              {t.hero.whatsappBtn}
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand/50"></div>
            <p className="text-xs font-medium tracking-[0.15em] text-content-muted uppercase">
              {t.hero.servicesLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
