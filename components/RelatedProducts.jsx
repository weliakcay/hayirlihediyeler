import Link from "next/link";
import Image from "next/image";

export default function RelatedProducts({ products }) {
  if (!products.length) return null;

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-deep-green">
          Size Önerilenler
        </h2>
        <Link
          href="/collections/tum-urunler"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400"
        >
          Tümünü Gör
        </Link>
      </div>
      <div className="mt-6 flex gap-6 overflow-x-auto pb-2">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.handle}`}
            className="min-w-[200px] flex-shrink-0 rounded-3xl border border-emerald-200 bg-white/70 p-3 shadow-soft transition hover:-translate-y-1 hover:border-gold-300 sm:min-w-[220px]"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-2xl">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-sm font-semibold text-deep-green">
                {product.name}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                {product.price.toLocaleString("tr-TR")} ₺
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
