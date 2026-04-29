'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-line">
      <button onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group">
        <span className="text-ink font-medium text-sm sm:text-base group-hover:text-brand transition-colors duration-150">{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration:0.2 }}
          className="w-7 h-7 rounded-full border border-line flex items-center justify-center shrink-0 group-hover:border-brand group-hover:text-brand transition-colors duration-150">
          <Plus size={14} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }}
            transition={{ duration:0.28, ease:'easeOut' }} className="overflow-hidden">
            <p className="text-ink-3 text-sm leading-relaxed pb-6 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { tr } = useLang()
  const f = tr.faq
  return (
    <section id="faq" className="section relative overflow-hidden" style={{ background:'#FFFFFF' }}>
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-[340px_1fr] gap-16 lg:gap-24">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
            className="lg:sticky lg:top-28 self-start">
            <p className="eyebrow mb-5">{f.eyebrow}</p>
            <h2 className="h2 text-ink mb-6">{f.title}</h2>
            <p className="text-ink-3 text-sm leading-relaxed mb-8">{f.desc}</p>
            <a href="#contact" className="btn-primary text-sm py-3 px-5">{f.askBtn}</a>
          </motion.div>
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.5, delay:0.1 }}>
            <div className="border-t border-line">
              {f.items.map(item => <Item key={item.q} {...item} />)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
