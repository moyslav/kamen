'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Search, Calculator } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/catalog', label: 'Каталог' },
  { href: '/services', label: 'Услуги' },
  { href: '/calculator', label: 'Калькулятор' },
  { href: '/projects', label: 'Проекты' },
  { href: '/contacts', label: 'Контакты' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-semibold tracking-wide text-brand-dark">KAMEN</span>
          <span className="hidden text-xs text-muted sm:inline-block">натуральный камень</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                pathname.startsWith(link.href) ? 'text-brand-gold' : 'text-brand-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+74951234567" className="hidden text-sm font-medium text-brand-dark hover:text-brand-gold lg:inline-block">
            +7 (495) 123-45-67
          </a>
          <button className="rounded-full p-2 text-brand-dark hover:bg-brand-gold/10 transition-colors" aria-label="Поиск">
            <Search className="h-5 w-5" />
          </button>
          <button
            className="rounded-full p-2 text-brand-dark hover:bg-brand-gold/10 transition-colors md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-brand-gold ${
                  pathname.startsWith(link.href) ? 'text-brand-gold' : 'text-brand-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+74951234567" className="text-sm font-medium text-brand-dark py-2">
              +7 (495) 123-45-67
            </a>
            <Link
              href="/calculator"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-gold px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              <Calculator className="h-4 w-4" />
              Получить расчёт
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
