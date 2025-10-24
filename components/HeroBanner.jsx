import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-green via-emerald-900 to-emerald-700 px-6 py-20 text-cream shadow-xl">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -bottom-12 right-0 h-64 w-64 rounded-full bg-gold-600/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:items-start sm:text-left"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-emerald-950/50 px-4 py-1 text-xs uppercase tracking-[0.4em] text-gold-300"
        >
          Zarif dokunuşlarla anlamlı hediyeler
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl text-gold-200 sm:text-5xl md:text-6xl"
        >
          Ruhunuza huzur katan hediyeleri keşfedin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl text-lg text-cream/80"
        >
          Hayırlı Hediyeler, İslami yaşam stiline zarafet katan seçkiler sunar.
          Koleksiyonlarımızla sevdiklerinize unutulmaz anlar armağan edin.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/collections/tum-urunler"
            className="rounded-full border border-gold-400/50 bg-gold-500/20 px-10 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-gold-100 transition hover:bg-gold-500/40"
          >
            Koleksiyonu İncele
          </Link>
          <Link
            href="/products/kadife-seccade-zumrut"
            className="rounded-full border border-gold-400/30 bg-transparent px-10 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-cream transition hover:border-gold-400 hover:text-gold-200"
          >
            En Çok Sevilenler
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
