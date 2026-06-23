import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  catalog: [
    { href: '/catalog/mramor', label: 'Мрамор' },
    { href: '/catalog/granit', label: 'Гранит' },
    { href: '/catalog/kvarcit', label: 'Кварцит' },
    { href: '/catalog/oniks', label: 'Оникс' },
    { href: '/catalog/travertin', label: 'Травертин' },
    { href: '/catalog/iskusstvennyy-kamen', label: 'Искусственный камень' },
  ],
  services: [
    { href: '/services/rezka', label: 'Резка камня' },
    { href: '/services/polirovka', label: 'Полировка' },
    { href: '/services/montazh', label: 'Монтаж' },
    { href: '/services/izgotovlenie-izdeliy', label: 'Изделия на заказ' },
    { href: '/services/dostavka', label: 'Доставка' },
  ],
  info: [
    { href: '/about', label: 'О компании' },
    { href: '/projects', label: 'Проекты' },
    { href: '/blog', label: 'Блог' },
    { href: '/policy/privacy', label: 'Политика конфиденциальности' },
    { href: '/policy/cookies', label: 'Cookie Policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl tracking-wide">KAMEN</h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Натуральный и искусственный камень для интерьеров и экстерьеров.
              Собственный склад, резка под размер, доставка по РФ.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Telegram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="WhatsApp">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="VK">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.684 0H8.316C2.88 0 0 2.88 0 8.316v7.368C0 21.12 2.88 24 8.316 24h7.368C21.12 24 24 21.12 24 15.684V8.316C24 2.88 21.12 0 15.684 0zm3.576 16.548h-1.596c-.564 0-.744-.396-1.74-1.392-.888-.876-1.272-.996-1.488-.996-.312 0-.408.096-.408.588v1.404c0 .42-.132.672-1.236.672-1.812 0-3.828-1.116-5.256-3.204-1.848-2.532-2.328-4.416-2.328-4.8 0-.192.084-.384.396-.384h1.596c.396 0 .54.18.684.612.768 2.064 2.016 3.876 2.544 3.876.192 0 .288-.096.288-.636v-2.484c-.06-1.128-.66-1.224-.66-1.632 0-.192.156-.384.408-.384h2.52c.336 0 .456.18.456.576v3.108c0 .336.156.456.252.456.204 0 .36-.12.576-.336 1.284-1.452 2.208-3.636 2.208-3.636.12-.252.3-.384.696-.384h1.596c.468 0 .576.24.468.612-1.176 3.6-3.852 6.696-3.852 6.996 0 .192.084.384.252.588.156.18 1.344 1.392 1.632 1.788.408.54.564.912.564 1.356z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">Каталог</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.catalog.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">Услуги</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">Контакты</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <span>г. Москва, ул. Каменная, д. 15, складской комплекс «Гранит»</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-gold" />
                <a href="tel:+74951234567" className="text-gray-400 hover:text-white transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-gold" />
                <a href="mailto:info@kamen.ru" className="text-gray-400 hover:text-white transition-colors">info@kamen.ru</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-gold" />
                <a href="tel:+78001234567" className="text-gray-400 hover:text-white transition-colors">8 (800) 123-45-67</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} ООО «Камен». Все права защищены.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <span>ИНН 1234567890</span>
              <span>ОГРН 123456789012345</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
