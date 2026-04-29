'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

export default function Footer() {
  const { tr } = useLang()
  const f = tr.footer
  const nav = tr.nav

  const links = [
    { label: nav.process, href:'#process' },
    { label: nav.work,    href:'#portfolio' },
    { label: nav.pricing, href:'#pricing' },
    { label: nav.about,   href:'#about' },
    { label: nav.faq,     href:'#faq' },
  ]
  const socials = [
    { label:'GitHub',   href:'https://github.com' },
    { label:'Telegram', href:'https://t.me/dev_by_yar1k' },
    { label:'Email',    href:'mailto:kulmatovyaroslav@gmail.com' },
  ]

  return (
    <footer style={{ background:'#0A0A0A' }}>
      <div className="border-b" style={{ borderColor:'rgba(255,255,255,0.07)' }}>
        <div className="container py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm mb-3" style={{ color:'rgba(255,255,255,0.35)' }}>{f.readyLabel}</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              {f.title}<br />
              <span className="font-light italic" style={{ color:'rgba(255,255,255,0.4)' }}>{f.titleItalic}</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink font-semibold rounded-full justify-center transition-colors hover:bg-canvas"
              style={{ boxShadow:'0 4px 16px rgba(255,255,255,0.1)' }}>
              {f.cta1} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background:'rgba(255,255,255,0.08)' }}>
            <span className="text-white text-xs font-bold">D</span>
          </div>
          <span className="text-sm" style={{ color:'rgba(255,255,255,0.4)' }}>{f.tagline}</span>
        </div>
        <nav className="flex flex-wrap gap-5 justify-center">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-xs transition-colors duration-150"
              style={{ color:'rgba(255,255,255,0.35)' }}
              onMouseEnter={e => (e.currentTarget.style.color='rgba(255,255,255,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.color='rgba(255,255,255,0.35)')}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          {socials.map(s => (
            <a key={s.label} href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              className="text-xs transition-colors duration-150"
              style={{ color:'rgba(255,255,255,0.35)' }}
              onMouseEnter={e => (e.currentTarget.style.color='rgba(255,255,255,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.color='rgba(255,255,255,0.35)')}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t" style={{ borderColor:'rgba(255,255,255,0.04)' }}>
        <div className="container py-4">
          <p className="text-xs text-center" style={{ color:'rgba(255,255,255,0.15)' }}>{f.copy}</p>
        </div>
      </div>
    </footer>
  )
}
