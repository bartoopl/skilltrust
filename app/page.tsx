"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchJobs } from "@/lib/api";

export default function Home() {
    const [jobs, setJobs] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState(""); // Wybrana branża

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
        <main className="bg-[#F9F6F2] text-black">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1661517335128-2bcf290d58f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Teamwork"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </div>

                <div className="text-left">
                    <h1 className="text-5xl font-bold mb-4">
                        Łączymy najlepszych specjalistów z właściwymi firmami.
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Jesteśmy ekspertami w rekrutacji dla branży automotive i inżynierii - znamy jej potrzeby od podszewki, bo sami byliśmy jej częścią.
                    </p>
                    <Link href="/jobs" className="inline-block bg-black text-white px-6 py-3 rounded-full">
                        Skontaktuj się
                    </Link>
                </div>
            </section>



            {/* Lista ofert pracy */}
            <section className="bg-[#ECE7DE] py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">Znajdź pracę</h2>
                    {/* Filtry ofert pracy */}
                    <section className="container mx-auto py-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Filtruj oferty według branży:</h2>
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
                    <div className="space-y-10">
                        {jobs.length === 0 ? (
                            <p className="text-center text-gray-700">Brak dostępnych ofert pracy.</p>
                        ) : (
                            jobs.map((job) => (
                                <div key={job.documentId} className="bg-white p-6 rounded-lg border-2 border-black">
                                    <h3 className="text-3xl font-bold">{job.Title}</h3>
                                    <p className="text-gray-700">{job.Location}</p>
                                    <p className="text-gray-500">{job.Salary} zł</p>
                                    <Link href={`/jobs/${job.documentId}`} className="inline-block bg-black text-white px-6 py-3 rounded-full">
                                        Zobacz ofertę
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
