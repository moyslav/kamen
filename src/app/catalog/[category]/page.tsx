'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { categories, products } from '@/lib/data'

export default function CategoryPage() {
  const params = useParams()
  const slug = params.category as string
  const category = categories.find((c) => c.slug === slug)
  const categoryProducts = products.filter((p) => p.categorySlug === slug)

  if (!category) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl text-brand-dark">Категория не найдена</h1>
        <Link href="/catalog" className="mt-4 inline-flex items-center gap-2 text-brand-gold hover:text-brand-dark">
          Вернуться в каталог <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Каталог', href: '/catalog' }, { label: category.name }]} />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-sm text-muted">{category.description}</p>
        </div>
        {categoryProducts.length === 0 ? (
          <p className="text-muted">В этой категории пока нет товаров.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
