import React from "react";
import HeroSection from "../components/home/HeroSection";
interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}
const Home: React.FC<HeaderProps> = ({isDarkMode}) => {
  return (
    <div  className= {`container mx-auto py-8 ${
        isDarkMode ? " text-white" : "text-black"
      }`} >
      <HeroSection />
    </div>
  );
};

export default Home;
