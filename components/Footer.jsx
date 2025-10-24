import Link from "next/link";
import { Instagram, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-deep-green text-cream">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-gold-300">
            Hakkımızda
          </h4>
          <p className="mt-4 text-sm text-cream/70">
            Hayırlı Hediyeler, manevi değerleri estetikle buluşturan seçkin
            ürünler sunar. Her koleksiyon sevdiklerinizle paylaşabileceğiniz
            anlamlı hikayeler taşır.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-gold-300">
            Kargo &amp; İade
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>500 TL üzeri alışverişlerde ücretsiz kargo</li>
            <li>14 gün koşulsuz iade garantisi</li>
            <li>Kargo takip ve destek hattı</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-gold-300">
            Bize Ulaşın
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-center gap-3">
              <Phone size={16} />
              <span>+90 (212) 555 10 10</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} />
              <span>destek@hayirlihediyeler.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={16} />
              <Link href="https://instagram.com" className="hover:text-gold-200">
                @hayirlihediyeler
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-gold-300">
            Sosyal Medya
          </h4>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="https://instagram.com"
              className="rounded-full border border-gold-500/40 px-4 py-2 text-cream transition hover:border-gold-300 hover:text-gold-200"
            >
              Instagram
            </Link>
            <Link
              href="https://pinterest.com"
              className="rounded-full border border-gold-500/40 px-4 py-2 text-cream transition hover:border-gold-300 hover:text-gold-200"
            >
              Pinterest
            </Link>
            <Link
              href="https://wa.me/905525551010"
              className="rounded-full border border-gold-500/40 px-4 py-2 text-cream transition hover:border-gold-300 hover:text-gold-200"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-800/60 px-6 py-6 text-center text-xs tracking-[0.3em] text-gold-300/80">
        © {new Date().getFullYear()} Hayırlı Hediyeler. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
