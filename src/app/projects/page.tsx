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
        <div className="mb-10">
          <div className="glass mb-4 inline-block rounded-full px-4 py-1.5">
            <span className="text-xs font-medium text-cta">ПОРТФОЛИО</span>
          </div>
          <h1 className="font-serif text-3xl font-light text-primary sm:text-4xl">Реализованные <span className="text-cta">проекты</span></h1>
          <p className="mt-2 text-sm text-muted">Более 2 500 объектов — от городских квартир до фасадов бизнес-центров</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-1">
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full rounded-lg border p-4 text-left transition-all duration-300 ${
                  active === i ? 'border-cta bg-cta/5 gold-glow' : 'glass hover:border-cta/50'
                }`}
              >
                <span className="text-xs text-muted">{p.year}</span>
                <h3 className="mt-1 text-sm font-medium text-primary">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted">{p.desc}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="relative h-96 overflow-hidden rounded-lg bg-gray-100 sm:h-[500px]">
              <img src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=800" alt={projects[active].title} className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-sm text-white/80">{projects[active].title} • {projects[active].year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
