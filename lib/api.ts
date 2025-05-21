// lib/api.ts
import { client } from '@/sanity/lib/client'

export async function fetchJobs(industry = '') {
    const query = `*[_type == "job" ${industry ? `&& industry == \"${industry}\"` : ''}]{
    "documentId": _id,
    title,
    location,
    salary,
    industry,
    company
  }`

    try {
        const jobs = await client.fetch(query)
        return jobs
    } catch (error) {
        console.error("Error fetching jobs:", error)
        return []
    }
}

export async function fetchJob(id: string) {
    const query = `*[_type == "job" && _id == $id][0]`

    try {
        const job = await client.fetch(query, { id })
        return job
    } catch (error) {
        console.error("Error fetching job:", error)
        return null
    }
}

export async function fetchCandidates(industry = '') {
    const query = `*[_type == "candidate" ${industry ? `&& industry == "${industry}"` : ''}]`

    try {
        const candidates = await client.fetch(query)
        return candidates
    } catch (error) {
        console.error("Error fetching candidates:", error)
        return []
    }
}

export async function fetchCandidate(id: string) {
    const query = `*[_type == "candidate" && _id == $id][0]`

    try {
        const candidate = await client.fetch(query, { id })
        return candidate
    } catch (error) {
        console.error("Error fetching candidate:", error)
        return null
    }
}

export async function fetchStories(category = '') {
    const query = `*[_type == "story" ${category ? `&& category == "${category}"` : ''}] | order(publishedAt desc){
    "slug": slug.current,
    title,
    excerpt,
    publishedAt,
    mainImage,
    category,
    author
  }`

    try {
        const stories = await client.fetch(query)
        return stories
    } catch (error) {
        console.error("Error fetching stories:", error)
        return []
    }
}

export async function fetchStory(slug: string) {
    const query = `*[_type == "story" && slug.current == $slug][0]{
    title,
    publishedAt,
    body,
    mainImage,
    category,
    author
  }`

    try {
        const story = await client.fetch(query, { slug })
        return story
    } catch (error) {
        console.error("Error fetching story:", error)
        return null
    }
}