'use client'

import { motion } from 'framer-motion'
import { User, ListChecks, Globe } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

const icons = [User, ListChecks, Globe]
const colors = [{ c:'#4F46E5', bg:'rgba(79,70,229,0.08)' }, { c:'#059669', bg:'rgba(5,150,105,0.08)' }, { c:'#D97706', bg:'rgba(217,119,6,0.08)' }]

export default function Solution() {
  const { tr } = useLang()
  const s = tr.solution
  return (
    <section className="section relative overflow-hidden" style={{ background:'#F9FAFB' }}>
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-[400px_1fr] gap-20 items-start">
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
            className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5">{s.eyebrow}</p>
            <h2 className="h2 text-ink mb-6">{s.title}</h2>
            <p className="text-ink-3 leading-relaxed mb-8">{s.desc}</p>
            <div className="p-5 rounded-2xl" style={{ background:'rgba(79,70,229,0.05)', border:'1px solid rgba(79,70,229,0.1)', borderLeft:'4px solid #4F46E5' }}>
              <p className="text-ink-3 italic text-sm leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
              <p className="mt-3 text-xs font-semibold text-ink">{s.quoteAuthor}</p>
            </div>
          </motion.div>
          <div className="flex flex-col gap-5">
            {s.pillars.map(({ title, desc }, i) => {
              const Icon = icons[i]
              const { c, bg } = colors[i]
              return (
                <motion.div key={title}
                  initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-40px' }}
                  transition={{ duration:0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-3xl border border-line p-8 flex gap-6 items-start"
                  style={{ boxShadow:'0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)' }}
                  whileHover={{ y:-4 } as never}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5" style={{ background:bg }}>
                    <Icon size={22} style={{ color:c }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-lg mb-2 group-hover:text-brand transition-colors duration-200">{title}</h3>
                    <p className="text-ink-3 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
