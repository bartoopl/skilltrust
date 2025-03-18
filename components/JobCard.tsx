// components/JobCard.tsx
import React from 'react';
import Link from 'next/link';

interface JobCardProps {
    id: string;
    title: string;
    company?: string;
    location?: string;
    salary?: number | string;
    jobType?: string;
}

const JobCard: React.FC<JobCardProps> = ({
                                             id,
                                             title,
                                             company = "Company",
                                             location,
                                             salary,
                                         }) => {
    return (
        <Link href={`/jobs/${id}`}>
            <div className="bg-white border-2 border-black rounded-3xl p-14 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-4xl font-bold mb-2 md:mb-0">{title}</h3>
                    <div className="text-right">
                        <span className="text-gray-700 font-medium">{company}</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex items-center">
                        {location && (
                            <span className="text-gray-600 text-sm">
                {location}
              </span>
                        )}
                    </div>
                    {salary && (
                        <div className="mt-2 md:mt-0 font-bold">
                            {typeof salary === 'number'
                                ? `${salary.toLocaleString()} zł`
                                : salary}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default JobCard;