// components/CandidateCard.tsx
import React from 'react';
import Link from 'next/link';

interface CandidateCardProps {
    id: string;
    currentPosition: string;
    availability: string;
    experience: string;
    salary: number;
    location: string;
    industry: string;
    remote: boolean;
}

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

const CandidateCard: React.FC<CandidateCardProps> = ({
                                                         id,
                                                         currentPosition,
                                                         availability,
                                                         experience,
                                                         salary,
                                                         location,
                                                         industry,
                                                         remote
                                                     }) => {
    return (
        <Link href={`/talents/${id}`}>
            <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-2xl font-bold mb-2 md:mb-0">{currentPosition}</h3>
                    <div className="text-right">
                        <span className="text-gray-700 font-medium">{industry}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <span className="text-gray-600 text-sm block">Doświadczenie</span>
                        <span className="font-medium">{getExperienceLabel(experience)}</span>
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm block">Dostępność</span>
                        <span className="font-medium">{getAvailabilityLabel(availability)}</span>
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm block">Lokalizacja</span>
                        <span className="font-medium">{location}</span>
                        {remote && <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Praca zdalna</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex items-center">
            <span className="inline-block border border-black rounded-full px-3 py-1 text-sm font-medium mr-2">
              {industry}
            </span>
                    </div>
                    <div className="mt-2 md:mt-0 font-bold">
                        {salary.toLocaleString()} zł
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CandidateCard;