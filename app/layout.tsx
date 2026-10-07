import './beef3.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <title>Beef Casino официальный сайт — играть в Биф Казино онлайн, рабочее зеркало 2026!</title>
        <meta
          name="description"
          content="Beef Casino официальный сайт: лицензионные слоты, живые столы, быстрые выплаты. Простыми словами о том, как играть в Биф Казино онлайн, найти рабочее зеркало и активировать бонусы. Зеркало доступно 24/7."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beef3casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beef3casino.vercel.app/" />
        <meta property="og:site_name" content="Beef Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Beef Casino официальный сайт — играть в Биф Казино онлайн, рабочее зеркало 2026!" />
        <meta
          property="og:description"
          content="Beef Casino официальный сайт: лицензионные слоты, живые столы, быстрые выплаты. Простыми словами о том, как играть в Биф Казино онлайн, найти рабочее зеркало и активировать бонусы. Зеркало доступно 24/7."
        />
        <meta property="og:image" content="https://beef3casino.vercel.app/images/beef3-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beef Casino официальный сайт — играть в Биф Казино онлайн, рабочее зеркало 2026!" />
        <meta
          name="twitter:description"
          content="Beef Casino официальный сайт: лицензионные слоты, живые столы, быстрые выплаты. Простыми словами о том, как играть в Биф Казино онлайн, найти рабочее зеркало и активировать бонусы. Зеркало доступно 24/7."
        />
        <meta name="twitter:image" content="https://beef3casino.vercel.app/images/beef3-hero.jpg" />
        <meta name="theme-color" content="#0c3527" />
        {/* Слот для дополнительных пользовательских тегов */}
      </head>
      <body>{children}</body>
    </html>
  )
}
