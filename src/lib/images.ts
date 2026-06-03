/**
 * Constructs a full image URL from a relative path.
 * Uses NEXT_PUBLIC_IMAGE_BASE_URL as the base, or falls back to a placeholder.
 */
export function getImageUrl(path: string | undefined | null): string {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || ''
  const fallbackImage = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'

  if (!path) {
    return fallbackImage
  }

  // If path is already a full URL, return it as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // If no base URL is configured, return fallback
  if (!baseUrl) {
    return fallbackImage
  }

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${baseUrl}${normalizedPath}`
}

/**
 * Gets the hero image URL from environment or returns a fallback.
 */
export function getHeroImageUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || ''
  const heroPath = process.env.NEXT_PUBLIC_HERO_IMAGE_PATH || ''
  const fallbackImage = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'

  if (!baseUrl || !heroPath) {
    return fallbackImage
  }

  const normalizedPath = heroPath.startsWith('/') ? heroPath : `/${heroPath}`
  return `${baseUrl}${normalizedPath}`
}
