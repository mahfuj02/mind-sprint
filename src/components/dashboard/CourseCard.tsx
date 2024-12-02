import React from 'react';
import { Course } from '../../types/course.types';
import { Edit2, Trash2 } from 'lucide-react';
import courseService from '../../services/courseService';

interface AdminCourseCardProps {
  course: Course;
  isDarkMode: boolean;
  onEdit: (course: Course) => void;
}

const CourseCard: React.FC<AdminCourseCardProps> = ({
  course,
  isDarkMode,
  onEdit
}) => {
  const defaultImage = "https://placehold.co/600x400/png";
  const imageUrl = course.media_url ? decodeURIComponent(course.media_url.replace('\/', '//')) : defaultImage;
  
  const handleDelete = async (courseId: number, title:string) => {
    if (window.confirm(`${title} want to delete?`)) {
      try {
        await courseService.deleteCourse(courseId);
        window.location.href = window.location.href;
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
   };
  return (
    <div className={`relative overflow-hidden rounded-xl transition-all duration-300 group ${
      isDarkMode ? "shadow-lg" : "shadow-md"
    }`}>
      <div className="relative">
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
          <img
            src={imageUrl}
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(course)}
              className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600"
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(course.id, course.title)}
              className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600"
            >
              <Trash2 size={16} />
            </button>
          </div>
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
                {/* {course.duration}h */}10:00h
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