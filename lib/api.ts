import axios from "axios";

const API_URL = "http://localhost:1337/api";

// Pobranie listy ofert pracy (dla strony głównej)
export const fetchJobs = async (industry = "") => {
    try {
        console.log(`🔍 Pobieram oferty pracy dla branży: ${industry || "Wszystkie"}`);

        const query = industry ? `?filters[Industry][$eq]=${industry}` : "";
        const response = await axios.get(`${API_URL}/jobs${query}`);

        if (!response.data.data) {
            throw new Error("❌ Brak dostępnych ofert.");
        }

        console.log("✅ Oferty pracy pobrane:", response.data.data);
        return response.data.data;
    } catch (error) {
        console.error("❌ Błąd pobierania ofert:", error.response?.data || error.message);
        return [];
    }
};

// Pobranie pojedynczej oferty pracy (dla strony szczegółów oferty)
export const fetchJob = async (documentId: string) => {
    try {
        console.log(`🔍 Pobieram ofertę pracy o documentId: ${documentId}`);
        const response = await axios.get(`${API_URL}/jobs/${documentId}?populate=*`);

        if (!response.data.data) {
            throw new Error(`❌ Oferta o documentId ${documentId} nie istnieje.`);
        }

        console.log(`✅ Oferta znaleziona:`, response.data.data);
        return response.data.data;
    } catch (error) {
        console.error(`❌ Błąd pobierania oferty o documentId ${documentId}:`, error.response?.data || error.message);
        return null;
    }
};
