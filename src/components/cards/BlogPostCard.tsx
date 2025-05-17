import Image from 'next/image'
import styles from '../../styles/cards/BlogPostCard.module.css'
interface BlogPost {
    id: string
    title: string
    excerpt: string
    date: string
    readTime: string
}

export function BlogPostCard({ post, isLeft }: { post: BlogPost; isLeft: boolean }) {
    const imageUrl = "https://firebasestorage.googleapis.com/v0/b/titas-dev-blog.appspot.com/o/images%2Fblogs%2Fnewcastle-bridge.jpg?alt=media&token=b62a83d9-3cf8-4e3a-9851-e297f80b25d5"
    return (
        <div className={`${styles.blogCard} relative flex gap-4 aspect-[4/3] ${isLeft ? styles.left : ''}`}>
            {/* <!-- Left: Image --> */}
            <div className="relative overflow-hidden w-full">
                {/* <img src="/your-image.jpg" alt="Bridge" className="w-full h-full object-cover grayscale" /> */}
                <Image
                    src={imageUrl}
                    alt='Hero Image'
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            {/* <!-- Right: Text --> */}
            <div className="flex flex-col gap-4 w-full">
                <h2 className="text-xl md:text-2xl font-semibold">
                    {post.title}
                </h2>
                <p className="text-sm md:text-base leading-relaxed">
                    {post.excerpt}
                </p>
            </div>
        </div>

    )
} 