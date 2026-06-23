'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { categories } from '@/lib/data'

const steps = [
  { id: 1, label: 'Тип камня' },
  { id: 2, label: 'Размеры' },
  { id: 3, label: 'Монтаж' },
  { id: 4, label: 'Доставка' },
  { id: 5, label: 'Итого' },
]

const edges = ['Прямая', 'Радиус', 'Евро', 'Фигурная']

export default function CalculatorPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    category: '',
    width: '',
    length: '',
    edge: edges[0],
    mounting: true,
    mountingSurface: 'Пол',
    city: '',
    name: '',
    phone: '',
    email: '',
    comment: '',
  })

  const update = (field: string, value: string | boolean) => setForm((prev) => ({ ...prev, [field]: value }))

  const next = () => setStep((s) => Math.min(s + 1, 5))
  const prev = () => setStep((s) => Math.max(s - 1, 1))

  return (
    <>
      <Breadcrumbs items={[{ label: 'Калькулятор стоимости' }]} />
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl mb-2">Калькулятор стоимости</h1>
        <p className="text-sm text-muted mb-10">Рассчитайте ориентировочную стоимость изделия из камня</p>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                    s.id < step ? 'bg-brand-gold text-white' : s.id === step ? 'bg-brand-dark text-white' : 'border border-border text-muted'
                  }`}
                >
                  {s.id < step ? <Check className="h-5 w-5" /> : s.id}
                </div>
                <span className="mt-2 text-xs text-muted hidden sm:block">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="relative mt-4">
            <div className="absolute top-0 h-0.5 w-full bg-border" />
            <div className="absolute top-0 h-0.5 bg-brand-gold transition-all duration-300" style={{ width: `${((step - 1) / 4) * 100}%` }} />
          </div>
        </div>

        {/* Step content */}
        <div className="rounded-lg border border-border bg-card p-8">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl text-brand-dark">Выберите тип камня</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => update('category', cat.slug)}
                    className={`rounded-lg border p-4 text-left transition-all ${
                      form.category === cat.slug ? 'border-brand-gold bg-brand-gold/5' : 'border-border hover:border-brand-gold/50'
                    }`}
                  >
                    <h3 className="font-serif text-lg text-brand-dark">{cat.name}</h3>
                    <p className="mt-1 text-xs text-muted">{cat.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl text-brand-dark">Размеры и обработка</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">Ширина (м)</label>
                  <input
                    type="number" step="0.01" min="0"
                    value={form.width}
                    onChange={(e) => update('width', e.target.value)}
                    className="w-full rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
                    placeholder="Например: 0.6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">Длина (м)</label>
                  <input
                    type="number" step="0.01" min="0"
                    value={form.length}
                    onChange={(e) => update('length', e.target.value)}
                    className="w-full rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
                    placeholder="Например: 2.4"
                  />
                </div>
              </div>
              {form.width && form.length && (
                <p className="text-sm text-brand-dark">
                  Площадь: <strong>{(parseFloat(form.width) * parseFloat(form.length)).toFixed(2)} м²</strong>
                </p>
              )}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Обработка кромки</label>
                <div className="flex flex-wrap gap-2">
                  {edges.map((e) => (
                    <button
                      key={e}
                      onClick={() => update('edge', e)}
                      className={`rounded-md border px-4 py-2 text-sm transition-all ${
                        form.edge === e ? 'border-brand-gold bg-brand-gold/5 text-brand-dark' : 'border-border text-muted hover:border-brand-gold/50'
                      }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl text-brand-dark">Монтаж</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => update('mounting', true)}
                  className={`flex-1 rounded-lg border p-4 text-center transition-all ${
                    form.mounting === true ? 'border-brand-gold bg-brand-gold/5' : 'border-border hover:border-brand-gold/50'
                  }`}
                >
                  <span className="text-sm font-medium text-brand-dark">Требуется монтаж</span>
                </button>
                <button
                  onClick={() => update('mounting', false)}
                  className={`flex-1 rounded-lg border p-4 text-center transition-all ${
                    form.mounting === false ? 'border-brand-gold bg-brand-gold/5' : 'border-border hover:border-brand-gold/50'
                  }`}
                >
                  <span className="text-sm font-medium text-brand-dark">Без монтажа</span>
                </button>
              </div>
              {form.mounting && (
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">Тип поверхности</label>
                  <select
                    value={form.mountingSurface}
                    onChange={(e) => update('mountingSurface', e.target.value)}
                    className="w-full rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
                  >
                    {['Пол', 'Стена', 'Фасад', 'Ступени'].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl text-brand-dark">Доставка</h2>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Город / регион доставки</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => update('city', e.target.value)}
                  className="w-full rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
                  placeholder="Москва"
                />
              </div>
              <div className="flex gap-2">
                <span className="rounded-md bg-gray-100 px-3 py-1.5 text-xs text-muted">Самовывоз</span>
                <span className="rounded-md bg-gray-100 px-3 py-1.5 text-xs text-muted">Доставка по Москве</span>
                <span className="rounded-md bg-gray-100 px-3 py-1.5 text-xs text-muted">Доставка по РФ</span>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl text-brand-dark">Итоговая стоимость</h2>
              <div className="rounded-lg bg-gray-50 p-6 space-y-3">
                {[
                  { label: 'Камень', value: 'от 6 500 до 25 000 ₽/м²' },
                  { label: 'Площадь', value: form.width && form.length ? `${(parseFloat(form.width) * parseFloat(form.length)).toFixed(2)} м²` : '—' },
                  { label: 'Обработка кромки', value: form.edge },
                  { label: 'Монтаж', value: form.mounting ? 'Да (+ от 3 500 ₽/м²)' : 'Нет' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-muted">{row.label}</span>
                    <span className="font-medium text-brand-dark">{row.value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-medium text-brand-dark">Ориентировочная стоимость</span>
                  <span className="font-serif text-xl font-medium text-brand-gold">от 45 000 ₽</span>
                </div>
              </div>
              <p className="text-xs text-muted bg-amber-50 rounded-md p-3">
                Расчёт ориентировочный. Точная стоимость зависит от конкретного слэба, сложности обработки и текущих цен на складе. Менеджер уточнит детали после заявки.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text" placeholder="Имя" value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
                />
                <input
                  type="tel" placeholder="Телефон *" required value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
                />
                <input
                  type="email" placeholder="E-mail" value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none sm:col-span-2"
                />
                <textarea
                  placeholder="Комментарий" value={form.comment}
                  onChange={(e) => update('comment', e.target.value)}
                  className="rounded-md border border-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-none sm:col-span-2"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={prev}
              disabled={step === 1}
              className="rounded-md border border-border px-6 py-2.5 text-sm font-medium text-brand-dark transition-colors hover:border-brand-gold disabled:opacity-30"
            >
              Назад
            </button>
            {step < 5 ? (
              <button
                onClick={next}
                className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Далее <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark">
                Отправить заявку
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
