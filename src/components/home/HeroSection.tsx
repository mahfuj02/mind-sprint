import React from 'react';
import image from '../../assets/Hero.webp';

interface HeaderProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeaderProps> = ({isDarkMode}) => {
  return (
    <section className="hero-section min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Welcome to <span className="text-primary">mindSprint</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Your gateway to mastering skills with personalized tutorials.
        </p>
        <div className="mt-8 flex justify-center gap-4"><div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Start Learning
          </button>
          <button className="bg-darkHeaderFooter border border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition duration-300">
            {/* <Play className="w-5 h-5" /> */}
            <span>Watch Intro</span>
          </button>
          </div>
        </div>
          <div className="mt-10 w-full">
            <img
              src={image}
              alt="Hero Illustration"
              className="w-full"
            />
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
