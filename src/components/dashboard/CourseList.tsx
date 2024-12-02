import React, { useState } from 'react';
import { Course } from '../../types/course.types';
import AdminCourseCard from './CourseCard';
import CourseForm from './CourseForm';
import { useCourses } from '../../hooks/useCourses';


interface CourseListProps {
  isDarkMode: boolean;
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ isDarkMode, courses }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { refetch } = useCourses(); // Add this

  const handleEdit = (course: Course) => {
    setSelectedCourse(course);
    setIsFormOpen(true);
  };
  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedCourse(null);
    refetch(); // Add this to refresh courses
  };

  

  return (
    <div className="space-y-6">
      <button
        onClick={() => setIsFormOpen(true)}
        className="bg-primary text-white px-4 py-2 rounded-lg"
      >
        Add New Course
      </button>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <AdminCourseCard
            key={course.id}
            course={course}
            isDarkMode={isDarkMode}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {isFormOpen && (
        <CourseForm
          onClose={() => {
            setIsFormOpen(false);
            setSelectedCourse(null);
          }}
          initialData={selectedCourse}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default CourseList;