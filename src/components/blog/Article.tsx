import Image from 'next/image'
import { BlogPost } from '@/lib/firebase/blogs'
import ReactMarkdown from 'react-markdown'
import { Title } from '../ui/Title'
import styles from '../../styles/blog/Article.module.css'
interface ArticleProps {
    post: BlogPost
}

export function Article({ post }: ArticleProps) {
    const imageFallBack = "https://firebasestorage.googleapis.com/v0/b/titas-dev-blog.appspot.com/o/images%2Fblogs%2Fnewcastle-bridge.jpg?alt=media&token=b62a83d9-3cf8-4e3a-9851-e297f80b25d5"

    return (
        <article className="mx-auto">
            {/* Hero Section with Image and Title */}
            <div className="relative w-full h-[45vh] mb-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                    <Image
                        src={post.imageUrl || imageFallBack}
                        alt={post.title}
                        fill
                        priority
                        className='rounded-lg object-cover'
                    />
                    {/* Title Overlay */}
                    <Title>
                        <h1>{post.title}</h1>
                    </Title>
                </div>
            </div>

            {/* Markdown Content */}
            <div className={`${styles.articleBlogText} 
            prose prose-lg max-w-none dark:prose-invert font-montserrat`}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    )
}