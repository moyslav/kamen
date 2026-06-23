'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, ChevronDown, Sun, Moon } from 'lucide-react'
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
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[17px] font-semibold tracking-tight text-foreground">KAMEN</span>
        </Link>

        <nav className="hidden items-center justify-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] font-medium tracking-wide transition-colors duration-200 ${
                pathname.startsWith(link.href) ? 'text-accent' : 'text-secondary hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggle} className="rounded-full p-1.5 text-secondary transition-colors duration-200 hover:text-foreground" aria-label={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}>
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button className="rounded-full p-1.5 text-secondary transition-colors duration-200 hover:text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Меню">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col space-y-1 px-5 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className={`py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname.startsWith(link.href) ? 'text-accent' : 'text-secondary hover:text-foreground'
                }`}>
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button onClick={toggle} className="rounded-full p-1.5 text-secondary transition-colors duration-200 hover:text-foreground">
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <span className="text-xs text-secondary">{theme === 'dark' ? 'Светлая' : 'Тёмная'}</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
