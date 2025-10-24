import { useMemo, useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import RelatedProducts from "@/components/RelatedProducts";
import { collections, products } from "@/data/products";

const defaultFilters = {
  category: "all",
  price: { min: null, max: null },
  availability: ["in_stock", "limited", "preorder"],
};

export default function HomePage() {
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (filters.category !== "all" && product.collection !== filters.category) {
          return false;
        }
        if (
          filters.price.min !== null &&
          Number(product.price) < Number(filters.price.min)
        ) {
          return false;
        }
        if (
          filters.price.max !== null &&
          Number(product.price) > Number(filters.price.max)
        ) {
          return false;
        }
        if (!filters.availability.includes(product.availability)) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        switch (sort) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "alpha":
            return a.name.localeCompare(b.name, "tr");
          case "newest":
          default:
            return products.indexOf(b) - products.indexOf(a);
        }
      });
  }, [filters, sort]);

  const featuredProducts = products.slice(0, 4);

  const categories = [
    { value: "all", label: "Hepsi" },
    ...collections.slice(1).map((collection) => ({
      value: collection.handle,
      label: collection.title,
    })),
  ];

  return (
    <div className="space-y-16">
      <HeroBanner />

      <section className="rounded-3xl border border-emerald-200 bg-white/70 p-8 shadow-soft">
        <h2 className="font-display text-2xl text-deep-green">
          Koleksiyonlarımız
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Her koleksiyon, manevi mirası modern yaşam alanlarına taşıyan özenle
          seçilmiş ürünlerden oluşur.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((collection) => (
            <div
              key={collection.handle}
              className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-950/80 via-emerald-900/70 to-deep-green/90 p-6 text-cream shadow-soft"
            >
              <h3 className="font-display text-xl text-gold-200">
                {collection.title}
              </h3>
              <p className="mt-3 text-sm text-cream/70">
                {collection.description}
              </p>
              <button
                type="button"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    category:
                      collection.handle === "tum-urunler"
                        ? "all"
                        : collection.handle,
                  }))
                }
                className="mt-6 inline-flex items-center rounded-full border border-gold-400/50 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-200 transition hover:bg-gold-500/20"
              >
                Ürünleri Gör
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10 lg:flex-row">
        <FilterSidebar
          categories={categories}
          filters={filters}
          onFiltersChange={setFilters}
          sort={sort}
          onSortChange={setSort}
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen((prev) => !prev)}
        />
        <div className="flex-1 space-y-10">
          <div className="rounded-3xl border border-emerald-200 bg-white/90 px-6 py-5 shadow-soft">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-2xl text-deep-green">
                  {filters.category === "all"
                    ? "Tüm Ürünler"
                    : categories.find(
                        (category) => category.value === filters.category,
                      )?.label}
                </h2>
                <p className="text-sm text-muted">
                  {filteredProducts.length} ürün listeleniyor
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFilters(defaultFilters);
                  setSort("newest");
                }}
                className="self-start rounded-full border border-emerald-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900 transition hover:border-gold-400 hover:text-gold-400"
              >
                Filtreleri Temizle
              </button>
            </div>
          </div>
          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      <RelatedProducts products={featuredProducts} />
    </div>
  );
}
