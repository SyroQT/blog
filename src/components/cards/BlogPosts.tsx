import { BlogPostCard } from './BlogPostCard'

interface BlogPost {
    id: string
    title: string
    excerpt: string
    date: string
    readTime: string
}

export function BlogPosts() {
    // This would typically come from your data source
    const posts: BlogPost[] = [
        {
            id: '1',
            title: 'Getting Started with Next.js App Router',
            excerpt: 'Learn how to build modern web applications with Next.js 14 and its revolutionary App Router architecture.',
            date: '2024-03-20',
            readTime: '5 min read'
        },
        {
            id: '2',
            title: 'The Power of Server Components',
            excerpt: 'Explore how React Server Components can improve your application\'s performance and developer experience.',
            date: '2024-03-18',
            readTime: '7 min read'
        },
        {
            id: '3',
            title: 'The Power of Server Components',
            excerpt: 'Explore how React Server Components can improve your application\'s performance and developer experience.',
            date: '2024-03-18',
            readTime: '7 min read'
        },
        {
            id: '4',
            title: 'The Power of Server Components',
            excerpt: 'Explore how React Server Components can improve your application\'s performance and developer experience.',
            date: '2024-03-18',
            readTime: '7 min read'
        }
    ]

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
                <BlogPostCard
                    key={post.id}
                    post={post}
                    isLeft={index % 2 === 0}
                />
            ))}
        </section>
    )
} 