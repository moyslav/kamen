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
        <h1 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl mb-4">Услуги по камню</h1>
        <p className="text-sm text-muted max-w-2xl mb-10">
          Полный цикл работ: от резки и полировки до монтажа под ключ. Гарантия до 3 лет.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} className="group rounded-lg border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl font-medium text-brand-dark">{service.title}</h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand-gold">от {service.priceFrom} ₽/м²</span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors"
                  >
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
