// app/jobs/[documentId]/page.tsx
import { fetchJob } from "@/lib/api";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default async function JobPage({ params }: { params: { documentId: string } }) {
    const jobData = await fetchJob(params.documentId);

    if (!jobData) {
        return (
            <main className="container mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold text-red-500">Oferta nie została znaleziona</h1>
                <p className="text-gray-700">Sprawdź, czy oferta istnieje w bazie danych.</p>
                <Link
                    href="/jobs"
                    className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                    Powrót do listy ofert
                </Link>
            </main>
        );
    }

    const { title, description, location, company, salary, industry } = jobData;

    return (
        <main className="bg-[#F9F6F2] py-16">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <div className="mb-8">
                    <div className="flex items-center text-gray-600 text-sm">
                        <Link href="/" className="hover:underline">Strona główna</Link>
                        <span className="mx-2">›</span>
                        <Link href="/jobs" className="hover:underline">Znajdź pracę</Link>
                        <span className="mx-2">›</span>
                        <span className="text-gray-900">{title}</span>
                    </div>
                </div>

                {/* Header */}
                <div className="bg-white border-2 border-black rounded-3xl p-8 mb-8 shadow-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="inline-block border border-black rounded-full px-3 py-1 text-sm font-medium bg-gray-100">
                                    {industry || "Brak kategorii"}
                                </span>
                                <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-700">
                                    📍 {location}
                                </span>
                            </div>
                            <p className="text-xl text-gray-700">
                                <span className="font-bold">{company}</span>
                            </p>
                        </div>
                        <div className="bg-[#ECE7DE] rounded-2xl p-4 text-center flex-shrink-0 w-full md:w-auto">
                            <p className="text-gray-700 mb-1">Wynagrodzenie</p>
                            <p className="text-2xl font-bold">{typeof salary === 'number' ? `${salary.toLocaleString()} zł` : salary}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Opis stanowiska</h2>

                    <div className="prose prose-lg max-w-none">
                        {description ? (
                            <PortableText value={description} />
                        ) : (
                            <p className="text-gray-700 italic">Brak szczegółowego opisu.</p>
                        )}
                    </div>

                    {/* Application Section */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h2 className="text-2xl font-bold mb-6">Aplikuj na to stanowisko</h2>
                        <p className="text-gray-700 mb-6">
                            Zainteresowany tą ofertą? Kliknij poniższy przycisk, aby przesłać swoje CV i aplikować na to stanowisko.
                        </p>
                        <Link
                            href="/drop-cv"
                            className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
                        >
                            Aplikuj teraz
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}