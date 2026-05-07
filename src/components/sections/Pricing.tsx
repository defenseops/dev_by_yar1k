'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

export default function Pricing() {
  const { tr } = useLang()
  const p = tr.pricing
  return (
    <section id="pricing" className="section relative overflow-hidden" style={{ background:'#0A0A0A' }}>
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-72 pointer-events-none"
        style={{ background:'radial-gradient(ellipse, rgba(129,140,248,0.08) 0%, transparent 70%)' }} />
      <div className="container relative">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
          className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow mb-5">{p.eyebrow}</p>
          <h2 className="h2 text-white mb-4">{p.title}</h2>
          <p className="text-white/40">{p.desc}</p>
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
                  ? { background:'linear-gradient(145deg,#1A1A2E,#16213E)', borderColor:'rgba(129,140,248,0.3)', boxShadow:'0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(129,140,248,0.2)' }
                  : { background:'rgba(255,255,255,0.03)', borderColor:'rgba(255,255,255,0.08)', boxShadow:'0 1px 3px rgba(0,0,0,0.3)' }}>
                {highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ background:'linear-gradient(135deg,#4F46E5,#7C3AED)', boxShadow:'0 4px 16px rgba(79,70,229,0.4)' }}>
                      {p.popular}
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <p className={`text-sm font-semibold mb-3 ${highlight ? 'text-white/50' : 'text-white/35'}`}>{name}</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    {!isCustom && (
                      <span className={`text-sm ${highlight ? 'text-white/40' : 'text-white/30'}`}>{p.from}</span>
                    )}
                    <span className={`font-bold tracking-tight ${isCustom ? 'text-2xl' : 'text-4xl'} text-white`}>{price}</span>
                  </div>
                  <p className={`text-xs mb-4 ${highlight ? 'text-white/35' : 'text-white/25'}`}>{p.timeline} {time}</p>
                  <p className={`text-sm leading-relaxed ${highlight ? 'text-white/50' : 'text-white/35'}`}>{desc}</p>
                </div>
                <div className={`mx-8 h-px`} style={{ background: highlight ? 'rgba(129,140,248,0.2)' : 'rgba(255,255,255,0.06)' }} />
                <ul className="flex flex-col gap-3 p-8 flex-1">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: highlight ? 'rgba(129,140,248,0.25)' : 'rgba(129,140,248,0.12)' }}>
                        <Check size={10} className="text-brand" />
                      </div>
                      <span className={highlight ? 'text-white/70' : 'text-white/40'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-8 pt-0">
                  <a href="#contact"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200"
                    style={highlight
                      ? { background: 'linear-gradient(135deg,#4F46E5,#7C3AED)', color: '#fff' }
                      : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {cta} <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.4 }}
          className="text-center text-white/25 text-sm mt-8">{p.footNote}</motion.p>
      </div>
    </section>
  )
}
