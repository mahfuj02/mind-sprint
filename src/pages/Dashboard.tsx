import React from 'react';
import { useAuth } from '../context/authContext';
import { Navigate } from 'react-router-dom';
import { useCourses } from '../hooks/useCourses';
import CourseList from '../components/dashboard/CourseList';

interface Props {
  isDarkMode: boolean;
}

const Dashboard = ({ isDarkMode }: Props) => {
  const { user } = useAuth();
  const { courses, loading, error } = useCourses();

  if (user?.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-darkMainBg' : 'bg-lightMainBg'}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Course Management
        </h1>
        <CourseList isDarkMode={isDarkMode} courses={courses} />
      </div>
    </div>
  );
};

export default Dashboard;