// lib/api.ts
import { client } from './sanity/client';

// Interfejsy dla struktur Sanity
interface SanityImage {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
    crop?: {
        bottom: number;
        left: number;
        right: number;
        top: number;
    };
    hotspot?: {
        height: number;
        width: number;
        x: number;
        y: number;
    };
}

interface SanityAuthor {
    _type: string;
    name: string;
    image?: SanityImage;
    bio?: unknown[];
}

interface SanityBlock {
    _key: string;
    _type: string;
    children?: unknown[];
    markDefs?: unknown[];
    style?: string;
}

// Interfejs dla Story
interface Story {
    title: string;
    slug: string;
    publishedAt: string;
    body: SanityBlock[];
    mainImage: SanityImage;
    category: string;
    author: SanityAuthor;
}

// Pobranie listy ofert pracy (dla strony głównej)
export const fetchJobs = async (industry = "") => {
    try {
        console.log(`🔍 Pobieram oferty pracy dla branży: ${industry || "Wszystkie"}`);

        let query = `*[_type == "job"`;

        if (industry) {
            query += ` && industry == "${industry}"`;
        }

        query += `]{
      _id,
      title,
      location,
      salary,
      industry,
      company
    }`;

        const response = await client.fetch(query);

        if (!response || response.length === 0) {
            console.log("❌ Brak dostępnych ofert.");
            return [];
        }

        console.log("✅ Oferty pracy pobrane:", response);

        // Mapujemy dane, aby zachować zgodność ze starym formatem API
        return response.map((job: {
            _id: string;
            title: string;
            location: string;
            salary: string;
            industry: string;
            company: string;
        }) => ({
            documentId: job._id,
            Title: job.title,
            Location: job.location,
            Salary: job.salary,
            Industry: job.industry,
            Company: job.company
        }));
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("❌ Błąd pobierania ofert:", error.message);
        } else {
            console.error("❌ Wystąpił nieznany błąd:", error);
        }
        return [];
    }
};

//pobieranie wpisów blogowych
export async function fetchStories(category = ""): Promise<Story[]> {
    const query = `*[_type == "story"${category ? ` && category == "${category}"` : ''}] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    publishedAt,
    excerpt,
    mainImage,
    category,
    author
  }`;

    const stories = await client.fetch(query);
    return stories;
}

export async function fetchStory(slug: string): Promise<Story | null> {
    const query = `*[_type == "story" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    publishedAt,
    body,
    mainImage,
    category,
    author
  }`;

    const story = await client.fetch(query, { slug });
    return story;
}


// Pobranie listy kandydatów
export const fetchCandidates = async (industry = "") => {
    try {
        console.log(`🔍 Pobieram kandydatów dla branży: ${industry || "Wszystkie"}`);

        let query = `*[_type == "candidate"`;

        if (industry) {
            query += ` && industry == "${industry}"`;
        }

        query += `]{
      _id,
      currentPosition,
      availability,
      experience,
      salary,
      location,
      industry,
      remote
    }`;

        const response = await client.fetch(query);

        if (!response || response.length === 0) {
            console.log("❌ Brak dostępnych kandydatów.");
            return [];
        }

        console.log("✅ Kandydaci pobrani:", response);

        return response;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("❌ Błąd pobierania kandydatów:", error.message);
        } else {
            console.error("❌ Wystąpił nieznany błąd:", error);
        }
        return [];
    }
};

// Pobranie pojedynczego kandydata
export const fetchCandidate = async (documentId: string) => {
    try {
        console.log(`🔍 Pobieram kandydata o documentId: ${documentId}`);

        const query = `*[_type == "candidate" && _id == "${documentId}"][0]`;
        const response = await client.fetch(query);

        if (!response) {
            throw new Error(`❌ Kandydat o documentId ${documentId} nie istnieje.`);
        }

        console.log(`✅ Kandydat znaleziony:`, response);

        return response;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`❌ Błąd pobierania kandydata o documentId ${documentId}:`, error.message);
        } else {
            console.error(`❌ Wystąpił nieznany błąd o documentId ${documentId}:`, error);
        }
        return null;
    }
};

// Pobranie pojedynczej oferty pracy (dla strony szczegółów oferty)
export const fetchJob = async (documentId: string) => {
    try {
        console.log(`🔍 Pobieram ofertę pracy o documentId: ${documentId}`);

        const query = `*[_type == "job" && _id == "${documentId}"][0]`;
        const response = await client.fetch(query);

        if (!response) {
            throw new Error(`❌ Oferta o documentId ${documentId} nie istnieje.`);
        }

        console.log(`✅ Oferta znaleziona:`, response);

        // Mapujemy dane, aby zachować zgodność ze starym formatem API
        return {
            documentId: response._id,
            Title: response.title,
            Description: response.description,
            Location: response.location,
            Salary: response.salary,
            Industry: response.industry,
            Company: response.company
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`❌ Błąd pobierania oferty o documentId ${documentId}:`, error.message);
        } else {
            console.error(`❌ Wystąpił nieznany błąd o documentId ${documentId}:`, error);
        }
        return null;
    }
};