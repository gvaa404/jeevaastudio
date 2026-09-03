import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex h-8 items-center rounded-full bg-surface-alt p-0.5 text-[11px] font-bold text-content-muted">
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-2 py-1 transition-colors ${lang === "en" ? "bg-surface-base text-brand shadow-sm" : "hover:text-content-main"}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ta")}
        className={`rounded-full px-2 py-1 transition-colors ${lang === "ta" ? "bg-surface-base text-brand shadow-sm" : "hover:text-content-main"}`}
      >
        TA
      </button>
    </div>
  );
}
