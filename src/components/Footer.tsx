import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = [
  { href: '/catalog', label: 'Каталог' },
  { href: '/services', label: 'Услуги' },
  { href: '/calculator', label: 'Калькулятор' },
  { href: '/about', label: 'О компании' },
  { href: '/projects', label: 'Проекты' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/policy/privacy', label: 'Политика конфиденциальности' },
]

export default function Footer() {
  return (
    <footer className="bg-footer-bg border-t border-border/40">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-secondary">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors duration-200 hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center gap-4 border-t border-border/40 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-secondary/60">
            © {new Date().getFullYear()} ООО «Камен». Все права защищены.
          </p>
          <div className="flex gap-4 text-xs text-secondary/60">
            <a href="tel:+74951234567" className="transition-colors duration-200 hover:text-foreground">+7 (495) 123-45-67</a>
            <a href="mailto:info@kamen.ru" className="transition-colors duration-200 hover:text-foreground">info@kamen.ru</a>
            <span>ИНН 1234567890</span>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-5">
          {['Telegram', 'WhatsApp', 'VK', 'YouTube'].map((s) => (
            <a key={s} href="#" className="text-xs text-secondary/50 transition-colors duration-200 hover:text-foreground">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
