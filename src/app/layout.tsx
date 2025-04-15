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
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen">
        <VerticalNav />
        <main className="flex-1 p-4">
          {children}
        </main>
      </body>
    </html>
  )
}