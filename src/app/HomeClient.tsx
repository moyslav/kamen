'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ArrowRight, Star, Check, Warehouse, Ruler, Truck, HardHat, FileCheck, ClipboardCheck } from 'lucide-react'
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
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20filter%3D%22url(%23noise)%22%20opacity%3D%220.08%22%2F%3E%3C%2Fsvg%3E')] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-transparent to-brand-dark/90" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Камень, который
            <br />
            <span className="text-brand-gold">вдохновляет</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 leading-relaxed sm:text-lg">
            Натуральный и искусственный камень для интерьеров и экстерьеров.
            Собственный склад, резка под размер, доставка по РФ.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-brand-dark"
            >
              Получить расчёт
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-brand-dark"
            >
              Смотреть каталог
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </section>

      {/* Advantages */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="group rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="font-serif text-xl font-medium text-brand-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl">Категории камня</h2>
            <Link href="/catalog" className="hidden text-sm font-medium text-brand-gold hover:text-brand-dark transition-colors sm:inline-flex items-center gap-1">
              Весь каталог <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalog/${cat.slug}`}
                className="group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-200"
              >
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative z-10 p-6">
                  <h3 className="font-serif text-2xl font-medium text-white">{cat.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/catalog" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:text-brand-dark transition-colors sm:hidden">
            Весь каталог <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* Hits */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl mb-10">Хиты продаж</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hits.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About + Numbers */}
      <section className="relative bg-brand-dark py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20filter%3D%22url(%23noise)%22%20opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
                О компании <span className="text-brand-gold">KAMEN</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-300 leading-relaxed">
                <p>
                  Мы работаем на рынке натурального камня с 2008 года. За это время мы реализовали
                  более 2 500 объектов — от городских квартир до фасадов бизнес-центров и коттеджных посёлков.
                </p>
                <p>
                  Собственный склад площадью 5 000+ м² позволяет поддерживать широкий ассортимент
                  мрамора, гранита, кварцита, оникса и травертина из Италии, Испании, Бразилии, Индии и России.
                </p>
                <p>
                  Мы контролируем качество на каждом этапе: отбора слэбов, гидроабразивной резки
                  (±1 мм точность), обработки кромки до финишной полировки и монтажа.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '18', label: 'лет на рынке' },
                { number: '12 000+', label: 'м² камня в наличии' },
                { number: '2 500+', label: 'реализованных объектов' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-4xl font-light text-brand-gold sm:text-5xl">{stat.number}</div>
                  <div className="mt-2 text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews + Projects */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl mb-10">Отзывы и проекты</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-4">
            {reviews.map((review, i) => (
              <button
                key={i}
                onClick={() => setActiveReview(i)}
                className={`w-full text-left rounded-lg border p-4 transition-all ${
                  activeReview === i
                    ? 'border-brand-gold bg-brand-gold/5'
                    : 'border-border bg-card hover:border-brand-gold/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>
                <h4 className="text-sm font-medium text-brand-dark">{review.name}</h4>
                <p className="mt-1 text-xs text-muted leading-relaxed line-clamp-3">{review.text}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="relative h-80 overflow-hidden rounded-lg bg-gray-100 sm:h-96 lg:h-full">
              <div className="flex h-full items-center justify-center text-gray-400">
                <svg className="h-24 w-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              {reviews[activeReview] && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-sm text-white/80">{reviews[activeReview].project}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-2.5 text-sm font-medium text-brand-dark transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            Все проекты <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* Callback Form */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl">
            Бесплатный выезд замерщика
          </h2>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Приедем в удобное время, сделаем замеры и привезём образцы камня — 0 ₽
          </p>
          <form className="mt-8 mx-auto max-w-xl space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Имя"
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand-gold focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Телефон *"
                required
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand-gold focus:outline-none"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand-gold focus:outline-none"
              />
              <input
                type="text"
                placeholder="Адрес объекта *"
                required
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand-gold focus:outline-none"
              />
            </div>
            <label className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-border bg-white px-4 py-3 text-sm text-muted hover:border-brand-gold transition-colors">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>Прикрепить фото или план (необязательно)</span>
            </label>
            <button
              type="submit"
              className="w-full rounded-md bg-brand-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Записаться на замер
            </button>
            <p className="text-xs text-muted">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="/policy/privacy" className="underline">политикой обработки данных</a>
            </p>
          </form>
        </div>
      </section>

      {/* SEO Text */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-sm text-muted leading-relaxed">
          <p>
            Натуральный камень — это не просто отделочный материал. Это характер интерьера, который остаётся
            неизменным десятилетиями. В нашем каталоге представлены мрамор, гранит, кварцит, оникс и травертин —
            более 200 позиций в плитах и слэбах.
          </p>
          <p>
            Мы работаем с объектами любого масштаба: от столешницы для городской квартиры до фасада загородного
            дома или лобби бизнес-центра. Каждая плита проходит контроль качества: проверка однородности рисунка,
            отсутствия скрытых трещин, точности геометрии.
          </p>
          <p>
            Не знаете, какой камень подойдёт? Пришлите фото помещения — мы подберём материал за один день.
            Или закажите бесплатный выезд замерщика: приедем с образцами, сделаем замеры, рассчитаем точную стоимость.
          </p>
          <p>
            Наши услуги: резка под размер (гидроабразив до ±1 мм), полировка кромки (евро, радиус, фигурная),
            изготовление изделий (столешницы, подоконники, ступени, барные стойки), профессиональный монтаж
            с гарантией до 3 лет. Доставка по Москве и всей России — СДЭК, ПЭК, Деловые Линии или собственным
            транспортом (в пределах 300 км от МКАД).
          </p>
        </div>
      </section>
    </>
  )
}
