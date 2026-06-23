import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

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
            <div className="glass mb-6 inline-block rounded-full px-4 py-1.5">
              <span className="text-xs font-medium text-cta">О КОМПАНИИ</span>
            </div>
            <h1 className="font-serif text-3xl font-light text-primary sm:text-4xl">
              О компании <span className="text-cta">KAMEN</span>
            </h1>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
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
              <div key={s.label} className="glass rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-light text-cta sm:text-4xl">{s.number}</div>
                <div className="mt-1 text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="mb-8 font-serif text-2xl font-light text-primary sm:text-3xl">Почему выбирают <span className="text-cta">нас</span></h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v} className="glass flex items-start gap-3 rounded-lg p-4">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cta/10">
                  <Check className="h-4 w-4 text-cta" />
                </div>
                <span className="text-sm text-muted">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contacts"
            className="gold-glow inline-flex items-center gap-2 rounded-md bg-cta px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary">
            Связаться с нами <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  )
}
