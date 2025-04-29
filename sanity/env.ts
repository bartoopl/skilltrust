// sanity/env.ts
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-03-18'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

// Optional: Add more graceful handling
if (!projectId && process.env.NODE_ENV === 'development') {
  console.warn('Sanity Project ID is missing. Content fetching might fail.')
}