import { useState } from "react";

export default function NewsletterBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-30 max-w-sm rounded-3xl border border-gold-400/30 bg-emerald-950/90 p-6 text-cream shadow-soft">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-200">
          İndirim Fırsatı
        </p>
        <h3 className="font-display text-xl text-gold-100">
          İlk alışverişinizde %10 indirim kazanın
        </h3>
        <p className="text-sm text-cream/80">
          E-postanızı bırakın, yeni koleksiyonlardan ve özel davetlerden ilk sizin haberiniz olsun.
        </p>
        <form
          className="space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            setDismissed(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="ornek@mail.com"
            className="w-full rounded-full border border-emerald-700 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-emerald-100 focus:border-gold-300 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-full border border-gold-400 bg-gold-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold-100 transition hover:bg-gold-500/40"
          >
            Kayıt Ol
          </button>
        </form>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-xs uppercase tracking-[0.3em] text-gold-200 underline"
        >
          Daha sonra
        </button>
      </div>
    </div>
  );
}
