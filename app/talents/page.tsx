// app/talents/page.tsx
"use client";
import { useEffect, useState } from "react";
import { fetchCandidates } from "@/lib/api";
import CandidateCard from "@/components/CandidateCard";

interface Candidate {
    _id: string;
    currentPosition: string;
    availability: string;
    experience: string;
    salary: number;
    location: string;
    industry: string;
    remote: boolean;
}

export default function TalentsPage() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [selectedIndustry, setSelectedIndustry] = useState("");

    // Lista dostępnych branż
    const industries = ["IT", "Produkcja", "Automotive"];

    // Pobieranie kandydatów, gdy zmienia się filtr
    useEffect(() => {
        async function loadCandidates() {
            const candidateData = await fetchCandidates(selectedIndustry);
            setCandidates(candidateData);
        }
        loadCandidates();
    }, [selectedIndustry]);

    return (
        <main className="bg-[#F9F6F2] min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Odkryj talenty
                </h1>

                <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
                    Przeglądaj profile naszych kandydatów i znajdź idealne dopasowanie dla Twojej firmy.
                </p>

                {/* Filtry branżowe */}
                <section className="py-8 text-center mb-12">
                    <h2 className="text-xl font-bold mb-6">Filtruj kandydatów według branży:</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            className={`border px-4 py-2 rounded-full ${selectedIndustry === "" ? "bg-black text-white" : "border-black"}`}
                            onClick={() => setSelectedIndustry("")}
                        >
                            Wszystkie
                        </button>
                        {industries.map((industry) => (
                            <button
                                key={industry}
                                className={`border px-4 py-2 rounded-full ${selectedIndustry === industry ? "bg-black text-white" : "border-black"}`}
                                onClick={() => setSelectedIndustry(industry)}
                            >
                                {industry}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Wyniki wyszukiwania */}
                <div className="bg-[#ECE7DE] p-8 rounded-3xl">
                    <div className="flex flex-col">
                        {candidates.length === 0 ? (
                            <div className="py-16 text-center">
                                <p className="text-xl text-gray-700">Brak dostępnych kandydatów.</p>
                                <p className="text-gray-600 mt-2">Spróbuj zmienić filtry lub wróć później.</p>
                            </div>
                        ) : (
                            <>
                                <p className="text-lg mb-8">
                                    Znaleziono <span className="font-bold">{candidates.length}</span> kandydat{candidates.length === 1 ? 'a' : (candidates.length > 1 && candidates.length < 5 ? 'ów' : 'ów')}
                                </p>

                                {candidates.map((candidate) => (
                                    <div key={candidate._id} className="mb-12">
                                        <CandidateCard
                                            id={candidate._id}
                                            currentPosition={candidate.currentPosition}
                                            availability={candidate.availability}
                                            experience={candidate.experience}
                                            salary={candidate.salary}
                                            location={candidate.location}
                                            industry={candidate.industry}
                                            remote={candidate.remote}
                                        />
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}