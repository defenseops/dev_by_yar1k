'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Zap } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

const marqueeItems = ['React','FastAPI','TypeScript','PostgreSQL','Docker','Tailwind CSS','Vercel','Figma','REST API','Git','React','FastAPI','TypeScript','PostgreSQL','Docker','Tailwind CSS','Vercel','Figma','REST API','Git']

export default function Hero() {
  const { tr } = useLang()
  const h = tr.hero
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white pt-16">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(79,70,229,0.09) 0%, transparent 70%)', transform:'translate(30%,-20%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', transform:'translate(-30%,20%)' }} />

      <div className="container relative flex-1 flex items-center py-16 lg:py-20">
        <div className="w-full grid lg:grid-cols-[1fr_460px] gap-16 items-center">
          <div>
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
              className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2 rounded-full px-4 py-1.5 border border-brand/20 bg-brand-dim">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-brand text-xs font-semibold">{h.badge}</span>
              </div>
              <div className="flex items-center gap-1.5 text-ink-3 text-xs">
                <Zap size={11} className="text-yellow-500" />
                <span>{h.badgeSub}</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.08 }}
              className="text-[clamp(3rem,7.5vw,5.5rem)] font-bold tracking-[-0.01em] leading-[1.04] mb-6"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              {h.h1_1}<br />
              <span className="text-gradient-brand">{h.h1_2}</span><br />
              <span className="text-ink-3 font-light italic">{h.h1_3}</span>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.18 }}
              className="text-ink-3 text-lg leading-relaxed max-w-lg mb-10">{h.desc}</motion.p>

            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.28 }}
              className="flex flex-wrap gap-3 mb-12">
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
                    className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                ))}
              </div>
              <div className="text-xs text-ink-3">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-1.5">{h.proof}</span>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9, delay:0.15 }}
            className="hidden lg:block relative">
            <div className="rounded-3xl overflow-hidden border border-line bg-white"
              style={{ boxShadow:'0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)' }}>
              <div className="bg-canvas border-b border-line px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 bg-white rounded-lg px-3 py-1 text-ink-3 text-xs font-mono border border-line">almadrive.kz</div>
                <ArrowUpRight size={13} className="text-ink-3" />
              </div>
              <div className="relative aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=85&auto=format"
                  alt="AlmaDrive" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/60"
                  style={{ boxShadow:'0 8px 24px rgba(0,0,0,0.12)' }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-ink text-sm">AlmaDrive</p>
                      <p className="text-ink-3 text-xs mt-0.5">Car rental · React + FastAPI</p>
                    </div>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 font-semibold">● Live</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut' }}
              className="absolute -top-6 -right-8 bg-white rounded-2xl border border-line px-5 py-3.5"
              style={{ boxShadow:'0 8px 32px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-1.5 mb-1">
                {[1,2,3,4,5].map(i=>(
                  <svg key={i} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <span className="text-ink text-xs font-bold ml-0.5">5.0</span>
              </div>
              <p className="text-ink text-xs font-semibold">{h.floatDelivered}</p>
              <p className="text-ink-3 text-[10px] mt-0.5">{h.floatUpwork}</p>
            </motion.div>

            <motion.div animate={{ y:[0,9,0] }} transition={{ duration:4.5, repeat:Infinity, ease:'easeInOut', delay:0.7 }}
              className="absolute -bottom-6 -left-8 rounded-2xl border border-white/10 px-5 py-3.5"
              style={{ background:'linear-gradient(135deg,#0A0A0A,#1A1A1A)', boxShadow:'0 12px 40px rgba(0,0,0,0.2)' }}>
              <p className="text-white/40 text-[10px] font-semibold mb-2 tracking-wider">{h.floatBuiltWith}</p>
              <div className="flex gap-2">
                {['React','FastAPI','TS','Docker'].map(tag=>(
                  <span key={tag} className="text-[10px] px-2 py-1 rounded-lg bg-white/10 text-white font-mono border border-white/10">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div animate={{ y:[0,-5,0] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut', delay:1.5 }}
              className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white rounded-2xl border border-line px-4 py-3"
              style={{ boxShadow:'0 8px 24px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background:'linear-gradient(135deg,#4F46E5,#7C3AED)' }}>
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <p className="text-ink text-xs font-bold leading-none">{h.floatDeployed}</p>
                  <p className="text-ink-3 text-[10px] mt-0.5">{h.floatDeployedSub}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}
        className="border-t border-line bg-canvas">
        <div className="container">
          <div className="grid grid-cols-3 divide-x divide-line">
            {[
              { n: h.stat1n, label: h.stat1l },
              { n: h.stat2n, label: h.stat2l },
              { n: h.stat3n, label: h.stat3l },
            ].map(({ n, label }) => (
              <div key={label} className="py-6 px-4 lg:px-10 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-ink tracking-tight">{n}</div>
                <div className="text-ink-3 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="overflow-hidden py-3.5" style={{ background:'#0A0A0A' }}>
        <motion.div animate={{ x:['0%','-50%'] }} transition={{ duration:28, repeat:Infinity, ease:'linear' }}
          className="flex whitespace-nowrap">
          {marqueeItems.map((item,i) => (
            <span key={i} className="text-white/25 text-xs font-semibold tracking-widest uppercase shrink-0 px-6">
              {item} <span className="text-brand/40 ml-5">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
