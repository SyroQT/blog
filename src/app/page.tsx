import React from 'react'
import { Hero } from '@/components/hero/Hero'
import { BlogPosts } from '@/components/cards/BlogPosts'

export default function Home() {
  return (
    <div>
      <Hero />
      <BlogPosts />
    </div>
  )
}
