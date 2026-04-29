'use client'

import { motion } from 'framer-motion'
import { Smartphone, Zap, ShieldCheck, KeyRound, Headphones, GitBranch } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

const icons = [Smartphone, Zap, ShieldCheck, KeyRound, Headphones, GitBranch]
const colors = ['#4F46E5','#F59E0B','#10B981','#EC4899','#7C3AED','#3B82F6']

export default function Deliverables() {
  const { tr } = useLang()
  const d = tr.deliverables
  return (
    <section className="section relative overflow-hidden" style={{ background:'#F9FAFB' }}>
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)', transform:'translate(20%,20%)' }} />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 mb-14">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}>
            <p className="eyebrow mb-5">{d.eyebrow}</p>
            <h2 className="h2 text-ink whitespace-pre-line">{d.title}</h2>
          </motion.div>
          <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.5, delay:0.1 }}
            className="text-ink-3 leading-relaxed self-end text-lg">{d.desc}</motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.items.map(({ title, body }, i) => {
            const Icon = icons[i]
            const color = colors[i]
            return (
              <motion.div key={title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-30px' }}
                transition={{ duration:0.45, delay: i * 0.07 }}
                className="group card p-7"
                whileHover={{ y:-4 } as never}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ background: color + '12' }}>
                  <Icon size={22} style={{ color }} className="group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="font-bold text-ink mb-2 group-hover:text-brand transition-colors duration-200">{title}</h3>
                <p className="text-ink-3 text-sm leading-relaxed">{body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
