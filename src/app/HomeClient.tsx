'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Warehouse, Ruler, Truck, HardHat, FileCheck, ClipboardCheck, ChevronDown } from 'lucide-react'
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
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-stone-texture opacity-50" />
        <div className="absolute -top-40 -right-40 h-96 w-96 animate-morph bg-gradient-to-br from-cta/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 animate-morph bg-gradient-to-tr from-white/5 to-transparent blur-3xl" style={{ animationDelay: '-4s' }} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="gold-glow mx-auto mb-8 inline-block rounded-full glass px-6 py-2">
            <span className="text-xs font-medium tracking-wider text-cta">ПРЕМИУМ НАТУРАЛЬНЫЙ КАМЕНЬ</span>
          </div>
          <h1 className="font-serif text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Камень, который
            <br />
            <span className="text-cta">вдохновляет</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Натуральный и искусственный камень для интерьеров и экстерьеров.
            Собственный склад, резка под размер, доставка по РФ.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/calculator"
              className="gold-glow inline-flex items-center gap-2 rounded-md bg-cta px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Получить расчёт
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-cta hover:bg-cta/10 hover:text-cta"
            >
              Смотреть каталог
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="h-6 w-6 text-white/30" />
        </div>
      </section>

      {/* Advantages */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-light text-primary sm:text-4xl">Почему выбирают <span className="text-cta">KAMEN</span></h2>
          <p className="mt-3 text-sm text-muted">18 лет безупречной репутации на рынке натурального камня</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="group glass rounded-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cta/10 text-cta transition-all duration-500 group-hover:bg-cta group-hover:text-white">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="font-serif text-xl font-medium text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-3xl font-light text-primary sm:text-4xl">Категории <span className="text-cta">камня</span></h2>
              <p className="mt-2 text-sm text-muted">Более 200 позиций в наличии</p>
            </div>
            <Link href="/catalog" className="hidden items-center gap-1 text-sm font-medium text-cta transition-colors duration-300 hover:text-primary sm:inline-flex">
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
                <img src={cat.image} alt={cat.name} className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 p-6">
                  <h3 className="font-serif text-2xl font-medium text-white">{cat.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/catalog" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cta transition-colors duration-300 hover:text-primary sm:hidden">
            Весь каталог <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* Hits */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-serif text-3xl font-light text-primary sm:text-4xl">Хиты <span className="text-cta">продаж</span></h2>
          <p className="mt-2 text-sm text-muted">Самые популярные позиции этого месяца</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hits.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About + Numbers */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stone-texture opacity-30" />
        <div className="absolute top-20 right-10 h-72 w-72 animate-morph bg-gradient-to-br from-cta/10 to-transparent blur-3xl" />
        <div className="absolute bottom-10 left-10 h-60 w-60 animate-morph bg-gradient-to-tr from-white/5 to-transparent blur-3xl" style={{ animationDelay: '-3s' }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
                О компании <span className="text-cta">KAMEN</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/60">
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
                <div key={stat.label} className="glass rounded-lg p-6 text-center">
                  <div className="font-serif text-4xl font-light text-cta sm:text-5xl">{stat.number}</div>
                  <div className="mt-2 text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews + Projects */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-serif text-3xl font-light text-primary sm:text-4xl">Отзывы и <span className="text-cta">проекты</span></h2>
          <p className="mt-2 text-sm text-muted">Более 2 500 реализованных объектов</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {reviews.map((review, i) => (
              <button
                key={i}
                onClick={() => setActiveReview(i)}
                className={`w-full rounded-lg border p-4 text-left transition-all duration-300 ${
                  activeReview === i
                    ? 'border-cta bg-cta/5'
                    : 'border-border bg-card hover:border-cta/50'
                }`}
              >
                <div className="mb-2 flex">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-cta text-cta" />
                  ))}
                </div>
                <h4 className="text-sm font-medium text-primary">{review.name}</h4>
                <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted">{review.text}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="relative h-80 overflow-hidden rounded-lg bg-gray-100 sm:h-96 lg:h-full">
              <img src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Проект" className="h-full w-full object-cover" />
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
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:border-cta hover:text-cta"
          >
            Все проекты <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* Callback Form */}
      <section className="bg-subtle py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="gold-glow mx-auto mb-6 inline-block rounded-full glass px-6 py-2">
            <span className="text-xs font-medium tracking-wider text-cta">БЕСПЛАТНО</span>
          </div>
          <h2 className="font-serif text-3xl font-light text-primary sm:text-4xl">
            Бесплатный выезд замерщика
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Приедем в удобное время, сделаем замеры и привезём образцы камня — 0 ₽
          </p>
          <form className="mx-auto mt-8 max-w-xl space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Имя"
                className="w-full rounded-md border border-border bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors duration-300 focus:border-cta focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Телефон *"
                required
                className="w-full rounded-md border border-border bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors duration-300 focus:border-cta focus:outline-none"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded-md border border-border bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors duration-300 focus:border-cta focus:outline-none"
              />
              <input
                type="text"
                placeholder="Адрес объекта *"
                required
                className="w-full rounded-md border border-border bg-input-bg px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors duration-300 focus:border-cta focus:outline-none"
              />
            </div>
            <label className="glass flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-border px-4 py-3 text-sm text-muted transition-colors duration-300 hover:border-cta">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>Прикрепить фото или план (необязательно)</span>
            </label>
            <button
              type="submit"
              className="gold-glow w-full rounded-md bg-cta px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary"
            >
              Записаться на замер
            </button>
            <p className="text-xs text-muted">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="/policy/privacy" className="underline transition-colors duration-300 hover:text-cta">политикой обработки данных</a>
            </p>
          </form>
        </div>
      </section>

      {/* SEO Text */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-sm leading-relaxed text-muted">
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
