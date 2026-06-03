import { BlogPostCard } from './BlogPostCard'
import { getAllBlogs } from '@/lib/mdx'

export async function BlogPosts() {
    try {
        const blogs = await getAllBlogs()

        return (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog, index) => (
                    <BlogPostCard
                        key={blog.slug}
                        post={blog}
                        isLeft={index % 2 === 0}
                    />
                ))}
            </section>
        )
    } catch (error) {
        console.error('Failed to load blogs:', error)
        return <div className="text-red-500">Failed to load blogs</div>
    }
}
