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
      <body className="flex min-h-screen">
        <VerticalNav />
        <main className="flex-1 p-4">
          {children}
        </main>
      </body>
    </html>
  )
}