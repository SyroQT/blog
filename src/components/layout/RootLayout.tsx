import { Courier_Prime, Roboto, Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import VerticalNav from '@/components/layout/VerticalNav'
import Footer from '@/components/layout/Footer'

// Font configurations
const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier-prime',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${courierPrime.variable} ${inter.variable} ${roboto.variable} ${montserrat.variable}`}>
      <body className="grid min-h-screen grid-cols-[1fr_auto] grid-rows-[1fr_auto] gap-2">
        <main className="col-span-1 font-montserrat">
          {children}
        </main>

        <aside className="sticky top-0 self-start h-screen flex items-center justify-center col-start-2 row-span-2">
          <VerticalNav />
        </aside>

        <footer className="col-span-1 col-start-1">
          <Footer />
        </footer>
        <Analytics />
      </body>
    </html>
  )
} 
