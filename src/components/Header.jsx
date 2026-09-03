import { useState, useEffect } from "react";
import { Camera, Menu, X, Phone, MessageCircle } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/LanguageContext";
import { STUDIO_NAME, PHONE_NUMBER, PHONE_DISPLAY } from "../data/studioConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

const NAV_ITEMS = [
  { href: "#home", key: "home" },
  { href: "#services", key: "services" },
  { href: "#gallery", key: "gallery" },
  { href: "#photography", key: "photography" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang } = useLanguage();

  const studioName = lang === "ta" ? STUDIO_NAME.ta : STUDIO_NAME.en;
  const whatsappGreeting = lang === "ta" ? "வணக்கம்!" : "Hello!";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-surface-base/90 backdrop-blur-md border-b border-border-subtle py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Camera className="text-brand" size={24} />
          <span className="font-display text-xl font-bold tracking-wide text-content-main whitespace-nowrap">
            {studioName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium tracking-wide text-content-muted transition-colors hover:text-brand whitespace-nowrap"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-3 border-r border-border-subtle pr-5">
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group inline-flex items-center justify-center rounded-full border border-brand/40 px-4 py-2 text-sm font-medium text-brand transition-all hover:bg-brand hover:text-surface-base whitespace-nowrap"
            >
              <Phone size={16} className="mr-2" />
              {t.header.call}
            </a>
            <a
              href={buildWhatsAppUrl(whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-110 shadow-sm whitespace-nowrap"
            >
              <MessageCircle size={16} className="mr-2" />
              {t.header.whatsapp}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-content-main transition-colors hover:text-brand p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-full flex flex-col bg-surface-alt border-b border-border-subtle p-4 transition-all duration-300 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible h-0 overflow-hidden py-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-content-main hover:text-brand"
            >
              {t.nav[item.key]}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-brand/40 py-3 text-sm font-semibold text-brand bg-surface-base"
            >
              <Phone size={18} className="mr-2" />
              {t.header.call} - {PHONE_DISPLAY}
            </a>
            <a
              href={buildWhatsAppUrl(whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white shadow-sm"
            >
              <MessageCircle size={18} className="mr-2" />
              {t.header.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
