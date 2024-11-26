import React from 'react';


export interface CourseData {
    title: string;
    duration: number;
    description: string;
    imageUrl: string;
}

export interface CourseCardProps extends CourseData {
    isDarkMode: boolean;
}
const CourseCard: React.FC<CourseCardProps> = ({
    title,
    duration,
    description,
    imageUrl,
    isDarkMode
}) => {
    return (
        <div className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${isDarkMode ? "shadow-lg" : "shadow-md"
            }`}>
            <div className="group relative">
                <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                {/* Course content */}
                <div className={`p-4 transition-colors ${isDarkMode
                    ? "bg-darkHeaderFooter border-gray-700"
                    : "bg-lightHeaderFooter border-gray-200"
                    }`}>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className={`text-xl font-bold ${isDarkMode ? "text-textDark" : "text-textLight"
                            }`}>
                            {title}
                        </h3>
                        <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}>
                            {duration}h
                        </span>
                    </div>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;