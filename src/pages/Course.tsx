import { useState } from "react";
import SearchBar from "../components/course/SearchBar";
import SortingBox from "../components/course/SoritngBox";
import CourseCard from "../components/course/CourseCard";
interface Props{
    isDarkMode: boolean;
}
const Courses = ({isDarkMode}: Props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('all');

    const courseData = [
        {
            title: "Complete Python Mastery",
            duration: 12,
            description: "Everything you need to program in Python in one course (includes 3 real-world projects)",
            imageUrl: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FBFMMlbcQvml9HSqXcvNp&w=384&q=75"
          },
          {
            title: "React 18 for Beginners",
            duration: 8,
            description: "A step-by-step guide to building web apps with React 18+ and TypeScript",
            imageUrl: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2FbLy3JtIoQ8y8PDs4tFem&w=384&q=75"
          },
          {
            title: "The Ultimate C++ Series",
            duration: 12,
            description: "Master Modern C++: Go from Novice to Professional. Everything you need to code in C++ in one bundle!",
            imageUrl: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2FlkYCN9UvRNFaLzywghPu&w=384&q=75"
          }
    ];
  
    return (
      <div className="min-h-screen bg-lightMainBg dark:bg-darkMainBg">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-textLight dark:text-textDark mb-4">
              Level Up Your Coding Skills
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Whether you want to excel in web development, mobile development or strengthen your
              fundamental software engineering skills, there is a course for you.
            </p>
          </div>
  
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <SearchBar onSearch={setSearchQuery} isDarkMode={isDarkMode} />
            <SortingBox onSort={setSortBy} isDarkMode={isDarkMode} />
          </div>
  
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                duration={course.duration}
                description={course.description}
                imageUrl={course.imageUrl}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Courses;