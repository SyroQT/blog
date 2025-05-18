import { notFound } from 'next/navigation'
import { fetchBlogById } from '@/lib/firebase/blogs'
import { Article } from '@/components/blog/Article'

interface PageProps {
    params: Promise<{
        slug: string
    }>
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