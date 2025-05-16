import '@/styles/globals.css'
import { Courier_Prime, Roboto, Inter, Montserrat } from 'next/font/google'
import VerticalNav from '@/components/layout/VerticalNav'

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


// TODO: refactor to root Layout
export const metadata = {
  title: 'Personal Blog',
  description: 'A place to share thoughts and experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${courierPrime.variable} ${inter.variable} ${roboto.variable} ${montserrat.variable}`}>
      <body className="grid grid h-screen grid-cols-[1fr_auto] grid-rows-[2fr_1fr] gap-2">

        <main className="col-span-1 font-montserrat">
          {children}
        </main>

        <aside className="sticky top-0 self-start h-screen flex items-center justify-center col-start-2">
          <VerticalNav />
        </aside>


      </body>
    </html>
  )
}


