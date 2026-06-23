'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { products, categories } from '@/lib/data'

export default function CatalogPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('popular')
  const [onlyInStock, setOnlyInStock] = useState(false)

  const filtered = products.filter((p) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(p.categorySlug)) return false
    if (onlyInStock && !p.inStock) return false
    return true
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''))
    if (sortBy === 'price-desc') return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''))
    return 0
  })

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Тип камня</h3>
        <div className="mt-3 space-y-2">
          {categories.map((cat) => (
            <label key={cat.slug} className="flex cursor-pointer items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-primary">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.slug)}
                onChange={() => toggleCategory(cat.slug)}
                className="h-4 w-4 rounded border-border text-cta transition-colors duration-300 focus:ring-cta"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Наличие</h3>
        <div className="mt-3">
          <label className="flex cursor-pointer items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-primary">
            <input
              type="checkbox"
              checked={onlyInStock}
              onChange={() => setOnlyInStock(!onlyInStock)}
              className="h-4 w-4 rounded border-border text-cta focus:ring-cta"
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
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl font-light text-primary sm:text-4xl">Каталог <span className="text-cta">камня</span></h1>
            <p className="mt-1 text-sm text-muted">{filtered.length} позиций</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors duration-300 focus:border-cta focus:outline-none"
            >
              <option value="popular">По популярности</option>
              <option value="price-asc">Цена ↑</option>
              <option value="price-desc">Цена ↓</option>
            </select>
            <button
              onClick={() => setFilterOpen(true)}
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-primary transition-all duration-300 hover:border-cta hover:text-cta lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Фильтры
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-24 glass rounded-lg p-6">
              <FilterContent />
            </div>
          </aside>

          {filterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-primary">Фильтры</h3>
                  <button onClick={() => setFilterOpen(false)} className="text-muted transition-colors duration-300 hover:text-primary">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <FilterContent />
                <button
                  onClick={() => setFilterOpen(false)}
                  className="gold-glow mt-6 w-full rounded-md bg-cta px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary"
                >
                  Применить
                </button>
              </div>
            </div>
          )}

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
                    className={`h-10 w-10 rounded-md text-sm font-medium transition-all duration-300 ${
                      page === 1
                        ? 'bg-primary text-white gold-glow'
                        : 'glass text-muted hover:text-primary'
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
