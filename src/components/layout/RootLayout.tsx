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
      <body className="flex min-h-screen bg-[var(--background-color)]">
        <div className="flex-1 flex flex-col min-w-0 pr-20">
          <main className="flex-1 font-montserrat">
            {children}
          </main>

          <footer>
            <Footer />
          </footer>
        </div>

        <aside className="fixed right-0 top-0 h-screen flex items-center justify-center w-20">
          <VerticalNav />
        </aside>

        <Analytics />
      </body>
    </html>
  )
} 
