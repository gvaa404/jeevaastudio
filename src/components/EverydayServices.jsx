import { FileText, Printer, Scan } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function EverydayServices() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-surface-alt py-24 sm:py-32 border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-content-main sm:text-4xl">
            {t.everyday.heading}
          </h2>
          <p className="mt-4 text-lg text-content-muted">
            {t.everyday.subheading}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.everyday.items.map((item, idx) => {
            const title = lang === "ta" ? item.titleTa : item.titleEn;
            const desc = lang === "ta" ? item.descTa : item.descEn;
            
            // Just assigning a quick alternating icon for visual variety
            const Icon = idx % 3 === 0 ? FileText : (idx % 3 === 1 ? Printer : Scan);

            return (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl bg-surface-base p-6 transition-colors hover:bg-surface-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-border-subtle">
                  <Icon size={20} className="text-content-muted" />
                </div>
                <div>
                  <h3 className="font-semibold text-content-main">{title}</h3>
                  <p className="mt-1 text-sm text-content-muted leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
