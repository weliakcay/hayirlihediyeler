import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowLeft, Truck } from "lucide-react";
import RelatedProducts from "@/components/RelatedProducts";
import {
  getProductByHandle,
  getCollectionByHandle,
  products,
} from "@/data/products";

export default function ProductDetail({ product, collectionInfo, relatedProducts }) {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const collectionLabel = collectionInfo?.title ?? formatSlug(product.collection);

  return (
    <div className="space-y-16">
      <Link
        href="/collections/tum-urunler"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted transition hover:text-deep-green"
      >
        <ArrowLeft size={16} />
        Mağazaya Dön
      </Link>

      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-950/20 shadow-soft">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((image) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                className={`relative aspect-square overflow-hidden rounded-2xl border transition ${
                  activeImage === image
                    ? "border-gold-400"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl border border-emerald-200 bg-white/90 p-10 shadow-soft">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-gold-400">
              {product.tags.join(" • ")}
            </p>
            <h1 className="font-display text-3xl text-deep-green">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted">
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i + 1 <= Math.round(product.rating) ? "fill-current" : ""}
                  />
                ))}
              </div>
              <span>{product.rating.toFixed(1)}</span>
              <span>({product.reviews} yorum)</span>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 text-deep-green">
            <p className="text-3xl font-semibold">
              {product.price.toLocaleString("tr-TR")} ₺
            </p>
            <p className="mt-2 text-sm text-muted">
              KDV dahildir. Kapıda ödeme ve taksit seçenekleri mevcuttur.
            </p>
          </div>

          <p className="text-sm leading-relaxed text-muted">
            {product.description}
          </p>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-deep-green bg-deep-green px-10 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-gold-200 transition hover:bg-emerald-900"
          >
            Sepete Ekle
          </motion.button>

          <div className="rounded-3xl border border-gold-500/30 bg-gold-100/40 p-6 text-sm text-deep-green">
            <div className="flex items-center gap-3">
              <Truck size={20} className="text-gold-600" />
              <div>
                <p className="font-semibold">Kargo Bilgisi</p>
                <p>3 iş günü içinde kargoda. Ücretsiz hediye paketi.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white/80 p-6">
            <h2 className="font-display text-xl text-deep-green">Ürün Detayları</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Koleksiyon: {collectionLabel}</li>
              <li>• Stok Durumu: {formatAvailability(product.availability)}</li>
              <li>• Gönderim: Türkiye geneline hızlı teslimat</li>
            </ul>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
    </div>
  );
}

function formatAvailability(availability) {
  switch (availability) {
    case "in_stock":
      return "Stokta";
    case "limited":
      return "Sınırlı Stok";
    case "preorder":
      return "Ön Sipariş";
    case "out_of_stock":
      return "Stokta Yok";
    default:
      return "Belirtilmedi";
  }
}

function formatSlug(slug) {
  return slug
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

export async function getStaticPaths() {
  return {
    paths: products.map((product) => ({
      params: { handle: product.handle },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductByHandle(params.handle);
  const collectionInfo = product
    ? getCollectionByHandle(product.collection)
    : null;

  const relatedProducts = products
    .filter(
      (item) =>
        item.collection === product.collection && item.handle !== product.handle,
    )
    .slice(0, 6);

  return {
    props: {
      product,
      collectionInfo,
      relatedProducts,
    },
  };
}
