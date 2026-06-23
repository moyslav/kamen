export interface Product {
  id: string
  slug: string
  name: string
  category: string
  categorySlug: string
  images: string[]
  price: string
  description: string
  inStock: boolean
  thickness: string[]
  colors: string[]
  country: string
  finish: string[]
  specifications: Record<string, string>
}

export interface Category {
  slug: string
  name: string
  description: string
  image: string
}

export interface Service {
  slug: string
  title: string
  description: string
  priceFrom: string
  image: string
}

export interface Advantage {
  icon: string
  title: string
  text: string
}

export interface Review {
  name: string
  text: string
  project: string
  rating: number
}
