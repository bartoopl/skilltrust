// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fetchJobs } from "@/lib/api";
import JobCard from "@/components/JobCard";

// Definicja interfejsu
interface Job {
    documentId: string;
    title: string;
    location: string;
    salary: number | string;
    industry: string;
    company: string;
}

export default function Home() {
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

    // Ograniczamy liczbę wyświetlanych ofert do 5
    const displayedJobs = jobs.slice(0, 5);
    const hasMoreJobs = jobs.length > 5;

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

            {/* Success Fee baner */}
            <section className="bg-[#ECE7DE] py-16 text-center">
                <div className="container mx-auto">
                    <div className="flex justify-center mb-4">
                        <img src="/successfee.svg" alt="Success Fee" className="h-24 w-auto" />
                    </div>
                    <h2 className="text-4xl font-bold mb-2">100% Success Fee</h2>
                    <p className="text-gray-700 mb-6">
                        Płacisz za efekty. Wiemy, że agencje, nie przepadają za takim podejściem.
                    </p>
                    <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-full">
                        Kontakt z nami
                    </a>
                </div>
            </section>

            {/* "We got you covered" - sekcja dla talentów i firm */}
            <section className="bg-[#F9F6F2] py-16 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-2">Wszechstronność</h2>
                    <p className="text-gray-700 mb-10">Nasze usługi są przeznaczone zarówno dla talentów, jak i firm.</p>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Talents */}
                        <div className="flex flex-col items-center">
                            <img src="/talents.svg" alt="For Talents" className="h-32 w-auto mb-4" />
                            <button className="bg-black text-white px-6 py-3 rounded-full mb-3">Dla talentów</button>
                            <div className="w-[2px] h-6 bg-black mb-4"></div>
                            <div className="flex flex-col gap-4">
                                {["Znajdziemy pracę", "Doradztwo zawodowe i coaching", "Wskazówki dotyczące CV i portfolio", "Przygotowania do rozmowy kwalifikacyjnej"].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: [-5, 5, -5] }}
                                        transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                                        className="border border-black px-6 py-2 rounded-full text-lg bg-white"
                                    >
                                        {service}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Companies */}
                        <div className="flex flex-col items-center">
                            <img src="/companies.svg" alt="For Companies" className="h-32 w-auto mb-4" />
                            <button className="bg-black text-white px-6 py-3 rounded-full mb-3">Dla firm</button>
                            <div className="w-[2px] h-6 bg-black mb-4"></div>
                            <div className="flex flex-col gap-4">
                                {["Zatrudnianie stałych pracowników", "Znajdź najlepszych freelancerów", "Szybkie skalowanie zespołów", "Wbudowana rekrutacja"].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: [-5, 5, -5] }}
                                        transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                                        className="border border-black px-6 py-2 rounded-full text-lg bg-white"
                                    >
                                        {service}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sekcja bezpłatnej konsultacji */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold mb-6">
                            Zamów bezpłatną konsultację
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Umów bezpłatną konsultację, podczas której omówimy potrzeby Twojej firmy.
                            Sprawdź jak możemy Ci pomóc w pozyskaniu kandydatów z kompetencjami,
                            które wesprą Twój biznes.
                        </p>
                        <Link href="/bezplatna-konsultacja" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Wyślij zapytanie
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/konsultacja.svg"
                            alt="Bezpłatna konsultacja"
                            width={500}
                            height={400}
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </section>
            {/* Lista ofert pracy */}
            <section className="bg-[#ECE7DE] py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">Znajdź pracę</h2>

                    {/* Filtry ofert pracy */}
                    <section className="container mx-auto py-8 text-center">
                        <h2 className="text-1xl font-bold mb-4">Filtruj oferty według branży:</h2>
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

                    <div className="flex flex-col">
                        {displayedJobs.length === 0 ? (
                            <p className="text-center text-gray-700">Brak dostępnych ofert pracy.</p>
                        ) : (
                            displayedJobs.map((job) => (
                                <div key={job.documentId} className="mb-12">
                                    <JobCard
                                        id={job.documentId}
                                        title={job.title}
                                        company={job.company}
                                        location={job.location}
                                        salary={job.salary}
                                        jobType={job.industry}
                                    />
                                </div>
                            ))
                        )}
                    </div>

                    {/* Przycisk "Zobacz inne ogłoszenia" */}
                    {hasMoreJobs && (
                        <div className="text-center mt-8">
                            <Link
                                href="/jobs"
                                className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
                            >
                                Zobacz inne ogłoszenia
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}