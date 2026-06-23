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
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <svg className="h-20 w-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
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
