import { collection, getDocs, doc, getDoc, query, orderBy, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref, StorageReference, FirebaseStorage } from 'firebase/storage'
import { db, storage } from '../config'
import { fetchBlogs, fetchBlogById, getImageUrl } from '../blogs'

// Mock Firebase modules
jest.mock('firebase/firestore')
jest.mock('firebase/storage')
jest.mock('../config', () => ({
    db: {},
    storage: {}
}))

describe('Blog API Functions', () => {
    beforeAll(() => {
        // Mock ref to return a StorageReference-like object
        (ref as jest.Mock).mockImplementation((storage: unknown, path: string): StorageReference => ({
            _location: { path_: path },
            bucket: 'mock-bucket',
            fullPath: path,
            name: path.split('/').pop() || '',
            root: {} as StorageReference,
            parent: null,
            storage: {} as FirebaseStorage,
            toString: () => `gs://mock-bucket/${path}`
        } as StorageReference))
    })
    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('fetchBlogs', () => {
        it('should fetch and return all blogs with image URLs', async () => {
            // Mock data
            const mockBlogs = [
                {
                    id: '1',
                    title: 'Test Blog 1',
                    description: 'Description 1',
                    main_image: 'path/to/image1.jpg',
                    content: 'Content 1',
                    published: true,
                    published_date: Timestamp.fromDate(new Date()),
                    readTime: '5 min',
                    tags: ['test']
                },
                {
                    id: '2',
                    title: 'Test Blog 2',
                    description: 'Description 2',
                    main_image: 'path/to/image2.jpg',
                    content: 'Content 2',
                    published: true,
                    published_date: Timestamp.fromDate(new Date()),
                    readTime: '3 min',
                    tags: ['test']
                }
            ]

            // Mock Firestore response
            const mockDocs = mockBlogs.map(blog => ({
                id: blog.id,
                data: () => blog
            }))

            const mockSnapshot = {
                docs: mockDocs
            }

                // Mock getDocs
                ; (getDocs as jest.Mock).mockResolvedValue(mockSnapshot)

                // Mock getImageUrl with the correct path
                ; (getDownloadURL as jest.Mock).mockImplementation((imageRef) => {
                    const path = imageRef._location.path_
                    return Promise.resolve(`https://storage.googleapis.com/${path}`)
                })

            const result = await fetchBlogs()

            // Verify Firestore query
            expect(collection).toHaveBeenCalledWith(db, 'blogs')
            expect(query).toHaveBeenCalled()
            expect(orderBy).toHaveBeenCalledWith('published_date', 'desc')

            // Verify results
            expect(result).toHaveLength(2)
            expect(result[0]).toEqual({
                ...mockBlogs[0],
                imageUrl: 'https://storage.googleapis.com/path/to/image1.jpg'
            })
            expect(result[1]).toEqual({
                ...mockBlogs[1],
                imageUrl: 'https://storage.googleapis.com/path/to/image2.jpg'
            })
        })

        it('should handle blogs without images', async () => {
            const mockBlog = {
                id: '1',
                title: 'Test Blog',
                description: 'Description',
                content: 'Content',
                published: true,
                published_date: Timestamp.fromDate(new Date()),
                readTime: '5 min'
            }

            const mockSnapshot = {
                docs: [{
                    id: mockBlog.id,
                    data: () => mockBlog
                }]
            }

                ; (getDocs as jest.Mock).mockResolvedValue(mockSnapshot)

            const result = await fetchBlogs()

            expect(result).toHaveLength(1)
            expect(result[0]).toEqual({
                ...mockBlog,
                imageUrl: undefined
            })
        })

        it('should handle image URL fetch errors gracefully', async () => {
            const mockBlog = {
                id: '1',
                title: 'Test Blog',
                description: 'Description',
                main_image: 'path/to/image.jpg',
                content: 'Content',
                published: true,
                published_date: Timestamp.fromDate(new Date()),
                readTime: '5 min'
            }

            const mockSnapshot = {
                docs: [{
                    id: mockBlog.id,
                    data: () => mockBlog
                }]
            }

                ; (getDocs as jest.Mock).mockResolvedValue(mockSnapshot)
                ; (getDownloadURL as jest.Mock).mockRejectedValue(new Error('Failed to fetch image'))

            const result = await fetchBlogs()

            expect(result).toHaveLength(1)
            expect(result[0]).toEqual({
                ...mockBlog,
                imageUrl: undefined
            })
        })
    })

    describe('fetchBlogById', () => {
        it('should fetch a single blog by ID', async () => {
            const mockBlog = {
                id: '1',
                title: 'Test Blog',
                description: 'Description',
                content: 'Content',
                published: true,
                published_date: Timestamp.fromDate(new Date()),
                readTime: '5 min'
            }

            const mockDoc = {
                id: mockBlog.id,
                data: () => mockBlog,
                exists: () => true
            }

                ; (getDoc as jest.Mock).mockResolvedValue(mockDoc)

            const result = await fetchBlogById('1')

            expect(doc).toHaveBeenCalledWith(db, 'blogs', '1')
            expect(result).toEqual(mockBlog)
        })

        it('should throw error when blog is not found', async () => {
            const mockDoc = {
                exists: () => false
            }

                ; (getDoc as jest.Mock).mockResolvedValue(mockDoc)

            await expect(fetchBlogById('nonexistent')).rejects.toThrow('Blog not found')
        })
    })

    describe('getImageUrl', () => {
        it('should return image URL for valid storage path', async () => {
            const mockUrl = 'https://storage.googleapis.com/test-image.jpg'
                ; (getDownloadURL as jest.Mock).mockResolvedValue(mockUrl)

            const result = await getImageUrl('test-image.jpg')

            expect(ref).toHaveBeenCalledWith(storage, 'test-image.jpg')
            expect(result).toBe(mockUrl)
        })

        it('should throw error when image URL fetch fails', async () => {
            const error = new Error('Failed to fetch image')
                ; (getDownloadURL as jest.Mock).mockRejectedValue(error)

            await expect(getImageUrl('test-image.jpg')).rejects.toThrow(error)
        })
    })
}) 