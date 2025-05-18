import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchBlogById } from '@/lib/firebase/blogs'
import { Article } from '@/components/blog/Article'

interface PageProps {
    params: {
        slug: string
    }
}
export default async function BlogPostPage({ params }: PageProps) {
    try {
        // Fetch the blog post using the ID from the URL
        console.log('params', params)
        const post = await fetchBlogById(params.slug)
        // const p = await params

        // If no post is found, show 404
        if (!post) {
            notFound()
        }

        // return <p>{post.content}</p>
        return <Article post={post} />
    } catch (error) {
        console.error('Error fetching blog post:', error)
        notFound()
    }
} 