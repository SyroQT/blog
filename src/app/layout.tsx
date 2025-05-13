import '@/styles/globals.css'
import { Courier_Prime, Roboto, Inter } from 'next/font/google'
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
    <html lang="en" className={`${courierPrime.variable} ${inter.variable} ${roboto.variable}`}>
      <body className="grid grid-cols-13 min-h-screen ">
        <main className="col-span-12 p-4">
          {children}
        </main>
        <div className="col-start-auto col-end-[-1] min-h-screen">
          <VerticalNav />
        </div>
      </body>
    </html>
  )
}