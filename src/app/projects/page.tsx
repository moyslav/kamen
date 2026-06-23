'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const projects = [
  { title: 'Квартира в ЖК «Дом на Мосфильмовской»', desc: 'Мрамор Calacatta — полы, стены в ванной, кухонный фартук', year: '2025' },
  { title: 'БЦ «Невский 152»', desc: 'Гранит Emerald Pearl — фасад и входная группа', year: '2024' },
  { title: 'Частный дом в КП «Миллениум»', desc: 'Мрамор Bianco Carrara — лестница, камин, столешницы', year: '2024' },
  { title: 'Ресторан «La Pietra»', desc: 'Травертин — полы, барная стойка, декоративные панели', year: '2023' },
  { title: 'Коттеджный посёлок «Резиденция»', desc: 'Гранит Giallo Oriо — фасады 12 домов', year: '2023' },
  { title: 'Лобби отеля 5*', desc: 'Оникс с подсветкой — ресепшн и колонны', year: '2023' },
]

export default function ProjectsPage() {
  const [active, setActive] = useState(0)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Проекты' }]} />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-light text-brand-dark sm:text-4xl mb-2">Реализованные проекты</h1>
        <p className="text-sm text-muted mb-10">Более 2 500 объектов — от городских квартир до фасадов бизнес-центров</p>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-3">
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-lg border p-4 transition-all ${
                  active === i ? 'border-brand-gold bg-brand-gold/5' : 'border-border bg-card hover:border-brand-gold/50'
                }`}
              >
                <span className="text-xs text-muted">{p.year}</span>
                <h3 className="text-sm font-medium text-brand-dark mt-1">{p.title}</h3>
                <p className="text-xs text-muted mt-1 line-clamp-2">{p.desc}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="relative h-96 overflow-hidden rounded-lg bg-gray-100 sm:h-[500px]">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <svg className="mx-auto h-24 w-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-4 text-sm text-muted">{projects[active].title}</p>
                  <p className="text-xs text-muted mt-1">{projects[active].desc}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-sm text-white/80">{projects[active].title} • {projects[active].year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
