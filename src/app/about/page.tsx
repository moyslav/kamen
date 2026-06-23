import Breadcrumbs from '@/components/Breadcrumbs'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { number: '18', label: 'лет на рынке' },
  { number: '12 000+', label: 'м² камня в наличии' },
  { number: '2 500+', label: 'реализованных объектов' },
  { number: '200+', label: 'позиций в каталоге' },
]

const values = [
  'Только натуральный камень высокого качества — никаких заменителей',
  'Каждый слэб проходит контроль перед отправкой клиенту',
  'Гарантия на монтажные работы до 3 лет',
  'Прозрачные цены без скрытых платежей',
  'Собственный парк техники для резки и обработки',
  'Бесплатный выезд замерщика с образцами',
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'О компании' }]} />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl">
              О компании <span className="text-brand-gold">KAMEN</span>
            </h1>
            <div className="mt-6 space-y-4 text-sm text-muted leading-relaxed">
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
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="font-serif text-3xl font-light text-brand-gold sm:text-4xl">{s.number}</div>
                <div className="mt-1 text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-serif text-2xl font-light text-brand-dark sm:text-3xl mb-8">Почему выбирают нас</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                  <Check className="h-4 w-4 text-brand-gold" />
                </div>
                <span className="text-sm text-muted">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Связаться с нами <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  )
}
