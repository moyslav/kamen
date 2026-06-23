'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function ContactsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Контакты' }]} />
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-10">
          <h1 className="apple-section-title">Контакты</h1>
          <p className="apple-section-subtitle mt-2">Свяжитесь с нами любым удобным способом</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="apple-card p-6 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div><h3 className="text-sm font-semibold text-foreground">Адрес</h3><p className="mt-0.5 text-sm text-secondary">г. Москва, ул. Каменная, д. 15<br />Складской комплекс «Гранит»</p></div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div><h3 className="text-sm font-semibold text-foreground">Телефоны</h3>
                  <a href="tel:+74951234567" className="mt-0.5 block text-sm text-secondary transition-colors duration-200 hover:text-accent">+7 (495) 123-45-67</a>
                  <a href="tel:+78001234567" className="text-sm text-secondary transition-colors duration-200 hover:text-accent">8 (800) 123-45-67</a></div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div><h3 className="text-sm font-semibold text-foreground">E-mail</h3><a href="mailto:info@kamen.ru" className="mt-0.5 block text-sm text-secondary transition-colors duration-200 hover:text-accent">info@kamen.ru</a></div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div><h3 className="text-sm font-semibold text-foreground">Режим работы</h3><p className="mt-0.5 text-sm text-secondary">Пн–Пт: 9:00–19:00<br />Сб: 10:00–16:00<br />Вс: по записи</p></div>
              </div>
            </div>

            <div className="apple-card p-6">
              <h3 className="mb-3 text-sm font-semibold text-foreground">Реквизиты</h3>
              <div className="space-y-1 text-xs text-secondary"><p>ООО «Камен»</p><p>ИНН 1234567890 | ОГРН 123456789012345</p></div>
            </div>

            <div className="flex gap-3">
              {['Telegram', 'WhatsApp', 'VK', 'YouTube'].map(s => (
                <a key={s} href="#" className="rounded-xl border border-border/60 px-4 py-2 text-xs text-secondary transition-all duration-200 hover:border-accent hover:text-accent">{s}</a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="h-64 overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center">
              <div className="text-center"><MapPin className="mx-auto h-8 w-8 text-gray-300" /><p className="mt-2 text-sm text-secondary">Яндекс.Карты / 2GIS</p><p className="text-xs text-secondary/60">Интерактивная карта загрузится на продакшене</p></div>
            </div>
            <form className="apple-card p-6 space-y-4" onSubmit={e => e.preventDefault()}>
              <h3 className="text-[17px] font-semibold text-foreground">Обратная связь</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Имя" className="rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none" />
                <input type="tel" placeholder="Телефон *" required className="rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none" />
              </div>
              <input type="email" placeholder="E-mail" className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none" />
              <textarea placeholder="Сообщение" rows={4} className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none" />
              <button type="submit" className="apple-button apple-button-primary w-full">Отправить</button>
              <p className="text-xs text-secondary/60">Нажимая кнопку, вы соглашаетесь с <a href="/policy/privacy" className="text-accent underline">политикой обработки данных</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
