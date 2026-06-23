'use client'

import { useState, useMemo } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { products, categories } from '@/lib/data'

export default function CatalogPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('popular')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000])
  const [onlyInStock, setOnlyInStock] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.categorySlug))
    }
    if (onlyInStock) {
      result = result.filter((p) => p.inStock)
    }
    if (sortBy === 'price-asc') result.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')))
    if (sortBy === 'price-desc') result.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')))
    return result
  }, [selectedCategories, sortBy, onlyInStock])

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Тип камня</h3>
        <div className="mt-3 space-y-2">
          {categories.map((cat) => (
            <label key={cat.slug} className="flex cursor-pointer items-center gap-3 text-sm text-muted hover:text-brand-dark">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.slug)}
                onChange={() => toggleCategory(cat.slug)}
                className="h-4 w-4 rounded border-border text-brand-gold focus:ring-brand-gold"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Наличие</h3>
        <div className="mt-3">
          <label className="flex cursor-pointer items-center gap-3 text-sm text-muted hover:text-brand-dark">
            <input
              type="checkbox"
              checked={onlyInStock}
              onChange={() => setOnlyInStock(!onlyInStock)}
              className="h-4 w-4 rounded border-border text-brand-gold focus:ring-brand-gold"
            />
            Только в наличии
          </label>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Breadcrumbs items={[{ label: 'Каталог' }]} />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl">Каталог камня</h1>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-brand-gold focus:outline-none"
            >
              <option value="popular">По популярности</option>
              <option value="price-asc">Цена ↑</option>
              <option value="price-desc">Цена ↓</option>
            </select>
            <button
              onClick={() => setFilterOpen(true)}
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-brand-dark hover:border-brand-gold transition-colors lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Фильтры
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop filters */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-24 rounded-lg border border-border bg-card p-6">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-brand-dark">Фильтры</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <FilterContent />
                <button
                  onClick={() => setFilterOpen(false)}
                  className="mt-6 w-full rounded-md bg-brand-gold px-4 py-3 text-sm font-medium text-white"
                >
                  Применить
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-muted">Ничего не найдено. Попробуйте изменить фильтры.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center gap-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`h-10 w-10 rounded-md text-sm font-medium transition-colors ${
                      page === 1
                        ? 'bg-brand-dark text-white'
                        : 'border border-border text-muted hover:border-brand-gold hover:text-brand-dark'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
