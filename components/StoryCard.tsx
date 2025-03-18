// components/StoryCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { formatDate } from '@/lib/utils';

interface StoryCardProps {
    slug: string;
    title: string;
    excerpt?: string;
    publishedAt: string;
    mainImage?: any;
    category?: string;
    author?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
                                                 slug,
                                                 title,
                                                 excerpt,
                                                 publishedAt,
                                                 mainImage,
                                                 category,
                                                 author,
                                             }) => {
    return (
        <Link href={`/stories/${slug}`}>
            <div className="bg-white border-2 border-black rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
                {mainImage && (
                    <div className="relative w-full h-48 md:h-64 mb-4 overflow-hidden rounded-xl">
                        <Image
                            src={urlFor(mainImage).url()}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="flex-1 flex flex-col">
                    {category && (
                        <span className="inline-block bg-[#ECE7DE] text-black text-sm px-3 py-1 rounded-full mb-2">
                            {category}
                        </span>
                    )}

                    <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>

                    {excerpt && (
                        <p className="text-gray-700 mb-4 flex-grow line-clamp-3">{excerpt}</p>
                    )}

                    <div className="flex justify-between items-center text-sm text-gray-600 mt-auto pt-4 border-t border-gray-100">
                        {author && <span>{author}</span>}
                        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default StoryCard;