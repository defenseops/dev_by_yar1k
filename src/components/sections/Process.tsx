'use client'

import { motion } from 'framer-motion'
import { FileText, Calculator, PenTool, Code2, TestTube2, Rocket } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

const icons = [FileText, Calculator, PenTool, Code2, TestTube2, Rocket]
const colors = ['#4F46E5','#7C3AED','#EC4899','#F59E0B','#10B981','#3B82F6']

export default function Process() {
  const { tr } = useLang()
  const p = tr.process
  return (
    <section id="process" className="section relative overflow-hidden" style={{ background:'#FFFFFF' }}>
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="container relative">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
          className="max-w-xl mb-16">
          <p className="eyebrow mb-5">{p.eyebrow}</p>
          <h2 className="h2 text-ink">{p.title}</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.steps.map(({ title, desc, time }, i) => {
            const Icon = icons[i]
            const color = colors[i]
            const n = String(i + 1).padStart(2, '0')
            return (
              <motion.div key={title}
                initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-30px' }}
                transition={{ duration:0.5, delay: i * 0.07 }}
                className="group card p-7 relative overflow-hidden cursor-default">
                <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"
                  style={{ background:`linear-gradient(90deg, ${color}, ${color}88)` }} />
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background:color+'14' }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <span className="font-mono text-xs font-bold" style={{ color:color+'60' }}>{n}</span>
                </div>
                <h3 className="font-bold text-ink text-base mb-2 group-hover:text-brand transition-colors duration-200">{title}</h3>
                <p className="text-ink-3 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background:color }} />
                  <span className="text-xs font-medium" style={{ color }}>{time}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.3 }}
          className="mt-10 rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background:'#0A0A0A' }}>
          <div>
            <p className="text-sm mb-1" style={{ color:'rgba(255,255,255,0.4)' }}>{p.summaryLabel}</p>
            <p className="text-white text-3xl font-bold tracking-tight">{p.summaryValue}</p>
            <p className="text-xs mt-1" style={{ color:'rgba(255,255,255,0.3)' }}>{p.summarySub}</p>
          </div>
          <a href="#contact" className="btn-brand whitespace-nowrap">{p.summaryCta}</a>
        </motion.div>
      </div>
    </section>
  )
}
