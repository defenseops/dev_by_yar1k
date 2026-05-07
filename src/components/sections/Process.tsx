'use client'

import { motion } from 'framer-motion'
import { FileText, Calculator, PenTool, Code2, TestTube2, Rocket } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const icons = [FileText, Calculator, PenTool, Code2, TestTube2, Rocket]
const colors = ['#818CF8', '#A78BFA', '#F472B6', '#FBBF24', '#34D399', '#60A5FA']

export default function Process() {
  const { tr } = useLang()
  const p = tr.process

  return (
    <section id="process" className="section relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="container relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="eyebrow mb-5">{p.eyebrow}</p>
          <h2 className="h2 text-white">{p.title}</h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {p.steps.map(({ title, desc, time }, i) => {
            const Icon = icons[i]
            const color = colors[i]
            const n = String(i + 1).padStart(2, '0')
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Card className={cn(
                  'flex flex-col h-full relative overflow-hidden cursor-default group',
                  'border-white/08 transition-all duration-300',
                  'hover:border-white/20 hover:shadow-xl hover:scale-[1.01]',
                )}
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  {/* top accent line on hover */}
                  <div
                    className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${color}, ${color}55)` }}
                  />

                  <CardHeader className="p-6 pb-3">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="p-2 w-fit rounded-xl transition-colors duration-200"
                        style={{ background: color + '18', border: `1px solid ${color}30` }}
                      >
                        <Icon className="h-5 w-5" style={{ color }} aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-bold" style={{ color: color + '55' }}>{n}</span>
                    </div>
                    <CardTitle className="text-base font-bold text-white group-hover:text-brand transition-colors duration-200">
                      {title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between gap-4">
                    <CardDescription className="text-white/40 text-sm leading-relaxed">
                      {desc}
                    </CardDescription>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                      <span className="text-xs font-medium" style={{ color }}>{time}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div>
            <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>{p.summaryLabel}</p>
            <p className="text-white text-3xl font-bold tracking-tight">{p.summaryValue}</p>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.25)' }}>{p.summarySub}</p>
          </div>
          <a href="#contact" className="btn-brand whitespace-nowrap">{p.summaryCta}</a>
        </motion.div>

      </div>
    </section>
  )
}
