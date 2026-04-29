'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Send, MessageCircle, CheckCircle2 } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

export default function ContactForm() {
  const { tr } = useLang()
  const c = tr.contact
  const [form, setForm] = useState({ name:'', contact:'', budget:'', message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setSent(true)
    setLoading(false)
  }

  const contacts = [
    { icon: Mail,          label: 'kulmatovyaroslav@gmail.com', href: 'mailto:kulmatovyaroslav@gmail.com', color:'#4F46E5' },
    { icon: Send,          label: '@dev_by_yar1k в Telegram',  href: 'https://t.me/dev_by_yar1k',         color:'#06B6D4' },
    { icon: MessageCircle, label: '+7 702 795 51 31 (WhatsApp)', href: 'https://wa.me/77027955131',         color:'#10B981' },
  ]

  return (
    <section id="contact" className="section relative overflow-hidden" style={{ background:'#F9FAFB' }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-80 pointer-events-none"
        style={{ background:'radial-gradient(ellipse, rgba(79,70,229,0.07) 0%, transparent 70%)' }} />
      <div className="container relative">
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 lg:gap-24">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}>
            <p className="eyebrow mb-5">{c.eyebrow}</p>
            <h2 className="h2 text-ink mb-6">{c.title}</h2>
            <p className="text-ink-3 leading-relaxed mb-10">{c.desc}</p>
            <div className="flex flex-col gap-3 mb-10">
              {contacts.map(({ icon: Icon, label, href, color }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-ink-3 hover:text-ink transition-colors">
                  <div className="w-10 h-10 rounded-xl border border-line bg-white flex items-center justify-center"
                    style={{ boxShadow:'0 1px 4px rgba(0,0,0,0.06)' }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-line p-5" style={{ boxShadow:'0 1px 4px rgba(0,0,0,0.05)' }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-ink text-sm font-semibold">{c.available}</span>
              </div>
              <p className="text-ink-3 text-xs">{c.availableSub}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.6, delay:0.1 }}>
            <div className="bg-white rounded-3xl border border-line p-8 lg:p-10"
              style={{ boxShadow:'0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)' }}>
              {sent ? (
                <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
                  className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background:'rgba(79,70,229,0.1)' }}>
                    <CheckCircle2 size={32} className="text-brand" />
                  </div>
                  <h3 className="text-ink font-bold text-xl mb-2">{c.successTitle}</h3>
                  <p className="text-ink-3 text-sm">{c.successDesc}</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-5">
                  <div>
                    <label className="text-ink text-sm font-medium block mb-2">{c.nameLbl}</label>
                    <input type="text" required placeholder={c.namePh}
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-canvas border border-line rounded-2xl px-4 py-3 text-ink text-sm focus:outline-none focus:border-brand transition-colors placeholder:text-ink-3/50" />
                  </div>
                  <div>
                    <label className="text-ink text-sm font-medium block mb-2">{c.contactLbl}</label>
                    <input type="text" required placeholder={c.contactPh}
                      value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })}
                      className="w-full bg-canvas border border-line rounded-2xl px-4 py-3 text-ink text-sm focus:outline-none focus:border-brand transition-colors placeholder:text-ink-3/50" />
                  </div>
                  <div>
                    <label className="text-ink text-sm font-medium block mb-3">{c.budgetLbl}</label>
                    <div className="flex flex-wrap gap-2">
                      {c.budgets.map(b => (
                        <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })}
                          className="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150"
                          style={form.budget === b
                            ? { background:'#0A0A0A', borderColor:'#0A0A0A', color:'#fff' }
                            : { background:'transparent', borderColor:'#E5E7EB', color:'#6B7280' }}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-ink text-sm font-medium block mb-2">{c.messageLbl}</label>
                    <textarea required rows={4} placeholder={c.messagePh}
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-canvas border border-line rounded-2xl px-4 py-3 text-ink text-sm focus:outline-none focus:border-brand transition-colors resize-none placeholder:text-ink-3/50" />
                  </div>
                  <motion.button type="submit" whileHover={{ scale:1.01 }} whileTap={{ scale:0.99 }}
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        {c.sending}
                      </span>
                    ) : (
                      <>{c.send} <ArrowRight size={16} /></>
                    )}
                  </motion.button>
                  <p className="text-ink-3 text-xs text-center">{c.spam}</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
