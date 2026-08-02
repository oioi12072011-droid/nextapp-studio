import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NextApp Studio – Agência Digital Premium',
  description:
    'Criamos sites e experiências digitais de alto nível que transformam negócios. Design premium, desenvolvimento moderno e resultados reais.',
  keywords: ['agência digital', 'desenvolvimento web', 'design de sites', 'NextApp Studio'],
  openGraph: {
    title: 'NextApp Studio – Agência Digital Premium',
    description: 'Criamos sites que tornam negócios impossíveis de ignorar.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${plusJakarta.variable} antialiased font-sans`}>
        <div className="noise-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
