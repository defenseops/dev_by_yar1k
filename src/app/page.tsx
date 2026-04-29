import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import Solution from '@/components/sections/Solution'
import Process from '@/components/sections/Process'
import Portfolio from '@/components/sections/Portfolio'
import Deliverables from '@/components/sections/Deliverables'
import Pricing from '@/components/sections/Pricing'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://yaroslav.dev/#person',
      name: 'Yaroslav Kulmatov',
      alternateName: 'Ярослав Кулматов',
      jobTitle: 'Fullstack Web Developer',
      description: 'Freelance fullstack web developer in Almaty, Kazakhstan. Specializes in React, FastAPI, TypeScript. 4+ years on Upwork, 20+ projects delivered.',
      url: 'https://yaroslav.dev',
      email: 'kulmatovyaroslav@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Алматы',
        addressRegion: 'Алматинская область',
        addressCountry: 'KZ',
      },
      knowsAbout: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Web Development', 'Frontend Development', 'Backend Development'],
      sameAs: ['https://www.upwork.com', 'https://github.com', 'https://t.me/dev_by_yar1k'],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://yaroslav.dev/#business',
      name: 'Ярослав Кулматов — Разработка сайтов Алматы',
      description: 'Создание сайтов в Алматы под ключ. Лендинги, бизнес-сайты, интернет-магазины. Дизайн + фронтенд + бэкенд + деплой — один разработчик.',
      url: 'https://yaroslav.dev',
      telephone: '+77000000000',
      email: 'kulmatovyaroslav@gmail.com',
      priceRange: '$800 - $5000+',
      currenciesAccepted: 'USD, KZT',
      paymentAccepted: 'Upwork, Wise, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '',
        addressLocality: 'Алматы',
        addressRegion: 'Алматинская область',
        postalCode: '050000',
        addressCountry: 'KZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.238949,
        longitude: 76.889709,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      areaServed: [
        { '@type': 'City', name: 'Алматы' },
        { '@type': 'Country', name: 'Казахстан' },
        { '@type': 'Country', name: 'Россия' },
        { '@type': 'Country', name: 'США' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Услуги по разработке сайтов',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Создание лендинга в Алматы',
            description: 'Разработка одностраничного лендинга под ключ. Адаптивный дизайн, форма захвата лидов, SSL, хостинг.',
            price: '800',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Разработка бизнес-сайта в Алматы',
            description: 'Многостраничный сайт с каталогом, бэкенд-логикой и интеграциями. React + FastAPI + PostgreSQL.',
            price: '1800',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Разработка веб-приложения (MVP)',
            description: 'Сложный продукт с платёжными системами, API-интеграциями, CI/CD.',
            price: '3000',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '20',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://yaroslav.dev/#website',
      url: 'https://yaroslav.dev',
      name: 'Ярослав Кулматов — Разработка сайтов Алматы',
      description: 'Создание сайтов в Алматы под ключ. Лендинги, бизнес-сайты, интернет-магазины.',
      inLanguage: ['ru-KZ', 'en-US'],
      publisher: { '@id': 'https://yaroslav.dev/#person' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Сколько стоит создание сайта в Алматы?', acceptedAnswer: { '@type': 'Answer', text: 'Лендинг — от $800, многостраничный бизнес-сайт — от $1 800. Точная цена — после брифа. Скрытых платежей нет.' } },
        { '@type': 'Question', name: 'Сколько времени занимает разработка сайта?', acceptedAnswer: { '@type': 'Answer', text: 'Лендинг: 1–2 недели. Полный бизнес-сайт: 3–4 недели. Сложные проекты с бэкендом: до 8 недель.' } },
        { '@type': 'Question', name: 'Как заказать сайт в Алматы?', acceptedAnswer: { '@type': 'Answer', text: 'Заполните форму на сайте или напишите на kulmatovyaroslav@gmail.com. Отвечаю в течение 24 часов и обсуждаем детали проекта.' } },
        { '@type': 'Question', name: 'Работаете ли вы с клиентами не из Казахстана?', acceptedAnswer: { '@type': 'Answer', text: 'Да. Клиенты из США, Германии и других стран. 100% удалённо. Оплата через Upwork, Wise или банковский перевод.' } },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Process />
        <Portfolio />
        <Deliverables />
        <Pricing />
        <About />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
