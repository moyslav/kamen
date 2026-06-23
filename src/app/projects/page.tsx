'use client'

import { useState } from 'react'
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
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-10">
          <span className="apple-chip mb-4 inline-block">ПОРТФОЛИО</span>
          <h1 className="apple-section-title">Реализованные проекты</h1>
          <p className="apple-section-subtitle mt-2">Более 2 500 объектов</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-1">
            {projects.map((p, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`w-full rounded-xl border p-4 text-left transition-all duration-200 ${
                  active === i ? 'border-accent bg-accent/5' : 'apple-card border-border/60 hover:border-accent/40'
                }`}>
                <span className="text-xs text-secondary">{p.year}</span>
                <h3 className="mt-1 text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-secondary">{p.desc}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="relative h-96 overflow-hidden rounded-2xl bg-gray-50 sm:h-[500px]">
              <img src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=800" alt={projects[active].title} className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                <p className="text-sm text-white/80">{projects[active].title} • {projects[active].year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
