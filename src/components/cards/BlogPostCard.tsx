import Image from 'next/image'
import styles from '../../styles/cards/BlogPostCard.module.css'
import { BlogPost } from '@/lib/firebase/blogs'

export function BlogPostCard({ post, isLeft }: { post: BlogPost; isLeft: boolean }) {
    const imageFallBack = "https://firebasestorage.googleapis.com/v0/b/titas-dev-blog.appspot.com/o/images%2Fblogs%2Fnewcastle-bridge.jpg?alt=media&token=b62a83d9-3cf8-4e3a-9851-e297f80b25d5"
    return (
        <div className={`${styles.blogCard} relative flex gap-4 aspect-[4/3] ${isLeft ? styles.left : ''}`}>
            {/* Image container with fixed dimensions */}
            <div className="relative w-1/2 h-full overflow-hidden">
                <Image
                    src={post.imageUrl || imageFallBack}
                    alt={post.title || "Blog post image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority={false}
                />
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-4 w-1/2 p-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                    {post.title}
                </h2>
                <p className="text-sm truncate md:text-base leading-relaxed">
                    {post.description}
                </p>
            </div>
        </div>
    )
} 