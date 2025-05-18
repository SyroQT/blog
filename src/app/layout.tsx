import '@/styles/globals.css'
import { RootLayout } from '@/components/layout/RootLayout'

export const metadata = {
  title: 'Personal Blog',
  description: 'A place to share thoughts and experiences',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayout>{children}</RootLayout>
}


