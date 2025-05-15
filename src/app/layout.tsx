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
      <body className="grid grid h-screen grid-cols-[1fr_auto] grid-rows-[2fr_1fr] gap-2">

        <main className="col-span-1">
          {children}
        </main>

        <aside className="row-span-2 col-start-2 flex items-center justify-around">
          <VerticalNav />
        </aside>

      </body>
    </html>
  )
}

{/* <div class="ml-1 grid h-screen grid-cols-[1fr_auto] grid-rows-[2fr_1fr] gap-2">
  <!-- Left tall column (2/3 of height) -->
  <div class="bg-red-200 p-4 row-span-1 col-span-1">
    Column 1 (2/3 height)
  </div>

  <!-- Right column (auto width, full height) -->
  <div class="bg-green-200 p-4 row-span-2 col-start-2">
    Right column (auto width, full height)
  </div>

  <!-- Left bottom row (1/3 height) -->
  <div class="bg-blue-200 p-4 row-start-2 col-start-1">
    Bottom left (1/3 height)
  </div>
</div> */}

