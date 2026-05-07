'use client'

import { motion, Variants } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'

const item: Variants = { hidden:{ opacity:0, y:28 }, visible:{ opacity:1, y:0, transition:{ duration:0.5 } } }

export default function Problems() {
  const { tr } = useLang()
  const p = tr.problems
  return (
    <section className="section relative overflow-hidden" style={{ background:'#111111' }}>
      <div className="absolute inset-0 dot-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)', transform:'translate(30%,-30%)' }} />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}>
            <p className="eyebrow mb-5">{p.eyebrow}</p>
            <h2 className="h2 text-white leading-tight">{p.title}</h2>
          </motion.div>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55, delay:0.1 }}
            className="flex items-end">
            <p className="text-lg leading-relaxed text-white/40">{p.desc}</p>
          </motion.div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-40px' }}
          variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.08 } } }}
          className="grid sm:grid-cols-2 gap-4">
          {p.items.map(({ num, title, body, emoji }) => (
            <motion.div key={num} variants={item}
              className="group relative rounded-3xl p-8 overflow-hidden border cursor-default"
              style={{ background:'rgba(255,255,255,0.03)', borderColor:'rgba(255,255,255,0.07)' }}
              whileHover={{ scale:1.02 }}>
              <div className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"
                style={{ background:'linear-gradient(90deg, #818CF8, #A78BFA)' }} />
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-xs text-white/20">{num}</span>
                <span className="text-2xl">{emoji}</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-brand transition-colors duration-200">{title}</h3>
              <p className="text-sm leading-relaxed text-white/40">{body}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.35 }}
          className="mt-14 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background:'rgba(255,255,255,0.06)' }} />
          <a href="#process" className="flex items-center gap-2 text-sm transition-colors duration-200 text-white/30 hover:text-brand">
            {p.bridge} <span className="text-brand">→</span>
          </a>
          <div className="h-px flex-1" style={{ background:'rgba(255,255,255,0.06)' }} />
        </motion.div>
      </div>
    </section>
  )
}
