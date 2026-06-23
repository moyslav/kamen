'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { services } from '@/lib/data'

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Услуги' }]} />
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <span className="apple-chip mb-4 inline-block">ПОЛНЫЙ ЦИКЛ РАБОТ</span>
          <h1 className="apple-section-title">Услуги по камню</h1>
          <p className="apple-section-subtitle mt-2">От резки и полировки до монтажа под ключ. Гарантия до 3 лет.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} className="apple-card overflow-hidden p-0 transition-all duration-350">
              <div className="h-52 overflow-hidden bg-gray-50">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-all duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-[17px] font-semibold text-foreground">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-secondary">{service.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">от {service.priceFrom} ₽/м²</span>
                  <Link href={`/services/${service.slug}`} className="apple-link text-sm">Подробнее <ArrowRight className="inline h-3 w-3" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
