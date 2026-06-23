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
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
        <h1 className="text-[28px] font-semibold text-foreground">Услуга не найдена</h1>
        <Link href="/services" className="apple-link mt-4 inline-flex items-center gap-2">Все услуги <ArrowRight className="h-4 w-4" /></Link>
      </div>
    )
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Услуги', href: '/services' }, { label: service.title }]} />
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="apple-chip mb-4 inline-block">УСЛУГА</span>
            <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-foreground">{service.title}</h1>
            <p className="mt-4 text-[17px] leading-relaxed text-secondary">{service.description}</p>
            <p className="mt-6 text-lg font-medium text-foreground">Цена: <span className="text-accent">от {service.priceFrom} ₽/м²</span></p>
            <p className="mt-2 text-xs text-secondary">Точная стоимость рассчитывается индивидуально</p>
            <div className="mt-8 space-y-3">
              <button className="apple-button apple-button-primary w-full">Заказать услугу</button>
              <button className="apple-button apple-button-secondary w-full">Получить консультацию</button>
            </div>
          </div>
          <div className="h-80 overflow-hidden rounded-2xl bg-gray-50 lg:h-auto">
            <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}
