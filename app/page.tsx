// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
            title: "Rekrutacja specjalistyczna",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cta: "Dowiedz się więcej"
        },
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop",
            title: "RMP w praktyce",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            cta: "Poznaj proces"
        },
        {
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop",
            title: "Sesje indywidualne",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            cta: "Umów sesję"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

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
                    <Link href="/wycena" className="inline-block bg-black text-white px-6 py-3 rounded-full">
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
                    <a href="/kontakt" className="inline-block bg-black text-white px-6 py-3 rounded-full">
                        Kontakt z nami
                    </a>
                </div>
            </section>

            {/* Rekrutacja po naszemu */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold mb-12">Rekrutacja po naszemu</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Precyzyjne dopasowanie</h3>
                        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-2xl">🔍</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Głęboka analiza</h3>
                        <p className="text-gray-700 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-2xl">🤝</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Partnerstwo</h3>
                        <p className="text-gray-700 text-sm">Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-2xl">📈</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Wyniki</h3>
                        <p className="text-gray-700 text-sm">Duis aute irure dolor in reprehenderit in voluptate.</p>
                    </div>
                </div>
            </section>

            {/* Jak rekrutujemy */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Jak rekrutujemy</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <Link href="/dla-firm" className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
                        Zobacz proces
                    </Link>
                </div>
            </section>

            {/* Odkryj potencjał RMP */}
            <section className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Odkryj potencjał Reiss Motivational Profile</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-96 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                            <span className="text-gray-600">Miejsce na zdjęcie</span>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <Link href="/rmp-rekrutacja" className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
                        Dowiedz się więcej
                    </Link>
                </div>
            </section>

            {/* Slider */}
            <section className="bg-[#ECE7DE] py-16 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="relative">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {slides.map((slide, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div className="flex justify-center">
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                width={500}
                                                height={400}
                                                className="rounded-lg shadow-md"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                                            <p className="text-lg text-gray-700 mb-8">{slide.text}</p>
                                            <Link href="/kontakt" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                                {slide.cta}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* RMP w liczbach */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold mb-12">RMP w liczbach</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-2xl">📊</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">16 motywatorów</h3>
                        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Precyzyjne wyniki</h3>
                        <p className="text-gray-700 text-sm">Consectetur adipiscing elit</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-2xl">📈</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Wzrost efektywności</h3>
                        <p className="text-gray-700 text-sm">Sed do eiusmod tempor</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-2xl">✅</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Sprawdzone narzędzie</h3>
                        <p className="text-gray-700 text-sm">Ut enim ad minim veniam</p>
                    </div>
                </div>
            </section>

            {/* O mnie */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center">O mnie</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="text-lg text-gray-700">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-96 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                                <span className="text-gray-600">Miejsce na zdjęcie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bezpłatna konsultacja */}
            <section className="bg-[#ECE7DE] py-16 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">Bezpłatna konsultacja</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link href="/bezplatna-konsultacja" className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
                        Umów konsultację
                    </Link>
                </div>
            </section>
        </main>
    );
}