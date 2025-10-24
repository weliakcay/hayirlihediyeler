import { useEffect, useState } from "react";

const STORAGE_KEY = "hayirli-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    }
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-400/30 bg-emerald-950/95 px-6 py-4 text-cream backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-cream/80">
          Deneyiminizi kişiselleştirmek için çerezleri kullanıyoruz. Detaylı bilgi için gizlilik politikamızı inceleyebilirsiniz.
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={accept}
            className="rounded-full border border-gold-400 bg-gold-500/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-100 transition hover:bg-gold-500/40"
          >
            Kabul Et
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="text-xs uppercase tracking-[0.3em] text-gold-200 underline"
          >
            Daha sonra
          </button>
        </div>
      </div>
    </div>
  );
}
