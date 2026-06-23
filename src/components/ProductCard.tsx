'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import type { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group glass relative flex flex-col overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <ShoppingCart className="h-3 w-3" />
            Быстрый просмотр
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-lg font-medium text-primary">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-sm font-semibold text-cta">{product.price}</span>
          <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-amber-600'}`}>
            {product.inStock ? 'В наличии' : 'Под заказ'}
          </span>
        </div>
      </div>
    </Link>
  )
}
