'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import type { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-brand-dark backdrop-blur">
            <ShoppingCart className="h-3 w-3" />
            Быстрый просмотр
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-lg font-medium text-brand-dark">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted leading-relaxed">{product.description}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-brand-gold">{product.price}</span>
          <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-amber-600'}`}>
            {product.inStock ? 'В наличии' : 'Под заказ'}
          </span>
        </div>
      </div>
    </Link>
  )
}
