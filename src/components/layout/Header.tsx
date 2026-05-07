'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'
import { Lang } from '@/i18n/translations'

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center rounded-full border border-white/10 overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
      {(['ru', 'en'] as Lang[]).map(l => (
        <motion.button key={l} onClick={() => setLang(l)}
          className="px-3 py-1.5 text-xs font-semibold transition-all duration-200 relative"
          style={{ color: lang === l ? '#0A0A0A' : 'rgba(255,255,255,0.4)' }}>
          {lang === l && (
            <motion.div layoutId="langBg" className="absolute inset-0 rounded-full"
              style={{ background: '#F0F0F0' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
          )}
          <span className="relative z-10 uppercase">{l}</span>
        </motion.button>
      ))}
    </div>
  )
}

export default function Header() {
  const { lang, setLang, tr } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = [
    { label: tr.nav.process, href: '#process' },
    { label: tr.nav.work, href: '#portfolio' },
    { label: tr.nav.pricing, href: '#pricing' },
    { label: tr.nav.about, href: '#about' },
    { label: tr.nav.faq, href: '#faq' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={scrolled
          ? { background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }
          : { background: 'transparent' }}>
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span className="text-white text-xs font-bold">D</span>
            </div>
            <span className="font-semibold text-white tracking-tight">dev.by.yar1k</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-white/45 hover:text-white transition-colors duration-150">{l.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LangSwitcher lang={lang} setLang={setLang} />
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
              {tr.nav.cta} <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LangSwitcher lang={lang} setLang={setLang} />
            <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-white/50 hover:text-white transition-colors"
              onClick={() => setOpen(v => !v)}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 pt-16 flex flex-col px-6 py-10"
            style={{ background: '#0A0A0A' }}>
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-white/80 py-3 border-b border-white/08 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-8 justify-center text-base py-4">
              {tr.nav.cta} <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
