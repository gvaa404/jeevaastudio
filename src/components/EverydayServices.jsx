import { FileText, Printer, Scan } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function EverydayServices() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-surface-base py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tight text-content-main sm:text-5xl">
              {t.everyday.heading}
            </h2>
            <p className="mt-4 text-lg text-content-muted leading-relaxed">
              {t.everyday.subheading}
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.everyday.items.map((item, idx) => {
            const title = lang === "ta" ? item.titleTa : item.titleEn;
            const desc = lang === "ta" ? item.descTa : item.descEn;
            
            // Just assigning a quick alternating icon for visual variety
            const Icon = idx % 3 === 0 ? FileText : (idx % 3 === 1 ? Printer : Scan);

            return (
              <div
                key={idx}
                className="group flex items-start gap-5 rounded-2xl bg-surface-alt p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand/5 border border-border-subtle hover:border-brand/30 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-base text-brand shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-content-main group-hover:text-brand transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-content-muted leading-relaxed">
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
