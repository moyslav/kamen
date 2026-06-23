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
  'Только натуральный камень высокого качества',
  'Каждый слэб проходит контроль перед отправкой',
  'Гарантия на монтажные работы до 3 лет',
  'Прозрачные цены без скрытых платежей',
  'Собственный парк техники для резки',
  'Бесплатный выезд замерщика с образцами',
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'О компании' }]} />
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="apple-chip mb-4 inline-block">О КОМПАНИИ</span>
            <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-foreground">О компании <span className="text-accent">KAMEN</span></h1>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-secondary">
              <p>Мы работаем на рынке натурального камня с 2008 года. За это время мы реализовали более 2 500 объектов — от городских квартир до фасадов бизнес-центров и коттеджных посёлков.</p>
              <p>Собственный склад площадью 5 000+ м² позволяет поддерживать широкий ассортимент мрамора, гранита, кварцита, оникса и травертина из Италии, Испании, Бразилии, Индии и России.</p>
              <p>Мы контролируем качество на каждом этапе: отбора слэбов, гидроабразивной резки (±1 мм точность), обработки кромки до финишной полировки и монтажа.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.label} className="apple-card p-6 text-center">
                <div className="text-[40px] font-semibold tracking-tight text-accent">{s.number}</div>
                <div className="mt-1 text-xs text-secondary">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-[28px] font-semibold tracking-tight text-foreground">Почему выбирают <span className="text-accent">нас</span></h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(v => (
              <div key={v} className="apple-card flex items-start gap-3 p-4">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10"><Check className="h-4 w-4 text-accent" /></div>
                <span className="text-sm text-secondary">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contacts" className="apple-button apple-button-primary inline-flex items-center gap-2">Связаться с нами <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </>
  )
}
