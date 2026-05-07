'use client'

import { motion } from 'framer-motion'
import { User, ListChecks, Globe } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

const icons = [User, ListChecks, Globe]
const colors = [
  { c:'#818CF8', bg:'rgba(129,140,248,0.1)' },
  { c:'#34D399', bg:'rgba(52,211,153,0.1)' },
  { c:'#FBBF24', bg:'rgba(251,191,36,0.1)' }
]

export default function Solution() {
  const { tr } = useLang()
  const s = tr.solution
  return (
    <section className="section relative overflow-hidden" style={{ background:'#111111' }}>
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-[400px_1fr] gap-20 items-start">
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
            className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5">{s.eyebrow}</p>
            <h2 className="h2 text-white mb-6">{s.title}</h2>
            <p className="text-white/45 leading-relaxed mb-8">{s.desc}</p>
            <div className="p-5 rounded-2xl" style={{ background:'rgba(129,140,248,0.06)', border:'1px solid rgba(129,140,248,0.15)', borderLeft:'4px solid #818CF8' }}>
              <p className="text-white/50 italic text-sm leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
              <p className="mt-3 text-xs font-semibold text-white/70">{s.quoteAuthor}</p>
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
                  className="group card p-8 flex gap-6 items-start"
                  whileHover={{ y:-4 } as never}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5" style={{ background:bg }}>
                    <Icon size={22} style={{ color:c }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2 group-hover:text-brand transition-colors duration-200">{title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
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
