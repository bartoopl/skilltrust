// lib/api.ts
import { client } from './sanity/client';

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
        return response.map((job: any) => ({
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