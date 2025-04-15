import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import VerticalNav from '@/components/layout/VerticalNav'
const inter = Inter({ subsets: ['latin'] })

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
      <body>
        <VerticalNav />
        <main>{children}</main>
      </body>
    </html>
  )
}
