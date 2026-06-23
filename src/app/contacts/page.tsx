'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function ContactsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Контакты' }]} />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-light text-primary sm:text-4xl"><span className="text-cta">Контакты</span></h1>
          <p className="mt-2 text-sm text-muted">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="glass rounded-lg p-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-cta" />
                <div>
                  <h3 className="text-sm font-semibold text-primary">Адрес склада и офиса</h3>
                  <p className="mt-1 text-sm text-muted">
                    г. Москва, ул. Каменная, д. 15<br />
                    Складской комплекс «Гранит», павильон 3
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-cta" />
                <div>
                  <h3 className="text-sm font-semibold text-primary">Телефоны</h3>
                  <a href="tel:+74951234567" className="mt-1 block text-sm text-muted transition-colors duration-300 hover:text-cta">+7 (495) 123-45-67</a>
                  <a href="tel:+78001234567" className="mt-0.5 block text-sm text-muted transition-colors duration-300 hover:text-cta">8 (800) 123-45-67 (бесплатный)</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-cta" />
                <div>
                  <h3 className="text-sm font-semibold text-primary">E-mail</h3>
                  <a href="mailto:info@kamen.ru" className="mt-1 block text-sm text-muted transition-colors duration-300 hover:text-cta">info@kamen.ru</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-cta" />
                <div>
                  <h3 className="text-sm font-semibold text-primary">Режим работы</h3>
                  <p className="mt-1 text-sm text-muted">Пн–Пт: 9:00–19:00<br />Сб: 10:00–16:00<br />Вс: по записи</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {['Telegram', 'WhatsApp', 'VK', 'YouTube'].map((s) => (
                <a key={s} href="#"
                  className="glass rounded-md px-4 py-2 text-xs font-medium text-primary transition-all duration-300 hover:border-cta hover:text-cta">
                  {s}
                </a>
              ))}
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="mb-3 text-sm font-semibold text-primary">Реквизиты</h3>
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

          <div className="space-y-8">
            <div className="h-72 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-gray-400" />
                <p className="mt-2 text-sm text-muted">Яндекс.Карты / 2GIS</p>
                <p className="text-xs text-muted">Интерактивная карта загрузится на продакшене</p>
              </div>
            </div>

            <form className="glass rounded-lg p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-serif text-xl text-primary">Обратная связь</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Имя" className="rounded-md border border-border bg-input-bg px-4 py-3 text-sm transition-colors duration-300 focus:border-cta focus:outline-none" />
                <input type="tel" placeholder="Телефон *" required className="rounded-md border border-border bg-input-bg px-4 py-3 text-sm transition-colors duration-300 focus:border-cta focus:outline-none" />
              </div>
              <input type="email" placeholder="E-mail" className="w-full rounded-md border border-border bg-input-bg px-4 py-3 text-sm transition-colors duration-300 focus:border-cta focus:outline-none" />
              <textarea placeholder="Сообщение" rows={4} className="w-full rounded-md border border-border bg-input-bg px-4 py-3 text-sm transition-colors duration-300 focus:border-cta focus:outline-none" />
              <button type="submit" className="gold-glow w-full rounded-md bg-cta px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary">
                Отправить
              </button>
              <p className="text-xs text-muted">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/policy/privacy" className="underline transition-colors duration-300 hover:text-cta">политикой обработки данных</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
