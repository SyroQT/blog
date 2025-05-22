import '@/styles/globals.css'
import { RootLayout } from '@/components/layout/RootLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Titas Janusonis',
    template: '%s | Personal Blog'
  },
  description: 'Vieta Pamąstymams',
  icons: {
    icon: '/favicon.ico', // Add your favicon.ico to the public folder
    apple: '/apple-icon.png', // Add your apple icon to the public folder
  },
  manifest: '/site.webmanifest', // Add your web manifest file to the public folder
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-blog-url.com',
    siteName: 'Personal Blog',
    title: 'Personal Blog',
    description: 'A place to share thoughts and experiences',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image to the public folder
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
    images: ['/og-image.jpg'], // Same image as OpenGraph
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
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


