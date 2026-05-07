'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { useLang } from '@/i18n/LanguageContext';
import { Lang } from '@/i18n/translations';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const langs: Lang[] = ['ru', 'en'];
  const activeIndex = langs.indexOf(lang);

  return (
    <div
      className="relative flex items-center p-0.5 rounded-full"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      {/* sliding pill */}
      <motion.div
        className="absolute top-0.5 bottom-0.5 rounded-full"
        style={{ background: 'rgba(255,255,255,0.92)', width: '50%' }}
        animate={{ x: activeIndex === 0 ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.6 }}
      />

      {langs.map((l, i) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="relative z-10 w-9 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors duration-200"
          style={{ color: lang === l ? '#0A0A0A' : 'rgba(255,255,255,0.38)' }}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { lang, setLang, tr } = useLang();
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    { label: tr.nav.process, href: '#process' },
    { label: tr.nav.work,    href: '#portfolio' },
    { label: tr.nav.pricing, href: '#pricing' },
    { label: tr.nav.about,   href: '#about' },
    { label: tr.nav.faq,     href: '#faq' },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled && !open
          ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-xl border-b border-white/06'
          : 'bg-transparent',
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <span className="text-white text-xs font-bold">D</span>
          </div>
          <span className="font-semibold text-white tracking-tight">dev.by.yar1k</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-white/45 hover:text-white transition-colors duration-150">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LangSwitcher lang={lang} setLang={setLang} />
          <a href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full border border-white/10 hover:border-white/25"
            style={{ background: 'rgba(255,255,255,0.05)' }}>
            {tr.nav.cta} <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <LangSwitcher lang={lang} setLang={setLang} />
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        'fixed top-16 right-0 bottom-0 left-0 z-50 md:hidden flex flex-col',
        open ? 'block' : 'hidden',
      )}
        style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className="data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out flex h-full w-full flex-col justify-between gap-y-2 p-6"
        >
          <nav className="flex flex-col gap-1 mt-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-white/80 py-3 hover:text-white transition-colors"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 py-4 rounded-2xl text-base font-semibold text-[#0A0A0A] bg-white hover:bg-white/90 transition-colors">
            {tr.nav.cta} <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
