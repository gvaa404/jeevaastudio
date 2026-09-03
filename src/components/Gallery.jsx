import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "../data/studioConfig";

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const categories = [{ id: "all", ta: t.gallery.all, en: t.gallery.all }, ...GALLERY_CATEGORIES];

  const filtered = filter === "all" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightbox]);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const nextImg = () => setLightbox((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  const prevImg = () => setLightbox((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));

  return (
    <section id="gallery" className="bg-surface-base py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-content-main sm:text-5xl">
            {t.gallery.heading}
          </h2>
          <p className="mt-4 text-lg text-content-muted">{t.gallery.subheading}</p>
        </div>

        {/* Filter */}
        <div className="mt-12 flex hide-scrollbar flex-wrap justify-center gap-3 overflow-x-auto pb-4">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                filter === c.id
                  ? "border-brand bg-brand text-surface-base"
                  : "border-border-subtle bg-surface-alt text-content-muted hover:border-brand/50 hover:text-content-main"
              }`}
            >
              {lang === "ta" ? c.ta : c.en}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
          {filtered.map((img, index) => {
            const alt = lang === "ta" ? img.altTa : img.altEn;
            // Generate some pseudo-random height variations to give masonry feel without a library
            const heightClasses = ["aspect-[3/4]", "aspect-[4/5]", "aspect-square", "aspect-[4/3]"];
            const hClass = heightClasses[index % heightClasses.length];
            return (
              <div
                key={img.id}
                className="group relative mb-6 cursor-pointer overflow-hidden rounded-xl bg-surface-alt break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={alt}
                  loading="lazy"
                  className={`w-full ${hClass} object-cover transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-surface-base/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center lightbox-overlay">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-surface-base/50 text-white hover:bg-brand hover:text-surface-base sm:right-8 sm:top-8"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            className="absolute left-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-surface-base/50 text-white hover:bg-brand hover:text-surface-base sm:left-8"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={filtered[lightbox].src}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl drop-shadow-2xl"
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            className="absolute right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-surface-base/50 text-white hover:bg-brand hover:text-surface-base sm:right-8"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
