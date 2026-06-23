'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Warehouse, Ruler, Truck, HardHat, FileCheck, ClipboardCheck } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { categories, products, advantages, reviews } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  Warehouse, Ruler, Truck, HardHat, FileCheck, ClipboardCheck,
}

export default function HomeClient() {
  const [activeReview, setActiveReview] = useState(0)
  const hits = products.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="apple-hero relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-apple-noise opacity-30" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
          <div className="apple-fade-in">
            <span className="apple-chip mb-6">ПРЕМИУМ НАТУРАЛЬНЫЙ КАМЕНЬ</span>
            <h1 className="apple-title-xl text-white">
              Камень, который<br />
              <span className="text-accent">вдохновляет</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/60 sm:text-[19px]">
              Натуральный и искусственный камень для интерьеров и экстерьеров.
              Собственный склад, резка под размер, доставка по РФ.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/calculator" className="apple-button apple-button-primary inline-flex items-center gap-2">
                Получить расчёт <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/catalog" className="apple-button apple-button-secondary">
                Смотреть каталог
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="apple-section-title">Почему выбирают KAMEN</h2>
          <p className="apple-section-subtitle mt-3">18 лет безупречной репутации</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="apple-card p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h3 className="text-[17px] font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary">{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-section-alt py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="apple-section-title">Категории камня</h2>
              <p className="apple-section-subtitle mt-2">Более 200 позиций в наличии</p>
            </div>
            <Link href="/catalog" className="apple-link hidden items-center gap-1 sm:inline-flex">
              Весь каталог <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/catalog/${cat.slug}`} className="group apple-card h-64 overflow-hidden p-0">
                <div className="relative h-full w-full">
                  <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-[21px] font-semibold text-white">{cat.name}</h3>
                    <p className="mt-1 text-sm text-white/70">{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/catalog" className="apple-link mt-6 inline-flex items-center gap-1 sm:hidden">
            Весь каталог <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Hits */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h2 className="apple-section-title">Хиты продаж</h2>
          <p className="apple-section-subtitle mt-2">Самые популярные позиции месяца</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hits.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About + Numbers */}
      <section className="apple-hero relative py-28">
        <div className="absolute inset-0 bg-apple-noise opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="apple-section-title text-white">О компании KAMEN</h2>
            <p className="apple-section-subtitle mt-3 text-white/60">С 2008 года работаем с натуральным камнем</p>
          </div>
          <div className="mt-12 grid gap-8 text-center sm:grid-cols-3">
            {[
              { number: '18', label: 'лет на рынке' },
              { number: '12 000+', label: 'м² камня в наличии' },
              { number: '2 500+', label: 'реализованных объектов' },
            ].map((stat) => (
              <div key={stat.label} className="apple-card bg-white/10 p-8 backdrop-blur">
                <div className="text-[56px] font-semibold tracking-tight text-accent">{stat.number}</div>
                <div className="mt-2 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl text-center text-[17px] leading-relaxed text-white/60">
            <p>Собственный склад 5 000+ м². Контроль качества на каждом этапе. Гарантия на монтаж до 3 лет.</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="apple-section-title">Отзывы и проекты</h2>
          <p className="apple-section-subtitle mt-2">Более 2 500 реализованных объектов</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-1">
            {reviews.map((review, i) => (
              <button key={i} onClick={() => setActiveReview(i)}
                className={`w-full rounded-xl border p-5 text-left transition-all duration-300 ${
                  activeReview === i ? 'border-accent bg-accent/5' : 'border-border/60 bg-card hover:border-accent/40'
                }`}>
                <div className="mb-2 flex">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-accent text-accent" />
                  ))}
                </div>
                <h4 className="text-sm font-semibold text-foreground">{review.name}</h4>
                <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-secondary">{review.text}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="relative h-80 overflow-hidden rounded-2xl bg-gray-100 sm:h-96 lg:h-full">
              <img src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="h-full w-full object-cover" />
              {reviews[activeReview] && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-7">
                  <p className="text-sm text-white/80">{reviews[activeReview].project}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects" className="apple-button apple-button-secondary">Все проекты</Link>
        </div>
      </section>

      {/* CTA Form */}
      <section className="bg-section-alt py-28">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <span className="apple-chip mb-5">БЕСПЛАТНО</span>
          <h2 className="apple-section-title">Бесплатный выезд замерщика</h2>
          <p className="apple-section-subtitle mt-3">Приедем, сделаем замеры и привезём образцы камня — 0 ₽</p>
          <form className="mx-auto mt-10 max-w-lg space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Имя" className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-secondary/60 transition-all duration-200 focus:border-accent focus:outline-none" />
              <input type="tel" placeholder="Телефон *" required className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-secondary/60 transition-all duration-200 focus:border-accent focus:outline-none" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="email" placeholder="E-mail" className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-secondary/60 transition-all duration-200 focus:border-accent focus:outline-none" />
              <input type="text" placeholder="Адрес объекта *" required className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-secondary/60 transition-all duration-200 focus:border-accent focus:outline-none" />
            </div>
            <button type="submit" className="apple-button apple-button-primary w-full">Записаться на замер</button>
            <p className="text-xs text-secondary/60">Нажимая кнопку, вы соглашаетесь с <a href="/policy/privacy" className="text-accent underline">политикой обработки данных</a></p>
          </form>
        </div>
      </section>

      {/* SEO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-4 text-sm leading-relaxed text-secondary/80">
          <p>Натуральный камень — это не просто отделочный материал. Это характер интерьера, который остаётся неизменным десятилетиями. В нашем каталоге представлены мрамор, гранит, кварцит, оникс и травертин — более 200 позиций в плитах и слэбах.</p>
          <p>Мы работаем с объектами любого масштаба: от столешницы для городской квартиры до фасада загородного дома или лобби бизнес-центра. Каждая плита проходит контроль качества.</p>
          <p>Не знаете, какой камень подойдёт? Пришлите фото помещения — мы подберём материал за один день. Или закажите бесплатный выезд замерщика.</p>
        </div>
      </section>
    </>
  )
}
