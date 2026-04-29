'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Lang, t } from './translations'

export type Tr = {
  nav: { process: string; work: string; pricing: string; about: string; faq: string; cta: string }
  hero: { badge: string; badgeSub: string; h1_1: string; h1_2: string; h1_3: string; desc: string; cta1: string; cta2: string; proof: string; stat1n: string; stat1l: string; stat2n: string; stat2l: string; stat3n: string; stat3l: string; floatDelivered: string; floatUpwork: string; floatBuiltWith: string; floatDeployed: string; floatDeployedSub: string }
  problems: { eyebrow: string; title: string; desc: string; bridge: string; items: { num: string; title: string; body: string; emoji: string }[] }
  solution: { eyebrow: string; title: string; desc: string; quote: string; quoteAuthor: string; pillars: { title: string; desc: string }[] }
  process: { eyebrow: string; title: string; summaryLabel: string; summaryValue: string; summarySub: string; summaryCta: string; steps: { title: string; desc: string; time: string }[] }
  portfolio: { eyebrow: string; title: string; ctaTop: string; ctaBottom: string; ctaBottomSub: string; resultLabel: string; cases: { title: string; category: string; desc: string; result: string }[] }
  deliverables: { eyebrow: string; title: string; desc: string; items: { title: string; body: string }[] }
  pricing: { eyebrow: string; title: string; desc: string; popular: string; from: string; timeline: string; footNote: string; plans: { name: string; price: string; time: string; desc: string; cta: string; features: string[] }[] }
  about: { eyebrow: string; title: string; p1: string; p2: string; stackLabel: string; upworkBtn: string; available: string; facts: { n: string; label: string }[] }
  testimonials: { eyebrow: string; title: string; upworkBtn: string; upworkVerified: string; upworkSub: string; upworkProfile: string; reviews: { name: string; role: string; flag: string; project: string; text: string }[] }
  faq: { eyebrow: string; title: string; desc: string; askBtn: string; items: { q: string; a: string }[] }
  contact: { eyebrow: string; title: string; desc: string; available: string; availableSub: string; nameLbl: string; namePh: string; contactLbl: string; contactPh: string; budgetLbl: string; messageLbl: string; messagePh: string; sending: string; send: string; spam: string; successTitle: string; successDesc: string; budgets: string[] }
  footer: { readyLabel: string; title: string; titleItalic: string; cta1: string; cta2: string; copy: string; tagline: string }
}

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  tr: Tr
}

const Ctx = createContext<LangCtx>({} as LangCtx)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'ru'
    const saved = localStorage.getItem('lang') as Lang | null
    return saved === 'en' ? 'en' : 'ru'
  })

  const handleSet = (l: Lang) => {
    setLang(l)
    if (typeof window !== 'undefined') localStorage.setItem('lang', l)
  }

  return (
    <Ctx.Provider value={{ lang, setLang: handleSet, tr: t[lang] as Tr }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLang = () => useContext(Ctx)
