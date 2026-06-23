'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { categories } from '@/lib/data'

const steps = [{ id: 1, label: 'Тип камня' }, { id: 2, label: 'Размеры' }, { id: 3, label: 'Монтаж' }, { id: 4, label: 'Доставка' }, { id: 5, label: 'Итого' }]
const edges = ['Прямая', 'Радиус', 'Евро', 'Фигурная']

export default function CalculatorPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ category: '', width: '', length: '', edge: edges[0], mounting: true, mountingSurface: 'Пол', city: '', name: '', phone: '', email: '', comment: '' })
  const update = (f: string, v: string | boolean) => setForm(p => ({ ...p, [f]: v }))
  const next = () => setStep(s => Math.min(s + 1, 5))
  const prev = () => setStep(s => Math.max(s - 1, 1))

  return (
    <>
      <Breadcrumbs items={[{ label: 'Калькулятор стоимости' }]} />
      <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <div className="mb-8 text-center">
          <span className="apple-chip mb-4 inline-block">ОНЛАЙН-РАСЧЁТ</span>
          <h1 className="apple-section-title">Калькулятор стоимости</h1>
          <p className="apple-section-subtitle mt-2">Рассчитайте ориентировочную стоимость</p>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map(s => (
              <div key={s.id} className="flex flex-col items-center">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
                  s.id < step ? 'bg-accent text-white' : s.id === step ? 'bg-foreground text-background' : 'border border-border/60 text-secondary'
                }`}>
                  {s.id < step ? <Check className="h-4 w-4" /> : s.id}
                </div>
                <span className="mt-2 text-xs text-secondary hidden sm:block">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="relative mt-4">
            <div className="absolute top-0 h-0.5 w-full bg-border/40" />
            <div className="absolute top-0 h-0.5 bg-accent transition-all duration-500" style={{ width: `${((step - 1) / 4) * 100}%` }} />
          </div>
        </div>

        <div className="apple-card p-8">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-[21px] font-semibold text-foreground">Выберите тип камня</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {categories.map(cat => (
                  <button key={cat.slug} onClick={() => update('category', cat.slug)}
                    className={`rounded-xl border p-4 text-left transition-all duration-200 ${
                      form.category === cat.slug ? 'border-accent bg-accent/5' : 'border-border/60 hover:border-accent/40'
                    }`}>
                    <h3 className="text-[15px] font-semibold text-foreground">{cat.name}</h3>
                    <p className="mt-1 text-xs text-secondary">{cat.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-[21px] font-semibold text-foreground">Размеры и обработка</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="mb-1.5 block text-sm font-medium text-foreground">Ширина (м)</label>
                  <input type="number" step="0.01" min="0" value={form.width} onChange={e => update('width', e.target.value)}
                    className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none" placeholder="0.6" /></div>
                <div><label className="mb-1.5 block text-sm font-medium text-foreground">Длина (м)</label>
                  <input type="number" step="0.01" min="0" value={form.length} onChange={e => update('length', e.target.value)}
                    className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none" placeholder="2.4" /></div>
              </div>
              {form.width && form.length && <p className="text-sm text-secondary">Площадь: <strong className="text-foreground">{(parseFloat(form.width) * parseFloat(form.length)).toFixed(2)} м²</strong></p>}
              <div><label className="mb-1.5 block text-sm font-medium text-foreground">Обработка кромки</label>
                <div className="flex flex-wrap gap-2">
                  {edges.map(e => (
                    <button key={e} onClick={() => update('edge', e)}
                      className={`rounded-xl border px-4 py-2 text-sm transition-all duration-200 ${
                        form.edge === e ? 'border-accent bg-accent/5 text-foreground' : 'border-border/60 text-secondary hover:border-accent/40'
                      }`}>{e}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-[21px] font-semibold text-foreground">Монтаж</h2>
              <div className="flex gap-4">
                <button onClick={() => update('mounting', true)}
                  className={`flex-1 rounded-xl border p-4 text-center transition-all duration-200 ${
                    form.mounting === true ? 'border-accent bg-accent/5' : 'border-border/60 hover:border-accent/40'
                  }`}><span className="text-sm font-medium text-foreground">Требуется монтаж</span></button>
                <button onClick={() => update('mounting', false)}
                  className={`flex-1 rounded-xl border p-4 text-center transition-all duration-200 ${
                    form.mounting === false ? 'border-accent bg-accent/5' : 'border-border/60 hover:border-accent/40'
                  }`}><span className="text-sm font-medium text-foreground">Без монтажа</span></button>
              </div>
              {form.mounting && (
                <div><label className="mb-1.5 block text-sm font-medium text-foreground">Тип поверхности</label>
                  <select value={form.mountingSurface} onChange={e => update('mountingSurface', e.target.value)}
                    className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none">
                    {['Пол', 'Стена', 'Фасад', 'Ступени'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5">
              <h2 className="text-[21px] font-semibold text-foreground">Доставка</h2>
              <div><label className="mb-1.5 block text-sm font-medium text-foreground">Город / регион</label>
                <input type="text" value={form.city} onChange={e => update('city', e.target.value)}
                  className="w-full rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none" placeholder="Москва" /></div>
              <div className="flex gap-2 text-xs text-secondary">
                <span className="rounded-full bg-subtle px-3 py-1.5">Самовывоз</span>
                <span className="rounded-full bg-subtle px-3 py-1.5">Доставка по Москве</span>
                <span className="rounded-full bg-subtle px-3 py-1.5">Доставка по РФ</span>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-5">
              <h2 className="text-[21px] font-semibold text-foreground">Итоговая стоимость</h2>
              <div className="rounded-xl bg-subtle p-6 space-y-3">
                {[
                  { label: 'Камень', value: 'от 6 500 до 25 000 ₽/м²' },
                  { label: 'Площадь', value: form.width && form.length ? `${(parseFloat(form.width) * parseFloat(form.length)).toFixed(2)} м²` : '—' },
                  { label: 'Обработка кромки', value: form.edge },
                  { label: 'Монтаж', value: form.mounting ? 'Да (+ от 3 500 ₽/м²)' : 'Нет' },
                ].map(row => (
                  <div key={row.label} className="flex justify-between text-sm"><span className="text-secondary">{row.label}</span><span className="font-medium text-foreground">{row.value}</span></div>
                ))}
                <div className="flex justify-between border-t border-border/40 pt-3">
                  <span className="font-medium text-foreground">Ориентировочная стоимость</span>
                  <span className="text-[21px] font-semibold text-accent">от 45 000 ₽</span>
                </div>
              </div>
              <p className="rounded-xl bg-amber-50 p-3 text-xs text-secondary">Расчёт ориентировочный. Точная стоимость зависит от конкретного слэба, сложности обработки и текущих цен.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Имя" value={form.name} onChange={e => update('name', e.target.value)}
                  className="rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none" />
                <input type="tel" placeholder="Телефон *" required value={form.phone} onChange={e => update('phone', e.target.value)}
                  className="rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none" />
                <input type="email" placeholder="E-mail" value={form.email} onChange={e => update('email', e.target.value)}
                  className="rounded-xl border border-border/60 bg-input-bg px-4 py-3 text-sm transition-all duration-200 focus:border-accent focus:outline-none sm:col-span-2" />
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <button onClick={prev} disabled={step === 1}
              className="rounded-xl border border-border/60 px-6 py-2.5 text-sm font-medium text-secondary transition-all duration-200 hover:border-accent hover:text-accent disabled:opacity-30">Назад</button>
            {step < 5 ? (
              <button onClick={next} className="apple-button apple-button-primary inline-flex items-center gap-2">
                Далее <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button className="apple-button apple-button-primary inline-flex items-center gap-2">
                Отправить заявку <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
