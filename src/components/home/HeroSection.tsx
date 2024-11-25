import React from 'react';
import heroDark from '../../assets/hero-dark.svg';
import heroLight from '../../assets/hero-light.svg';

interface HeaderProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeaderProps> = ({isDarkMode}) => {
  return (
    <section className={`min-h-screen flex flex-col items-center justify-center px-4 py-10 ${
      isDarkMode ? 'bg-darkMainBg' : 'bg-lightMainBg'
    }`}>
      <div className="container mx-auto max-w-7xl">
        {/* Text Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Welcome to <span className="text-primary">mindSprint</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Your gateway to mastering skills with personalized tutorials.
          </p>
          
          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
              Start Learning
            </button>
            <button className="bg-darkHeaderFooter border border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition duration-300 text-lg">
              <span>Watch Intro</span>
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="relative w-full aspect-[2/1]">
            <img
              src={isDarkMode?heroDark:heroLight}
              alt="Hero Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;