import React from 'react'
import { Hero } from '@/components/hero/Hero'
import { BlogPosts } from '@/components/cards/BlogPosts'

// Revalidate the homepage every hour to refresh blog listings
export const revalidate = 3600

export default function Home() {
  return (
    <div>
      <Hero />
      <BlogPosts />
    </div>
  )
}
