import { useState } from "react";
import SearchBar from "../components/course/SearchBar";
import SortingBox from "../components/course/SoritngBox";
import CourseCard from "../components/course/CourseCard";
import { useCourses } from "../hooks/useCourses";

interface Props {
 isDarkMode: boolean;
}

const Courses = ({ isDarkMode }: Props) => {
 const [searchQuery, setSearchQuery] = useState('');
 const [sortBy, setSortBy] = useState('all');
 const { courses, loading, error } = useCourses();

 const filteredCourses = courses.filter(course =>
   course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
   course.description.toLowerCase().includes(searchQuery.toLowerCase())
 );

 if (loading) {
   return (
     <div className="min-h-screen bg-lightMainBg dark:bg-darkMainBg flex items-center justify-center">
       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
     </div>
   );
 }

 if (error) {
   return (
     <div className="min-h-screen bg-lightMainBg dark:bg-darkMainBg flex items-center justify-center">
       <div className="text-red-500 text-center">
         <p className="text-xl font-semibold">{error}</p>
         <button 
           onClick={() => window.location.reload()}
           className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
         >
           Try Again
         </button>
       </div>
     </div>
   );
 }

 return (
   <div className="min-h-screen bg-lightMainBg dark:bg-darkMainBg">
     <div className="container max-w-[1200px] mx-auto px-6 md:px-8 py-12">
       <div className="text-center mb-12">
         <h1 className="text-4xl font-bold text-textLight dark:text-textDark mb-4">
           Level Up Your Coding Skills
         </h1>
         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           Whether you want to excel in web development, mobile development or strengthen your
           fundamental software engineering skills, there is a course for you.
         </p>
       </div>

       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
         <SearchBar onSearch={setSearchQuery} isDarkMode={isDarkMode} />
         <SortingBox onSort={setSortBy} isDarkMode={isDarkMode} />
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredCourses.map((course) => (
           <CourseCard
             key={course.id}
             course={course}
             isDarkMode={isDarkMode}
           />
         ))}
       </div>
     </div>
   </div>
 );
};

export default Courses;