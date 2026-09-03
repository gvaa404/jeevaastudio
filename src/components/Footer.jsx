import { Camera } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { STUDIO_NAME, PHONE_DISPLAY, PHONE_NUMBER } from "../data/studioConfig";

export default function Footer() {
  const { t, lang } = useLanguage();
  const studioName = lang === "ta" ? STUDIO_NAME.ta : STUDIO_NAME.en;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface-alt pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
          
          <div>
            <div className="flex items-center gap-2">
              <Camera className="text-brand" size={24} />
              <span className="font-display text-xl font-bold tracking-wide text-content-main">
                {studioName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-content-muted max-w-sm">
              {t.hero.subtitle}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-content-main">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-3">
              {["services", "photography", "gallery", "about"].map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-sm text-content-muted hover:text-brand transition-colors">
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-content-main">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-content-muted">
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-brand transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand transition-colors">
                  {t.contact.address}
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 border-t border-border-subtle pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-content-muted">
            &copy; {currentYear} {studioName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
