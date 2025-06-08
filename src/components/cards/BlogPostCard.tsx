import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/cards/BlogPostCard.module.css'
import { BlogPost } from '@/lib/firebase/blogs'

export function BlogPostCard({ post, isLeft }: { post: BlogPost; isLeft: boolean }) {
    const imageFallBack = "https://firebasestorage.googleapis.com/v0/b/titas-dev-blog.appspot.com/o/images%2Fblogs%2Fnewcastle-bridge.jpg?alt=media&token=b62a83d9-3cf8-4e3a-9851-e297f80b25d5"

    // Format the date
    const formatDate = (date: any) => {
        try {
            // Handle different date formats
            let dateObj: Date

            // Handle Firebase Timestamp
            if (date && typeof date.toDate === 'function') {
                dateObj = date.toDate()
            } else if (date instanceof Date) {
                dateObj = date
            } else if (typeof date === 'string' || typeof date === 'number') {
                dateObj = new Date(date)
            } else {
                return 'Unknown date'
            }

            // Check if the date is valid
            if (isNaN(dateObj.getTime())) {
                return 'Unknown date'
            }

            return new Intl.DateTimeFormat('lt-LT', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }).format(dateObj);

        } catch (error) {
            return 'Unknown date'
        }
    }

    return (
        <Link href={`/blog/${post.id}`} className="block">
            <div className={`${styles.blogCard} relative flex gap-4 aspect-[4/3] ${isLeft ? styles.left : ''}`}>
                {/* Image container with fixed dimensions */}
                <div className="relative w-1/2 h-full">
                    <Image
                        src={post.imageUrl || imageFallBack}
                        alt={post.title || "Blog post image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        priority={false}
                    />
                    {/* Date overlay */}
                    <div className="absolute bottom-2 left-2 bg-black/50 px-1 text-[10px] text-orange-500 font-mono tracking-widest rounded-sm">
                        {formatDate(post.published_date)}
                    </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-0.5 w-1/2 p-2 max-h-48 overflow-hidden">
                    <h2 className="text-xl md:text-2xl font-semibold">
                        {post.title}
                    </h2>
                    <p className="text-sm break-words md:text-base leading-relaxed">
                        {post.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}