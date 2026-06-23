'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookies-accepted', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted leading-relaxed">
          Этот сайт использует cookies для аналитики и персонализации. Продолжая использовать сайт,
          вы соглашаетесь с{' '}
          <a href="/policy/privacy" className="underline hover:text-brand-dark">
            политикой обработки персональных данных
          </a>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="whitespace-nowrap rounded-md bg-brand-dark px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-brand-gold"
          >
            Принять
          </button>
          <button
            onClick={() => setVisible(false)}
            className="flex items-center gap-1 whitespace-nowrap rounded-md border border-border px-4 py-2 text-xs font-medium text-muted transition-colors hover:bg-subtle"
          >
            <X className="h-3 w-3" />
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}
