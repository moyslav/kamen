import Link from 'next/link'

interface Item { label: string; href?: string }

export default function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav className="mx-auto max-w-7xl px-5 py-3 sm:px-8 lg:px-12" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-secondary">
        <li><Link href="/" className="transition-colors duration-200 hover:text-accent">Главная</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="text-border">/</span>
            {item.href ? (
              <Link href={item.href} className="transition-colors duration-200 hover:text-accent">{item.label}</Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
