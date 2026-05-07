'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Zap } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'
import GlassTunnel3D from '@/components/ui/liquid-glass-boxes'

const marqueeItems = ['React','FastAPI','TypeScript','PostgreSQL','Docker','Tailwind CSS','Vercel','Figma','REST API','Git','React','FastAPI','TypeScript','PostgreSQL','Docker','Tailwind CSS','Vercel','Figma','REST API','Git']

export default function Hero() {
  const { tr } = useLang()
  const h = tr.hero
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0A0A] pt-16">
      {/* Glass tunnel — только правая половина */}
      <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none hidden lg:block">
        <GlassTunnel3D
          boxCount={3}
          circleCount={4}
          animationDuration={5}
          boxWidth={420}
          boxHeight={320}
          boxDepth={10}
          holeSize={38}
          circleSize={130}
          perspectiveOrigin="50% 51%"
        />
      </div>

      <div className="container relative flex-1 grid lg:grid-cols-2 items-center gap-0 py-16 lg:py-20 z-10">
        {/* Левая колонка — текст */}
        <div className="flex flex-col justify-center pr-8">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-2 rounded-full px-4 py-1.5 border border-brand/30 bg-brand-dim">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-brand text-xs font-semibold">{h.badge}</span>
            </div>
            <div className="flex items-center gap-1.5 text-ink-3 text-xs">
              <Zap size={11} className="text-yellow-400" />
              <span>{h.badgeSub}</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.08 }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.01em] leading-[1.04] mb-6"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            {h.h1_1}<br />
            <span className="text-gradient-brand">{h.h1_2}</span><br />
            <span className="text-white/30 font-light italic">{h.h1_3}</span>
          </motion.h1>

          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.18 }}
            className="text-white/55 text-base leading-relaxed mb-10">{h.desc}</motion.p>

          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.28 }}
            className="flex flex-wrap gap-3 mb-10">
            <motion.a href="#contact" className="btn-primary" whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}>
              {h.cta1} <ArrowRight size={17} />
            </motion.a>
            <motion.a href="#portfolio" className="btn-outline" whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}>
              {h.cta2}
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
            className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {['photo-1500648767791-00dcc994a43e','photo-1494790108377-be9c29b29330','photo-1472099645785-5658abf4ff4e'].map((id,i) => (
                <img key={i} src={`https://images.unsplash.com/${id}?w=48&h=48&q=80&auto=format&fit=crop&crop=face`}
                  className="w-8 h-8 rounded-full border-2 border-white/10 object-cover" alt="" />
              ))}
            </div>
            <div className="text-xs text-white/40">
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-1.5">{h.proof}</span>
            </div>
          </motion.div>
        </div>

        {/* Правая колонка — пустая, анимация видна через фон */}
        <div className="hidden lg:block" />
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}
        className="relative z-10 border-t border-white/08" style={{ background: 'rgba(10,10,10,0.7)', backdropFilter: 'blur(12px)' }}>
        <div className="container">
          <div className="grid grid-cols-3 divide-x divide-white/08">
            {[
              { n: h.stat1n, label: h.stat1l },
              { n: h.stat2n, label: h.stat2l },
              { n: h.stat3n, label: h.stat3l },
            ].map(({ n, label }) => (
              <div key={label} className="py-6 px-4 lg:px-10 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{n}</div>
                <div className="text-white/35 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 overflow-hidden py-3.5" style={{ background:'rgba(10,10,10,0.9)', backdropFilter:'blur(8px)', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <motion.div animate={{ x:['0%','-50%'] }} transition={{ duration:28, repeat:Infinity, ease:'linear' }}
          className="flex whitespace-nowrap">
          {marqueeItems.map((item,i) => (
            <span key={i} className="text-white/20 text-xs font-semibold tracking-widest uppercase shrink-0 px-6">
              {item} <span className="text-brand/30 ml-5">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
