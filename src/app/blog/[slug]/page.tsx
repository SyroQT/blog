import { notFound } from 'next/navigation'
import { fetchBlogById } from '@/lib/firebase/blogs'
import { Article } from '@/components/blog/Article'
import { Metadata } from 'next'

interface PageProps {
    params: {
        slug: string
    }
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await fetchBlogById(params.slug)

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.'
        }
    }

    return {
        title: post.title,
        description: post.description || 'A blog post by Titas',
        openGraph: {
            title: post.title,
            description: post.description || 'A blog post by Titas',
            images: [post.imageUrl || ''],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description || 'A blog post by Titas',
            images: [post.imageUrl || ''],
        }
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    try {
        // Fetch the blog post using the ID from the URL
        const post = await fetchBlogById(params.slug)

        // If no post is found, show 404
        if (!post) {
            notFound()
        }

        return <Article post={post} />
    } catch (error) {
        console.error('Error fetching blog post:', error)
        notFound()
    }
} 