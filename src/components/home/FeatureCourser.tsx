import React from 'react';
import { Clock, Users, ArrowRight } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  students: number;
  price: number;
  originalPrice?: number;
}

const FeaturedCourses = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const featuredCourses: Course[] = [
    {
      id: '1',
      title: 'Complete Next.js with React Development',
      description: 'Master Next.js 14+ with React and build professional web applications',
      imageUrl: 'https://learnwithsumit.com/_next/image?url=%2Fassets%2Fimages%2Frnext-thumb.png&w=640&q=75',
      duration: '15+ hours',
      students: 850,
      price: 30,
      originalPrice: 60,
    },
    {
      id: '2',
      title: 'React Redux Complete Course',
      description: 'Learn React Redux from scratch with professional projects',
      imageUrl: 'https://learnwithsumit.com/_next/image?url=%2Fassets%2Fimages%2Freact-redux-thumb.png&w=640&q=75',
      duration: '12+ hours',
      students: 1200,
      price: 25,
      originalPrice: 50,
    },
  ];

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-darkMainBg' : 'bg-lightMainBg'}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-textDark' : 'text-textLight'}`}>
            Featured Courses
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Start your journey with our best-selling courses
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredCourses.map((course) => (
            <div 
              key={course.id}
              className={`
                rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2
                ${isDarkMode ? 'bg-cardDark' : 'bg-cardLight'}
                shadow-card hover:shadow-lg
              `}
            >
              {/* Course Image */}
              <div className="relative group">
                <img 
                  src={course.imageUrl} 
                  alt={course.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Price Badge */}
                <div 
                  className={`
                    absolute top-4 right-4 px-4 py-2 rounded-full
                    ${isDarkMode ? 'bg-darkHeaderFooter' : 'bg-lightHeaderFooter'}
                    backdrop-blur-md
                  `}
                >
                  <div className="flex flex-col items-end">
                    <span className={`font-bold ${isDarkMode ? 'text-textDark' : 'text-textLight'}`}>
                      CA {course.price.toLocaleString()}
                    </span>
                    {course.originalPrice && (
                      <span className={`text-sm line-through ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        CA {course.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-textDark' : 'text-textLight'}`}>
                  {course.title}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {course.students.toLocaleString()} students
                    </span>
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300">
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;