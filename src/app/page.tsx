import React from 'react'
import { Hero } from '@/components/hero/Hero'
import { BlogPosts } from '@/components/cards/BlogPosts'
import { REVALIDATE_INTERVAL } from '@/lib/constants'

// Revalidate the homepage every hour to refresh blog listings
export const revalidate = REVALIDATE_INTERVAL

export default function Home() {
  return (
    <div>
      <Hero />
      <BlogPosts />
    </div>
  )
}
