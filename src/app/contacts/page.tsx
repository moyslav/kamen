'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function ContactsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Контакты' }]} />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl mb-2">Контакты</h1>
        <p className="text-sm text-muted mb-10">Свяжитесь с нами любым удобным способом</p>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-brand-gold flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">Адрес склада и офиса</h3>
                  <p className="mt-1 text-sm text-muted">
                    г. Москва, ул. Каменная, д. 15<br />
                    Складской комплекс «Гранит», павильон 3
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-brand-gold flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">Телефоны</h3>
                  <a href="tel:+74951234567" className="mt-1 block text-sm text-muted hover:text-brand-gold transition-colors">+7 (495) 123-45-67</a>
                  <a href="tel:+78001234567" className="mt-0.5 block text-sm text-muted hover:text-brand-gold transition-colors">8 (800) 123-45-67 (бесплатный)</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-brand-gold flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">E-mail</h3>
                  <a href="mailto:info@kamen.ru" className="mt-1 block text-sm text-muted hover:text-brand-gold transition-colors">info@kamen.ru</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 text-brand-gold flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">Режим работы</h3>
                  <p className="mt-1 text-sm text-muted">
                    Пн–Пт: 9:00–19:00<br />
                    Сб: 10:00–16:00<br />
                    Вс: по записи
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { href: '#', label: 'Telegram' },
                { href: '#', label: 'WhatsApp' },
                { href: '#', label: 'VK' },
                { href: '#', label: 'YouTube' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-md border border-border px-4 py-2 text-xs font-medium text-brand-dark hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Requisites */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-brand-dark mb-3">Реквизиты</h3>
              <div className="space-y-1.5 text-xs text-muted">
                <p>ООО «Камен»</p>
                <p>ИНН 1234567890</p>
                <p>ОГРН 123456789012345</p>
                <p>Юридический адрес: г. Москва, ул. Каменная, д. 15, оф. 45</p>
                <p>р/с 40702810123456789012 в ПАО «Сбербанк»</p>
                <p>к/с 30101810400000000225, БИК 044525225</p>
              </div>
            </div>
          </div>

          {/* Map + Form */}
          <div className="space-y-8">
            <div className="h-72 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-gray-400" />
                <p className="mt-2 text-sm text-muted">Яндекс.Карты / 2GIS</p>
                <p className="text-xs text-muted">Интерактивная карта загрузится на продакшене</p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-serif text-xl text-brand-dark">Обратная связь</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Имя" className="rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none" />
                <input type="tel" placeholder="Телефон *" required className="rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none" />
              </div>
              <input type="email" placeholder="E-mail" className="w-full rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none" />
              <textarea placeholder="Сообщение" rows={4} className="w-full rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none" />
              <button type="submit" className="w-full rounded-md bg-brand-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark">
                Отправить
              </button>
              <p className="text-xs text-muted">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/policy/privacy" className="underline">политикой обработки данных</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
