// app/stories/page.tsx
"use client";
import { useEffect, useState } from "react";
import { fetchStories } from "@/lib/api";
import StoryCard from "@/components/StoryCard";

interface Story {
    slug: string;
    title: string;
    excerpt?: string;
    publishedAt: string;
    mainImage?: any;
    category?: string;
    author?: string;
}

export default function StoriesPage() {
    const [stories, setStories] = useState<Story[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    // Lista dostępnych kategorii
    const categories = [
        { name: "Kariera", value: "kariera" },
        { name: "Rekrutacja", value: "rekrutacja" },
        { name: "Rynek pracy", value: "rynek-pracy" },
        { name: "Sukces", value: "sukces" }
    ];

    // Pobieranie wpisów blogowych, gdy zmienia się filtr
    useEffect(() => {
        async function loadStories() {
            const storyData = await fetchStories(selectedCategory);
            setStories(storyData);
        }
        loadStories();
    }, [selectedCategory]);

    return (
        <main className="bg-[#F9F6F2] min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Historie
                </h1>

                <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
                    Odkryj historie sukcesu, porady rekrutacyjne i najnowsze trendy z rynku pracy.
                </p>

                {/* Filtry kategorii */}
                <section className="py-8 text-center mb-12">
                    <h2 className="text-xl font-bold mb-6">Filtruj według kategorii:</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            className={`border px-4 py-2 rounded-full ${selectedCategory === "" ? "bg-black text-white" : "border-black"}`}
                            onClick={() => setSelectedCategory("")}
                        >
                            Wszystkie
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                className={`border px-4 py-2 rounded-full ${selectedCategory === category.value ? "bg-black text-white" : "border-black"}`}
                                onClick={() => setSelectedCategory(category.value)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Wyniki wyszukiwania */}
                <div className="bg-[#ECE7DE] p-8 rounded-3xl">
                    {stories.length === 0 ? (
                        <div className="py-16 text-center">
                            <p className="text-xl text-gray-700">Brak dostępnych historii.</p>
                            <p className="text-gray-600 mt-2">Spróbuj zmienić filtry lub wróć później.</p>
                        </div>
                    ) : (
                        <>
                            <p className="text-lg mb-8">
                                Znaleziono <span className="font-bold">{stories.length}</span> histori{stories.length === 1 ? 'ę' : (stories.length > 1 && stories.length < 5 ? 'e' : 'i')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {stories.map((story) => (
                                    <div key={story.slug}>
                                        <StoryCard
                                            slug={story.slug}
                                            title={story.title}
                                            excerpt={story.excerpt}
                                            publishedAt={story.publishedAt}
                                            mainImage={story.mainImage}
                                            category={story.category}
                                            author={story.author}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}