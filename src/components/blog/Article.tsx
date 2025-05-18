import Image from 'next/image'
import { BlogPost } from '@/lib/firebase/blogs'
import ReactMarkdown from 'react-markdown'

interface ArticleProps {
    post: BlogPost
}

export function Article({ post }: ArticleProps) {
    const imageFallBack = "https://firebasestorage.googleapis.com/v0/b/titas-dev-blog.appspot.com/o/images%2Fblogs%2Fnewcastle-bridge.jpg?alt=media&token=b62a83d9-3cf8-4e3a-9851-e297f80b25d5"

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Header Section */}
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>•</span>
                    <span>{post.readTime} read</span>
                </div>
            </header>

            {/* Main Image */}
            <div className="relative w-full aspect-[16/9] mb-8">
                <Image
                    src={post.imageUrl || imageFallBack}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </article>
    )
}
