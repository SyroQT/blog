import { collection, getDocs, doc, getDoc, query, orderBy, Timestamp } from 'firebase/firestore'
import { db, storage } from './config'
import { getDownloadURL, ref } from 'firebase/storage'

export interface BlogPost {
    id: string
    title: string
    description: string
    main_image: string
    content: string
    published: boolean
    published_date: Timestamp
    readTime: string
    imageUrl?: string
    tags?: string[]
}

export async function getImageUrl(storagePath: string): Promise<string> {
    try {
        const imageRef = ref(storage, storagePath)
        return await getDownloadURL(imageRef)
    } catch (error) {
        console.error('Error getting image URL:', error)
        throw error
    }
}

export async function fetchBlogs(): Promise<BlogPost[]> {
    const blogsRef = collection(db, 'blogs')
    const blogsQuery = query(blogsRef, orderBy('published_date', 'desc'))

    const snapshot = await getDocs(blogsQuery)

    const blogs: BlogPost[] = await Promise.all(
        snapshot.docs.map(async doc => {
            const data = doc.data()
            let imageUrl: string | undefined

            if (data.main_image) {
                try {
                    imageUrl = await getImageUrl(data.main_image)
                } catch (error) {
                    console.error(`Error fetching image URL for blog ${doc.id}:`, error)
                }
            }

            return {
                id: doc.id,
                ...data,
                imageUrl,
            } as BlogPost
        })
    )

    return blogs
}

export async function fetchBlogById(id: string): Promise<BlogPost> {
    try {
        const blogRef = doc(db, 'blogs', id)
        const blogSnap = await getDoc(blogRef)

        if (!blogSnap.exists()) {
            throw new Error('Blog not found')
        }

        const data = blogSnap.data()
        let imageUrl: string | undefined

        if (data.main_image) {
            try {
                imageUrl = await getImageUrl(data.main_image)
            } catch (error) {
                console.error(`Error fetching image URL for blog ${id}:`, error)
            }
        }

        return {
            id: blogSnap.id,
            ...data,
            imageUrl,
        } as BlogPost
    } catch (error) {
        console.error('Error fetching blog:', error)
        throw error
    }
}
