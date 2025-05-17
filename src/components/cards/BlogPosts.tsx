'use client'
import { useEffect, useState } from 'react'
import { BlogPostCard } from './BlogPostCard'
import { fetchBlogs, BlogPost } from '@/lib/firebase/blogs'


export function BlogPosts() {
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadBlogs() {
            try {
                const fetchedBlogs = await fetchBlogs()
                setBlogs(fetchedBlogs)
            } catch (err) {
                setError('Failed to load blogs')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        loadBlogs()
    }, [])


    if (loading) {
        return <div>Loading blogs...</div>
    }

    if (error) {
        return <div className="text-red-500">{error}</div>
    }
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
                <BlogPostCard
                    key={blog.id}
                    post={blog}
                    isLeft={index % 2 === 0}
                />
            ))}
        </section>
    )
} 