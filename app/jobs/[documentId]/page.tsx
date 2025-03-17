import { fetchJob } from "@/lib/api";

export default async function JobPage({ params }: { params: { documentId: string } }) {
    const jobData = await fetchJob(params.documentId);

    if (!jobData) {
        return (
            <main className="container mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold text-red-500">Oferta nie została znaleziona</h1>
                <p className="text-gray-700">Sprawdź, czy oferta istnieje w Strapi.</p>
            </main>
        );
    }

    const { Title, Description, Location, Company, Salary } = jobData;

    return (
        <main className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{Title}</h1>
            <p className="text-gray-700">{Description[0]?.children[0]?.text || "Brak opisu"}</p>
            <p className="text-gray-500">📍 {Location}</p>
            <p className="text-gray-500">💼 {Company}</p>
            <p className="text-gray-500">💰 {Salary} zł</p>
        </main>
    );
}