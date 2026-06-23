'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Calculator, Sun, Moon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/components/ThemeProvider'

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
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-glass-border glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-wide text-primary">KAMEN</span>
          <span className="hidden text-xs text-muted sm:inline-block">натуральный камень</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-cta ${
                pathname.startsWith(link.href) ? 'text-cta' : 'text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            className="rounded-full p-2 text-muted transition-colors duration-300 hover:text-cta hover:bg-cta/10"
            aria-label={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a href="tel:+74951234567" className="hidden text-sm font-medium text-primary transition-colors duration-300 hover:text-cta lg:inline-block">
            +7 (495) 123-45-67
          </a>
          <button className="rounded-full p-2 text-primary transition-colors duration-300 hover:bg-cta/10 hover:text-cta" aria-label="Поиск">
            <Search className="h-5 w-5" />
          </button>
          <button
            className="rounded-full p-2 text-primary transition-colors duration-300 hover:bg-cta/10 hover:text-cta md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-glass-border glass md:hidden">
          <nav className="flex flex-col space-y-3 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-medium transition-colors duration-300 hover:text-cta ${
                  pathname.startsWith(link.href) ? 'text-cta' : 'text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+74951234567" className="py-2 text-sm font-medium text-primary">+7 (495) 123-45-67</a>
            <div className="flex items-center gap-3 py-2">
              <button
                onClick={toggle}
                className="rounded-full p-2 text-muted transition-colors duration-300 hover:text-cta hover:bg-cta/10"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <span className="text-xs text-muted">{theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}</span>
            </div>
            <Link
              href="/calculator"
              onClick={() => setOpen(false)}
              className="gold-glow inline-flex items-center justify-center gap-2 rounded-md bg-cta px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary"
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
