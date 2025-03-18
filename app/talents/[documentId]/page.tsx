// app/talents/[documentId]/page.tsx
import { fetchCandidate } from "@/lib/api";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default async function CandidatePage({ params }: { params: { documentId: string } }) {
    const candidateData = await fetchCandidate(params.documentId);

    if (!candidateData) {
        return (
            <main className="container mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold text-red-500">Profil nie został znaleziony</h1>
                <p className="text-gray-700">Sprawdź, czy profil istnieje w bazie danych.</p>
                <Link
                    href="/talents"
                    className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                    Powrót do listy kandydatów
                </Link>
            </main>
        );
    }

    const {
        currentPosition,
        availability,
        skills,
        experience,
        salary,
        location,
        industry,
        remote
    } = candidateData;

    const getAvailabilityLabel = (availability: string): string => {
        const labels: Record<string, string> = {
            'immediate': 'Natychmiastowa',
            '2weeks': '2 tygodnie',
            '1month': '1 miesiąc',
            '3months': '3 miesiące'
        };
        return labels[availability] || availability;
    };

    const getExperienceLabel = (experience: string): string => {
        const labels: Record<string, string> = {
            'junior': 'Junior (0-2 lata)',
            'mid': 'Mid (2-5 lat)',
            'senior': 'Senior (5-8 lat)',
            'expert': 'Expert (8+ lat)'
        };
        return labels[experience] || experience;
    };

    return (
        <main className="bg-[#F9F6F2] py-16">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <div className="mb-8">
                    <div className="flex items-center text-gray-600 text-sm">
                        <Link href="/" className="hover:underline">Strona główna</Link>
                        <span className="mx-2">›</span>
                        <Link href="/talents" className="hover:underline">Odkryj talenty</Link>
                        <span className="mx-2">›</span>
                        <span className="text-gray-900">{currentPosition}</span>
                    </div>
                </div>

                {/* Header */}
                <div className="bg-white border-2 border-black rounded-3xl p-8 mb-8 shadow-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentPosition}</h1>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="inline-block border border-black rounded-full px-3 py-1 text-sm font-medium bg-gray-100">
                                    {industry}
                                </span>
                                <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-700">
                                    📍 {location}
                                </span>
                                {remote && (
                                    <span className="inline-block border border-green-500 text-green-800 bg-green-100 rounded-full px-3 py-1 text-sm">
                                        Praca zdalna
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="bg-[#ECE7DE] rounded-2xl p-4 text-center flex-shrink-0 w-full md:w-auto">
                            <p className="text-gray-700 mb-1">Oczekiwane wynagrodzenie</p>
                            <p className="text-2xl font-bold">{typeof salary === 'number' ? `${salary.toLocaleString()} zł` : salary}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 p-4 bg-gray-50 rounded-xl">
                        <div>
                            <h3 className="font-bold text-gray-700 mb-2">Doświadczenie</h3>
                            <p className="text-xl">{getExperienceLabel(experience)}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-700 mb-2">Dostępność</h3>
                            <p className="text-xl">{getAvailabilityLabel(availability)}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-700 mb-2">Lokalizacja</h3>
                            <p className="text-xl">{location}</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6">Kompetencje</h2>

                    <div className="prose prose-lg max-w-none">
                        {skills ? (
                            <PortableText value={skills} />
                        ) : (
                            <p className="text-gray-700 italic">Brak szczegółowych informacji o kompetencjach.</p>
                        )}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h2 className="text-2xl font-bold mb-6">Zainteresowany tym kandydatem?</h2>
                        <p className="text-gray-700 mb-6">
                            Skontaktuj się z nami, aby uzyskać więcej informacji o tym kandydacie lub umówić rozmowę kwalifikacyjną.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
                        >
                            Skontaktuj się
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}