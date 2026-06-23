'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight, Star, Download } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { products } from '@/lib/data'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = products.find((p) => p.slug === slug)

  const [photoIdx, setPhotoIdx] = useState(0)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl text-brand-dark">Товар не найден</h1>
        <Link href="/catalog" className="mt-4 inline-flex items-center gap-2 text-brand-gold hover:text-brand-dark">
          Вернуться в каталог <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  const related = products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4)

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Каталог', href: '/catalog' },
        { label: product.category, href: `/catalog/${product.categorySlug}` },
        { label: product.name },
      ]} />

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* Product info */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-lg bg-gray-100 sm:h-[500px]">
              <svg className="h-32 w-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <button className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white" onClick={() => setPhotoIdx(Math.max(0, photoIdx - 1))}>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white" onClick={() => setPhotoIdx(Math.min(product.images.length - 1, photoIdx + 1))}>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPhotoIdx(i)}
                  className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 border-2 transition-colors ${
                    i === photoIdx ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <div className="flex h-full items-center justify-center text-gray-300">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-sm text-muted leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <span className="text-2xl font-semibold text-brand-gold">{product.price}</span>
              {!product.inStock && (
                <span className="ml-3 inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                  Под заказ 14–30 дн
                </span>
              )}
            </div>

            {/* Specs */}
            <div className="mt-8 space-y-4 border-t border-border pt-8">
              <h2 className="font-serif text-xl font-medium text-brand-dark">Характеристики</h2>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="border-b border-border pb-2">
                    <dt className="text-muted">{key}</dt>
                    <dd className="font-medium text-brand-dark">{val}</dd>
                  </div>
                ))}
                <div className="border-b border-border pb-2">
                  <dt className="text-muted">Толщина</dt>
                  <dd className="font-medium text-brand-dark">{product.thickness.join(', ')}</dd>
                </div>
                <div className="border-b border-border pb-2">
                  <dt className="text-muted">Обработка</dt>
                  <dd className="font-medium text-brand-dark">{product.finish.join(', ')}</dd>
                </div>
                <div className="border-b border-border pb-2">
                  <dt className="text-muted">Страна</dt>
                  <dd className="font-medium text-brand-dark">{product.country}</dd>
                </div>
              </dl>
            </div>

            {/* Forms */}
            <div className="mt-8 space-y-4">
              <Link
                href="/calculator"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Рассчитать стоимость
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-brand-dark transition-colors hover:border-brand-gold hover:text-brand-gold">
                <Download className="h-4 w-4" />
                Заказать образец — 0 ₽
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl font-light text-brand-dark sm:text-3xl mb-8">Похожие товары</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.id} href={`/product/${p.slug}`} className="group rounded-lg border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="aspect-square rounded-md bg-gray-100 flex items-center justify-center">
                    <svg className="h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16" />
                    </svg>
                  </div>
                  <h3 className="mt-3 font-serif text-base font-medium text-brand-dark group-hover:text-brand-gold transition-colors">{p.name}</h3>
                  <p className="mt-1 text-sm text-brand-gold">{p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
