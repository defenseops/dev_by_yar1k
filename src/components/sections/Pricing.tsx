'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

export default function Pricing() {
  const { tr } = useLang()
  const p = tr.pricing
  return (
    <section id="pricing" className="section relative overflow-hidden" style={{ background:'#FFFFFF' }}>
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-72 pointer-events-none"
        style={{ background:'radial-gradient(ellipse, rgba(79,70,229,0.06) 0%, transparent 70%)' }} />
      <div className="container relative">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
          className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow mb-5">{p.eyebrow}</p>
          <h2 className="h2 text-ink mb-4">{p.title}</h2>
          <p className="text-ink-3">{p.desc}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {p.plans.map(({ name, price, time, desc, features, cta }, i) => {
            const highlight = i === 1
            const isCustom = i === 2
            return (
              <motion.div key={name}
                initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl border flex flex-col ${highlight ? 'md:-mt-4 md:mb-4' : ''}`}
                style={highlight
                  ? { background:'linear-gradient(145deg,#0A0A0A,#1A1A1A)', borderColor:'rgba(255,255,255,0.1)', boxShadow:'0 24px 64px rgba(0,0,0,0.25), 0 0 0 1px rgba(79,70,229,0.3)' }
                  : { background:'#fff', borderColor:'#E5E7EB', boxShadow:'0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)' }}>
                {highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ background:'linear-gradient(135deg,#4F46E5,#7C3AED)', boxShadow:'0 4px 16px rgba(79,70,229,0.4)' }}>
                      {p.popular}
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <p className={`text-sm font-semibold mb-3 ${highlight ? 'text-white/50' : 'text-ink-3'}`}>{name}</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    {!isCustom && (
                      <span className={`text-sm ${highlight ? 'text-white/40' : 'text-ink-3'}`}>{p.from}</span>
                    )}
                    <span className={`font-bold tracking-tight ${isCustom ? 'text-2xl' : 'text-4xl'} ${highlight ? 'text-white' : 'text-ink'}`}>{price}</span>
                  </div>
                  <p className={`text-xs mb-4 ${highlight ? 'text-white/35' : 'text-ink-3'}`}>{p.timeline} {time}</p>
                  <p className={`text-sm leading-relaxed ${highlight ? 'text-white/55' : 'text-ink-3'}`}>{desc}</p>
                </div>
                <div className={`mx-8 h-px ${highlight ? 'bg-white/10' : 'bg-line'}`} />
                <ul className="flex flex-col gap-3 p-8 flex-1">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: highlight ? 'rgba(79,70,229,0.3)' : 'rgba(79,70,229,0.1)' }}>
                        <Check size={10} className="text-brand" />
                      </div>
                      <span className={highlight ? 'text-white/75' : 'text-ink-3'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-8 pt-0">
                  <a href="#contact"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${highlight ? 'bg-white text-ink hover:bg-canvas' : 'text-white hover:opacity-90'}`}
                    style={!highlight ? { background:'linear-gradient(135deg,#0A0A0A,#1A1A1A)' } : {}}>
                    {cta} <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.4 }}
          className="text-center text-ink-3 text-sm mt-8">{p.footNote}</motion.p>
      </div>
    </section>
  )
}
