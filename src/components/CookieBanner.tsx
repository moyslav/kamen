'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { if (!localStorage.getItem('cookies-accepted')) setVisible(true) }, [])
  const accept = () => { localStorage.setItem('cookies-accepted', 'true'); setVisible(false) }
  if (!visible) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-card/95 backdrop-blur-xl p-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-secondary">Этот сайт использует cookies для аналитики и персонализации. <a href="/policy/privacy" className="text-accent underline">Политика обработки данных</a></p>
        <div className="flex gap-2">
          <button onClick={accept} className="apple-button apple-button-primary text-xs px-5 py-2">Принять</button>
          <button onClick={() => setVisible(false)} className="flex items-center gap-1 rounded-full border border-border/60 px-4 py-2 text-xs text-secondary transition-all duration-200 hover:border-accent"><X className="h-3 w-3" /> Закрыть</button>
        </div>
      </div>
    </div>
  )
}
