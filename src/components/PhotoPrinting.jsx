import { Printer, Image as ImageIcon, Maximize, Frame, BookImage, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function PhotoPrinting() {
  const { t, lang } = useLanguage();

  const printItems = [
    { icon: ImageIcon, label: t.printing.point1 },
    { icon: Printer, label: t.printing.point2 },
    { icon: Maximize, label: t.printing.point3 },
    { icon: Frame, label: t.printing.point4 },
    { icon: BookImage, label: t.printing.point5 },
  ];

  const whatsappMsg = lang === "ta" 
    ? "வணக்கம், புகைப்பட பிரிண்ட் செய்ய வேண்டும்." 
    : "Hello, I would like to get some photos printed.";

  return (
    <section className="bg-surface-base py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border-subtle bg-surface-alt p-8 sm:p-16 lg:p-20 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand/5 blur-[100px]"></div>
          
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-content-main sm:text-5xl">
                {t.printing.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-content-muted">
                {t.printing.subtitle}
              </p>
              
              <a
                href={buildWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold tracking-wide text-surface-base transition-all hover:brightness-110"
              >
                <MessageCircle size={20} aria-hidden="true" />
                {t.printing.sendBtn}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-2">
              {printItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface-base p-5 transition-colors hover:border-brand/30 ${
                      index === 4 ? "col-span-2 sm:col-span-1 lg:col-span-2" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-alt">
                      <Icon size={20} className="text-brand" />
                    </div>
                    <span className="font-medium text-content-main">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
