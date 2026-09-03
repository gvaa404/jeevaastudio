import { Zap, Image as ImageIcon, IndianRupee, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TrustStrip() {
  const { t } = useLanguage();

  const features = [
    { icon: Zap, label: t.trust.fast },
    { icon: ImageIcon, label: t.trust.quality },
    { icon: IndianRupee, label: t.trust.price },
    { icon: MapPin, label: t.trust.local },
  ];

  return (
    <div className="border-b border-t border-border-subtle bg-surface-alt">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-4 sm:gap-y-0">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="flex items-center justify-center gap-3 border-r border-border-subtle last:border-0 sm:border-r"
              >
                <Icon size={18} className="text-brand" />
                <span className="text-sm font-medium tracking-wide text-content-muted">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
