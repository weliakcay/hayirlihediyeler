import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  const { handle, name, price, images, rating, reviews, availability } =
    product;

  const badge =
    availability === "out_of_stock"
      ? { label: "Stokta Yok", color: "bg-red-900/80 text-red-200" }
      : availability === "preorder"
      ? { label: "Ön Sipariş", color: "bg-amber-900/70 text-amber-100" }
      : availability === "limited"
      ? { label: "Sınırlı", color: "bg-emerald-900/80 text-gold-200" }
      : null;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-emerald-700/40 bg-cream shadow-soft transition"
    >
      <div className="relative h-64 overflow-hidden sm:h-72">
        <Image
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-emerald-950/60 to-transparent" />
        {badge ? (
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${badge.color}`}
          >
            {badge.label}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:gap-4">
        <div>
          <h3 className="font-display text-xl text-deep-green">
            <Link href={`/products/${handle}`}>{name}</Link>
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-emerald-900/80 sm:text-sm">
            <div className="flex items-center gap-1 text-gold-400">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i + 1 <= Math.round(rating) ? "fill-current" : ""}
                />
              ))}
            </div>
            <span>{rating.toFixed(1)}</span>
            <span className="text-muted">({reviews})</span>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-base font-semibold text-emerald-900 sm:text-lg">
            {price.toLocaleString("tr-TR")} ₺
          </span>
          <Link
            href={`/products/${handle}`}
            className="inline-flex w-full items-center justify-center rounded-full border border-deep-green bg-deep-green px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-200 transition hover:bg-emerald-900 sm:w-auto"
          >
            İncele
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
