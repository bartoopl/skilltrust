// app/stories/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { fetchStory } from "@/lib/api";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";

export default async function StoryPage({ params }: { params: { slug: string } }) {
    const story = await fetchStory(params.slug);

    if (!story) {
        return (
            <main className="container mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold text-red-500">Historia nie została znaleziona</h1>
                <p className="text-gray-700">Sprawdź, czy podany adres URL jest poprawny.</p>
                <Link
                    href="/stories"
                    className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                    Powrót do listy historii
                </Link>
            </main>
        );
    }

    const { title, publishedAt, body, mainImage, category, author } = story;

    return (
        <main className="bg-[#F9F6F2] py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumbs */}
                <div className="mb-8">
                    <div className="flex items-center text-gray-600 text-sm">
                        <Link href="/" className="hover:underline">Strona główna</Link>
                        <span className="mx-2">›</span>
                        <Link href="/stories" className="hover:underline">Historie</Link>
                        <span className="mx-2">›</span>
                        <span className="text-gray-900">{title}</span>
                    </div>
                </div>

                {/* Article Header */}
                <article className="bg-white border-2 border-black rounded-3xl p-8 mb-8 shadow-sm">
                    {/* Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                            {category && (
                                <span className="inline-block bg-[#ECE7DE] text-black px-3 py-1 rounded-full">
                                    {category}
                                </span>
                            )}

                            {publishedAt && (
                                <time dateTime={publishedAt} className="text-gray-600">
                                    {formatDate(publishedAt)}
                                </time>
                            )}

                            {author && (
                                <span className="text-gray-800">
                                    Autor: <strong>{author}</strong>
                                </span>
                            )}
                        </div>

                        {/* Main Image */}
                        {mainImage && (
                            <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-xl">
                                <Image
                                    src={urlFor(mainImage).url()}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        {body ? (
                            <PortableText value={body} />
                        ) : (
                            <p className="text-gray-700 italic">Brak treści artykułu.</p>
                        )}
                    </div>
                </article>

                {/* Related Links or Share buttons */}
                <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Podziel się tą historią</h2>
                    <div className="flex gap-4">
                        <button className="bg-[#ECE7DE] text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                            Udostępnij na LinkedIn
                        </button>
                        <button className="bg-[#ECE7DE] text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                            Udostępnij na Facebook
                        </button>
                        <button className="bg-[#ECE7DE] text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                            Kopiuj link
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}