import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/i18n/LanguageContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap', variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'], display: 'swap', variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://yaroslav.dev'),
  title: {
    default: 'Создание сайтов в Алматы — Ярослав Кулматов | Разработка под ключ',
    template: '%s | Ярослав Кулматов — Разработка сайтов Алматы',
  },
  description:
    'Заказать сайт в Алматы — разработка под ключ. Лендинги, бизнес-сайты, интернет-магазины. Дизайн + фронтенд + бэкенд + деплой — один разработчик. Срок 1–4 недели. 20+ проектов, 100% успешных.',
  keywords: [
    'создание сайта Алматы',
    'разработка сайта Алматы',
    'заказать сайт Алматы',
    'сделать сайт Алматы',
    'разработка сайтов Алматы',
    'создание сайтов Алматы',
    'веб разработчик Алматы',
    'фриланс разработчик Алматы',
    'веб студия Алматы',
    'лендинг Алматы',
    'сайт под ключ Алматы',
    'сайт для бизнеса Алматы',
    'создание интернет магазина Алматы',
    'разработка лендинга Алматы',
    'программист фриланс Алматы',
    'React разработчик Алматы',
    'fullstack разработчик Алматы',
    'website development Almaty',
    'web developer Almaty',
    'hire web developer Almaty',
    'freelance developer Almaty',
    'create website Almaty',
    'web design Almaty',
    'landing page Almaty',
    'Yaroslav Kulmatov',
    'Ярослав Кулматов',
  ],
  authors: [{ name: 'Yaroslav Kulmatov' }],
  creator: 'Yaroslav Kulmatov',
  publisher: 'Yaroslav Kulmatov',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    alternateLocale: 'en_US',
    url: 'https://yaroslav.dev',
    siteName: 'Ярослав Кулматов — Разработка сайтов Алматы',
    title: 'Создание сайтов в Алматы — от 800$ под ключ | Ярослав Кулматов',
    description:
      'Заказать сайт в Алматы. Лендинги, бизнес-сайты, интернет-магазины. Разработка под ключ: дизайн + фронтенд + бэкенд + деплой. Срок 1–4 недели. 100% успешных проектов.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ярослав Кулматов — Разработка сайтов в Алматы под ключ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Создание сайтов в Алматы — Ярослав Кулматов',
    description: 'Разработка сайтов под ключ в Алматы. Лендинги, бизнес-сайты, интернет-магазины. Срок 1–4 недели.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://yaroslav.dev',
    languages: {
      'ru-KZ': 'https://yaroslav.dev',
      'en-US': 'https://yaroslav.dev/en',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="KZ-ALA" />
        <meta name="geo.placename" content="Алматы" />
        <meta name="geo.position" content="43.238949;76.889709" />
        <meta name="ICBM" content="43.238949, 76.889709" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
