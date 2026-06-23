'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { services } from '@/lib/data'

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl text-brand-dark">Услуга не найдена</h1>
        <Link href="/services" className="mt-4 inline-flex items-center gap-2 text-brand-gold hover:text-brand-dark">
          Все услуги <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Услуги', href: '/services' }, { label: service.title }]} />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl">{service.title}</h1>
            <p className="mt-4 text-sm text-muted leading-relaxed">{service.description}</p>
            <p className="mt-6 text-lg font-medium text-brand-dark">
              Цена: <span className="text-brand-gold">от {service.priceFrom} ₽/м²</span>
            </p>
            <p className="mt-2 text-xs text-muted">Точная стоимость рассчитывается индивидуально</p>

            <div className="mt-8 space-y-4">
              <button className="w-full rounded-md bg-brand-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark">
                Заказать услугу
              </button>
              <button className="w-full rounded-md border border-border px-6 py-3 text-sm font-medium text-brand-dark transition-colors hover:border-brand-gold">
                Получить консультацию
              </button>
            </div>
          </div>
          <div className="h-80 rounded-lg bg-gray-100 flex items-center justify-center lg:h-auto">
            <svg className="h-32 w-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
