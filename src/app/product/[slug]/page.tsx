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
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
        <h1 className="text-[28px] font-semibold text-foreground">Товар не найден</h1>
        <Link href="/catalog" className="apple-link mt-4 inline-flex items-center gap-2">
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

      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-2xl bg-gray-50 sm:h-[500px]">
              <img src={product.images[photoIdx]} alt={product.name} className="h-full w-full object-cover" />
              <button className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm backdrop-blur transition-all duration-200 hover:bg-white" onClick={() => setPhotoIdx(Math.max(0, photoIdx - 1))}>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm backdrop-blur transition-all duration-200 hover:bg-white" onClick={() => setPhotoIdx(Math.min(product.images.length - 1, photoIdx + 1))}>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((_, i) => (
                <button key={i} onClick={() => setPhotoIdx(i)}
                  className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 border-2 transition-all duration-200 ${
                    i === photoIdx ? 'border-accent' : 'border-transparent'
                  }`}>
                  <img src={product.images[i]} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="apple-chip mb-4 inline-block">{product.category}</span>
            <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-foreground">{product.name}</h1>
            <p className="mt-4 text-[17px] leading-relaxed text-secondary">{product.description}</p>

            <div className="mt-6">
              <span className="text-[24px] font-semibold text-accent">{product.price}</span>
              {!product.inStock && (
                <span className="ml-3 inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">Под заказ 14–30 дн</span>
              )}
            </div>

            <div className="mt-8 space-y-3 border-t border-border/40 pt-8">
              <h2 className="text-[17px] font-semibold text-foreground">Характеристики</h2>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="border-b border-border/40 pb-2">
                    <dt className="text-secondary">{key}</dt>
                    <dd className="font-medium text-foreground">{val}</dd>
                  </div>
                ))}
                <div className="border-b border-border/40 pb-2">
                  <dt className="text-secondary">Толщина</dt>
                  <dd className="font-medium text-foreground">{product.thickness.join(', ')}</dd>
                </div>
                <div className="border-b border-border/40 pb-2">
                  <dt className="text-secondary">Обработка</dt>
                  <dd className="font-medium text-foreground">{product.finish.join(', ')}</dd>
                </div>
                <div className="border-b border-border/40 pb-2">
                  <dt className="text-secondary">Страна</dt>
                  <dd className="font-medium text-foreground">{product.country}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 space-y-3">
              <Link href="/calculator" className="apple-button apple-button-primary inline-flex w-full items-center justify-center gap-2">
                Рассчитать стоимость <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="apple-button apple-button-secondary w-full">
                <Download className="mr-2 inline h-4 w-4" /> Заказать образец — 0 ₽
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-28">
            <h2 className="text-[28px] font-semibold tracking-tight text-foreground">Похожие товары</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.id} href={`/product/${p.slug}`} className="apple-card overflow-hidden p-0">
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[15px] font-semibold text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm text-accent">{p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
