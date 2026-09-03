import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);
const DEFAULT_LANG = "en";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_LANG;
    const saved = window.localStorage.getItem("studio-lang");
    return saved === "ta" || saved === "en" ? saved : DEFAULT_LANG;
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLang = (next) => {
    setLang(next);
    try {
      window.localStorage.setItem("studio-lang", next);
    } catch {}
  };

  const value = useMemo(
    () => ({
      lang,
      setLang: changeLang,
      t: translations[lang],
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
