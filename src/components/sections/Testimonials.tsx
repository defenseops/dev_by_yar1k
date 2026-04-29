'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

const avatars = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&auto=format&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format&fit=crop&crop=face',
]

export default function Testimonials() {
  const { tr } = useLang()
  const t = tr.testimonials
  return (
    <section className="section relative overflow-hidden" style={{ background:'#F9FAFB' }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}>
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 className="h2 text-ink">{t.title}</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {t.reviews.map(({ name, role, flag, project, text }, i) => (
            <motion.div key={name}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-30px' }}
              transition={{ duration:0.5, delay: i * 0.1 }}
              className="group card p-7 flex flex-col relative overflow-hidden"
              whileHover={{ y:-4 } as never}>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background:'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)', transform:'translate(30%,-30%)' }} />
              <Quote size={28} className="text-brand/20 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array(5).fill(0).map((_,j) => <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-ink-3 text-sm leading-relaxed flex-1 mb-6">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-line">
                <img src={avatars[i]} alt={name} loading="lazy"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-ink font-semibold text-sm">{name}</p>
                    <span className="text-base">{flag}</span>
                  </div>
                  <p className="text-ink-3 text-xs truncate">{role}</p>
                </div>
                <span className="text-[10px] text-ink-3 bg-canvas border border-line rounded-full px-2.5 py-1 font-medium whitespace-nowrap shrink-0">
                  {project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
