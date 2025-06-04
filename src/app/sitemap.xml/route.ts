import { fetchBlogs } from '@/lib/firebase/blogs'

export async function GET() {
  const baseUrl = 'https://www.blog.titas.dev'
  const blogs = await fetchBlogs()
  const posts = blogs.filter(b => b.published)

  const urls = [
    `${baseUrl}`,
    `${baseUrl}/blog`,
    ...posts.map(post => `${baseUrl}/blog/${post.id}`),
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      url => `<url><loc>${url}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`
    )
    .join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
