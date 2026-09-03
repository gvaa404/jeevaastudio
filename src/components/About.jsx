import { useLanguage } from "../context/LanguageContext";
import { HERO_IMAGE } from "../data/studioConfig";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-surface-base py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
            <img 
              src={HERO_IMAGE} 
              alt="Studio" 
              className="absolute inset-0 h-full w-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-brand/10 mix-blend-overlay"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl font-bold tracking-tight text-content-main sm:text-4xl">
              {t.about.heading}
            </h2>
            <div className="mt-8 h-1 w-12 bg-brand"></div>
            <p className="mt-8 text-lg leading-relaxed text-content-muted">
              {t.about.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
