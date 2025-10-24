export default function ContactPage() {
  return (
    <section className="grid gap-12 rounded-3xl border border-emerald-200 bg-white/90 p-10 shadow-soft lg:grid-cols-2">
      <div>
        <h1 className="font-display text-3xl text-deep-green">Bize Ulaşın</h1>
        <p className="mt-4 text-sm text-muted">
          Sorularınız, kurumsal iş birlikleri veya kişiye özel hediye talepleri
          için aşağıdaki form aracılığıyla bizimle iletişime geçebilirsiniz.
        </p>
        <div className="mt-6 space-y-3 text-sm text-muted">
          <p>Telefon: +90 (212) 555 10 10</p>
          <p>E-posta: destek@hayirlihediyeler.com</p>
          <p>WhatsApp: +90 (552) 555 10 10</p>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-green">
            Ad Soyad
          </label>
          <input
            type="text"
            placeholder="Adınızı girin"
            className="mt-2 w-full rounded-lg border border-emerald-200 bg-white/70 px-4 py-3 text-sm text-deep-green focus:border-gold-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-green">
            E-posta
          </label>
          <input
            type="email"
            placeholder="ornek@mail.com"
            className="mt-2 w-full rounded-lg border border-emerald-200 bg-white/70 px-4 py-3 text-sm text-deep-green focus:border-gold-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-green">
            Mesajınız
          </label>
          <textarea
            rows={4}
            placeholder="Nasıl yardımcı olabiliriz?"
            className="mt-2 w-full rounded-lg border border-emerald-200 bg-white/70 px-4 py-3 text-sm text-deep-green focus:border-gold-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-full border border-deep-green bg-deep-green px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold-200 transition hover:bg-emerald-900"
        >
          Gönder
        </button>
      </form>
    </section>
  );
}
