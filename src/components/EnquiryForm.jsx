import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SERVICES } from "../data/studioConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function EnquiryForm() {
  const { t, lang } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    serviceId: "",
    quantity: "1",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = t.enquiry.errorName;
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = t.enquiry.errorPhone;
    if (!form.serviceId) newErrors.service = t.enquiry.errorService;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const selected = SERVICES.find((s) => s.id === form.serviceId);
    const serviceName = lang === "ta" ? selected?.nameTa : selected?.nameEn;

    const lines = [
      `*${t.enquiry.heading}*`,
      `---`,
      `*${t.enquiry.name}:* ${form.name}`,
      `*${t.enquiry.phone}:* ${form.phone}`,
      `*${t.enquiry.service}:* ${serviceName}`,
      `*${t.enquiry.quantity}:* ${form.quantity}`,
    ];

    if (form.message.trim()) {
      lines.push(`*${t.enquiry.message}:* ${form.message.trim()}`);
    }

    const finalMsg = lines.join("\n");
    window.open(buildWhatsAppUrl(finalMsg), "_blank");
  };

  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border-subtle bg-surface-base p-8 sm:p-12 shadow-xl shadow-black/20/50">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-content-main sm:text-4xl">
              {t.enquiry.heading}
            </h2>
            <p className="mt-3 text-content-muted">{t.enquiry.subheading}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-content-main">
                  {t.enquiry.name}
                </label>
                <input
                  type="text"
                  placeholder={t.enquiry.namePlaceholder}
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: null });
                  }}
                  className={`w-full rounded-lg border bg-surface-alt p-3 text-content-main placeholder-black-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand ${
                    errors.name ? "border-maroon" : "border-border-subtle"
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-maroon-400">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-content-main">
                  {t.enquiry.phone}
                </label>
                <input
                  type="tel"
                  placeholder={t.enquiry.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setForm({ ...form, phone: val });
                    if (errors.phone) setErrors({ ...errors, phone: null });
                  }}
                  className={`w-full rounded-lg border bg-surface-alt p-3 text-content-main placeholder-black-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand ${
                    errors.phone ? "border-maroon" : "border-border-subtle"
                  }`}
                />
                {errors.phone && <p className="mt-1 text-xs text-maroon-400">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-content-main">
                  {t.enquiry.service}
                </label>
                <select
                  value={form.serviceId}
                  onChange={(e) => {
                    setForm({ ...form, serviceId: e.target.value });
                    if (errors.service) setErrors({ ...errors, service: null });
                  }}
                  className={`w-full rounded-lg border bg-surface-alt p-3 text-content-main focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand ${
                    errors.service ? "border-maroon" : "border-border-subtle"
                  }`}
                >
                  <option value="" disabled className="text-content-muted/60">
                    {t.enquiry.servicePlaceholder}
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {lang === "ta" ? s.nameTa : s.nameEn}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs text-maroon-400">{errors.service}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-content-main">
                  {t.enquiry.quantity}
                </label>
                <input
                  type="number"
                  min="1"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                  className="w-full rounded-lg border border-border-subtle bg-surface-alt p-3 text-content-main focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-content-main">
                {t.enquiry.message}
              </label>
              <textarea
                rows="4"
                placeholder={t.enquiry.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border-subtle bg-surface-alt p-3 text-content-main placeholder-black-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] p-4 text-base font-bold text-surface-base transition-all hover:brightness-110"
            >
              <MessageCircle size={20} className="transition-transform group-hover:scale-110" />
              {t.enquiry.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
