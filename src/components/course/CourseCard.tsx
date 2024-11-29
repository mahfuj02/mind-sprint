import React from 'react';
import { Course } from '../../types/course.types';
export interface CourseCardProps {
    course: Course;        // Changed to accept full course object
    isDarkMode: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
    course,
    isDarkMode
}) => {
    // Default image if media_url is null
    const defaultImage = "https://placehold.co/600x400/png";
    console.log(course.media_url, course.id);
    const imageUrl = course.media_url ? decodeURIComponent(course.media_url.replace('\/', '//')) : 'https://placehold.co/600x400/png';
    console.log(imageUrl)

    return (
        <div className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${
            isDarkMode ? "shadow-lg" : "shadow-md"
        }`}>
            <div className="group relative">
                <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                    <img
                        src={imageUrl || defaultImage}
                        alt={course.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className={`p-4 transition-colors ${
                    isDarkMode
                        ? "bg-darkHeaderFooter border-gray-700"
                        : "bg-lightHeaderFooter border-gray-200"
                }`}>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className={`text-xl font-bold ${
                            isDarkMode ? "text-textDark" : "text-textLight"
                        }`}>
                            {course.title}
                        </h3>
                        <div className="flex flex-col items-end">
                            <span className={`text-sm ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}>
                                {course.duration}h
                            </span>
                            <span className={`text-sm font-semibold ${
                                isDarkMode ? "text-primary" : "text-primary"
                            }`}>
                                ${course.price}
                            </span>
                        </div>
                    </div>
                    <p className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                        {course.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;