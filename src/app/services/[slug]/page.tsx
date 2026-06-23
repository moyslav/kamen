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
          <div className="h-80 rounded-lg bg-gray-100 overflow-hidden lg:h-auto">
            <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}
