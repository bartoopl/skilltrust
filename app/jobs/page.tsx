// app/jobs/page.tsx
"use client";
import { useEffect, useState } from "react";
import { fetchJobs } from "@/lib/api";
import JobCard from "@/components/JobCard";

interface Job {
    documentId: string;
    Title: string;
    Location: string;
    Salary: number | string;
    Industry: string;
    Company: string;
}

export default function JobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedIndustry, setSelectedIndustry] = useState("");

    // Lista dostępnych branż
    const industries = ["IT", "Produkcja", "Automotive"];

    // Pobieranie ofert pracy, gdy zmienia się filtr
    useEffect(() => {
        async function loadJobs() {
            const jobData = await fetchJobs(selectedIndustry);
            setJobs(jobData);
        }
        loadJobs();
    }, [selectedIndustry]);

    return (
        <main className="bg-[#F9F6F2] min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Znajdź pracę
                </h1>

                <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
                    Przeglądaj nasze aktualne oferty pracy i znajdź pozycję, która najlepiej pasuje do Twoich umiejętności i aspiracji.
                </p>

                {/* Filtry ofert pracy */}
                <section className="py-8 text-center mb-12">
                    <h2 className="text-xl font-bold mb-6">Filtruj oferty według branży:</h2>
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
                        {jobs.length === 0 ? (
                            <div className="py-16 text-center">
                                <p className="text-xl text-gray-700">Brak dostępnych ofert pracy.</p>
                                <p className="text-gray-600 mt-2">Spróbuj zmienić filtry lub wróć później.</p>
                            </div>
                        ) : (
                            <>
                                <p className="text-lg mb-8">
                                    Znaleziono <span className="font-bold">{jobs.length}</span> ofert{jobs.length === 1 ? 'ę' : (jobs.length > 1 && jobs.length < 5 ? 'y' : '')}
                                </p>

                                {jobs.map((job) => (
                                    <div key={job.documentId} className="mb-12">
                                        <JobCard
                                            id={job.documentId}
                                            title={job.Title}
                                            company={job.Company}
                                            location={job.Location}
                                            salary={job.Salary}
                                            jobType={job.Industry}
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