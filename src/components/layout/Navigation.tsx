import React from 'react'
import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/">Blog</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hover:text-primary">
              <Link href="/blog">Blog</Link>
            </div>
            <div className="hover:text-primary">
              <Link href="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 