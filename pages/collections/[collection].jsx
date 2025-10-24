import { useMemo, useState } from "react";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { collections, getCollectionByHandle, getProductsByCollection } from "@/data/products";

const defaultFilters = {
  category: "all",
  price: { min: null, max: null },
  availability: ["in_stock", "limited", "preorder", "out_of_stock"],
};

export default function CollectionPage({ collection, collectionProducts }) {
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return collectionProducts
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
            return collectionProducts.indexOf(b) - collectionProducts.indexOf(a);
        }
      });
  }, [collectionProducts, filters, sort]);

  const categories = [
    { value: "all", label: "Hepsi" },
    ...collections
      .filter((item) => item.handle !== "tum-urunler")
      .map((item) => ({
        value: item.handle,
        label: item.title,
      })),
  ];

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-emerald-200 bg-white/80 p-8 shadow-soft">
        <h1 className="font-display text-3xl text-deep-green">
          {collection?.title ?? "Koleksiyon"}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          {collection?.description ??
            "Koleksiyon içeriğine erişilemiyor. Lütfen daha sonra tekrar deneyin."}
        </p>
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
        <div className="flex-1 space-y-8">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: collections.map((collection) => ({
      params: { collection: collection.handle },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { collection } = params;
  const collectionData = getCollectionByHandle(collection);
  const collectionProducts = getProductsByCollection(collection);

  return {
    props: {
      collection: collectionData ?? null,
      collectionProducts,
    },
  };
}
