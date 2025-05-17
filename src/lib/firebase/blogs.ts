import { collection, getDocs, limit, doc, getDoc } from 'firebase/firestore'
import { db, storage } from './config'
import { getDownloadURL, ref } from 'firebase/storage'

export interface BlogPost {
    id: string
    title: string
    description: string
    main_image: string
    content: string
    published: boolean
    published_date: Date
    readTime: string
    imageUrl?: string
    tags?: string[]
}

async function getImageUrl(storagePath: string): Promise<string> {
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
    const snapshot = await getDocs(blogsRef)

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
                imageUrl
            } as BlogPost
        })
    )
    return blogs
}

export async function fetchBlogById(id: string) {
    try {
        const blogRef = doc(db, 'blogs', id)
        const blogSnap = await getDoc(blogRef)

        if (!blogSnap.exists()) {
            throw new Error('Blog not found')
        }

        return {
            id: blogSnap.id,
            ...blogSnap.data()
        } as BlogPost
    } catch (error) {
        console.error('Error fetching blog:', error)
        throw error
    }
}