'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { services } from '@/lib/data'

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Услуги' }]} />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="gold-glow mx-auto mb-4 inline-block rounded-full glass px-6 py-2">
            <span className="text-xs font-medium tracking-wider text-cta">ПОЛНЫЙ ЦИКЛ РАБОТ</span>
          </div>
          <h1 className="font-serif text-3xl font-light text-primary sm:text-4xl">Услуги <span className="text-cta">по камню</span></h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
            Полный цикл работ: от резки и полировки до монтажа под ключ. Гарантия до 3 лет.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} className="group glass overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl font-medium text-primary">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-cta">от {service.priceFrom} ₽/м²</span>
                  <Link href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors duration-300 hover:text-cta">
                    Подробнее <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
