import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedCourses from "../components/home/FeatureCourser";
import InstructorProfile from "../components/home/InstructorProfile";
import TestimonialsSection from "../components/home/TestimonialsSection";
interface HeaderProps {
  isDarkMode: boolean;
}
const Home: React.FC<HeaderProps> = ({isDarkMode}) => {
  return (
    <div  className= {`container mx-auto py-8 ${
        isDarkMode ? " text-white" : "text-black"
      }`} >
      <HeroSection isDarkMode={isDarkMode} />
      <FeaturedCourses isDarkMode={isDarkMode}/>
      <InstructorProfile isDarkMode={isDarkMode} />
      <TestimonialsSection isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
