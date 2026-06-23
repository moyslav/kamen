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
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
        <h1 className="text-[28px] font-semibold text-foreground">Категория не найдена</h1>
        <Link href="/catalog" className="apple-link mt-4 inline-flex items-center gap-2">
          Вернуться в каталог <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Каталог', href: '/catalog' }, { label: category.name }]} />
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-12">
          <span className="apple-chip mb-3 inline-block">{category.name.toUpperCase()}</span>
          <h1 className="apple-section-title">{category.name}</h1>
          <p className="apple-section-subtitle mt-2">{category.description}</p>
        </div>
        {categoryProducts.length === 0 ? (
          <p className="text-secondary">В этой категории пока нет товаров.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
