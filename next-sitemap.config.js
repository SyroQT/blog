/** @type {import('next-sitemap').IConfig} */
const { fetchBlogs } = require('./src/lib/firebase/blogs')

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
    generateRobotsTxt: true, // optional
    sitemapSize: 5000,
    async additionalPaths(config) {
        // Fetch all blog posts from Firebase
        const blogs = await fetchBlogs();

        // Generate additional paths for each blog post
        return blogs
            .filter(blog => blog.published) // Only include published posts
            .map((blog) => ({
                loc: `/blog/${blog.id}`, // Using blog.id as the slug
                lastmod: new Date(blog.published_date).toISOString(),
                changefreq: 'weekly',
                priority: 0.7,
            }));
    },
};
