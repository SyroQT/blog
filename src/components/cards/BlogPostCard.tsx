import styles from '../../styles/cards/BlogPostCard.module.css'
interface BlogPost {
    id: string
    title: string
    excerpt: string
    date: string
    readTime: string
}

export function BlogPostCard({ post }: { post: BlogPost }) {
    return (
        // <article className="border border-green-500 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
        //     <div className="flex justify-between items-start mb-4">
        //         <h3 className="text-xl font-semibold font-roboto hover:text-blue-600">
        //             <a href={`/blog/${post.id}`}>{post.title}</a>
        //         </h3>
        //         <div className="flex items-center space-x-2 text-sm text-gray-500">
        //             <time dateTime={post.date} className="font-inter">
        //                 {new Date(post.date).toLocaleDateString('en-US', {
        //                     month: 'short',
        //                     day: 'numeric',
        //                     year: 'numeric'
        //                 })}
        //             </time>
        //             <span>•</span>
        //             <span>{post.readTime}</span>
        //         </div>
        //     </div>
        //     <p className="text-gray-600 font-inter">{post.excerpt}</p>
        //     <div className="mt-4">
        //         <a
        //             href={`/blog/${post.id}`}
        //             className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center space-x-1"
        //         >
        //             <span>Read more</span>
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 className="h-4 w-4"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 stroke="currentColor"
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth={2}
        //                     d="M9 5l7 7-7 7"
        //                 />
        //             </svg>
        //         </a>
        //     </div>
        // </article>

        <div className={`${styles.blogCard} relative grid grid-cols-1 md:grid-cols-2 bg-[#f9e6dc] p-6 md:p-10 gap-4`}>
            {/* <!-- Left: Image --> */}
            <div className="overflow-hidden">
                <img src="/your-image.jpg" alt="Bridge" className="w-full h-full object-cover grayscale" />
            </div>

            {/* <!-- Right: Text --> */}
            <div className="flex flex-col justify-center p-4 ">
                <h2 className="text-[#6b1839] text-xl md:text-2xl font-semibold mb-4 leading-tight">
                    {post.title}
                </h2>
                <p className="text-[#3d2b1f] text-sm md:text-base leading-relaxed">
                    {post.excerpt}
                </p>
            </div>
        </div>

    )
} 