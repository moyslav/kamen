'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight, Download } from 'lucide-react'
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
        <h1 className="font-serif text-3xl text-primary">Товар не найден</h1>
        <Link href="/catalog" className="mt-4 inline-flex items-center gap-2 text-cta transition-colors duration-300 hover:text-primary">
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
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-lg bg-gray-100 sm:h-[500px]">
              <img src={product.images[photoIdx]} alt={product.name} className="h-full w-full object-cover" />
              <button className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow backdrop-blur transition-all duration-300 hover:bg-card" onClick={() => setPhotoIdx(Math.max(0, photoIdx - 1))}>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow backdrop-blur transition-all duration-300 hover:bg-card" onClick={() => setPhotoIdx(Math.min(product.images.length - 1, photoIdx + 1))}>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPhotoIdx(i)}
                  className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 border-2 transition-colors duration-300 ${
                    i === photoIdx ? 'border-cta' : 'border-transparent'
                  }`}
                >
                  <img src={product.images[i]} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="glass mb-6 inline-block rounded-full px-4 py-1.5">
              <span className="text-xs font-medium text-cta">{product.category}</span>
            </div>
            <h1 className="font-serif text-3xl font-light text-primary sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>

            <div className="mt-6">
              <span className="text-2xl font-semibold text-cta">{product.price}</span>
              {!product.inStock && (
                <span className="ml-3 inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                  Под заказ 14–30 дн
                </span>
              )}
            </div>

            <div className="mt-8 space-y-4 border-t border-border pt-8">
              <h2 className="font-serif text-xl font-medium text-primary">Характеристики</h2>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="border-b border-border pb-2">
                    <dt className="text-muted">{key}</dt>
                    <dd className="font-medium text-primary">{val}</dd>
                  </div>
                ))}
                <div className="border-b border-border pb-2">
                  <dt className="text-muted">Толщина</dt>
                  <dd className="font-medium text-primary">{product.thickness.join(', ')}</dd>
                </div>
                <div className="border-b border-border pb-2">
                  <dt className="text-muted">Обработка</dt>
                  <dd className="font-medium text-primary">{product.finish.join(', ')}</dd>
                </div>
                <div className="border-b border-border pb-2">
                  <dt className="text-muted">Страна</dt>
                  <dd className="font-medium text-primary">{product.country}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 space-y-4">
              <Link
                href="/calculator"
                className="gold-glow flex w-full items-center justify-center gap-2 rounded-md bg-cta px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary"
              >
                Рассчитать стоимость
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:border-cta hover:text-cta">
                <Download className="h-4 w-4" />
                Заказать образец — 0 ₽
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-8 font-serif text-2xl font-light text-primary sm:text-3xl">Похожие <span className="text-cta">товары</span></h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.id} href={`/product/${p.slug}`} className="glass group rounded-lg p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                  <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
                    <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-3 font-serif text-base font-medium text-primary transition-colors duration-300 group-hover:text-cta">{p.name}</h3>
                  <p className="mt-1 text-sm text-cta">{p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
