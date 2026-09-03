import { useLanguage } from "../context/LanguageContext";
import { PHOTOGRAPHY_IMAGE_2 } from "../data/studioConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function MarriagePhotography() {
  const { t, lang } = useLanguage();
  
  const whatsappMsg = lang === "ta" 
    ? "வணக்கம், திருமண புகைப்பட சேவை பற்றி விசாரிக்க வேண்டும்." 
    : "Hello, I would like to enquire about marriage photography.";

  return (
    <section id="photography" className="relative flex min-h-[80vh] items-center py-24 lg:py-0">
      <div className="absolute inset-0 z-0">
        <img 
          src={PHOTOGRAPHY_IMAGE_2} 
          alt="Wedding Photography" 
          className="h-full w-full object-cover grayscale-[30%] opacity-40"
        />
        <div className="absolute inset-0 bg-surface-base/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-surface-base"></div>
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-5xl font-bold leading-[1.1] text-content-main sm:text-6xl md:text-7xl">
            {t.marriage.heading1} <br className="hidden sm:block" />
            <span className="italic text-brand">{t.marriage.heading2}</span>
          </h2>
          
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-content-main/90 drop-shadow-md">
            {t.marriage.body}
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {t.marriage.list.map((item, idx) => (
              <span key={idx} className="text-sm font-semibold tracking-wide text-brand/80 uppercase">
                {item}
              </span>
            ))}
          </div>
          
          <div className="mt-16">
            <a
              href={buildWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-5 text-sm font-bold tracking-wide text-surface-base shadow-[0_0_40px_-10px_rgba(198,161,91,0.5)] transition-all hover:scale-105 hover:bg-brand"
            >
              {t.marriage.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
