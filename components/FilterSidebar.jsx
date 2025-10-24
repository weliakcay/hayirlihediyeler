import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const availabilityOptions = [
  { value: "in_stock", label: "Stokta" },
  { value: "limited", label: "Sınırlı" },
  { value: "preorder", label: "Ön Sipariş" },
  { value: "out_of_stock", label: "Stokta Yok" },
];

const sortOptions = [
  { value: "newest", label: "En Yeniler" },
  { value: "price-asc", label: "Artan Fiyat" },
  { value: "price-desc", label: "Azalan Fiyat" },
  { value: "alpha", label: "A–Z" },
];

export default function FilterSidebar({
  categories,
  filters,
  onFiltersChange,
  sort,
  onSortChange,
  isOpen,
  onToggle,
}) {
  const containerClasses = clsx(
    "overflow-hidden rounded-3xl border border-emerald-800/60 bg-emerald-950/50 text-cream shadow-soft transition-all duration-300",
    {
      "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:p-6": !isOpen,
      "max-h-[2000px] opacity-100 p-6": isOpen,
    },
    "lg:block",
  );

  return (
    <aside className="w-full lg:w-72">
      <button
        onClick={onToggle}
        className="mb-4 flex w-full items-center justify-between rounded-full border border-emerald-800 bg-emerald-950/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cream lg:hidden"
        aria-expanded={isOpen}
      >
        Filtreler
        <ChevronDown
          size={16}
          className={clsx("transition-transform", {
            "rotate-180": isOpen,
          })}
        />
      </button>

      <div className={containerClasses}>
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-300">
              Kategori
            </h4>
            <div className="mt-3 space-y-2">
              {categories.map((category) => (
                <label
                  key={category.value}
                  className="flex items-center gap-3 text-sm text-cream/80"
                >
                  <input
                    type="radio"
                    name="category"
                    value={category.value}
                    checked={filters.category === category.value}
                    onChange={(event) =>
                      onFiltersChange({
                        ...filters,
                        category: event.target.value,
                      })
                    }
                    className="h-4 w-4 rounded-full border-gold-300/50 bg-transparent text-gold-400 focus:ring-gold-300"
                  />
                  {category.label}
                </label>
              ))}
              <button
                onClick={() => onFiltersChange({ ...filters, category: "all" })}
                className="mt-2 text-xs uppercase tracking-[0.25em] text-gold-200 underline"
              >
                Tümünü Göster
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-300">
              Fiyat Aralığı
            </h4>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <input
                type="number"
                min={0}
                value={filters.price.min ?? ""}
                onChange={(event) =>
                  onFiltersChange({
                    ...filters,
                    price: {
                      ...filters.price,
                      min: event.target.value ? Number(event.target.value) : null,
                    },
                  })
                }
                placeholder="Min"
                className="w-full rounded-lg border border-emerald-700 bg-transparent px-3 py-2 text-cream placeholder:text-emerald-200 focus:border-gold-300 focus:outline-none"
              />
              <span className="text-muted">—</span>
              <input
                type="number"
                min={0}
                value={filters.price.max ?? ""}
                onChange={(event) =>
                  onFiltersChange({
                    ...filters,
                    price: {
                      ...filters.price,
                      max: event.target.value ? Number(event.target.value) : null,
                    },
                  })
                }
                placeholder="Max"
                className="w-full rounded-lg border border-emerald-700 bg-transparent px-3 py-2 text-cream placeholder:text-emerald-200 focus:border-gold-300 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-300">
              Stok Durumu
            </h4>
            <div className="mt-3 space-y-2">
              {availabilityOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 text-sm text-cream/80"
                >
                  <input
                    type="checkbox"
                    checked={filters.availability.includes(option.value)}
                    onChange={(event) => {
                      const isChecked = event.target.checked;
                      onFiltersChange({
                        ...filters,
                        availability: isChecked
                          ? [...filters.availability, option.value]
                          : filters.availability.filter(
                              (value) => value !== option.value,
                            ),
                      });
                    }}
                    className="h-4 w-4 rounded border-gold-300/50 bg-transparent text-gold-400 focus:ring-gold-300"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-300">
              Sırala
            </h4>
            <select
              value={sort}
              onChange={(event) => onSortChange(event.target.value)}
              className="mt-3 w-full rounded-lg border border-emerald-700 bg-transparent px-3 py-2 text-sm text-cream focus:border-gold-300 focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-emerald-950 text-cream"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
