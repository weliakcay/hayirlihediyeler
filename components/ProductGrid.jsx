import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-white/70 p-12 text-center text-emerald-900 shadow-soft">
        Şu an kriterlerinize uygun ürün bulunamadı. Filtreleri güncellemeyi
        deneyin.
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
