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
        <h1 className="font-serif text-3xl text-primary">Услуга не найдена</h1>
        <Link href="/services" className="mt-4 inline-flex items-center gap-2 text-cta transition-colors duration-300 hover:text-primary">
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
            <div className="glass mb-6 inline-block rounded-full px-4 py-1.5">
              <span className="text-xs font-medium text-cta">УСЛУГА</span>
            </div>
            <h1 className="font-serif text-3xl font-light text-primary sm:text-4xl">{service.title}</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted">{service.description}</p>
            <p className="mt-6 text-lg font-medium text-primary">
              Цена: <span className="text-cta">от {service.priceFrom} ₽/м²</span>
            </p>
            <p className="mt-2 text-xs text-muted">Точная стоимость рассчитывается индивидуально</p>
            <div className="mt-8 space-y-4">
              <button className="gold-glow w-full rounded-md bg-cta px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary">
                Заказать услугу
              </button>
              <button className="w-full rounded-md border border-border px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:border-cta hover:text-cta">
                Получить консультацию
              </button>
            </div>
          </div>
          <div className="h-80 overflow-hidden rounded-lg bg-gray-100 lg:h-auto">
            <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}
