'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import type { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group apple-card flex flex-col overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[15px] font-semibold text-foreground">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-secondary">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-[15px] font-semibold text-accent">{product.price}</span>
          <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-amber-600'}`}>
            {product.inStock ? 'В наличии' : 'Под заказ'}
          </span>
        </div>
      </div>
    </Link>
  )
}
