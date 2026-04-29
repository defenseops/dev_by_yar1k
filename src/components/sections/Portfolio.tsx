'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

const projects = [
  {
    url: 'https://almadrive.kz/ru',
    image: '/proj-almadrive.jpg',
    stack: ['React','FastAPI','PostgreSQL','Docker'],
    year: '2024',
    color: '#4F46E5',
  },
  {
    url: 'https://brewed-coffee-ten.vercel.app/',
    image: '/proj-coffee.jpg',
    stack: ['React','Tailwind','Vercel'],
    year: '2024',
    color: '#92400E',
  },
  {
    url: 'https://lore-shop-eta.vercel.app/',
    image: '/proj-lore.jpg',
    stack: ['React','TypeScript','Tailwind','Vercel'],
    year: '2024',
    color: '#10B981',
  },
  {
    url: 'https://din-aleksndr.kz/',
    image: '/proj-din.jpg',
    stack: ['React','Framer Motion','Vercel'],
    year: '2025',
    color: '#F59E0B',
  },
]

export default function Portfolio() {
  const { tr } = useLang()
  const p = tr.portfolio
  return (
    <section id="portfolio" className="section relative overflow-hidden" style={{ background:'#F9FAFB' }}>
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}>
            <p className="eyebrow mb-4">{p.eyebrow}</p>
            <h2 className="h2 text-ink">{p.title}</h2>
          </motion.div>
          <motion.a href="#contact" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
            transition={{ duration:0.4, delay:0.2 }}
            className="btn-outline self-start sm:self-auto text-sm whitespace-nowrap">
            {p.ctaTop}
          </motion.a>
        </div>

        <div className="flex flex-col gap-6">
          {p.cases.map(({ title, category, desc, result }, i) => {
            const proj = projects[i]
            return (
            <motion.div key={title}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-60px' }}
              transition={{ duration:0.55, delay: i * 0.08 }}
              className="group card overflow-hidden"
              whileHover={{ y:-2 } as never}>
              <div className={`grid ${i % 2 === 1 ? 'lg:grid-cols-[1fr_480px]' : 'lg:grid-cols-[480px_1fr]'}`}>
                <div className={`relative overflow-hidden bg-canvas ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={proj.image} alt={title} loading="lazy"
                    className="w-full h-56 lg:h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-5 left-5 text-xs font-mono font-bold text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {proj.year}
                  </span>
                  <div className="absolute bottom-5 left-5 w-2 h-2 rounded-full animate-pulse" style={{ background: proj.color }} />
                </div>
                <div className={`p-8 lg:p-12 flex flex-col justify-between ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="eyebrow text-ink-3">{category}</span>
                      <a href={proj.url} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-3 hover:bg-ink hover:text-white hover:border-ink transition-all duration-200">
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-ink mb-4 group-hover:text-brand transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="text-ink-3 text-sm leading-relaxed mb-6">{desc}</p>
                    <div className="flex items-start gap-3 rounded-2xl p-4 mb-8 border"
                      style={{ background: proj.color + '08', borderColor: proj.color + '20' }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: proj.color }} />
                      <p className="text-ink text-sm font-medium">{result}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {proj.stack.map(s => (
                      <span key={s} className="text-xs px-3 py-1 rounded-full bg-canvas border border-line text-ink-3 font-mono">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.25 }}
          className="text-center mt-14">
          <p className="text-ink-3 mb-5 text-sm">{p.ctaBottomSub}</p>
          <a href="#contact" className="btn-primary">{p.ctaBottom} <ArrowRight size={17} /></a>
        </motion.div>
      </div>
    </section>
  )
}
