'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'

const stack = ['React','TypeScript','FastAPI','Python','PostgreSQL','Docker','Tailwind','Vite','Git','Figma']
const factColors = ['#4F46E5','#7C3AED','#EC4899','#10B981']

export default function About() {
  const { tr } = useLang()
  const a = tr.about
  return (
    <section id="about" className="section relative overflow-hidden" style={{ background:'#FFFFFF' }}>
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)', transform:'translate(-30%,-20%)' }} />
      <div className="container relative">
        <div className="grid lg:grid-cols-[1fr_480px] gap-20 items-center">
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <p className="eyebrow mb-5">{a.eyebrow}</p>
            <h2 className="h2 text-ink mb-6">{a.title}</h2>
            <p className="text-ink-3 leading-relaxed mb-4">{a.p1}</p>
            <p className="text-ink-3 leading-relaxed mb-10">{a.p2}</p>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-3 mb-4">{a.stackLabel}</p>
              <div className="flex flex-wrap gap-2">
                {stack.map(s => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-line bg-canvas text-ink-3 font-mono hover:border-brand hover:text-brand transition-colors duration-150 cursor-default">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}
            className="flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden border border-line" style={{ boxShadow:'0 8px 32px rgba(0,0,0,0.08)' }}>
              <img src="/photo.jpg"
                alt="Yaroslav Kulmatov" className="w-full aspect-[4/3] object-cover object-top" />
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 border border-line"
                style={{ boxShadow:'0 4px 12px rgba(0,0,0,0.1)' }}>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-ink text-xs font-semibold">{a.available}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {a.facts.map(({ n, label }, i) => (
                <div key={label} className="card p-5 cursor-default">
                  <div className="text-3xl font-bold tracking-tight mb-0.5" style={{ color: factColors[i] }}>{n}</div>
                  <div className="text-ink-3 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
