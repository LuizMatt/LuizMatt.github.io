export const resolveAssetUrl = (path: string, base?: string): string => {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path
  }
  let currentBase = base
  if (currentBase === undefined) {
    try {
      const config = useRuntimeConfig()
      currentBase = config.app.baseURL
    } catch {
      currentBase = import.meta.env.BASE_URL || '/'
    }
  }
  const cleanBase = (currentBase || '/').endsWith('/') ? (currentBase || '/') : `${currentBase}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${cleanBase}${cleanPath}`
}

export const useAssetUrl = () => {
  const config = useRuntimeConfig()
  const base = config.app.baseURL || '/'

  return (path: string): string => resolveAssetUrl(path, base)
}
