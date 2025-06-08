import { notFound } from 'next/navigation'
import { fetchBlogById } from '@/lib/firebase/blogs'
import { Article } from '@/components/blog/Article'
import { Metadata } from 'next'

// Revalidate the page every hour to keep blog data fresh
export const revalidate = 3600

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params
    const post = await fetchBlogById(resolvedParams.slug)

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

export default async function BlogPostPage(props: PageProps) {
    const params = await props.params;
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
