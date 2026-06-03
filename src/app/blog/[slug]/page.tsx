import { notFound } from 'next/navigation'
import { getBlogBySlug, getAllBlogSlugs } from '@/lib/mdx'
import { Article } from '@/components/blog/Article'
import { Metadata } from 'next'

// Static generation - generate all blog pages at build time
export async function generateStaticParams() {
    try {
        const slugs = await getAllBlogSlugs()
        return slugs.map(slug => ({ slug }))
    } catch (error) {
        console.error('[v0] Failed to generate static params for blog posts:', error)
        return []
    }
}

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params
    const post = await getBlogBySlug(resolvedParams.slug)

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
    const post = await getBlogBySlug(params.slug)

    // If no post is found, show 404
    if (!post) {
        notFound()
    }

    return <Article post={post} />
}
