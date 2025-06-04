import '@/styles/globals.css'
import { RootLayout } from '@/components/layout/RootLayout'
import { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Titas Janusonis',
    template: '%s | Personal Blog'
  },
  description: 'Vieta Pamąstymams',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Titas Janusonis Blog',
    title: 'Titas Blog',
    description: 'Vieta Pamąstymams',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Personal Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Blog',
    description: 'A place to share thoughts and experiences',
    images: ['/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayout>{children}</RootLayout>
}
